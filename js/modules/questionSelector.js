// ============================================
// Question Selector Module
// Topic-balanced question selection algorithm
// ============================================

const QuestionSelector = {
    // Topic distribution configuration
    topicDistribution: {
        'Introduction & Fundamentals': 2,
        'Hardware': 3,
        'Software': 2,
        'Operating Systems & GUI': 2,
        'Data, Files & Folders': 2,
        'Memory & Storage': 2,
        'Internet & Web Basics': 2,
        'Networking Basics': 2,
        'Basic Security': 2,
        'Productivity Software': 1
    },

    // Total questions per test
    questionsPerTest: 20,

    // Get all unique topics from questions
    getTopics() {
        return [...new Set(QUESTIONS.map(q => q.topic))];
    },

    // Group questions by topic
    groupByTopic(questions) {
        const grouped = {};
        questions.forEach(q => {
            if (!grouped[q.topic]) {
                grouped[q.topic] = [];
            }
            grouped[q.topic].push(q);
        });
        return grouped;
    },

    // Select questions for a test session
    selectQuestions() {
        const recentlyServed = Storage.getRecentlyServed();
        const recentIds = Object.keys(recentlyServed);

        // Filter out recently served questions
        const availableQuestions = QUESTIONS.filter(q => !recentIds.includes(q.id));

        // If too many questions are filtered out, use all questions
        const questionsToUse = availableQuestions.length >= this.questionsPerTest
            ? availableQuestions
            : QUESTIONS;

        // Group by topic
        const grouped = this.groupByTopic(questionsToUse);
        const selectedQuestions = [];

        // Select questions based on distribution
        Object.entries(this.topicDistribution).forEach(([topic, count]) => {
            const topicQuestions = grouped[topic] || [];
            if (topicQuestions.length > 0) {
                const shuffled = Helpers.shuffle(topicQuestions);
                const selected = shuffled.slice(0, Math.min(count, topicQuestions.length));
                selectedQuestions.push(...selected);
            }
        });

        // If we don't have enough questions, fill from remaining pool
        if (selectedQuestions.length < this.questionsPerTest) {
            const selectedIds = new Set(selectedQuestions.map(q => q.id));
            const remaining = questionsToUse.filter(q => !selectedIds.has(q.id));
            const shuffledRemaining = Helpers.shuffle(remaining);
            const needed = this.questionsPerTest - selectedQuestions.length;
            selectedQuestions.push(...shuffledRemaining.slice(0, needed));
        }

        // Trim to exact count if we have more
        const finalQuestions = selectedQuestions.slice(0, this.questionsPerTest);

        // Shuffle final order
        const shuffledFinal = Helpers.shuffle(finalQuestions);

        // Track these questions as recently served
        Storage.addRecentlyServed(shuffledFinal.map(q => q.id));

        return shuffledFinal;
    },

    // Get topic statistics for a set of questions
    getTopicStats(questions) {
        const stats = {};
        questions.forEach(q => {
            stats[q.topic] = (stats[q.topic] || 0) + 1;
        });
        return stats;
    },

    // Validate question distribution
    validateDistribution(questions) {
        const stats = this.getTopicStats(questions);
        const topics = this.getTopics();

        return {
            totalQuestions: questions.length,
            expectedTotal: this.questionsPerTest,
            topicsCovered: Object.keys(stats).length,
            totalTopics: topics.length,
            distribution: stats,
            isValid: questions.length === this.questionsPerTest
        };
    }
};
