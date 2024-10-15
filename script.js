// script.js

// Define the terms and definitions as an array of objects
const terms = [
    // Module 1
    { term: "Digitalisaatio (Digitalization)", definition: "Using digital technology to improve business and processes." },
    { term: "Digitointi (Digitization)", definition: "Turning information (like text or images) into a digital format." },
    { term: "IoT (Internet of Things)", definition: "Devices connected to the internet to share data (e.g., smart devices)." },
    { term: "IP (Internet Protocol)", definition: "The unique identifying number assigned to every device connected to the internet." },
    { term: "ICT", definition: "A diverse set of technological tools and resources used to transmit, store, create, share or exchange information." },
    { term: "Lohkoketjuteknologia (Blockchain)", definition: "A secure and transparent way to record transactions." },
    { term: "Kvanttilaskenta (Quantum Computing)", definition: "A new kind of computing that solves very complex problems." },
    { term: "Digitaalinen kuilu (Digital Divide)", definition: "The gap between those who have access to technology and those who don’t." },
    { term: "Alustatalous (Platform Economy)", definition: "Business models built on digital platforms." },
    { term: "API (Application Programming Interface)", definition: "A tool that allows different software to communicate and work together." },
    { term: "API-talous (API Economy)", definition: "Using shared data and tools to improve business through APIs." },
    { term: "Tekoäly (AI)", definition: "Smart systems that can do tasks like humans (e.g., decision-making)." },
    { term: "Koneoppiminen (Machine Learning)", definition: "Computers learning from data without being programmed." },
    { term: "Syväoppiminen (Deep Learning)", definition: "Advanced machine learning using layered neural networks." },
    { term: "LLM (Large Language Model)", definition: "A tool that uses lots of text data to create content or answer questions." },
    { term: "Kuvantunnistus (Image Recognition)", definition: "Technology that can identify objects or people in images." },

    // Module 2
    { term: "Ohjelmistotuotanto (Software Production)", definition: "The process of creating and managing software." },
    { term: "Vaatimusmäärittely (Requirements Analysis)", definition: "Figuring out what the customer needs." },
    { term: "Järjestelmäsuunnittelu (System Design)", definition: "Planning how the hardware and software will work together." },
    { term: "Ohjelmistosuunnittelu (Software Design)", definition: "Planning how the software will work and its parts." },
    { term: "Toteutus (Implementation)", definition: "Writing the actual code." },
    { term: "Testaus (Testing)", definition: "Finding and fixing software bugs." },
    { term: "Julkaisu (Release)", definition: "Packaging the software for users." },
    { term: "Ylläpito (Maintenance)", definition: "Updating and fixing the software after it's released." },
    { term: "Versionhallinta (Version Control)", definition: "Keeping track of changes in the software." },
    { term: "Ketterät menetelmät (Agile)", definition: "A flexible way to develop software with regular updates." },
    { term: "DevOps", definition: "Combining development and operations to make releases faster and better." },
    { term: "CI/CD (Continuous Integration/Continuous Delivery)", definition: "Automating testing and releases." },
    { term: "Ohjelmointikielet (Programming Languages)", definition: "Languages like C++, Java, and JavaScript used to write code." },
    { term: "Testauksen tasot (Testing Levels)", definition: "Testing software in different steps (small parts, combined parts, whole system)." },
    { term: "Integroidut kehitysympäristöt (IDEs)", definition: "Tools like Visual Studio Code to help write, test, and manage code." },
    { term: "Prototyyppimalli (Prototype Model)", definition: "Making a quick model to understand the software's needs." },
    { term: "Vesiputousmalli (Waterfall Model)", definition: "A step-by-step approach to software development." },
    { term: "Ohjelmiston elinkaari (Software Lifecycle)", definition: "The stages software goes through, from planning to release and updates." },

    // Module 3
    { term: "Tietoliikenne (Telecommunication)", definition: "Moving information between people or devices." },
    { term: "Langallinen tietoliikenne (Wired Communication)", definition: "Sending data through cables like Ethernet or phone lines." },
    { term: "Langaton tietoliikenne (Wireless Communication)", definition: "Sending data without wires, like WiFi or Bluetooth." },
    { term: "ASCII", definition: "A way to turn text into numbers so computers can understand it." },
    { term: "Bit vs. Byte (Tavu)", definition: "A bit is a single 1 or 0, and a byte is 8 bits." },
    { term: "Kierretty pari (Twisted Pair)", definition: "A type of cable with two wires twisted together for phone or internet." },
    { term: "Valokuitu (Fiber Optics)", definition: "Fast internet cable that uses light to send data." },
    { term: "GSM", definition: "A system that makes mobile phones work." },
    { term: "WiFi/WLAN", definition: "Wireless internet connection for devices like phones and laptops." },
    { term: "Bluetooth", definition: "A short-distance wireless connection, like for headphones." },
    { term: "NFC", definition: "Wireless technology for very close connections, like tapping your card for payment." },
    { term: "Internet", definition: "The worldwide network that connects computers and devices." },
    { term: "Big Data", definition: "Huge amounts of data collected and analyzed for useful information." },

    // Module 4
    { term: "Tietoturva (Information Security)", definition: "Protecting data and systems from threats like hacking or viruses." },
    { term: "Autentikointi (Authentication)", definition: "Checking if a user is who they say they are (e.g., with a password)." },
    { term: "Luottamuksellisuus (Confidentiality)", definition: "Keeping information secret and safe from unauthorized people." },
    { term: "Tiedon eheys (Integrity)", definition: "Making sure information isn’t changed or tampered with." },
    { term: "Kryptaus (Encryption)", definition: "Scrambling data so only authorized people can read it." },
    { term: "CIA-kolmio (CIA Triad)", definition: "A model for security focusing on Confidentiality, Integrity, and Availability." },
    { term: "Tietoturvapolitiikka (Security Policy)", definition: "Rules a company uses to protect its information." },
    { term: "Riskianalyysi (Risk Analysis)", definition: "Identifying what to protect and what threats exist." },
    { term: "Tietoturvasuunnitelma (Security Plan)", definition: "A company’s plan for keeping its data safe." },
    { term: "Tarkistussumma (Checksum)", definition: "A way to check if data has been altered." },
    { term: "Digitaalinen allekirjoitus (Digital Signature)", definition: "A way to verify if a document or message is genuine." },
    { term: "Kyberturvallisuus (Cybersecurity)", definition: "Protecting online systems from attacks." },
    { term: "Julkisen avaimen salaus (Public Key Encryption)", definition: "Using different keys to lock and unlock data securely." },
    { term: "Palvelunestohyökkäys (Denial-of-Service Attack)", definition: "A cyberattack that floods a system with too much traffic to make it stop working." },
    { term: "Stuxnet", definition: "A famous cyberattack that damaged Iran’s nuclear facility." },
    { term: "Digitaalinen jalanjälki (Digital Footprint)", definition: "The trail of data we leave behind online." },
    { term: "Tor-verkko (Tor Network)", definition: "A tool for browsing the internet anonymously." },
    { term: "Social engineering", definition: "Tricking people into giving up private information." },
    { term: "Inhimilliset virheet (Human Errors)", definition: "Mistakes people make that can weaken security, like using weak passwords." },

    // Module 5
    { term: "Tietokone (Computer)", definition: "An electronic device made of hardware (physical parts) and software (programs) that work together to process data." },
    { term: "Laitteisto (Hardware)", definition: "The physical components of a computer, like the motherboard, CPU, RAM, and storage." },
    { term: "Ohjelmisto (Software)", definition: "Programs that run on the computer, such as operating systems and applications." },
    { term: "Käyttöjärjestelmä (Operating System)", definition: "The software that controls the hardware and allows applications to run, like Windows, macOS, or Linux." },
    { term: "Emolevy (Motherboard)", definition: "The main board in the computer where all components connect." },
    { term: "CPU (Central Processing Unit)", definition: "The brain of the computer that performs calculations and executes instructions." },
    { term: "Näytönohjain (Graphics Card)", definition: "Handles processing and displaying images and graphics on the screen." },
    { term: "Kiintolevy (HDD) / SSD", definition: "Long-term storage devices where software and user data are saved; SSDs are faster than traditional hard drives (HDDs)." },
    { term: "Keskusmuisti (RAM)", definition: "Temporary memory used to store running programs and data while the computer is on." },
    { term: "Reikäkortit (Punch Cards)", definition: "An old method for inputting data into early computers." },
    { term: "Kellotaajuus (Clock Speed)", definition: "The speed at which a CPU processes instructions, measured in GHz (gigahertz)." },
    { term: "Virtuaalimuisti (Virtual Memory)", definition: "A system that uses part of the hard drive as extra RAM when needed." },
    { term: "Tiedostojärjestelmä (File System)", definition: "The system that organizes and manages files on storage devices like hard drives or SSDs." },
    { term: "Linux", definition: "A free, open-source operating system widely used in servers, desktops, and embedded systems." },
    { term: "MacOS", definition: "The operating system for Apple’s Mac computers, known for its user-friendly interface." },
    { term: "Windows", definition: "The most common operating system for personal computers, developed by Microsoft." },
    { term: "Virtualisointi (Virtualization)", definition: "Running multiple virtual machines on a single physical computer to use resources more efficiently." },
    { term: "Kontit (Containers)", definition: "Lightweight virtual environments that allow applications to run independently from the operating system." },
    { term: "Android", definition: "An operating system used for mobile devices like smartphones and tablets, based on Linux." },
    { term: "BIOS (Basic Input/Output System)", definition: "The system that checks if the computer hardware works when you turn it on and loads the operating system." },
    { term: "Ajurit (Drivers)", definition: "Small programs that help the operating system communicate with hardware, like printers or graphics cards." },
    { term: "Moniajo (Multitasking)", definition: "The ability of an operating system to run multiple programs at the same time." }
];

let currentQuestionIndex = 0;
let score = 0;

// Get references to DOM elements
const definitionElement = document.getElementById("definition");
const termSelectElement = document.getElementById("term-select");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");

// Initialize the quiz
function initQuiz() {
    scoreElement.innerText = `Score: ${score}`;
    loadQuestion();
    populateSelect();
}

// Load a new question (random definition)
function loadQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * terms.length);
    definitionElement.innerText = `Definition: ${terms[currentQuestionIndex].definition}`;
    feedbackElement.innerText = "";
}

// Populate the select dropdown with terms
function populateSelect() {
    termSelectElement.innerHTML = `<option value="">-- Select the correct term --</option>`;
    terms.forEach((term, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = term.term;
        termSelectElement.appendChild(option);
    });
}

// Check the user's answer
function checkAnswer() {
    const selectedValue = termSelectElement.value;
    if (selectedValue === "") {
        feedbackElement.innerText = "Please select a term!";
        return;
    }

    const selectedTerm = terms[selectedValue];
    const correctTerm = terms[currentQuestionIndex].term;

    if (selectedTerm.term === correctTerm) {
        feedbackElement.innerText = "Correct!";
        score++;
    } else {
        feedbackElement.innerText = `Wrong! The correct answer is: ${correctTerm}`;
    }

    scoreElement.innerText = `Score: ${score}`;
    submitButton.style.display = "none";
    nextButton.style.display = "inline-block";
}

// Go to the next question
function nextQuestion() {
    submitButton.style.display = "inline-block";
    nextButton.style.display = "none";
    loadQuestion();
}

// Event listeners
submitButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", nextQuestion);

// Start the quiz
initQuiz();
