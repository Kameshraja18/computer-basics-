// ============================================
// Main Application Controller
// Handles page navigation and UI interactions
// ============================================

// Global state
let currentResults = null;

// ============================================
// Page Navigation
// ============================================

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('page--active');
    });

    // Show target page
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('page--active');
        window.scrollTo(0, 0);
    }
}

// ============================================
// Login & Test Start
// ============================================

function startTest(event) {
    event.preventDefault();

    const nameInput = document.getElementById('username');
    const name = nameInput.value.trim();

    if (name.length < 2) {
        nameInput.focus();
        return;
    }

    // Save user and initialize test
    const user = Storage.saveUser(name);
    TestEngine.init(user);

    // Update UI with user info
    updateUserDisplay(user);

    // Show test page
    showPage('test');

    // Render first question
    renderCurrentQuestion();
    renderQuickNav();
    updateProgress();
}

function updateUserDisplay(user) {
    const avatarEl = document.getElementById('user-avatar');
    const nameEl = document.getElementById('user-name');

    if (avatarEl && user) {
        avatarEl.textContent = Helpers.getInitials(user.name);
    }
    if (nameEl && user) {
        nameEl.textContent = user.name;
    }
}

// ============================================
// Question Rendering
// ============================================

function renderCurrentQuestion() {
    const question = TestEngine.getCurrentQuestion();
    const container = document.getElementById('question-container');
    const currentAnswer = TestEngine.getAnswer(question.id);

    // Generate topic badge color
    const topicColors = {
        'Introduction & Fundamentals': 'primary',
        'Hardware': 'primary',
        'Software': 'primary',
        'Operating Systems & GUI': 'primary',
        'Data, Files & Folders': 'primary',
        'Memory & Storage': 'primary',
        'Internet & Web Basics': 'primary',
        'Networking Basics': 'primary',
        'Basic Security': 'warning',
        'Productivity Software': 'primary'
    };

    const badgeClass = topicColors[question.topic] || 'primary';

    container.innerHTML = `
    <div class="question__header">
      <div>
        <div class="question__number">Question ${TestEngine.state.currentIndex + 1} of ${TestEngine.state.questions.length}</div>
        <div class="question__text">${Helpers.escapeHtml(question.questionText)}</div>
      </div>
      <div class="question__topic">
        <span class="badge badge--${badgeClass}">${question.topic}</span>
      </div>
    </div>
    
    <div class="question__options">
      ${question.options.map((option, index) => {
        const isSelected = currentAnswer === index;
        const selectedClass = isSelected ? 'option-btn--selected' : '';
        const letter = Helpers.getOptionLetter(index);

        return `
          <button class="option-btn ${selectedClass}" onclick="selectOption(${index})" data-index="${index}">
            <span class="option-btn__letter">${letter}</span>
            <span class="option-btn__text">${Helpers.escapeHtml(option)}</span>
          </button>
        `;
    }).join('')}
    </div>
    
    <div class="question__navigation">
      <div class="question__nav-info">
        ${TestEngine.getAnsweredCount()} of ${TestEngine.state.questions.length} answered
      </div>
      <div class="question__nav-buttons">
        <button class="btn btn--secondary" onclick="prevQuestion()" ${TestEngine.state.currentIndex === 0 ? 'disabled' : ''}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Previous
        </button>
        ${TestEngine.state.currentIndex === TestEngine.state.questions.length - 1
            ? `<button class="btn btn--success" onclick="submitTest()" ${!TestEngine.canSubmit() ? 'disabled' : ''}>
              Submit Test
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
              </svg>
            </button>`
            : `<button class="btn btn--primary" onclick="nextQuestion()">
              Next
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>`
        }
      </div>
    </div>
  `;
}

function selectOption(index) {
    TestEngine.recordAnswer(index);
    renderCurrentQuestion();
    renderQuickNav();
    updateProgress();
}

// ============================================
// Navigation
// ============================================

function nextQuestion() {
    if (TestEngine.nextQuestion()) {
        renderCurrentQuestion();
        renderQuickNav();
        updateProgress();
    }
}

function prevQuestion() {
    if (TestEngine.prevQuestion()) {
        renderCurrentQuestion();
        renderQuickNav();
        updateProgress();
    }
}

function goToQuestion(index) {
    if (TestEngine.goToQuestion(index)) {
        renderCurrentQuestion();
        renderQuickNav();
        updateProgress();
    }
}

// ============================================
// Quick Navigation Dots
// ============================================

function renderQuickNav() {
    const container = document.getElementById('quick-nav');
    const questions = TestEngine.state.questions;
    const currentIndex = TestEngine.state.currentIndex;

    container.innerHTML = questions.map((q, index) => {
        const isActive = index === currentIndex;
        const isAnswered = TestEngine.isAnswered(q.id);

        let classes = 'quick-nav__dot';
        if (isActive) classes += ' quick-nav__dot--active';
        else if (isAnswered) classes += ' quick-nav__dot--answered';

        return `<button class="${classes}" onclick="goToQuestion(${index})">${index + 1}</button>`;
    }).join('');
}

// ============================================
// Progress Updates
// ============================================

function updateProgress() {
    const current = TestEngine.state.currentIndex + 1;
    const total = TestEngine.state.questions.length;
    const answered = TestEngine.getAnsweredCount();
    const percentage = (current / total) * 100;

    // Update progress bar
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }

    // Update text
    const currentQ = document.getElementById('current-q');
    const answeredCount = document.getElementById('answered-count');

    if (currentQ) currentQ.textContent = current;
    if (answeredCount) answeredCount.textContent = `${answered} answered`;
}

// ============================================
// Test Submission
// ============================================

function submitTest() {
    if (!TestEngine.canSubmit()) {
        alert('Please answer all questions before submitting.');
        return;
    }

    // Calculate results
    currentResults = TestEngine.submit();

    // Show results page
    showPage('results');
    renderResults(currentResults);
}

function renderResults(results) {
    // Update header
    const iconEl = document.getElementById('results-icon');
    const titleEl = document.getElementById('results-title');
    const messageEl = document.getElementById('results-message');

    iconEl.textContent = results.gradeEmoji;
    iconEl.className = 'results__icon ' + Helpers.getResultIconClass(results.percentage);
    titleEl.textContent = results.gradeLabel;
    messageEl.textContent = results.message;

    // Render stats
    const statsEl = document.getElementById('results-stats');
    statsEl.innerHTML = Scorer.generateStatsHTML(results);

    // Render detailed breakdown
    const breakdownEl = document.getElementById('results-breakdown');
    breakdownEl.innerHTML = Scorer.generateAllResultCardsHTML(results.details);
}

// ============================================
// Retake Test
// ============================================

function retakeTest() {
    TestEngine.reset();
    const user = Storage.getUser();

    if (user) {
        TestEngine.init(user);
        updateUserDisplay(user);
        showPage('test');
        renderCurrentQuestion();
        renderQuickNav();
        updateProgress();
    } else {
        showPage('login');
    }
}

// ============================================
// Keyboard Navigation
// ============================================

function handleKeyPress(event) {
    const currentPage = document.querySelector('.page--active');
    if (!currentPage || !currentPage.id.includes('test')) return;

    switch (event.key) {
        case 'ArrowRight':
        case 'n':
        case 'N':
            nextQuestion();
            break;
        case 'ArrowLeft':
        case 'p':
        case 'P':
            prevQuestion();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            const index = parseInt(event.key) - 1;
            selectOption(index);
            break;
        case 'a':
        case 'A':
            selectOption(0);
            break;
        case 'b':
        case 'B':
            selectOption(1);
            break;
        case 'c':
        case 'C':
            selectOption(2);
            break;
        case 'd':
        case 'D':
            selectOption(3);
            break;
    }
}

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyPress);

    // Check for existing test session
    const savedTest = Storage.getCurrentTest();
    if (savedTest && !savedTest.isComplete) {
        const continueTest = confirm('You have an unfinished test. Would you like to continue?');
        if (continueTest) {
            if (TestEngine.resume()) {
                updateUserDisplay(TestEngine.state.user);
                showPage('test');
                renderCurrentQuestion();
                renderQuickNav();
                updateProgress();
                return;
            }
        } else {
            Storage.clearCurrentTest();
        }
    }

    // Show home page by default
    showPage('home');
});

// Prevent accidental page close during test
window.addEventListener('beforeunload', (event) => {
    const currentTest = Storage.getCurrentTest();
    if (currentTest && !currentTest.isComplete) {
        event.preventDefault();
        event.returnValue = '';
    }
});
