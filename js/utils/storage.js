// ============================================
// Storage Utilities
// Handles localStorage for session and history
// ============================================

const Storage = {
    keys: {
        USER: 'mcq_user',
        CURRENT_TEST: 'mcq_current_test',
        TEST_HISTORY: 'mcq_test_history',
        RECENTLY_SERVED: 'mcq_recently_served'
    },

    // Save user info
    saveUser(name) {
        const user = {
            name: name.trim(),
            id: this.generateUserId(),
            createdAt: new Date().toISOString()
        };
        localStorage.setItem(this.keys.USER, JSON.stringify(user));
        return user;
    },

    // Get current user
    getUser() {
        const data = localStorage.getItem(this.keys.USER);
        return data ? JSON.parse(data) : null;
    },

    // Clear user
    clearUser() {
        localStorage.removeItem(this.keys.USER);
    },

    // Save current test state
    saveCurrentTest(testState) {
        localStorage.setItem(this.keys.CURRENT_TEST, JSON.stringify(testState));
    },

    // Get current test state
    getCurrentTest() {
        const data = localStorage.getItem(this.keys.CURRENT_TEST);
        return data ? JSON.parse(data) : null;
    },

    // Clear current test
    clearCurrentTest() {
        localStorage.removeItem(this.keys.CURRENT_TEST);
    },

    // Save test to history
    saveTestToHistory(testResult) {
        const history = this.getTestHistory();
        history.push({
            ...testResult,
            completedAt: new Date().toISOString()
        });
        // Keep only last 10 tests
        if (history.length > 10) {
            history.shift();
        }
        localStorage.setItem(this.keys.TEST_HISTORY, JSON.stringify(history));
    },

    // Get test history
    getTestHistory() {
        const data = localStorage.getItem(this.keys.TEST_HISTORY);
        return data ? JSON.parse(data) : [];
    },

    // Track recently served questions to avoid repetition
    addRecentlyServed(questionIds) {
        const recent = this.getRecentlyServed();
        const now = Date.now();

        // Add new question IDs with timestamp
        questionIds.forEach(id => {
            recent[id] = now;
        });

        // Remove entries older than 1 hour
        const oneHourAgo = now - (60 * 60 * 1000);
        Object.keys(recent).forEach(id => {
            if (recent[id] < oneHourAgo) {
                delete recent[id];
            }
        });

        localStorage.setItem(this.keys.RECENTLY_SERVED, JSON.stringify(recent));
    },

    // Get recently served question IDs
    getRecentlyServed() {
        const data = localStorage.getItem(this.keys.RECENTLY_SERVED);
        return data ? JSON.parse(data) : {};
    },

    // Clear recently served
    clearRecentlyServed() {
        localStorage.removeItem(this.keys.RECENTLY_SERVED);
    },

    // Generate unique user ID
    generateUserId() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },

    // Clear all data
    clearAll() {
        Object.values(this.keys).forEach(key => {
            localStorage.removeItem(key);
        });
    }
};
