// ============================================
// Extended Question Database - Part 2
// Additional 50+ Questions for Complete Coverage
// ============================================

const QUESTIONS_PART2 = [
    // More INTRODUCTION questions
    {
        id: "intro_021",
        topic: "Introduction & Fundamentals",
        questionText: "What type of computer is designed for a single user?",
        options: ["Personal Computer (PC)", "Mainframe", "Supercomputer", "Server"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "A Personal Computer is designed for individual use at a desk or lap.",
        realWorldExample: "Your desktop or laptop at home is a personal computer meant for one person."
    },
    {
        id: "intro_022",
        topic: "Introduction & Fundamentals",
        questionText: "What is a supercomputer used for?",
        options: ["Basic word processing", "Complex scientific calculations", "Simple games", "Web browsing only"],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "Supercomputers perform billions of calculations for weather forecasting, scientific research, etc.",
        realWorldExample: "NASA uses supercomputers to simulate spacecraft launches and predict weather patterns."
    },
    {
        id: "intro_023",
        topic: "Introduction & Fundamentals",
        questionText: "What is embedded computer?",
        options: ["Standing alone PC", "Laptop computer", "Computer built into other devices", "Gaming console"],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "Embedded computers are specialized computers built into devices like cars, appliances.",
        realWorldExample: "Your microwave, car engine controller, and smart thermostat contain embedded computers."
    },

    // More HARDWARE questions
    {
        id: "hw_026",
        topic: "Hardware",
        questionText: "What is a joystick used for?",
        options: ["Printing documents", "Typing text", "Storing data", "Gaming and simulation control"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "A joystick is an input device for controlling movement in games and simulations.",
        realWorldExample: "Flight simulators use joysticks to control virtual aircraft movements."
    },
    {
        id: "hw_027",
        topic: "Hardware",
        questionText: "What is a microphone?",
        options: ["Input device for capturing sound", "Output device for playing sound", "Storage device", "Processing unit"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "A microphone converts sound waves into electrical signals for the computer.",
        realWorldExample: "Video call apps like Zoom use your microphone to capture your voice."
    },
    {
        id: "hw_028",
        topic: "Hardware",
        questionText: "What is the difference between inkjet and laser printers?",
        options: ["They are identical", "Inkjet sprays ink, laser uses toner and heat", "Laser is slower", "Inkjet is only for photos"],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "Inkjet printers spray liquid ink, while laser printers use powdered toner fused by heat.",
        realWorldExample: "Home users often choose inkjet for photos; offices prefer laser for fast, cheap text printing."
    },
    {
        id: "hw_029",
        topic: "Hardware",
        questionText: "What is a graphics tablet?",
        options: ["Computer monitor", "Keyboard", "Input device for drawing with a stylus", "Storage device"],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "A graphics tablet allows artists to draw directly using a pressure-sensitive pen.",
        realWorldExample: "Digital artists use Wacom tablets to create illustrations and edit photos precisely."
    },
    {
        id: "hw_030",
        topic: "Hardware",
        questionText: "What does LED stand for?",
        options: ["Light Energy Display", "Liquid Energy Device", "Low Energy Device", "Light Emitting Diode"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "LED is a small light source used in displays, indicators, and lighting.",
        realWorldExample: "Modern TVs and monitors use LED backlighting for brighter, more efficient displays."
    },

    // More SOFTWARE questions
    {
        id: "sw_019",
        topic: "Software",
        questionText: "What is a plug-in or extension?",
        options: ["Add-on software that extends functionality", "Hardware component", "Operating system", "Computer virus"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Plugins add extra features to existing software like web browsers.",
        realWorldExample: "AdBlock and Grammarly are browser extensions that add new capabilities to Chrome."
    },
    {
        id: "sw_020",
        topic: "Software",
        questionText: "What is an alpha version?",
        options: ["Final release", "Very early testing version before beta", "Beta version", "Stable version"],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "Alpha is the earliest testing phase, often internal, before beta testing.",
        realWorldExample: "Game developers test alpha builds internally before letting public testers try the beta."
    },
    {
        id: "sw_021",
        topic: "Software",
        questionText: "What is a patch?",
        options: ["Complete new version", "Hardware upgrade", "Small update fixing bugs or security issues", "Internet connection"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "A patch is a quick fix released to address specific bugs or vulnerabilities.",
        realWorldExample: "When hackers find a Windows security flaw, Microsoft releases an emergency patch."
    },

    // More OS & GUI questions
    {
        id: "os_021",
        topic: "Operating Systems & GUI",
        questionText: "What is Alt + Tab used for?",
        options: ["Close window", "Open new window", "Delete file", "Switch between open windows"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Alt + Tab lets you quickly switch between running applications.",
        realWorldExample: "When working in Word and need to check email, press Alt+Tab to switch quickly."
    },
    {
        id: "os_022",
        topic: "Operating Systems & GUI",
        questionText: "What is Ctrl + Alt + Delete used for?",
        options: ["Access security options or Task Manager", "Delete files", "Copy text", "Print document"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "This keyboard combination opens security options including Task Manager in Windows.",
        realWorldExample: "If your computer freezes, Ctrl+Alt+Delete lets you open Task Manager to close frozen apps."
    },
    {
        id: "os_023",
        topic: "Operating Systems & GUI",
        questionText: "What is a screensaver?",
        options: ["Security software", "Animation displayed when computer is idle", "File manager", "Web browser"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "Screensavers were originally used to prevent burn-in on old monitors.",
        realWorldExample: "The flying toasters and starfield screensavers were popular in the 1990s."
    },
    {
        id: "os_024",
        topic: "Operating Systems & GUI",
        questionText: "What is a notification in an OS?",
        options: ["File type", "Hardware component", "Alert about events or updates", "Internet browser"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Notifications inform users about new emails, messages, updates, or app activity.",
        realWorldExample: "When you receive an email, Windows shows a notification in the bottom-right corner."
    },

    // More DATA & FILES questions
    {
        id: "data_016",
        topic: "Data, Files & Folders",
        questionText: "What is a read-only file?",
        options: ["File that can be edited", "Deleted file", "Encrypted file", "File that cannot be modified"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Read-only files can be viewed but not changed or deleted without permission.",
        realWorldExample: "System files are often marked read-only so you don't accidentally modify them."
    },
    {
        id: "data_017",
        topic: "Data, Files & Folders",
        questionText: "What is drag and drop?",
        options: ["Moving items by clicking and dragging with mouse", "Keyboard shortcut", "Voice command", "Touch gesture only"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Drag and drop lets you move files by clicking, holding, and releasing at a new location.",
        realWorldExample: "Click a file, hold the mouse button, drag it to a folder, and release to move it."
    },
    {
        id: "data_018",
        topic: "Data, Files & Folders",
        questionText: "What does .mp3 file extension indicate?",
        options: ["Video file", "Audio file", "Image file", "Text file"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "MP3 is a compressed audio format commonly used for music files.",
        realWorldExample: "Most songs you download or stream are in MP3 format for smaller file sizes."
    },
    {
        id: "data_019",
        topic: "Data, Files & Folders",
        questionText: "What does .mp4 file extension indicate?",
        options: ["Audio file", "Image file", "Video file", "Text file"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "MP4 is a video format that can contain both video and audio.",
        realWorldExample: "Videos on YouTube and movies you download are often in MP4 format."
    },

    // More MEMORY & STORAGE questions
    {
        id: "mem_018",
        topic: "Memory & Storage",
        questionText: "What is an external hard drive?",
        options: ["Internal computer component", "RAM module", "Graphics card", "Portable storage device connected via USB"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "An external hard drive is a portable storage device you can connect to any computer.",
        realWorldExample: "Back up your photos to an external drive so you don't lose them if your computer breaks."
    },
    {
        id: "mem_019",
        topic: "Memory & Storage",
        questionText: "What is defragmentation?",
        options: ["Reorganizing data on HDD for faster access", "Deleting files", "Installing software", "Formatting drive"],
        correctOptionIndex: 0,
        difficulty: "medium",
        explanation: "Defragmentation rearranges fragmented data on hard drives for improved performance.",
        realWorldExample: "After years of use, running defrag on an HDD can make your computer noticeably faster."
    },
    {
        id: "mem_020",
        topic: "Memory & Storage",
        questionText: "What is the advantage of SSD over HDD?",
        options: ["Larger capacity always", "Faster speed and no moving parts", "Lower cost", "Better for videos only"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "SSDs are faster, more durable, and quieter because they have no moving parts.",
        realWorldExample: "Upgrading from HDD to SSD can make boot time drop from 2 minutes to 15 seconds."
    },

    // More INTERNET questions
    {
        id: "web_019",
        topic: "Internet & Web Basics",
        questionText: "What is a home page?",
        options: ["Browser settings", "Search results", "Main page of a website", "Email inbox"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "The home page is the main or starting page of a website.",
        realWorldExample: "When you go to amazon.com, the first page you see is Amazon's home page."
    },
    {
        id: "web_020",
        topic: "Internet & Web Basics",
        questionText: "What is a 404 error?",
        options: ["Successful connection", "Login required", "Server is busy", "Page not found error"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "A 404 error means the requested web page could not be found on the server.",
        realWorldExample: "If you click an old link to a deleted article, you'll see a '404 Page Not Found' error."
    },
    {
        id: "web_021",
        topic: "Internet & Web Basics",
        questionText: "What is incognito or private browsing mode?",
        options: ["Browsing without saving history or cookies", "Faster internet speed", "Virus protection", "Ad blocking"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Private mode doesn't save your browsing history, cookies, or form data.",
        realWorldExample: "Use incognito mode when shopping for gifts so your family doesn't see your searches."
    },
    {
        id: "web_022",
        topic: "Internet & Web Basics",
        questionText: "What is a web form?",
        options: ["Image on website", "Interactive element for user input on websites", "Video player", "Download button"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "Web forms collect user input like names, emails, and passwords.",
        realWorldExample: "When you sign up for a new account, you fill out a web form with your details."
    },

    // More NETWORKING questions
    {
        id: "net_016",
        topic: "Networking Basics",
        questionText: "What is a hotspot?",
        options: ["Computer overheating", "Email server", "Wireless access point for internet", "Storage location"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "A hotspot provides wireless internet access to nearby devices.",
        realWorldExample: "You can turn your phone into a hotspot to share your mobile data with your laptop."
    },
    {
        id: "net_017",
        topic: "Networking Basics",
        questionText: "What is download speed vs upload speed?",
        options: ["They are the same", "Upload is faster always", "Download is sending", "Download is receiving data, upload is sending data"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Download speed is how fast you receive data; upload speed is how fast you send data.",
        realWorldExample: "Streaming movies needs good download speed; video calls need good upload speed too."
    },
    {
        id: "net_018",
        topic: "Networking Basics",
        questionText: "What is an ethernet cable?",
        options: ["Cable for wired network connection", "Power cable", "Audio cable", "Video cable"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Ethernet cables connect devices to a wired network using RJ-45 connectors.",
        realWorldExample: "For the fastest, most stable internet, plug an ethernet cable from your router to your PC."
    },

    // More SECURITY questions
    {
        id: "sec_019",
        topic: "Basic Security",
        questionText: "What is a keylogger?",
        options: ["Keyboard feature", "Malware that records keystrokes", "Password manager", "Antivirus software"],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "Keyloggers secretly record everything you type, including passwords.",
        realWorldExample: "Criminals use keyloggers to steal bank login credentials when you type them."
    },
    {
        id: "sec_020",
        topic: "Basic Security",
        questionText: "What is a backup?",
        options: ["Virus scan", "Internet speed", "Copy of data stored for recovery", "Computer restart"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Backups are copies of your files that can restore data if originals are lost.",
        realWorldExample: "If your laptop is stolen, you can restore all your photos from a cloud backup."
    },
    {
        id: "sec_021",
        topic: "Basic Security",
        questionText: "What is data recovery?",
        options: ["Creating new files", "Sending emails", "Browsing internet", "Restoring lost or deleted data"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Data recovery retrieves data from damaged, failed, or corrupted storage.",
        realWorldExample: "Specialized software can sometimes recover photos from a formatted memory card."
    },
    {
        id: "sec_022",
        topic: "Basic Security",
        questionText: "What is a password manager?",
        options: ["Software that securely stores all your passwords", "Keyboard", "Antivirus", "Browser"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Password managers store encrypted passwords so you only need to remember one master password.",
        realWorldExample: "LastPass, 1Password, and Bitwarden are popular password managers."
    },

    // More PRODUCTIVITY questions
    {
        id: "prod_017",
        topic: "Productivity Software",
        questionText: "What is Ctrl + F used for?",
        options: ["Format text", "Find text in a document", "Create folder", "Open file"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "Ctrl + F opens the Find dialog to search for text in documents or web pages.",
        realWorldExample: "On a long webpage, press Ctrl+F and type a word to jump directly to it."
    },
    {
        id: "prod_018",
        topic: "Productivity Software",
        questionText: "What is Ctrl + B used for?",
        options: ["Make text italic", "Underline text", "Make text bold", "Delete text"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Ctrl + B toggles bold formatting on selected text.",
        realWorldExample: "Select a heading in your document and press Ctrl+B to make it stand out."
    },
    {
        id: "prod_019",
        topic: "Productivity Software",
        questionText: "What is Ctrl + I used for?",
        options: ["Make text bold", "Insert image", "Indent text", "Make text italic"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Ctrl + I toggles italic formatting on selected text.",
        realWorldExample: "Book titles and emphasis are often shown in italics using Ctrl+I."
    },
    {
        id: "prod_020",
        topic: "Productivity Software",
        questionText: "What is a spreadsheet function?",
        options: ["Built-in formula for calculations like SUM, AVERAGE", "Cell color", "Font style", "Print setting"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Functions are predefined formulas that perform calculations in spreadsheets.",
        realWorldExample: "=SUM(A1:A10) adds all numbers in cells A1 through A10 automatically."
    }
];

// Merge with main questions array
QUESTIONS.push(...QUESTIONS_PART2);
