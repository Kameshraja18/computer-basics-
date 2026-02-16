// ============================================
// Extended Question Database - Additional 100+ Questions
// ============================================

const QUESTIONS_EXTENDED = [
    // INTRODUCTION & FUNDAMENTALS - Additional
    {
        id: "intro_013",
        topic: "Introduction & Fundamentals",
        questionText: "What is the smallest unit of data in a computer?",
        options: ["Bit", "Byte", "Kilobyte", "Nibble"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "A bit (binary digit) is the smallest unit of data, representing either 0 or 1.",
        realWorldExample: "Every image, video, or text on your computer is made up of billions of bits - tiny on/off signals."
    },
    {
        id: "intro_014",
        topic: "Introduction & Fundamentals",
        questionText: "Which generation of computers used transistors?",
        options: ["First generation", "Second generation", "Third generation", "Fourth generation"],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "Second generation computers (1956-1963) used transistors, which were smaller and more reliable than vacuum tubes.",
        realWorldExample: "The IBM 7094 was a famous second-generation computer used by NASA for space missions."
    },
    {
        id: "intro_015",
        topic: "Introduction & Fundamentals",
        questionText: "What is information?",
        options: ["Raw facts only", "Computer hardware", "Processed and organized data", "Software programs"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Information is data that has been processed, organized, and given context to make it meaningful.",
        realWorldExample: "Sales numbers are data; a chart showing monthly sales trends is information."
    },
    {
        id: "intro_016",
        topic: "Introduction & Fundamentals",
        questionText: "What does GIGO stand for in computing?",
        options: ["Graphics In, Graphics Out", "General Input, General Output", "Good In, Good Out", "Garbage In, Garbage Out"],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "GIGO means that if you input incorrect data, the output will also be incorrect.",
        realWorldExample: "If you enter wrong formulas in a spreadsheet, your calculations will be wrong no matter how powerful the computer."
    },
    {
        id: "intro_017",
        topic: "Introduction & Fundamentals",
        questionText: "What is a nibble?",
        options: ["4 bits", "8 bits", "16 bits", "2 bits"],
        correctOptionIndex: 0,
        difficulty: "medium",
        explanation: "A nibble is 4 bits, which is half of a byte.",
        realWorldExample: "A nibble can represent a single hexadecimal digit (0-F), often used in color codes like #FF0000."
    },
    {
        id: "intro_018",
        topic: "Introduction & Fundamentals",
        questionText: "Which number system uses digits 0-9 and letters A-F?",
        options: ["Binary", "Hexadecimal", "Octal", "Decimal"],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "Hexadecimal (base-16) uses 0-9 and A-F to represent values, commonly used in programming.",
        realWorldExample: "Web colors use hexadecimal: #FFFFFF is white, #000000 is black, #FF0000 is red."
    },
    {
        id: "intro_019",
        topic: "Introduction & Fundamentals",
        questionText: "What is the octal number system based on?",
        options: ["10 digits", "16 digits", "8 digits (0-7)", "2 digits"],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "The octal system uses base-8 with digits 0-7, historically used in computing.",
        realWorldExample: "Unix file permissions often use octal notation, like chmod 755."
    },
    {
        id: "intro_020",
        topic: "Introduction & Fundamentals",
        questionText: "Who invented the first mechanical calculator?",
        options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Blaise Pascal"],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "Blaise Pascal invented the Pascaline in 1642, one of the first mechanical calculators.",
        realWorldExample: "The Pascal programming language was named after Blaise Pascal in his honor."
    },

    // HARDWARE - Additional
    {
        id: "hw_016",
        topic: "Hardware",
        questionText: "What is a heatsink used for?",
        options: ["Absorbing and dissipating heat from components", "Generating electricity", "Storing data", "Connecting peripherals"],
        correctOptionIndex: 0,
        difficulty: "medium",
        explanation: "A heatsink is a passive cooling component that absorbs heat from hot components like CPUs.",
        realWorldExample: "The metal fins on top of your CPU absorb heat and transfer it to the air or to a fan."
    },
    {
        id: "hw_017",
        topic: "Hardware",
        questionText: "What does BIOS stand for?",
        options: ["Binary Input/Output System", "Basic Input/Output System", "Basic Internal Operating System", "Built-in Operating System"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "BIOS is firmware that initializes hardware during boot and provides runtime services.",
        realWorldExample: "When you see your computer's logo before Windows loads, that's the BIOS starting up."
    },
    {
        id: "hw_018",
        topic: "Hardware",
        questionText: "What is an optical drive used for?",
        options: ["Connecting to the internet", "Processing graphics", "Reading and writing CDs, DVDs, and Blu-rays", "Cooling the computer"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "An optical drive uses lasers to read and write data on optical discs.",
        realWorldExample: "When you insert a DVD movie or music CD, the optical drive reads the disc with a laser."
    },
    {
        id: "hw_019",
        topic: "Hardware",
        questionText: "What is the function of a sound card?",
        options: ["Display graphics", "Store music files", "Connect to networks", "Process and output audio signals"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "A sound card converts digital audio data into analog signals for speakers/headphones.",
        realWorldExample: "When you listen to music or join a video call, the sound card processes the audio."
    },
    {
        id: "hw_020",
        topic: "Hardware",
        questionText: "What is an Ethernet port used for?",
        options: ["Wired network connection", "Audio output", "Video display", "Power supply"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "An Ethernet port connects your computer to a wired network using an RJ-45 cable.",
        realWorldExample: "For faster, more stable internet, you can plug an Ethernet cable from your router to your PC."
    },
    {
        id: "hw_021",
        topic: "Hardware",
        questionText: "What is a barcode reader?",
        options: ["Output device for printing", "Input device that scans barcodes", "Storage device", "Processing unit"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "A barcode reader scans barcodes and converts them into digital data.",
        realWorldExample: "At supermarket checkout, the cashier scans product barcodes to add items to your bill."
    },
    {
        id: "hw_022",
        topic: "Hardware",
        questionText: "What is a plotter?",
        options: ["Input device for scanning", "Storage device", "Output device for large drawings and designs", "Network device"],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "A plotter is a printer that produces vector graphics, ideal for blueprints and CAD drawings.",
        realWorldExample: "Architects use plotters to print large building blueprints and construction plans."
    },
    {
        id: "hw_023",
        topic: "Hardware",
        questionText: "What is VRAM?",
        options: ["Virtual RAM", "Variable RAM", "Volatile RAM only", "Video RAM for graphics processing"],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "VRAM (Video RAM) is dedicated memory on graphics cards for storing image data.",
        realWorldExample: "Gaming at 4K resolution requires more VRAM to store all the detailed textures."
    },
    {
        id: "hw_024",
        topic: "Hardware",
        questionText: "What is a docking station?",
        options: ["Device that connects laptop to multiple peripherals", "Charging station only", "Network switch", "Storage device"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "A docking station lets you connect a laptop to monitors, keyboard, mouse, and other devices.",
        realWorldExample: "At your office desk, you place your laptop on a dock to instantly connect to a big monitor and full keyboard."
    },
    {
        id: "hw_025",
        topic: "Hardware",
        questionText: "What type of port is used to connect a monitor in modern computers?",
        options: ["USB only", "DisplayPort or HDMI", "Ethernet", "Audio jack"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "DisplayPort and HDMI are the standard video output ports for connecting monitors.",
        realWorldExample: "Your laptop probably has an HDMI port to connect to TVs or external monitors."
    },

    // SOFTWARE - Additional
    {
        id: "sw_013",
        topic: "Software",
        questionText: "What is freeware?",
        options: ["Open-source software only", "Trial software", "Software available for free with no payment required", "Shareware"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Freeware is software distributed free of charge, though source code may not be available.",
        realWorldExample: "Adobe Acrobat Reader and VLC Media Player are freeware - completely free to use."
    },
    {
        id: "sw_014",
        topic: "Software",
        questionText: "What is shareware?",
        options: ["Completely free software", "Open-source software", "Pirated software", "Trial software with limited features or time"],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "Shareware is software you can try for free, but requires payment for full features or continued use.",
        realWorldExample: "WinRAR is shareware - it works after the trial but keeps asking you to purchase a license."
    },
    {
        id: "sw_015",
        topic: "Software",
        questionText: "What is a beta version of software?",
        options: ["Pre-release version for testing", "Final released version", "Old outdated version", "Pirated version"],
        correctOptionIndex: 0,
        difficulty: "medium",
        explanation: "Beta software is a pre-release version made available for testing before the final release.",
        realWorldExample: "You can join beta programs for Android or iOS to test new features before they're released to everyone."
    },
    {
        id: "sw_016",
        topic: "Software",
        questionText: "What is utility software?",
        options: ["Games and entertainment", "Programs that maintain and optimize computer performance", "Word processors", "Web browsers"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "Utility software helps maintain, configure, and optimize your computer system.",
        realWorldExample: "Disk cleanup, antivirus, file compression tools, and backup software are utilities."
    },
    {
        id: "sw_017",
        topic: "Software",
        questionText: "What is an IDE?",
        options: ["Internet Data Exchange", "Internal Drive Enclosure", "Integrated Development Environment for programming", "Image Display Editor"],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "An IDE is a software application providing tools for software development in one package.",
        realWorldExample: "Visual Studio Code, PyCharm, and Eclipse are IDEs that programmers use to write code."
    },
    {
        id: "sw_018",
        topic: "Software",
        questionText: "What is middleware?",
        options: ["Hardware component", "Antivirus software", "Web browser", "Software connecting applications and operating systems"],
        correctOptionIndex: 3,
        difficulty: "hard",
        explanation: "Middleware acts as a bridge between applications, allowing them to communicate.",
        realWorldExample: "When your phone app connects to a bank's server, middleware handles the communication."
    },

    // OPERATING SYSTEMS - Additional
    {
        id: "os_013",
        topic: "Operating Systems & GUI",
        questionText: "What is a command-line interface (CLI)?",
        options: ["Text-based interface using typed commands", "Graphical interface with icons", "Touch screen interface", "Voice-controlled interface"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "CLI is a text-based interface where users type commands to interact with the computer.",
        realWorldExample: "Windows Command Prompt and PowerShell are CLIs where you type commands like 'dir' to list files."
    },
    {
        id: "os_014",
        topic: "Operating Systems & GUI",
        questionText: "What is the Start Menu in Windows?",
        options: ["A game launcher", "Central hub for accessing programs and settings", "File manager only", "Internet browser"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "The Start Menu provides quick access to programs, settings, files, and power options.",
        realWorldExample: "Click the Windows icon in the bottom-left corner to open the Start Menu and launch apps."
    },
    {
        id: "os_015",
        topic: "Operating Systems & GUI",
        questionText: "What is Safe Mode?",
        options: ["High performance mode", "Gaming mode", "Diagnostic startup mode with minimal drivers", "Sleep mode"],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "Safe Mode starts Windows with only essential drivers, useful for troubleshooting problems.",
        realWorldExample: "If Windows won't start normally, boot into Safe Mode to fix driver issues or remove malware."
    },
    {
        id: "os_016",
        topic: "Operating Systems & GUI",
        questionText: "What is a file manager?",
        options: ["An antivirus program", "A text editor", "A web browser", "Application for browsing and organizing files"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "A file manager lets you browse, copy, move, delete, and organize files and folders.",
        realWorldExample: "Windows Explorer (File Explorer) and macOS Finder are file managers."
    },
    {
        id: "os_017",
        topic: "Operating Systems & GUI",
        questionText: "What keyboard shortcut copies selected content?",
        options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Ctrl + C copies selected content to the clipboard without removing it.",
        realWorldExample: "Select text, press Ctrl+C to copy, then Ctrl+V to paste it elsewhere."
    },
    {
        id: "os_018",
        topic: "Operating Systems & GUI",
        questionText: "What keyboard shortcut pastes content?",
        options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + P"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "Ctrl + V pastes content from the clipboard at the cursor location.",
        realWorldExample: "After copying with Ctrl+C, click where you want to paste and press Ctrl+V."
    },
    {
        id: "os_019",
        topic: "Operating Systems & GUI",
        questionText: "What is Windows Update?",
        options: ["A cleaning tool", "A game", "Feature that installs security patches and improvements", "An antivirus"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Windows Update downloads and installs updates for security, features, and bug fixes.",
        realWorldExample: "Monthly 'Patch Tuesday' updates fix security vulnerabilities and improve Windows."
    },
    {
        id: "os_020",
        topic: "Operating Systems & GUI",
        questionText: "What is a shortcut icon?",
        options: ["The actual program file", "A virus", "A folder", "Link to a file or program for quick access"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "A shortcut is a small file that points to another file, folder, or program.",
        realWorldExample: "Desktop icons with small arrows are shortcuts - deleting them doesn't delete the actual program."
    },

    // DATA, FILES & FOLDERS - Additional
    {
        id: "data_011",
        topic: "Data, Files & Folders",
        questionText: "What file extension indicates an image file?",
        options: [".jpg or .png", ".exe", ".txt", ".mp3"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "JPG (JPEG) and PNG are common image file formats.",
        realWorldExample: "Photos from your phone are usually saved as .jpg files."
    },
    {
        id: "data_012",
        topic: "Data, Files & Folders",
        questionText: "What is the root directory?",
        options: ["A deleted folder", "The top-level folder in the file system", "A temporary folder", "A hidden folder"],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "The root directory is the starting point of the file system hierarchy.",
        realWorldExample: "In Windows, C:\\ is the root of the C drive. All other folders branch from here."
    },
    {
        id: "data_013",
        topic: "Data, Files & Folders",
        questionText: "What does 'rename' mean in file management?",
        options: ["Delete the file", "Copy the file", "Change the name of a file or folder", "Move the file"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Renaming changes the file's name while keeping its contents and location the same.",
        realWorldExample: "Right-click a file, select 'Rename', and type a new name like 'Report_Final.docx'."
    },
    {
        id: "data_014",
        topic: "Data, Files & Folders",
        questionText: "What is a hidden file?",
        options: ["Deleted file", "Encrypted file", "Compressed file", "File not shown in normal folder view"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Hidden files are not displayed by default to prevent accidental modification.",
        realWorldExample: "System files in Windows are often hidden to protect them from being accidentally deleted."
    },
    {
        id: "data_015",
        topic: "Data, Files & Folders",
        questionText: "What is ZIP used for?",
        options: ["Compressing files into smaller archives", "Playing videos", "Editing images", "Browsing internet"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "ZIP is a compression format that reduces file size and bundles multiple files together.",
        realWorldExample: "When you download multiple photos, they often come in a .zip file to reduce download size."
    },

    // MEMORY & STORAGE - Additional
    {
        id: "mem_013",
        topic: "Memory & Storage",
        questionText: "What is DDR in RAM?",
        options: ["Dual Drive Reader", "Double Data Rate memory", "Digital Data Registry", "Direct Data Recovery"],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "DDR (Double Data Rate) RAM transfers data twice per clock cycle, doubling speed.",
        realWorldExample: "Modern computers use DDR4 or DDR5 RAM, which is much faster than older DDR3."
    },
    {
        id: "mem_014",
        topic: "Memory & Storage",
        questionText: "What is SATA?",
        options: ["A type of RAM", "An operating system", "Interface for connecting storage drives", "A graphics card"],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "SATA (Serial ATA) is the standard interface for connecting hard drives and SSDs.",
        realWorldExample: "Your computer's hard drive or SSD is likely connected via a SATA cable to the motherboard."
    },
    {
        id: "mem_015",
        topic: "Memory & Storage",
        questionText: "What is NVMe?",
        options: ["Network storage", "Virtual memory", "RAM type", "Fast SSD interface directly on PCIe bus"],
        correctOptionIndex: 3,
        difficulty: "hard",
        explanation: "NVMe (Non-Volatile Memory Express) SSDs are much faster than SATA SSDs.",
        realWorldExample: "Gaming laptops often use NVMe SSDs because games load in seconds instead of minutes."
    },
    {
        id: "mem_016",
        topic: "Memory & Storage",
        questionText: "What is a Terabyte (TB)?",
        options: ["1,024 Gigabytes", "1,024 Megabytes", "1,024 Kilobytes", "1,024 Bytes"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "A Terabyte equals 1,024 Gigabytes and can store large amounts of data.",
        realWorldExample: "A 1TB hard drive can store about 250,000 photos or 500 hours of video."
    },
    {
        id: "mem_017",
        topic: "Memory & Storage",
        questionText: "What is EEPROM?",
        options: ["Extended External Processing ROM", "Electrically Erasable Programmable Read-Only Memory", "Electronic Enhanced Processing ROM", "External Expandable Program ROM"],
        correctOptionIndex: 1,
        difficulty: "hard",
        explanation: "EEPROM can be electrically erased and reprogrammed, unlike standard ROM.",
        realWorldExample: "Your computer's BIOS settings are stored in EEPROM so they persist even when turned off."
    },

    // INTERNET & WEB - Additional
    {
        id: "web_013",
        topic: "Internet & Web Basics",
        questionText: "What is HTTPS?",
        options: ["High-Speed Transfer Protocol", "Hyper Text Processing System", "Secure version of HTTP with encryption", "Home Transfer Protocol Secure"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "HTTPS encrypts data between your browser and websites for security.",
        realWorldExample: "Bank websites use HTTPS so hackers can't steal your password when you log in."
    },
    {
        id: "web_014",
        topic: "Internet & Web Basics",
        questionText: "What is a domain name?",
        options: ["IP address only", "Computer hardware", "Email software", "Human-readable website address like google.com"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "A domain name is the easy-to-remember name for a website instead of its IP address.",
        realWorldExample: "It's easier to remember 'google.com' than the IP address 142.250.190.46."
    },
    {
        id: "web_015",
        topic: "Internet & Web Basics",
        questionText: "What is DNS?",
        options: ["Domain Name System - converts names to IP addresses", "Digital Network Server", "Data Network System", "Domain Number Service"],
        correctOptionIndex: 0,
        difficulty: "medium",
        explanation: "DNS translates human-readable domain names to numerical IP addresses.",
        realWorldExample: "When you type 'youtube.com', DNS looks up the IP address to connect you to the server."
    },
    {
        id: "web_016",
        topic: "Internet & Web Basics",
        questionText: "What is an ISP?",
        options: ["Internet Software Program", "Internet Service Provider", "Internal System Protocol", "Internet Security Protection"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "An ISP is a company that provides internet access to customers.",
        realWorldExample: "Companies like Jio, Airtel, AT&T, and Comcast are ISPs that connect homes to the internet."
    },
    {
        id: "web_017",
        topic: "Internet & Web Basics",
        questionText: "What is a browser bookmark?",
        options: ["Downloaded file", "Browser history", "Saved link to a website for quick access", "Cookie"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Bookmarks save website URLs so you can quickly return to them later.",
        realWorldExample: "Bookmark your favorite news site so you can click it instead of typing the URL every day."
    },
    {
        id: "web_018",
        topic: "Internet & Web Basics",
        questionText: "What is streaming?",
        options: ["Downloading files completely first", "Uploading files", "Deleting content", "Playing media content while it downloads"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Streaming plays audio or video as it downloads, without waiting for the full download.",
        realWorldExample: "Netflix and YouTube stream videos - you can start watching immediately without downloading."
    },

    // NETWORKING - Additional
    {
        id: "net_011",
        topic: "Networking Basics",
        questionText: "What is a network switch?",
        options: ["Device that connects devices within a network", "Internet modem", "Wireless router only", "Firewall device"],
        correctOptionIndex: 0,
        difficulty: "medium",
        explanation: "A switch connects multiple devices in a network and forwards data to the correct destination.",
        realWorldExample: "In an office, a switch connects all the computers so they can share files and printers."
    },
    {
        id: "net_012",
        topic: "Networking Basics",
        questionText: "What is a MAC address?",
        options: ["Software address", "Unique hardware identifier for network devices", "Website URL", "Email address"],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "A MAC (Media Access Control) address is a unique identifier assigned to every network device.",
        realWorldExample: "Your phone and laptop each have unique MAC addresses that identify them on a WiFi network."
    },
    {
        id: "net_013",
        topic: "Networking Basics",
        questionText: "What is a VPN?",
        options: ["Video Processing Network", "Virtual Public Network", "Virtual Private Network for secure connections", "Variable Private Node"],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "A VPN creates an encrypted tunnel for your internet traffic, protecting privacy.",
        realWorldExample: "Use a VPN on public WiFi to prevent hackers from seeing your browsing activity."
    },
    {
        id: "net_014",
        topic: "Networking Basics",
        questionText: "What is ping used for?",
        options: ["Downloading files", "Sending emails", "Browsing websites", "Testing network connectivity to a host"],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "Ping sends packets to a server and measures response time to test connectivity.",
        realWorldExample: "IT support might ask you to 'ping google.com' to check if your internet is working."
    },
    {
        id: "net_015",
        topic: "Networking Basics",
        questionText: "What is latency?",
        options: ["Delay in data transmission", "Connection speed", "Data amount", "Network security"],
        correctOptionIndex: 0,
        difficulty: "medium",
        explanation: "Latency is the time delay between sending a request and receiving a response.",
        realWorldExample: "High latency in online gaming causes lag, making your character respond slowly to your controls."
    },

    // SECURITY - Additional
    {
        id: "sec_013",
        topic: "Basic Security",
        questionText: "What is ransomware?",
        options: ["Antivirus software", "Malware that encrypts files and demands payment", "Firewall program", "Browser extension"],
        correctOptionIndex: 1,
        difficulty: "medium",
        explanation: "Ransomware locks your files with encryption and demands money to unlock them.",
        realWorldExample: "The WannaCry attack infected thousands of computers, demanding Bitcoin to restore files."
    },
    {
        id: "sec_014",
        topic: "Basic Security",
        questionText: "What is a Trojan horse in computing?",
        options: ["Antivirus program", "Firewall", "Malware disguised as legitimate software", "Operating system"],
        correctOptionIndex: 2,
        difficulty: "medium",
        explanation: "A Trojan pretends to be useful software but contains hidden malicious code.",
        realWorldExample: "A 'free game' download might secretly install a Trojan that steals your passwords."
    },
    {
        id: "sec_015",
        topic: "Basic Security",
        questionText: "What is a worm in computing?",
        options: ["Harmless program", "Hardware component", "Browser plugin", "Self-replicating malware that spreads across networks"],
        correctOptionIndex: 3,
        difficulty: "medium",
        explanation: "A worm spreads automatically across networks without needing user action.",
        realWorldExample: "The ILOVEYOU worm spread via email and infected millions of computers in 2000."
    },
    {
        id: "sec_016",
        topic: "Basic Security",
        questionText: "What is a CAPTCHA?",
        options: ["Test to verify you are human, not a bot", "Type of password", "Encryption method", "Antivirus scan"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "CAPTCHA challenges users to prove they're human to prevent automated bots.",
        realWorldExample: "When signing up for a website, you might need to select all images with traffic lights."
    },
    {
        id: "sec_017",
        topic: "Basic Security",
        questionText: "What is a security question?",
        options: ["Encryption key", "Backup method to verify identity for password recovery", "Firewall setting", "Antivirus feature"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "Security questions help verify your identity if you forget your password.",
        realWorldExample: "'What was the name of your first pet?' helps the website confirm it's really you."
    },
    {
        id: "sec_018",
        topic: "Basic Security",
        questionText: "What is biometric authentication?",
        options: ["Password only", "Security questions", "Using fingerprint, face, or iris for security", "PIN numbers"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Biometric authentication uses unique physical characteristics to verify identity.",
        realWorldExample: "Unlocking your phone with your fingerprint or Face ID is biometric authentication."
    },

    // PRODUCTIVITY - Additional
    {
        id: "prod_011",
        topic: "Productivity Software",
        questionText: "What is Google Docs?",
        options: ["Email service", "Search engine", "Social media", "Cloud-based word processor"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "Google Docs is a free online word processor that saves documents to the cloud.",
        realWorldExample: "Multiple people can edit the same Google Doc simultaneously for group projects."
    },
    {
        id: "prod_012",
        topic: "Productivity Software",
        questionText: "What keyboard shortcut saves a document?",
        options: ["Ctrl + S", "Ctrl + C", "Ctrl + V", "Ctrl + P"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Ctrl + S is the universal shortcut for saving files in most applications.",
        realWorldExample: "Press Ctrl+S frequently while working to avoid losing your work if the computer crashes."
    },
    {
        id: "prod_013",
        topic: "Productivity Software",
        questionText: "What is Ctrl + P used for?",
        options: ["Paste content", "Print the document", "Open preferences", "Create new page"],
        correctOptionIndex: 1,
        difficulty: "easy",
        explanation: "Ctrl + P opens the print dialog in most applications.",
        realWorldExample: "To print an email or document, just press Ctrl+P and select your printer."
    },
    {
        id: "prod_014",
        topic: "Productivity Software",
        questionText: "What is a template in office software?",
        options: ["Blank document only", "Font style", "Pre-designed document format", "Print setting"],
        correctOptionIndex: 2,
        difficulty: "easy",
        explanation: "Templates are pre-formatted documents that save time on design and layout.",
        realWorldExample: "Use a resume template in Word instead of designing your resume from scratch."
    },
    {
        id: "prod_015",
        topic: "Productivity Software",
        questionText: "What is AutoSave?",
        options: ["Manual save button", "Print function", "Delete function", "Feature that automatically saves your work"],
        correctOptionIndex: 3,
        difficulty: "easy",
        explanation: "AutoSave continuously saves your work so you don't lose changes.",
        realWorldExample: "Microsoft 365 saves your document automatically to OneDrive as you type."
    },
    {
        id: "prod_016",
        topic: "Productivity Software",
        questionText: "What is a chart in spreadsheet software?",
        options: ["Visual representation of data", "Text document", "Audio file", "Video file"],
        correctOptionIndex: 0,
        difficulty: "easy",
        explanation: "Charts display data graphically as bars, lines, pies, etc. for easier understanding.",
        realWorldExample: "A pie chart shows what percentage of your monthly budget goes to each expense."
    }
];

// Merge with main questions array
QUESTIONS.push(...QUESTIONS_EXTENDED);
