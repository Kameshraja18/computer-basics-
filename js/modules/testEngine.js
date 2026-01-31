// ============================================
// Test Engine Module
// Manages test state, navigation, and timing
// ============================================

const TestEngine = {
    // Current test state
    state: {
        questions: [],
        currentIndex: 0,
        answers: {},
        startTime: null,
        endTime: null,
        user: null,
        isComplete: false
    },

    // Initialize a new test
    init(user) {
        const questions = QuestionSelector.selectQuestions();

        this.state = {
            questions: questions,
            currentIndex: 0,
            answers: {},
            startTime: Date.now(),
            endTime: null,
            user: user,
            isComplete: false
        };

        // Save to storage for persistence
        Storage.saveCurrentTest(this.state);

        // Start timer
        this.startTimer();

        return this.state;
    },

    // Resume existing test
    resume() {
        const savedState = Storage.getCurrentTest();
        if (savedState && !savedState.isComplete) {
            this.state = savedState;
            this.startTimer();
            return true;
        }
        return false;
    },

    // Get current question
    getCurrentQuestion() {
        return this.state.questions[this.state.currentIndex];
    },

    // Get question by index
    getQuestion(index) {
        return this.state.questions[index];
    },

    // Go to next question
    nextQuestion() {
        if (this.state.currentIndex < this.state.questions.length - 1) {
            this.state.currentIndex++;
            this.saveState();
            return true;
        }
        return false;
    },

    // Go to previous question
    prevQuestion() {
        if (this.state.currentIndex > 0) {
            this.state.currentIndex--;
            this.saveState();
            return true;
        }
        return false;
    },

    // Go to specific question
    goToQuestion(index) {
        if (index >= 0 && index < this.state.questions.length) {
            this.state.currentIndex = index;
            this.saveState();
            return true;
        }
        return false;
    },

    // Record answer for current question
    recordAnswer(optionIndex) {
        const question = this.getCurrentQuestion();
        this.state.answers[question.id] = optionIndex;
        this.saveState();
    },

    // Get answer for a question
    getAnswer(questionId) {
        return this.state.answers[questionId];
    },

    // Check if question is answered
    isAnswered(questionId) {
        return this.state.answers.hasOwnProperty(questionId);
    },

    // Get count of answered questions
    getAnsweredCount() {
        return Object.keys(this.state.answers).length;
    },

    // Get all answered question IDs
    getAnsweredQuestionIds() {
        return Object.keys(this.state.answers);
    },

    // Check if test is complete (all questions answered)
    canSubmit() {
        return this.getAnsweredCount() === this.state.questions.length;
    },

    // Submit test and calculate results
    submit() {
        this.stopTimer();
        this.state.endTime = Date.now();
        this.state.isComplete = true;

        const results = Scorer.calculateResults(
            this.state.questions,
            this.state.answers,
            this.getElapsedTime()
        );

        // Save to history
        Storage.saveTestToHistory({
            user: this.state.user,
            score: results.score,
            total: results.total,
            percentage: results.percentage,
            timeTaken: results.timeTaken
        });

        // Clear current test
        Storage.clearCurrentTest();

        return results;
    },

    // Timer management
    timerInterval: null,
    elapsedSeconds: 0,

    startTimer() {
        this.elapsedSeconds = Math.floor((Date.now() - this.state.startTime) / 1000);
        this.updateTimerDisplay();

        this.timerInterval = setInterval(() => {
            this.elapsedSeconds++;
            this.updateTimerDisplay();
        }, 1000);
    },

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    },

    updateTimerDisplay() {
        const timerEl = document.getElementById('timer-display');
        if (timerEl) {
            timerEl.textContent = Helpers.formatTime(this.elapsedSeconds);
        }
    },

    getElapsedTime() {
        return this.elapsedSeconds;
    },

    // Save state to storage
    saveState() {
        Storage.saveCurrentTest(this.state);
    },

    // Reset test
    reset() {
        this.stopTimer();
        this.state = {
            questions: [],
            currentIndex: 0,
            answers: {},
            startTime: null,
            endTime: null,
            user: null,
            isComplete: false
        };
        this.elapsedSeconds = 0;
        Storage.clearCurrentTest();
    }
};
