// ============================================
// Question Database - Part 1
// Topics: Introduction, Hardware, Software
// ============================================

const QUESTIONS = [
    // ============================================
    // INTRODUCTION & FUNDAMENTALS (12 questions)
    // ============================================
    {
        id: "intro_001",
        topic: "Introduction & Fundamentals",
        questionText: "What is a computer?",
        options: [
            "An electronic device that processes data",
            "A type of calculator only",
            "A machine that only plays games",
            "A device used only for typing"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "A computer is an electronic device that receives data (input), processes it according to a set of instructions (programs), and produces results (output). It can perform a wide variety of tasks.",
        realWorldExample: "When you type a document, the computer takes your keystrokes (input), processes them using word processing software, and displays the text on screen (output). It can simultaneously play music, run calculations, and browse the internet."
    },
    {
        id: "intro_002",
        topic: "Introduction & Fundamentals",
        questionText: "What does CPU stand for?",
        options: [
            "Computer Personal Unit",
            "Central Processing Unit",
            "Central Program Utility",
            "Computer Processing Utility"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "CPU stands for Central Processing Unit. It is the primary component of a computer that performs most of the processing and acts as the 'brain' of the computer.",
        realWorldExample: "When you open a web browser and load a webpage, the CPU processes millions of instructions per second to render images, execute JavaScript, and handle your mouse clicks."
    },
    {
        id: "intro_003",
        topic: "Introduction & Fundamentals",
        questionText: "Which generation of computers used vacuum tubes?",
        options: [
            "Second generation",
            "Third generation",
            "First generation",
            "Fourth generation"
        ],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "First generation computers (1940s-1950s) used vacuum tubes for circuitry and magnetic drums for memory. They were enormous, expensive, and generated a lot of heat.",
        realWorldExample: "ENIAC, one of the first electronic computers, used about 18,000 vacuum tubes, weighed 30 tons, and occupied an entire room. Today's smartphones are millions of times more powerful."
    },
    {
        id: "intro_004",
        topic: "Introduction & Fundamentals",
        questionText: "What is the binary number system based on?",
        options: [
            "Ten digits (0-9)",
            "Eight digits (0-7)",
            "Sixteen digits (0-F)",
            "Two digits (0 and 1)"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "The binary system uses only two digits: 0 and 1. Computers use binary because electronic circuits can easily represent two states: on (1) and off (0).",
        realWorldExample: "Every photo, video, song, and document on your computer is ultimately stored as a sequence of 0s and 1s. A simple letter 'A' is represented as 01000001 in binary."
    },
    {
        id: "intro_005",
        topic: "Introduction & Fundamentals",
        questionText: "What is the main function of a computer?",
        options: [
            "Input, Process, Output, and Storage",
            "Only calculations",
            "Only internet browsing",
            "Only gaming"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "A computer performs four main functions: Input (receiving data), Processing (manipulating data), Output (displaying results), and Storage (saving data for later use).",
        realWorldExample: "When editing a photo: you import the image (input), apply filters and adjustments (process), view the result on screen (output), and save the edited file (storage)."
    },
    {
        id: "intro_006",
        topic: "Introduction & Fundamentals",
        questionText: "What is data?",
        options: [
            "Processed information",
            "Raw facts and figures",
            "Computer programs",
            "Output only"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "Data refers to raw, unprocessed facts and figures that have no meaning on their own. When data is processed and organized, it becomes information.",
        realWorldExample: "The numbers 98, 85, 92, 78 are data. When processed to calculate an average of 88.25 and labeled as 'Student Test Scores Average,' it becomes meaningful information."
    },
    {
        id: "intro_007",
        topic: "Introduction & Fundamentals",
        questionText: "Who is known as the father of computers?",
        options: [
            "Bill Gates",
            "Steve Jobs",
            "Charles Babbage",
            "Alan Turing"
        ],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "Charles Babbage is called the 'Father of Computers' because he designed the first mechanical computer called the Analytical Engine in the 1830s, which had concepts similar to modern computers.",
        realWorldExample: "Babbage's Analytical Engine design included an arithmetic logic unit, control flow through loops, and memory—concepts still fundamental to every computer today, from smartphones to supercomputers."
    },
    {
        id: "intro_008",
        topic: "Introduction & Fundamentals",
        questionText: "What is the difference between hardware and software?",
        options: [
            "They are the same thing",
            "Hardware is programs; software is physical",
            "Both are physical components",
            "Hardware is physical; software is programs"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Hardware refers to the physical components of a computer (keyboard, monitor, CPU), while software refers to the programs and instructions that tell the hardware what to do.",
        realWorldExample: "Your laptop's keyboard and screen are hardware—you can touch them. Microsoft Word or Chrome browser are software—they're instructions that run on the hardware."
    },
    {
        id: "intro_009",
        topic: "Introduction & Fundamentals",
        questionText: "What does 'booting' a computer mean?",
        options: [
            "Starting up the computer",
            "Shutting down the computer",
            "Installing software",
            "Connecting to internet"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Booting is the process of starting up a computer. During boot, the computer loads the operating system from storage into memory and prepares the system for use.",
        realWorldExample: "When you press the power button on your laptop, you see the manufacturer's logo, then Windows or Mac loading screen—this entire startup sequence is the boot process."
    },
    {
        id: "intro_010",
        topic: "Introduction & Fundamentals",
        questionText: "What is an algorithm?",
        options: [
            "A type of computer virus",
            "A step-by-step procedure to solve a problem",
            "A hardware component",
            "An internet browser"
        ],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "An algorithm is a finite sequence of well-defined instructions used to solve a specific problem or perform a computation. It's like a recipe that tells the computer exactly what to do.",
        realWorldExample: "Google's search algorithm processes your query and returns relevant results in milliseconds. A GPS navigation app uses algorithms to find the fastest route to your destination."
    },
    {
        id: "intro_011",
        topic: "Introduction & Fundamentals",
        questionText: "What is a byte?",
        options: [
            "4 bits",
            "16 bits",
            "8 bits",
            "1 bit"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "A byte consists of 8 bits and is the basic unit of digital information storage. One byte can represent a single character like a letter or number.",
        realWorldExample: "A single letter 'A' takes 1 byte of storage. A typical email might be 10-20 kilobytes (10,000-20,000 bytes). A high-resolution photo could be 5 megabytes (5 million bytes)."
    },
    {
        id: "intro_012",
        topic: "Introduction & Fundamentals",
        questionText: "What is the full form of IT?",
        options: [
            "Internet Technology",
            "Integrated Technology",
            "Internal Technology",
            "Information Technology"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "IT stands for Information Technology, which encompasses the use of computers, storage, networking, and other devices to create, process, store, and exchange electronic data.",
        realWorldExample: "The IT department at a company manages everything from email servers and employee computers to cybersecurity and software updates."
    },

    // ============================================
    // HARDWARE (15 questions)
    // ============================================
    {
        id: "hw_001",
        topic: "Hardware",
        questionText: "Which component is considered the 'brain' of the computer?",
        options: [
            "CPU (Central Processing Unit)",
            "RAM (Random Access Memory)",
            "Hard Drive",
            "Monitor"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "The CPU is called the brain of the computer because it executes instructions and processes data. It performs all the calculations and logical operations.",
        realWorldExample: "When you're playing a video game, the CPU calculates physics, enemy AI behavior, and game logic hundreds of times per second to create a smooth gaming experience."
    },
    {
        id: "hw_002",
        topic: "Hardware",
        questionText: "What is the function of RAM in a computer?",
        options: [
            "Permanent storage of files",
            "Temporary storage for running programs",
            "Display output on screen",
            "Connect to the internet"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "RAM (Random Access Memory) provides temporary, fast storage for data and programs currently in use. It loses all data when power is turned off.",
        realWorldExample: "When you open multiple browser tabs, each tab's data is stored in RAM. That's why having more RAM lets you keep more apps open without your computer slowing down."
    },
    {
        id: "hw_003",
        topic: "Hardware",
        questionText: "Which of the following is an input device?",
        options: [
            "Monitor",
            "Printer",
            "Keyboard",
            "Speaker"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "An input device sends data to the computer. The keyboard is an input device because it allows users to enter text and commands into the computer.",
        realWorldExample: "When you type an email or search query, the keyboard converts your key presses into signals the computer can understand and process."
    },
    {
        id: "hw_004",
        topic: "Hardware",
        questionText: "Which of the following is an output device?",
        options: [
            "Mouse",
            "Keyboard",
            "Scanner",
            "Printer"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "An output device receives data from the computer and presents it to the user. A printer produces physical copies of digital documents.",
        realWorldExample: "When you print a boarding pass or a report, the printer takes digital data from your computer and creates a physical paper copy you can hold."
    },
    {
        id: "hw_005",
        topic: "Hardware",
        questionText: "What does GPU stand for?",
        options: [
            "Graphics Processing Unit",
            "General Processing Unit",
            "Graphics Program Utility",
            "General Program Unit"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "GPU stands for Graphics Processing Unit. It's specialized hardware designed to rapidly process and render images, videos, and graphics.",
        realWorldExample: "When you play a modern video game with realistic graphics, the GPU renders millions of pixels and applies lighting effects 60+ times per second to create smooth visuals."
    },
    {
        id: "hw_006",
        topic: "Hardware",
        questionText: "What is the motherboard?",
        options: [
            "A type of processor",
            "The main circuit board connecting all components",
            "External storage device",
            "Display screen"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "The motherboard is the main printed circuit board in a computer. It holds and allows communication between the CPU, RAM, storage devices, and other hardware components.",
        realWorldExample: "Think of the motherboard as the nervous system of your computer—it connects the brain (CPU) to memory (RAM), senses (input devices), and everything else."
    },
    {
        id: "hw_007",
        topic: "Hardware",
        questionText: "What is the purpose of a power supply unit (PSU)?",
        options: [
            "Store electricity for later use",
            "Cool down the computer",
            "Convert AC power to DC for computer components",
            "Display battery status"
        ],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "The PSU converts alternating current (AC) from your wall outlet into direct current (DC) that computer components need. It also regulates voltage to protect components.",
        realWorldExample: "Your wall outlet provides 120V or 240V AC power, but your CPU might need only 1.2V DC. The PSU makes this conversion safely and efficiently."
    },
    {
        id: "hw_008",
        topic: "Hardware",
        questionText: "What is a USB port used for?",
        options: [
            "Displaying graphics",
            "Processing data",
            "Cooling the system",
            "Connecting external devices to the computer"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "USB (Universal Serial Bus) ports allow you to connect external devices like keyboards, mice, flash drives, printers, and phones to your computer.",
        realWorldExample: "When you plug in a USB flash drive to transfer photos or connect your phone to charge and sync, you're using USB technology."
    },
    {
        id: "hw_009",
        topic: "Hardware",
        questionText: "What is the function of a cooling fan in a computer?",
        options: [
            "Prevent overheating of components",
            "Generate electricity",
            "Store data",
            "Process graphics"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Cooling fans dissipate heat generated by the CPU, GPU, and other components. Without proper cooling, components can overheat and be damaged or throttled.",
        realWorldExample: "Gaming laptops have multiple fans that spin faster during intense gaming sessions. You can hear them getting louder as the components work harder and generate more heat."
    },
    {
        id: "hw_010",
        topic: "Hardware",
        questionText: "What is an SSD?",
        options: [
            "System Software Driver",
            "Solid State Drive - a fast storage device",
            "Serial Signal Device",
            "Standard Storage Disk"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "An SSD (Solid State Drive) is a storage device that uses flash memory to store data. It has no moving parts, making it faster, quieter, and more durable than traditional hard drives.",
        realWorldExample: "Computers with SSDs can boot up in 10-15 seconds, while those with traditional hard drives might take a minute or more. Apps also load much faster with SSDs."
    },
    {
        id: "hw_011",
        topic: "Hardware",
        questionText: "What is a scanner used for?",
        options: [
            "Printing documents",
            "Playing audio",
            "Converting physical documents to digital format",
            "Connecting to internet"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "A scanner is an input device that captures images of physical documents, photos, or objects and converts them into digital files that can be stored and edited on a computer.",
        realWorldExample: "When you need to email a signed contract or digitize old family photos, a scanner creates digital copies you can store, share, or edit on your computer."
    },
    {
        id: "hw_012",
        topic: "Hardware",
        questionText: "What is the purpose of a webcam?",
        options: [
            "Print documents",
            "Store files",
            "Play music",
            "Capture video and images for video calls"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "A webcam is a video camera that captures real-time video. It's commonly used for video conferencing, live streaming, and taking photos or videos.",
        realWorldExample: "During a Zoom meeting or video call with family, the webcam captures your face and transmits the video feed to other participants in real-time."
    },
    {
        id: "hw_013",
        topic: "Hardware",
        questionText: "What does HDMI stand for?",
        options: [
            "High-Definition Multimedia Interface",
            "High-Data Memory Input",
            "Hardware Device Management Interface",
            "High-Definition Monitor Integration"
        ],
        correctOptionIndex: 0,
        difficulty: "medium",
        explanation: "HDMI (High-Definition Multimedia Interface) is a standard for transmitting high-quality audio and video signals through a single cable.",
        realWorldExample: "When you connect your laptop to a TV or projector for a presentation or movie night, HDMI carries both the picture and sound through one cable."
    },
    {
        id: "hw_014",
        topic: "Hardware",
        questionText: "What is a touchscreen?",
        options: [
            "A type of keyboard",
            "A display that responds to touch input",
            "A cooling system",
            "A sound device"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "A touchscreen is a display device that can detect and respond to touch. It serves as both an input and output device, allowing direct interaction with displayed content.",
        realWorldExample: "Smartphones and tablets use touchscreens that let you tap icons, swipe through photos, pinch to zoom, and type on virtual keyboards using your fingers."
    },
    {
        id: "hw_015",
        topic: "Hardware",
        questionText: "What is the function of a network interface card (NIC)?",
        options: [
            "Process graphics",
            "Store data permanently",
            "Connect a computer to a network",
            "Convert text to speech"
        ],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "A Network Interface Card (NIC) allows a computer to connect to a network, either through an Ethernet cable (wired) or WiFi (wireless). It handles network communication.",
        realWorldExample: "Your laptop's WiFi adapter is a type of NIC. It lets you connect to your home router, office network, or coffee shop WiFi to access the internet."
    },

    // ============================================
    // SOFTWARE (12 questions)
    // ============================================
    {
        id: "sw_001",
        topic: "Software",
        questionText: "What is system software?",
        options: [
            "Software used for gaming only",
            "Software that only creates documents",
            "Software for internet browsing only",
            "Software that manages computer hardware and provides a platform for applications"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "System software manages computer hardware resources and provides common services for application software. The operating system is the most important type of system software.",
        realWorldExample: "Windows, macOS, and Linux are system software. They manage your files, run programs, control hardware like printers, and provide the interface you interact with."
    },
    {
        id: "sw_002",
        topic: "Software",
        questionText: "What is application software?",
        options: [
            "Programs designed to perform specific tasks for users",
            "Software that controls hardware only",
            "The operating system itself",
            "Firmware embedded in devices"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Application software (apps) are programs designed to help users perform specific tasks like word processing, gaming, browsing, or photo editing.",
        realWorldExample: "Microsoft Word for writing documents, Spotify for music, Instagram for photo sharing, and Excel for spreadsheets are all application software you use daily."
    },
    {
        id: "sw_003",
        topic: "Software",
        questionText: "What is an operating system?",
        options: [
            "A word processing application",
            "Software that manages hardware and provides services for programs",
            "An internet browser",
            "A type of virus"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "An operating system (OS) is system software that manages computer hardware and software resources. It provides a user interface and platform for running applications.",
        realWorldExample: "Windows 11, macOS Sonoma, and Android are operating systems. When you click an icon to open an app, the OS handles loading it from storage and allocating memory."
    },
    {
        id: "sw_004",
        topic: "Software",
        questionText: "Which of the following is NOT an operating system?",
        options: [
            "Windows 11",
            "macOS",
            "Microsoft Word",
            "Linux"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Microsoft Word is a word processing application, not an operating system. Windows, macOS, and Linux are all operating systems that manage computer resources.",
        realWorldExample: "You need an operating system like Windows to run Microsoft Word. Word is just one of many applications that can run on top of the Windows operating system."
    },
    {
        id: "sw_005",
        topic: "Software",
        questionText: "What is firmware?",
        options: [
            "Temporary files on your desktop",
            "Internet browser extensions",
            "Video game software",
            "Permanent software programmed into hardware"
        ],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "Firmware is specialized software embedded directly into hardware devices. It provides low-level control for the device's specific functions and is stored in non-volatile memory.",
        realWorldExample: "Your router has firmware that controls how it manages network traffic. Your TV remote, washing machine, and car's engine control unit all have firmware."
    },
    {
        id: "sw_006",
        topic: "Software",
        questionText: "What is open-source software?",
        options: [
            "Software with publicly available source code anyone can modify",
            "Software that costs money",
            "Software that only works online",
            "Software made by Microsoft only"
        ],
        correctOptionIndex: 0,
        difficulty: "medium",
        explanation: "Open-source software has source code that is freely available for anyone to view, modify, and distribute. This collaborative approach often leads to rapid innovation.",
        realWorldExample: "Linux, Firefox, VLC media player, and Android are open-source. Developers worldwide contribute improvements, and you can use them for free."
    },
    {
        id: "sw_007",
        topic: "Software",
        questionText: "What is a software license?",
        options: [
            "A type of virus protection",
            "Legal agreement defining how software can be used",
            "Hardware warranty",
            "Internet connection permit"
        ],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "A software license is a legal agreement that specifies how software can be used, copied, modified, and distributed. It protects both the developer's rights and defines user permissions.",
        realWorldExample: "When you install Microsoft Office, you agree to their license terms. Some licenses allow home use only, while others permit business use—violating terms can have legal consequences."
    },
    {
        id: "sw_008",
        topic: "Software",
        questionText: "What is a software update?",
        options: [
            "Deleting old software",
            "Buying new hardware",
            "New version of software with improvements or fixes",
            "Connecting to WiFi"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "A software update (or patch) is a modified version of software that fixes bugs, addresses security vulnerabilities, or adds new features to existing software.",
        realWorldExample: "When your phone prompts you to update apps or the operating system, these updates might fix crashes, patch security holes, or add features like new emojis."
    },
    {
        id: "sw_009",
        topic: "Software",
        questionText: "What is a web browser?",
        options: [
            "An operating system",
            "A type of hardware",
            "A computer virus",
            "Application software for accessing websites"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "A web browser is application software that allows users to access, view, and interact with websites on the World Wide Web. It interprets HTML, CSS, and JavaScript to display web pages.",
        realWorldExample: "Chrome, Firefox, Safari, and Edge are web browsers. When you type google.com, the browser requests the page, receives the code, and renders it visually for you."
    },
    {
        id: "sw_010",
        topic: "Software",
        questionText: "What is the purpose of antivirus software?",
        options: [
            "Detect and remove malicious software",
            "Speed up internet connection",
            "Create documents",
            "Edit photos"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Antivirus software protects computers by detecting, preventing, and removing malware including viruses, worms, trojans, and ransomware.",
        realWorldExample: "Norton, McAfee, and Windows Defender scan your downloads, emails, and files for malicious content, blocking threats before they can harm your system."
    },
    {
        id: "sw_011",
        topic: "Software",
        questionText: "What is a device driver?",
        options: [
            "A type of storage device",
            "Software that allows OS to communicate with hardware",
            "An internet browser",
            "A gaming console"
        ],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "A device driver is software that enables the operating system to communicate with hardware devices. Each device needs its specific driver to function properly.",
        realWorldExample: "When you plug in a new printer, Windows installs a driver that tells the OS how to send print commands to that specific printer model."
    },
    {
        id: "sw_012",
        topic: "Software",
        questionText: "What is cloud-based software?",
        options: [
            "Software stored on USB drives",
            "Software that only works offline",
            "Software accessed over the internet rather than installed locally",
            "Hardware components in the sky"
        ],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "Cloud-based software (SaaS - Software as a Service) runs on remote servers and is accessed via the internet. Users don't need to install or maintain the software locally.",
        realWorldExample: "Google Docs, Dropbox, Netflix, and Salesforce are cloud-based. You access them through a browser or app, and your data is stored on their servers, accessible from any device."
    },

    // ============================================
    // OPERATING SYSTEMS & GUI (12 questions)
    // ============================================
    {
        id: "os_001",
        topic: "Operating Systems & GUI",
        questionText: "What is a GUI?",
        options: [
            "General User Input",
            "Graphics Utility Integration",
            "General Utility Interface",
            "Graphical User Interface"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "GUI (Graphical User Interface) is a visual way of interacting with computers using icons, windows, menus, and a mouse pointer instead of text commands.",
        realWorldExample: "The Windows desktop with its icons, Start menu, and windows you can drag around is a GUI. Before GUIs, users typed text commands to do everything."
    },
    {
        id: "os_002",
        topic: "Operating Systems & GUI",
        questionText: "What is the function of the taskbar in Windows?",
        options: [
            "Shows open applications and provides quick access to features",
            "Stores permanent files",
            "Connects to internet",
            "Manages passwords"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "The taskbar displays running applications, allows switching between them, provides quick launch icons, shows the system tray with notifications, and displays the Start button.",
        realWorldExample: "When you have Chrome, Word, and Spotify open, the taskbar shows all three. Click any icon to switch to that app, or right-click for quick options like closing."
    },
    {
        id: "os_003",
        topic: "Operating Systems & GUI",
        questionText: "What is multitasking in an operating system?",
        options: [
            "Using multiple monitors",
            "Running multiple programs simultaneously",
            "Having multiple users",
            "Installing multiple operating systems"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "Multitasking allows an OS to run multiple applications at the same time. The OS rapidly switches between tasks, giving the illusion of simultaneous execution.",
        realWorldExample: "While you're browsing the web, you can have music playing in Spotify, download a file, and receive email notifications—all happening 'at once' thanks to multitasking."
    },
    {
        id: "os_004",
        topic: "Operating Systems & GUI",
        questionText: "What is the Desktop in an operating system?",
        options: [
            "A type of computer hardware",
            "The internal processor",
            "The main screen area where you work with files and programs",
            "An internet browser"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "The desktop is the primary screen you see after logging in. It displays icons for files, folders, and programs, and serves as a workspace for organizing your digital content.",
        realWorldExample: "Just like a physical desk where you keep frequently used items within reach, your computer desktop holds shortcuts to your most-used apps and files."
    },
    {
        id: "os_005",
        topic: "Operating Systems & GUI",
        questionText: "What is the Control Panel used for in Windows?",
        options: [
            "Playing video games",
            "Browsing the internet",
            "Creating documents",
            "Changing system settings and configuring hardware"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Control Panel (and its modern equivalent, Settings) allows users to configure system settings, install/remove programs, manage user accounts, and set up hardware.",
        realWorldExample: "Need to change your display resolution, add a printer, or uninstall a program? You'd go to Control Panel or Settings to make these system-level changes."
    },
    {
        id: "os_006",
        topic: "Operating Systems & GUI",
        questionText: "What is a system tray (notification area)?",
        options: [
            "Area showing background apps, time, and notifications",
            "A recycling bin",
            "A folder for documents",
            "The Start menu"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "The system tray (notification area) is the right side of the taskbar showing the clock, volume control, network status, and icons for background applications.",
        realWorldExample: "The WiFi symbol, battery icon, antivirus status, and clock in the bottom-right corner of Windows are all in the system tray."
    },
    {
        id: "os_007",
        topic: "Operating Systems & GUI",
        questionText: "What is a window in computing?",
        options: [
            "The operating system itself",
            "A rectangular area displaying program content",
            "A type of hardware",
            "An internet connection"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "A window is a rectangular viewing area on screen that displays the content of an application. Windows can be moved, resized, minimized, maximized, and closed.",
        realWorldExample: "When you open File Explorer, it appears in a window. You can drag its edges to resize, click the X to close it, or drag the title bar to move it."
    },
    {
        id: "os_008",
        topic: "Operating Systems & GUI",
        questionText: "What does 'right-clicking' typically do?",
        options: [
            "Closes the application",
            "Saves the file",
            "Opens a context menu with additional options",
            "Deletes the item"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Right-clicking opens a context menu that shows relevant options for the clicked item. The menu content changes based on what you right-click on.",
        realWorldExample: "Right-click on your desktop to see options like display settings, personalize, and create new folder. Right-click a file to copy, delete, rename, or see properties."
    },
    {
        id: "os_009",
        topic: "Operating Systems & GUI",
        questionText: "What is virtual memory?",
        options: [
            "Cloud storage",
            "USB drive memory",
            "Graphics card memory",
            "Hard drive space used as additional RAM"
        ],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "Virtual memory is a technique where the OS uses hard drive space to extend RAM. When RAM is full, less-used data is temporarily moved to the hard drive.",
        realWorldExample: "If you have 8GB RAM but open programs needing 10GB, the OS uses virtual memory. That's why your computer slows down with too many apps open."
    },
    {
        id: "os_010",
        topic: "Operating Systems & GUI",
        questionText: "What is Task Manager used for?",
        options: [
            "Viewing and managing running processes and performance",
            "Creating new tasks and reminders",
            "Scheduling meetings",
            "Installing software"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Task Manager shows all running programs and processes, system resource usage (CPU, memory, disk), and allows you to end unresponsive applications.",
        realWorldExample: "When a program freezes and won't respond to closing, you press Ctrl+Shift+Esc to open Task Manager and 'End Task' to force-close the stuck program."
    },
    {
        id: "os_011",
        topic: "Operating Systems & GUI",
        questionText: "What is the Recycle Bin?",
        options: [
            "A folder for recycling old computers",
            "Temporary storage for deleted files before permanent removal",
            "An antivirus program",
            "A system backup location"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "The Recycle Bin stores deleted files temporarily. You can restore accidentally deleted files or empty the bin to permanently free up disk space.",
        realWorldExample: "Deleted an important document by mistake? Check the Recycle Bin first—it's likely still there. Right-click and choose 'Restore' to get it back."
    },
    {
        id: "os_012",
        topic: "Operating Systems & GUI",
        questionText: "What keyboard shortcut opens a new window in most browsers?",
        options: [
            "Ctrl + S",
            "Ctrl + P",
            "Ctrl + N",
            "Ctrl + Z"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Ctrl + N is a universal shortcut for opening a new window in browsers and many applications. N stands for 'New'.",
        realWorldExample: "In Chrome or Firefox, pressing Ctrl + N opens a brand new browser window, separate from your current browsing session."
    },

    // ============================================
    // DATA, FILES, AND FOLDERS (10 questions)
    // ============================================
    {
        id: "data_001",
        topic: "Data, Files & Folders",
        questionText: "What is a file?",
        options: [
            "A physical document only",
            "A computer hardware component",
            "An internet website",
            "A named collection of related data stored on a device"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "A file is a container for storing information digitally. Files have names and extensions that indicate their type, and are stored on storage devices.",
        realWorldExample: "resume.docx is a Word document file, vacation.jpg is an image file, and song.mp3 is an audio file. Each contains specific data in a particular format."
    },
    {
        id: "data_002",
        topic: "Data, Files & Folders",
        questionText: "What is a folder (directory)?",
        options: [
            "A container for organizing files and other folders",
            "A type of file",
            "A software program",
            "A hardware component"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "A folder (also called a directory) is a container used to organize files and other folders. Folders can be nested inside each other to create a hierarchical structure.",
        realWorldExample: "Just like physical folders in a filing cabinet, computer folders help organize files. You might have a 'Work' folder containing 'Projects' and 'Reports' subfolders."
    },
    {
        id: "data_003",
        topic: "Data, Files & Folders",
        questionText: "What is a file extension?",
        options: [
            "The size of a file",
            "Characters after the dot that indicate file type",
            "The creation date",
            "The file creator's name"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "A file extension is the suffix after the dot in a filename that indicates the file format and which programs can open it.",
        realWorldExample: ".pdf indicates a PDF document, .jpg is an image, .mp4 is a video, .xlsx is an Excel file. The extension tells your computer which app to use."
    },
    {
        id: "data_004",
        topic: "Data, Files & Folders",
        questionText: "What is the difference between 'saving' and 'saving as'?",
        options: [
            "They are exactly the same",
            "Save As is faster than Save",
            "Save updates existing file; Save As creates a new file or location",
            "Save creates backups; Save As does not"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Save updates the current file with changes. Save As lets you create a new copy with a different name, location, or format, preserving the original.",
        realWorldExample: "Editing report.docx and pressing Ctrl+S updates that file. Using Save As to create report_v2.docx gives you both versions."
    },
    {
        id: "data_005",
        topic: "Data, Files & Folders",
        questionText: "What is a file path?",
        options: [
            "The speed at which a file opens",
            "The size of a file",
            "A type of file format",
            "The complete location address of a file in the system"
        ],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "A file path is the unique location of a file within a file system, showing the hierarchy of folders from the root to the file.",
        realWorldExample: "C:\\Users\\John\\Documents\\Reports\\annual_report.pdf is a Windows file path. It shows exactly where the file is stored in the folder hierarchy."
    },
    {
        id: "data_006",
        topic: "Data, Files & Folders",
        questionText: "What does 'copy and paste' do?",
        options: [
            "Duplicates content to another location",
            "Permanently moves content",
            "Deletes the original",
            "Renames the file"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Copy and paste creates a duplicate of selected content. The original remains in place, and a copy is placed at the destination.",
        realWorldExample: "Copy an image from a website and paste it into a Word document. The original image stays on the website while a copy appears in your document."
    },
    {
        id: "data_007",
        topic: "Data, Files & Folders",
        questionText: "What happens when you 'cut and paste' a file?",
        options: [
            "Creates a duplicate",
            "Moves the file from one location to another",
            "Deletes the file permanently",
            "Renames the file"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "Cut and paste moves content from one location to another. Unlike copy, the original is removed from its source location.",
        realWorldExample: "Cut a photo from your Downloads folder and paste it into your Pictures folder. The photo moves—it's no longer in Downloads."
    },
    {
        id: "data_008",
        topic: "Data, Files & Folders",
        questionText: "What is a backup?",
        options: [
            "The main storage location",
            "Deleting old files",
            "A copy of data stored separately for protection",
            "Compressing files"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "A backup is a copy of files stored in a separate location to protect against data loss from hardware failure, accidental deletion, or malware.",
        realWorldExample: "Copying your photos to an external hard drive or cloud service like Google Drive ensures you don't lose them if your computer crashes."
    },
    {
        id: "data_009",
        topic: "Data, Files & Folders",
        questionText: "What is file compression?",
        options: [
            "Increasing file quality",
            "Encrypting files",
            "Deleting unnecessary files",
            "Reducing file size for easier storage and transfer"
        ],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "Compression reduces file size by encoding data more efficiently. Compressed files take less storage space and transfer faster over the internet.",
        realWorldExample: "A 100MB folder compressed into a .zip file might become 60MB. This makes it faster to email or upload to cloud storage."
    },
    {
        id: "data_010",
        topic: "Data, Files & Folders",
        questionText: "What is the purpose of a .zip file?",
        options: [
            "Compress and bundle multiple files into one archive",
            "Display images",
            "Play music",
            "Run programs"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "A ZIP file is an archive that can contain one or more compressed files. It reduces total size and combines multiple files into a single downloadable package.",
        realWorldExample: "When downloading software, you often get a .zip file containing the program, documentation, and other files bundled together."
    },

    // ============================================
    // MEMORY & STORAGE (12 questions)
    // ============================================
    {
        id: "mem_001",
        topic: "Memory & Storage",
        questionText: "What is RAM and what does it do?",
        options: [
            "Read-only permanent storage",
            "Random Access Memory - temporary storage for active programs",
            "Long-term file storage",
            "Internet connection memory"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "RAM is volatile memory that stores data currently being used by the CPU. It's fast but loses all content when power is turned off.",
        realWorldExample: "When you open Chrome, it loads into RAM for quick access. Close Chrome, and that RAM is freed. Turn off your PC, and RAM is completely emptied."
    },
    {
        id: "mem_002",
        topic: "Memory & Storage",
        questionText: "What is ROM?",
        options: [
            "Random Operating Memory",
            "Temporary file storage",
            "Read-Only Memory - permanent storage for startup instructions",
            "A type of hard drive"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "ROM (Read-Only Memory) contains permanent instructions that don't change, like the BIOS that starts your computer. Data in ROM isn't lost when power is off.",
        realWorldExample: "When you first power on your computer, ROM contains the BIOS instructions that check hardware and start loading the operating system."
    },
    {
        id: "mem_003",
        topic: "Memory & Storage",
        questionText: "What is the difference between RAM and hard drive storage?",
        options: [
            "They are the same thing",
            "Hard drive is faster than RAM",
            "RAM stores files permanently",
            "RAM is fast temporary memory; hard drive is slower permanent storage"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "RAM is very fast but temporary - data is lost when power is off. Hard drives are slower but store data permanently, even when the computer is off.",
        realWorldExample: "Your saved documents stay on the hard drive after shutdown. But the webpage you were viewing (loaded in RAM) needs to be reloaded when you restart."
    },
    {
        id: "mem_004",
        topic: "Memory & Storage",
        questionText: "What is an HDD?",
        options: [
            "Hard Disk Drive - magnetic storage with spinning platters",
            "High Definition Display",
            "Hardware Data Device",
            "Hybrid Digital Disk"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "A Hard Disk Drive uses magnetic storage on spinning platters to store data permanently. It's cheaper per gigabyte but slower than SSDs.",
        realWorldExample: "Traditional laptops often have 1TB HDDs that can store thousands of photos, videos, and documents, but loading large files takes longer than with SSDs."
    },
    {
        id: "mem_005",
        topic: "Memory & Storage",
        questionText: "How is SSD different from HDD?",
        options: [
            "They are exactly the same",
            "SSD uses flash memory with no moving parts; HDD uses spinning disks",
            "HDD is faster than SSD",
            "SSD has more storage capacity"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "SSDs store data on flash memory chips without moving parts, making them faster, quieter, more durable, but more expensive than HDDs.",
        realWorldExample: "A laptop with an SSD boots in 10-15 seconds and opens apps almost instantly. The same laptop with an HDD might take a minute to boot."
    },
    {
        id: "mem_006",
        topic: "Memory & Storage",
        questionText: "What is a USB flash drive?",
        options: [
            "A type of RAM",
            "A display adapter",
            "Portable storage device using flash memory",
            "An internet modem"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "A USB flash drive is a small, portable storage device that plugs into USB ports. It uses flash memory to store data and doesn't need external power.",
        realWorldExample: "Students carry flash drives to transfer homework between home and school computers. They're small enough to fit on a keychain but can store gigabytes of data."
    },
    {
        id: "mem_007",
        topic: "Memory & Storage",
        questionText: "What is cloud storage?",
        options: [
            "Storage in the sky atmosphere",
            "Local hard drive storage",
            "RAM memory in a cloud shape",
            "Remote servers accessed via internet for storing data"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Cloud storage saves data on remote servers accessed through the internet. Your files are stored in data centers and accessible from any device with internet.",
        realWorldExample: "Google Drive, Dropbox, and iCloud let you save photos and documents online. Take a photo on your phone, and it appears on your laptop automatically."
    },
    {
        id: "mem_008",
        topic: "Memory & Storage",
        questionText: "What does 1 GB equal?",
        options: [
            "Approximately 1,000 megabytes",
            "100 megabytes",
            "10 megabytes",
            "10,000 megabytes"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "1 Gigabyte equals approximately 1,000 megabytes (technically 1,024 MB). Storage units follow: KB (kilobyte) < MB (megabyte) < GB (gigabyte) < TB (terabyte).",
        realWorldExample: "A typical smartphone photo is 3-5 MB. A 64 GB phone can store around 15,000-20,000 photos (not counting other apps and data)."
    },
    {
        id: "mem_009",
        topic: "Memory & Storage",
        questionText: "What is cache memory?",
        options: [
            "A type of hard drive",
            "Fast memory between CPU and RAM for quick data access",
            "Cloud storage",
            "External storage device"
        ],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "Cache is extremely fast memory located on or near the CPU. It stores frequently used data so the CPU doesn't have to wait for slower RAM.",
        realWorldExample: "When you visit a website repeatedly, your browser caches images locally. The page loads faster because it doesn't re-download everything."
    },
    {
        id: "mem_010",
        topic: "Memory & Storage",
        questionText: "What is an SD card?",
        options: [
            "System Data card",
            "Storage Disk card",
            "Secure Digital card - portable flash storage",
            "Serial Device card"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "SD (Secure Digital) cards are small, portable flash memory cards used in cameras, phones, and other devices to expand storage.",
        realWorldExample: "Cameras use SD cards to store photos. You can remove the card and insert it into a computer to transfer your vacation photos."
    },
    {
        id: "mem_011",
        topic: "Memory & Storage",
        questionText: "What is volatile memory?",
        options: [
            "Memory that keeps data permanently",
            "External hard drives",
            "Cloud storage",
            "Memory that loses data when power is turned off"
        ],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "Volatile memory requires constant power to maintain stored data. RAM is volatile - when you shut down, everything in RAM is lost.",
        realWorldExample: "If your computer crashes while writing a document, unsaved work in RAM is lost. That's why applications auto-save and why you should save frequently."
    },
    {
        id: "mem_012",
        topic: "Memory & Storage",
        questionText: "What is an external hard drive used for?",
        options: [
            "Additional portable storage for backups and extra files",
            "Increasing RAM",
            "Improving internet speed",
            "Displaying graphics"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "External hard drives connect via USB to provide additional storage. They're commonly used for backups, transferring large files, or expanding limited internal storage.",
        realWorldExample: "Photographers often use external drives to store thousands of high-resolution images that wouldn't fit on their laptop's internal storage."
    },

    // ============================================
    // INTERNET & WEB BASICS (12 questions)
    // ============================================
    {
        id: "net_001",
        topic: "Internet & Web Basics",
        questionText: "What is the Internet?",
        options: [
            "A single large computer",
            "A global network of interconnected computers",
            "A type of software",
            "A cable connecting two computers"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "The Internet is a massive global network connecting billions of computers and devices. It allows them to communicate and share information worldwide.",
        realWorldExample: "When you send an email from India to someone in the USA, it travels through multiple connected networks—the Internet—to reach them in seconds."
    },
    {
        id: "net_002",
        topic: "Internet & Web Basics",
        questionText: "What is a URL?",
        options: [
            "Universal Router Link",
            "User Registration Login",
            "Uniform Resource Locator - a web address",
            "Upload Resource Location"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "A URL is the address you type in a browser to visit a website. It specifies the location of a resource on the internet.",
        realWorldExample: "https://www.google.com is a URL. It tells your browser to use HTTPS protocol to access the server at www.google.com."
    },
    {
        id: "net_003",
        topic: "Internet & Web Basics",
        questionText: "What is a search engine?",
        options: [
            "A type of web browser",
            "An email service",
            "A social media platform",
            "A tool for finding information on the internet"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "A search engine is a software system that searches the web for content matching your query and presents relevant results.",
        realWorldExample: "Google, Bing, and DuckDuckGo are search engines. Type 'weather forecast' and they search billions of pages to find and rank relevant results."
    },
    {
        id: "net_004",
        topic: "Internet & Web Basics",
        questionText: "What is the World Wide Web (WWW)?",
        options: [
            "A system of interlinked documents accessed via the internet",
            "The same as the Internet",
            "A type of email service",
            "A social media network"
        ],
        correctOptionIndex: 0,
        difficulty: "medium",
        explanation: "The WWW is a system of web pages and websites connected by hyperlinks, accessed using browsers over the Internet. It's one service that runs on the Internet.",
        realWorldExample: "The Internet is the infrastructure (like roads). The WWW is one service using it (like delivery trucks). Email and streaming are other services using the same roads."
    },
    {
        id: "net_005",
        topic: "Internet & Web Basics",
        questionText: "What is an email?",
        options: [
            "A physical letter",
            "Electronic mail - digital messages sent over the internet",
            "A type of website",
            "An internet browser"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "Email (electronic mail) is a method of sending digital messages between people using email addresses. It's one of the oldest and most used internet services.",
        realWorldExample: "Send a job application, receive order confirmations, or keep in touch with family across the world—email makes it instant and free."
    },
    {
        id: "net_006",
        topic: "Internet & Web Basics",
        questionText: "What is a hyperlink?",
        options: [
            "A type of virus",
            "Internet speed measurement",
            "Clickable text or image that takes you to another webpage",
            "A download button"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "A hyperlink (link) is a reference in a document that users can click to jump to another location, webpage, or resource.",
        realWorldExample: "The blue underlined text in articles that says 'click here to learn more' is a hyperlink. Click it, and you're taken to another page."
    },
    {
        id: "net_007",
        topic: "Internet & Web Basics",
        questionText: "What does HTTP stand for?",
        options: [
            "High Transfer Text Protocol",
            "Hyper Technical Transfer Program",
            "Home Text Transfer Process",
            "HyperText Transfer Protocol"
        ],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web, defining how messages are formatted and transmitted.",
        realWorldExample: "When you type a web address, HTTP/HTTPS tells browsers and servers how to send and receive the webpage data securely."
    },
    {
        id: "net_008",
        topic: "Internet & Web Basics",
        questionText: "What is the difference between HTTP and HTTPS?",
        options: [
            "HTTPS is secure/encrypted; HTTP is not",
            "They are the same",
            "HTTP is faster",
            "HTTPS is for emails only"
        ],
        correctOptionIndex: 0,
        difficulty: "medium",
        explanation: "HTTPS (S = Secure) encrypts data between your browser and the website, protecting sensitive information from being intercepted.",
        realWorldExample: "Banks and shopping sites use HTTPS so your credit card numbers and passwords are encrypted. Look for the padlock icon in your browser's address bar."
    },
    {
        id: "net_009",
        topic: "Internet & Web Basics",
        questionText: "What is a browser cookie?",
        options: [
            "A computer virus",
            "Small data file stored by websites on your computer",
            "A type of website",
            "An internet speed booster"
        ],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "Cookies are small text files websites store on your device to remember information like login status, preferences, and shopping cart contents.",
        realWorldExample: "When you stay logged into Facebook or a shopping site remembers your cart, that's cookies at work. They save you from logging in repeatedly."
    },
    {
        id: "net_010",
        topic: "Internet & Web Basics",
        questionText: "What is social media?",
        options: [
            "A type of email service",
            "An internet browser",
            "Online platforms for sharing content and connecting with others",
            "A computer operating system"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Social media platforms allow users to create profiles, share content (text, photos, videos), and interact with others through comments, likes, and messages.",
        realWorldExample: "Facebook, Instagram, Twitter, LinkedIn, and TikTok are social media platforms where billions share updates, photos, and videos daily."
    },
    {
        id: "net_011",
        topic: "Internet & Web Basics",
        questionText: "What is downloading?",
        options: [
            "Transferring data from your device to internet",
            "Deleting files",
            "Printing documents",
            "Transferring data FROM the internet TO your device"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Downloading is the process of receiving data from a remote system (like a server) and saving it to your local device.",
        realWorldExample: "When you download a movie from Netflix for offline viewing or save an app from the Play Store, data is transferred from servers to your device."
    },
    {
        id: "net_012",
        topic: "Internet & Web Basics",
        questionText: "What is uploading?",
        options: [
            "Transferring data FROM your device TO the internet",
            "Downloading files from internet",
            "Installing software",
            "Deleting files online"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Uploading is sending data from your local device to a remote system, like posting photos to social media or submitting files to cloud storage.",
        realWorldExample: "Posting a photo to Instagram, submitting homework to a school portal, or adding files to Google Drive are all examples of uploading."
    },

    // ============================================
    // NETWORKING BASICS (10 questions)
    // ============================================
    {
        id: "netw_001",
        topic: "Networking Basics",
        questionText: "What is a LAN?",
        options: [
            "Large Area Network",
            "Local Area Network - computers connected in a small area",
            "Long Access Network",
            "Linked Application Network"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "A LAN connects computers in a limited area like a home, office, or school building, enabling them to share resources and communicate.",
        realWorldExample: "Your home network connecting your laptop, phone, smart TV, and printer is a LAN. They can share files and the same internet connection."
    },
    {
        id: "netw_002",
        topic: "Networking Basics",
        questionText: "What is a WAN?",
        options: [
            "Wireless Access Network",
            "Web Application Network",
            "Wide Area Network - connects computers over large distances",
            "Wired Area Network"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "A WAN connects computers and networks over large geographical areas—cities, countries, or worldwide. The Internet is the largest WAN.",
        realWorldExample: "A company with offices in New York, London, and Tokyo connects them all through a WAN so employees can share resources across continents."
    },
    {
        id: "netw_003",
        topic: "Networking Basics",
        questionText: "What is WiFi?",
        options: [
            "A type of cable",
            "An internet provider company",
            "A web browser",
            "Wireless technology for connecting devices to a network"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "WiFi allows devices to connect to a network wirelessly using radio waves, eliminating the need for physical cables.",
        realWorldExample: "At a coffee shop, your phone connects to their WiFi router without any cables, letting you browse the internet while enjoying your drink."
    },
    {
        id: "netw_004",
        topic: "Networking Basics",
        questionText: "What is an IP address?",
        options: [
            "A unique numerical identifier for devices on a network",
            "An email address",
            "A web browser",
            "A type of password"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "An IP (Internet Protocol) address is a unique number assigned to every device on a network, like a home address for computers.",
        realWorldExample: "Your home router has a public IP like 203.0.113.50. Every device in your house has a local IP like 192.168.1.5. It's how data knows where to go."
    },
    {
        id: "netw_005",
        topic: "Networking Basics",
        questionText: "What is a router?",
        options: [
            "A type of computer",
            "Device that directs internet traffic between networks",
            "A web browser",
            "An operating system"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "A router connects different networks and directs data packets to their destination. Home routers connect your local network to the internet.",
        realWorldExample: "Your home router receives internet from your provider and distributes it to all your devices—computers, phones, smart TVs—via WiFi or cable."
    },
    {
        id: "netw_006",
        topic: "Networking Basics",
        questionText: "What is a modem?",
        options: [
            "A wireless mouse",
            "A type of monitor",
            "Device that connects your network to the internet provider",
            "An email server"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "A modem (modulator-demodulator) converts signals between your home network and your internet service provider's network.",
        realWorldExample: "Your cable modem receives signals from the cable company and converts them to data your home network can use. Without it, no internet!"
    },
    {
        id: "netw_007",
        topic: "Networking Basics",
        questionText: "What is bandwidth?",
        options: [
            "The physical width of a cable",
            "A type of software",
            "A network security feature",
            "The maximum rate of data transfer"
        ],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "Bandwidth is the maximum amount of data that can be transmitted over a connection in a given time, usually measured in Mbps (megabits per second).",
        realWorldExample: "A 100 Mbps connection can handle HD streaming for several people. A 10 Mbps connection might struggle with multiple simultaneous users."
    },
    {
        id: "netw_008",
        topic: "Networking Basics",
        questionText: "What is Bluetooth?",
        options: [
            "Short-range wireless technology for device communication",
            "A type of internet connection",
            "A computer virus",
            "An email protocol"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Bluetooth is a wireless technology for exchanging data over short distances (typically up to 10 meters) between devices.",
        realWorldExample: "Wireless earbuds connect to your phone via Bluetooth. You can also transfer photos between phones or connect a wireless keyboard to your tablet."
    },
    {
        id: "netw_009",
        topic: "Networking Basics",
        questionText: "What is a server?",
        options: [
            "A type of printer",
            "A computer that provides services to other computers",
            "An internet browser",
            "A wireless connection"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "A server is a powerful computer that stores data, hosts websites, or provides services (email, games, files) to other computers called clients.",
        realWorldExample: "When you visit google.com, your browser (client) requests the page from Google's servers. The servers send back the webpage you see."
    },
    {
        id: "netw_010",
        topic: "Networking Basics",
        questionText: "What is a firewall?",
        options: [
            "A physical barrier for computers",
            "A type of antivirus",
            "Security system that monitors and controls network traffic",
            "An internet speed booster"
        ],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "A firewall monitors incoming and outgoing network traffic and blocks unauthorized access based on security rules, protecting your network from threats.",
        realWorldExample: "Windows Firewall blocks suspicious incoming connections that might be hackers. Corporate firewalls might also block employees from accessing certain websites."
    },

    // ============================================
    // BASIC SECURITY (12 questions)
    // ============================================
    {
        id: "sec_001",
        topic: "Basic Security",
        questionText: "What is a computer virus?",
        options: [
            "A hardware problem",
            "A slow internet connection",
            "An operating system",
            "Malicious software that can replicate and spread"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "A computer virus is malicious code that attaches to legitimate programs, replicates itself, and can damage files, steal data, or disrupt system operations.",
        realWorldExample: "Opening an infected email attachment can spread a virus that encrypts all your files and demands ransom, or steals your passwords."
    },
    {
        id: "sec_002",
        topic: "Basic Security",
        questionText: "What is malware?",
        options: [
            "Any software designed to harm or exploit computers",
            "Antivirus software",
            "A web browser",
            "Cloud storage"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Malware (malicious software) is an umbrella term for any software designed to damage, disrupt, or gain unauthorized access to computer systems.",
        realWorldExample: "Viruses, worms, trojans, ransomware, and spyware are all types of malware. They can steal your data, lock your files, or spy on your activities."
    },
    {
        id: "sec_003",
        topic: "Basic Security",
        questionText: "What is phishing?",
        options: [
            "A type of fishing game",
            "Fraudulent attempt to steal sensitive information via fake messages",
            "A secure email service",
            "A browser feature"
        ],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "Phishing uses fake emails, messages, or websites that appear legitimate to trick you into revealing passwords, credit card numbers, or personal information.",
        realWorldExample: "An email that looks like it's from your bank asks you to 'verify your account' by clicking a link. The link goes to a fake site that steals your login."
    },
    {
        id: "sec_004",
        topic: "Basic Security",
        questionText: "What makes a strong password?",
        options: [
            "Your name and birthday",
            "The word 'password'",
            "Mix of uppercase, lowercase, numbers, and symbols; at least 12 characters",
            "Simple common words"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Strong passwords are long, random, and include a mix of character types. They're hard to guess and resist automated cracking attempts.",
        realWorldExample: "Instead of 'john1990', use 'J0hn$Tr0ng#2024!' or better yet, a passphrase like 'Purple-Elephant-Jumping-42!' which is long and memorable."
    },
    {
        id: "sec_005",
        topic: "Basic Security",
        questionText: "What is two-factor authentication (2FA)?",
        options: [
            "Having two passwords",
            "Using two email addresses",
            "Logging in twice",
            "Using two different verification methods to log in"
        ],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "2FA requires two different forms of identification: something you know (password) plus something you have (phone code) or something you are (fingerprint).",
        realWorldExample: "After entering your password, your bank sends a code to your phone. You must enter both to access your account—even if someone steals your password."
    },
    {
        id: "sec_006",
        topic: "Basic Security",
        questionText: "What is ransomware?",
        options: [
            "Malware that encrypts files and demands payment",
            "A type of antivirus",
            "Financial software",
            "Email service"
        ],
        correctOptionIndex: 0,
        difficulty: "medium",
        explanation: "Ransomware encrypts your files so you can't access them, then demands payment (ransom) for the decryption key. Even paying doesn't guarantee recovery.",
        realWorldExample: "Hospitals have been shut down when ransomware encrypted patient records. Attackers demanded Bitcoin payments to unlock critical medical data."
    },
    {
        id: "sec_007",
        topic: "Basic Security",
        questionText: "What should you do if you receive a suspicious email?",
        options: [
            "Click the link to verify",
            "Don't click links, delete it, and report as spam",
            "Reply asking for more details",
            "Forward it to friends"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "Suspicious emails may contain malware or phishing attempts. Never click links or attachments. Delete, mark as spam, and if it claims to be from a company, contact them directly.",
        realWorldExample: "An email claims your Netflix account is suspended. Instead of clicking their link, go directly to Netflix.com and check your account status there."
    },
    {
        id: "sec_008",
        topic: "Basic Security",
        questionText: "What is a secure website indicator?",
        options: [
            "Colorful design",
            "Many advertisements",
            "HTTPS and a padlock icon in the browser",
            "Fast loading speed"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Secure websites use HTTPS (not HTTP) and display a padlock icon. This means data between you and the site is encrypted and harder to intercept.",
        realWorldExample: "Before entering your credit card on a shopping site, check for the padlock and https:// in the address bar. Never enter sensitive data on http:// sites."
    },
    {
        id: "sec_009",
        topic: "Basic Security",
        questionText: "Why should you update software regularly?",
        options: [
            "Updates slow down your computer",
            "Updates are only for new features",
            "Updates are not important",
            "Updates fix security vulnerabilities and bugs"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Software updates often patch security holes that hackers could exploit. Old, unpatched software is a common entry point for malware.",
        realWorldExample: "The WannaCry ransomware attack in 2017 exploited a Windows vulnerability. Computers that had installed the security update months earlier were protected."
    },
    {
        id: "sec_010",
        topic: "Basic Security",
        questionText: "What is a VPN?",
        options: [
            "Virtual Private Network - encrypts internet connection",
            "Virus Protection Network",
            "Very Private Number",
            "Video Playback Node"
        ],
        correctOptionIndex: 0,
        difficulty: "medium",
        explanation: "A VPN creates an encrypted tunnel for your internet traffic, hiding your activity from your ISP and protecting data on public WiFi networks.",
        realWorldExample: "Using public WiFi at airports or coffee shops is risky. A VPN encrypts your data so hackers on the same network can't see your passwords or banking info."
    },
    {
        id: "sec_011",
        topic: "Basic Security",
        questionText: "What is spyware?",
        options: [
            "A type of camera",
            "Software that secretly collects information about users",
            "A security tool",
            "An email client"
        ],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "Spyware is malicious software that secretly monitors and collects personal information like browsing habits, keystrokes, passwords, and financial data.",
        realWorldExample: "A keylogger is spyware that records everything you type—including passwords and credit card numbers—and sends it to hackers."
    },
    {
        id: "sec_012",
        topic: "Basic Security",
        questionText: "What is the purpose of a backup?",
        options: [
            "Speed up your computer",
            "Block viruses",
            "Protect data by keeping copies in separate locations",
            "Improve internet connection"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Backups are copies of your important data stored separately. If your computer fails, is stolen, or gets ransomware, you can restore from the backup.",
        realWorldExample: "If your laptop is stolen, a cloud backup means you haven't lost your thesis, family photos, or important documents. You can restore them to a new device."
    },

    // ============================================
    // PRODUCTIVITY SOFTWARE (10 questions)
    // ============================================
    {
        id: "prod_001",
        topic: "Productivity Software",
        questionText: "What is Microsoft Word used for?",
        options: [
            "Creating spreadsheets",
            "Making presentations",
            "Editing photos",
            "Creating and editing text documents"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Microsoft Word is a word processor for creating, editing, and formatting text documents like letters, reports, resumes, and essays.",
        realWorldExample: "Students write essays in Word, businesses create reports, and job seekers format their resumes. Word's features include spell-check, formatting, and templates."
    },
    {
        id: "prod_002",
        topic: "Productivity Software",
        questionText: "What is Microsoft Excel primarily used for?",
        options: [
            "Creating spreadsheets and analyzing data",
            "Writing documents",
            "Making slides",
            "Editing videos"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Excel is a spreadsheet application for organizing data in rows and columns, performing calculations, creating charts, and analyzing information.",
        realWorldExample: "Businesses track expenses, create budgets, and analyze sales data in Excel. Students use it for data analysis projects and tracking grades."
    },
    {
        id: "prod_003",
        topic: "Productivity Software",
        questionText: "What is PowerPoint used for?",
        options: [
            "Writing essays",
            "Creating visual presentations with slides",
            "Calculating numbers",
            "Browsing the web"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "PowerPoint is presentation software for creating slideshows with text, images, charts, and animations to present information visually.",
        realWorldExample: "Teachers create lecture slides, salespeople present products, and students deliver project presentations using PowerPoint."
    },
    {
        id: "prod_004",
        topic: "Productivity Software",
        questionText: "In Excel, what is a cell?",
        options: [
            "A type of formula",
            "A chart element",
            "The intersection of a row and column where data is entered",
            "A printed page"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "A cell is the basic unit of a spreadsheet where a row and column intersect. Each cell can contain text, numbers, or formulas and has a unique address like A1 or B5.",
        realWorldExample: "Cell A1 is the first cell (column A, row 1). You might enter your name there, put your age in B1, and a formula in C1 to calculate something."
    },
    {
        id: "prod_005",
        topic: "Productivity Software",
        questionText: "What does Ctrl+C do in most applications?",
        options: [
            "Cut selected content",
            "Paste content",
            "Close the application",
            "Copy selected content"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Ctrl+C is the universal keyboard shortcut for copying selected text, files, or objects to the clipboard without removing the original.",
        realWorldExample: "Select text in a document, press Ctrl+C, move to another location, and press Ctrl+V to paste a copy. The original remains where it was."
    },
    {
        id: "prod_006",
        topic: "Productivity Software",
        questionText: "What does Ctrl+V do?",
        options: [
            "Paste content from clipboard",
            "Copy content",
            "Save the document",
            "Select all text"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Ctrl+V pastes content that was previously copied or cut, inserting it at the current cursor position.",
        realWorldExample: "After copying a paragraph with Ctrl+C, click where you want to insert it and press Ctrl+V. The text appears at your cursor location."
    },
    {
        id: "prod_007",
        topic: "Productivity Software",
        questionText: "What is Google Docs?",
        options: [
            "A search engine",
            "A free online word processor by Google",
            "An email service",
            "A video platform"
        ],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "Google Docs is a free, cloud-based word processor. Documents are saved automatically online and can be accessed from any device and shared easily.",
        realWorldExample: "Multiple students can work on the same document simultaneously from different locations, seeing each other's edits in real-time."
    },
    {
        id: "prod_008",
        topic: "Productivity Software",
        questionText: "What is the purpose of spell check?",
        options: [
            "Format text fonts",
            "Insert images",
            "Identify and correct spelling errors",
            "Print documents"
        ],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Spell check automatically identifies potential spelling mistakes and suggests corrections, helping produce error-free documents.",
        realWorldExample: "Type 'recieve' and spell check underlines it in red, suggesting 'receive'. It catches typos you might miss when proofreading."
    },
    {
        id: "prod_009",
        topic: "Productivity Software",
        questionText: "What does Ctrl+Z do?",
        options: [
            "Redo the last action",
            "Zoom in",
            "Close without saving",
            "Undo the last action"
        ],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Ctrl+Z is the universal undo command that reverses your last action. It's one of the most useful shortcuts for correcting mistakes.",
        realWorldExample: "Accidentally deleted a paragraph? Press Ctrl+Z immediately to bring it back. You can often undo multiple steps by pressing it repeatedly."
    },
    {
        id: "prod_010",
        topic: "Productivity Software",
        questionText: "What is PDF?",
        options: [
            "Portable Document Format - preserves document formatting",
            "Personal Data File",
            "Printed Document File",
            "Program Data Format"
        ],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "PDF (Portable Document Format) preserves the exact appearance of documents across different devices and platforms. What you see is what others will see.",
        realWorldExample: "Resumes, contracts, and official forms are often shared as PDFs because they look the same whether opened on Windows, Mac, or phone."
    }
];
