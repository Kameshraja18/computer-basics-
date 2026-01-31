// ============================================
// Scorer Module
// Calculates test results and generates feedback
// ============================================

const Scorer = {
    // Calculate complete results
    calculateResults(questions, answers, timeTaken) {
        let correct = 0;
        let incorrect = 0;
        const details = [];

        questions.forEach((question, index) => {
            const userAnswer = answers[question.id];
            const isCorrect = userAnswer === question.correctOptionIndex;

            if (isCorrect) {
                correct++;
            } else {
                incorrect++;
            }

            details.push({
                questionNumber: index + 1,
                question: question,
                userAnswerIndex: userAnswer,
                userAnswer: userAnswer !== undefined ? question.options[userAnswer] : 'Not answered',
                correctAnswerIndex: question.correctOptionIndex,
                correctAnswer: question.options[question.correctOptionIndex],
                isCorrect: isCorrect,
                explanation: question.explanation,
                realWorldExample: question.realWorldExample,
                topic: question.topic
            });
        });

        const total = questions.length;
        const percentage = Helpers.calculatePercentage(correct, total);
        const gradeInfo = Helpers.getGrade(percentage);

        return {
            score: correct,
            total: total,
            incorrect: incorrect,
            percentage: percentage,
            grade: gradeInfo.grade,
            gradeLabel: gradeInfo.label,
            gradeEmoji: gradeInfo.emoji,
            message: Helpers.getPerformanceMessage(percentage),
            timeTaken: timeTaken,
            formattedTime: Helpers.formatTime(timeTaken),
            details: details,
            topicPerformance: this.calculateTopicPerformance(details)
        };
    },

    // Calculate performance by topic
    calculateTopicPerformance(details) {
        const topicStats = {};

        details.forEach(d => {
            if (!topicStats[d.topic]) {
                topicStats[d.topic] = { correct: 0, total: 0 };
            }
            topicStats[d.topic].total++;
            if (d.isCorrect) {
                topicStats[d.topic].correct++;
            }
        });

        // Convert to array with percentages
        return Object.entries(topicStats).map(([topic, stats]) => ({
            topic: topic,
            correct: stats.correct,
            total: stats.total,
            percentage: Helpers.calculatePercentage(stats.correct, stats.total)
        })).sort((a, b) => a.percentage - b.percentage); // Sort by performance (worst first)
    },

    // Generate summary HTML for stats
    generateStatsHTML(results) {
        return `
      <div class="stat-card stat-card--success">
        <div class="stat-card__value">${results.score}/${results.total}</div>
        <div class="stat-card__label">Score</div>
      </div>
      <div class="stat-card">
        <div class="stat-card__value">${results.percentage}%</div>
        <div class="stat-card__label">Accuracy</div>
      </div>
      <div class="stat-card">
        <div class="stat-card__value">${results.grade}</div>
        <div class="stat-card__label">Grade</div>
      </div>
      <div class="stat-card">
        <div class="stat-card__value">${results.formattedTime}</div>
        <div class="stat-card__label">Time Taken</div>
      </div>
    `;
    },

    // Generate detailed result card HTML
    generateResultCardHTML(detail) {
        const statusBadge = detail.isCorrect
            ? '<span class="badge badge--success">✓ Correct</span>'
            : '<span class="badge badge--error">✗ Incorrect</span>';

        const userAnswerClass = detail.isCorrect
            ? 'result-card__answer-value--correct'
            : 'result-card__answer-value--incorrect';

        return `
      <div class="card result-card">
        <div class="result-card__header">
          <div class="result-card__question">
            <div class="result-card__number">Question ${detail.questionNumber}</div>
            <div class="result-card__text">${Helpers.escapeHtml(detail.question.questionText)}</div>
          </div>
          <div class="result-card__status">${statusBadge}</div>
        </div>
        
        <div class="result-card__answers">
          <div class="result-card__answer">
            <div class="result-card__answer-label">Your Answer</div>
            <div class="result-card__answer-value ${userAnswerClass}">
              ${detail.userAnswerIndex !== undefined
                ? Helpers.getOptionLetter(detail.userAnswerIndex) + '. ' + Helpers.escapeHtml(detail.userAnswer)
                : 'Not answered'}
            </div>
          </div>
          <div class="result-card__answer">
            <div class="result-card__answer-label">Correct Answer</div>
            <div class="result-card__answer-value result-card__answer-value--correct">
              ${Helpers.getOptionLetter(detail.correctAnswerIndex)}. ${Helpers.escapeHtml(detail.correctAnswer)}
            </div>
          </div>
        </div>
        
        <div class="result-card__explanation">
          <div class="result-card__explanation-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
            </svg>
            Explanation
          </div>
          <div class="result-card__explanation-text">${Helpers.escapeHtml(detail.explanation)}</div>
        </div>
        
        <div class="result-card__example">
          <div class="result-card__example-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Real-World Example
          </div>
          <div class="result-card__example-text">${Helpers.escapeHtml(detail.realWorldExample)}</div>
        </div>
      </div>
    `;
    },

    // Generate all result cards HTML
    generateAllResultCardsHTML(details) {
        return details.map(d => this.generateResultCardHTML(d)).join('');
    }
};
