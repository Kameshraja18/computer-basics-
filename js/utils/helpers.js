// ============================================
// Helper Utilities
// Common functions used throughout the app
// ============================================

const Helpers = {
    // Shuffle array using Fisher-Yates algorithm
    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    // Get random items from array
    getRandomItems(array, count) {
        const shuffled = this.shuffle(array);
        return shuffled.slice(0, Math.min(count, array.length));
    },

    // Format time as MM:SS
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },

    // Calculate percentage
    calculatePercentage(correct, total) {
        if (total === 0) return 0;
        return Math.round((correct / total) * 100);
    },

    // Get grade based on percentage
    getGrade(percentage) {
        if (percentage >= 90) return { grade: 'A+', label: 'Excellent!', emoji: '🏆' };
        if (percentage >= 80) return { grade: 'A', label: 'Great Job!', emoji: '🎉' };
        if (percentage >= 70) return { grade: 'B', label: 'Good Work!', emoji: '👍' };
        if (percentage >= 60) return { grade: 'C', label: 'Keep Practicing!', emoji: '📚' };
        if (percentage >= 50) return { grade: 'D', label: 'Needs Improvement', emoji: '💪' };
        return { grade: 'F', label: 'Try Again!', emoji: '📖' };
    },

    // Get performance message based on score
    getPerformanceMessage(percentage) {
        if (percentage === 100) return "Perfect score! You're a computer basics master!";
        if (percentage >= 90) return "Outstanding performance! You really know your stuff!";
        if (percentage >= 80) return "Great job! You have a solid understanding of computer basics.";
        if (percentage >= 70) return "Good work! A bit more study and you'll be an expert.";
        if (percentage >= 60) return "Not bad! Review the topics you missed and try again.";
        if (percentage >= 50) return "Keep practicing! Focus on the explanations to learn more.";
        return "Don't give up! Read through the explanations and try again.";
    },

    // Get result icon class based on percentage
    getResultIconClass(percentage) {
        if (percentage >= 70) return 'results__icon--success';
        if (percentage >= 50) return 'results__icon--warning';
        return 'results__icon--error';
    },

    // Get result icon emoji based on percentage
    getResultEmoji(percentage) {
        if (percentage >= 90) return '🏆';
        if (percentage >= 70) return '🎉';
        if (percentage >= 50) return '👍';
        return '📚';
    },

    // Get initials from name
    getInitials(name) {
        if (!name) return 'U';
        const words = name.trim().split(' ');
        if (words.length === 1) {
            return words[0].charAt(0).toUpperCase();
        }
        return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
    },

    // Get option letter from index
    getOptionLetter(index) {
        return String.fromCharCode(65 + index); // A, B, C, D
    },

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Smooth scroll to element
    scrollToElement(element, offset = 0) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }
};
