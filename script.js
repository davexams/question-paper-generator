// ☁️ Google Apps Script Deployed Web App URL
const GOOGLE_DRIVE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbySjz8FdbEwywn3stjX--ThZvAQNOYM1iXvXpcE-tmLth7SoGyMUmIK-20JZhyJOnMq/exec";

// 📋 Authorized Teachers Database (All 75 Teachers Included)
const TEACHER_DATABASE = [
    { id: "1-MOHIT CHUG", name: "MR. MOHIT CHUG", pass: "dav@2026" },
    { id: "2-AASHA KUMARI", name: "MS. AASHA KUMARI", pass: "dav@2026" },
    { id: "3-ALANKAR KAUNDAL", name: "MR. ALANKAR KAUNDAL", pass: "dav@2026" },
    { id: "4-AMAN THAKUR", name: "MR. AMAN THAKUR", pass: "dav@20261" },
    { id: "5-ANIRUDH SHARMA", name: "MR. ANIRUDH SHARMA", pass: "dav@2026" },
    { id: "6-ANJNA", name: "MS. ANJNA", pass: "dav@2026" },
    { id: "7-ANU THAKUR", name: "MS. ANU THAKUR", pass: "dav@2026" },
    { id: "8-ANUPAM THAKUR", name: "MS. ANUPAM THAKUR", pass: "dav@2026" },
    { id: "9-ASHA CHANDEL", name: "MS. ASHA CHANDEL", pass: "dav@2026" },
    { id: "10-BHARTI", name: "MS. BHARTI", pass: "dav@2026" },
    { id: "11-BHARTI RANA", name: "MS. BHARTI RANA", pass: "dav@2026" },
    { id: "12-CHANDRESH SHARMA", name: "MS. CHANDRESH SHARMA", pass: "dav@2026" },
    { id: "13-CHHAVI SHARMA", name: "MS. CHHAVI SHARMA", pass: "dav@2026" },
    { id: "14-DEEPAK AGNIHOTRI", name: "MR. DEEPAK AGNIHOTRI", pass: "dav@2026" },
    { id: "15-DINESH GUPTA", name: "MR. DINESH GUPTA", pass: "dav@2026" },
    { id: "16-DIVYA JYOTI", name: "MS. DIVYA JYOTI", pass: "dav@20261" },
    { id: "17-INDU", name: "MS. INDU", pass: "dav@2026" },
    { id: "18-JAGAT PAL", name: "MR. JAGAT PAL", pass: "dav@2026" },
    { id: "19-JAI KUMAR", name: "MR. JAI KUMAR", pass: "dav@20261" },
    { id: "20-JYOTSNA SHARMA", name: "MS. JYOTSNA SHARMA", pass: "dav@2026" },
    { id: "21-KSHMA", name: "MS. KSHMA", pass: "dav@2026" },
    { id: "22-KUSUM", name: "MS. KUSUM", pass: "dav@2026" },
    { id: "23-LOKENDER PAL", name: "MR. LOKENDER PAL", pass: "dav@20261" },
    { id: "24-MONIKA", name: "MS. MONIKA", pass: "dav@2026" },
    { id: "25-MONITA SHARMA", name: "MS. MONITA SHARMA", pass: "dav@2026" },
    { id: "26-MRIDU SHARMA", name: "MS. MRIDU SHARMA", pass: "dav@2026" },
    { id: "27-MRIDULA SHARMA", name: "MS. MRIDULA SHARMA", pass: "dav@2026" },
    { id: "28-NAMITA DEVI", name: "MS. NAMITA DEVI", pass: "dav@2026" },
    { id: "29-NANCY THAKUR", name: "MS. NANCY THAKUR", pass: "dav@2026" },
    { id: "30-NIDHI VIJ", name: "MS. NIDHI VIJ", pass: "dav@2026" },
    { id: "31-NITISHA KAPOOR", name: "MS. NITISHA KAPOOR", pass: "dav@2026" },
    { id: "32-PANKAJ SHARMA", name: "DR. PANKAJ SHARMA", pass: "dav@2026" },
    { id: "33-POONAM SINGH", name: "MS. POONAM SINGH", pass: "dav@2026" },
    { id: "34-PREETI", name: "MS. PREETI", pass: "dav@2026" },
    { id: "35-PRIYANKA", name: "MS. PRIYANKA", pass: "dav@2026" },
    { id: "36-PROMILA CHANDEL", name: "MS. PROMILA CHANDEL", pass: "dav@20261" },
    { id: "37-PROMILA DEVI", name: "MS. PROMILA DEVI", pass: "dav@2026" },
    { id: "38-RAJ RANI KAUSHAL", name: "MS. RAJ RANI KAUSHAL", pass: "dav@2026" },
    { id: "39-RAJNI DEVI", name: "MS. RAJNI DEVI", pass: "dav@2026" },
    { id: "40-RAMNIKA THAKUR", name: "MS. RAMNIKA THAKUR", pass: "dav@2026" },
    { id: "41-RANITA THAKUR", name: "MS. RANITA THAKUR", pass: "dav@20261" },
    { id: "42-RANJNA KUMARI", name: "MS. RANJNA KUMARI", pass: "dav@2026" },
    { id: "43-SANJAY KUMAR VERMA", name: "MR. SANJAY KUMAR VERMA", pass: "dav@2026" },
    { id: "44-SANTOSH SEN", name: "MS. SANTOSH SEN", pass: "dav@20261" },
    { id: "45-SARIKA GUPTA", name: "MS. SARIKA GUPTA", pass: "dav@2026" },
    { id: "46-ASHOK DHIMAN", name: "MR. ASHOK DHIMAN", pass: "dav@2026" },
    { id: "47-SHAGUN THAKUR", name: "MS. SHAGUN THAKUR", pass: "dav@2026" },
    { id: "48-SHAMMI WALIA", name: "MS. SHAMMI WALIA", pass: "dav@2026" },
    { id: "49-SHASHI SAINI", name: "MS. SHASHI SAINI", pass: "dav@2026" },
    { id: "50-SHIV KUMAR", name: "MR. SHIV KUMAR", pass: "dav@2026" },
    { id: "51-SHIV PARTAP SINGH", name: "MR. SHIV PARTAP SINGH", pass: "dav@2026" },
    { id: "52-SHIVANGI", name: "MS. SHIVANGI", pass: "dav@20261" },
    { id: "53-SUDHANSHU", name: "MR. SUDHANSHU", pass: "dav@2026" },
    { id: "54-SUNAYANI SHARMA", name: "MS. SUNAYANI SHARMA", pass: "dav@2026" },
    { id: "55-SUNITA", name: "MS. SUNITA", pass: "dav@20261" },
    { id: "56-SUNITA DEVI", name: "MS. SUNITA DEVI", pass: "dav@2026" },
    { id: "57-SUPREET", name: "MS. SUPREET", pass: "dav@20261" },
    { id: "58-SURBHI", name: "MS. SURBHI", pass: "dav@2026" },
    { id: "59-URMILA DEVI", name: "MS. URMILA DEVI", pass: "dav@2026" },
    { id: "60-VANDNA SHARMA", name: "MS. VANDNA SHARMA", pass: "dav@2026" },
    { id: "61-VIJAY LAXMI", name: "MS. VIJAY LAXMI", pass: "dav@2026" },
    { id: "62-VIKRAM SINGH", name: "MR. VIKRAM SINGH", pass: "dav@2026" },
    { id: "63-YASHASWINI", name: "MS. YASHASWINI", pass: "dav@2026" },
    { id: "64-SHUBHAM MISHRA", name: "MR. SHUBHAM MISHRA", pass: "dav@20261" },
    { id: "65-TEACHER", name: "TEACHER-65", pass: "dav@20262" },
    { id: "66-TEACHER", name: "TEACHER-66", pass: "dav@20263" },
    { id: "67-TEACHER", name: "TEACHER-67", pass: "dav@20264" },
    { id: "68-TEACHER", name: "TEACHER-68", pass: "dav@20265" },
    { id: "69-TEACHER", name: "TEACHER-69", pass: "dav@20266" },
    { id: "70-TEACHER", name: "TEACHER-70", pass: "dav@20267" },
    { id: "71-TEACHER", name: "TEACHER-71", pass: "dav@20268" },
    { id: "72-TEACHER", name: "TEACHER-72", pass: "dav@20269" },
    { id: "73-TEACHER", name: "TEACHER-73", pass: "dav@20270" },
    { id: "74-TEACHER", name: "TEACHER-74", pass: "dav@20271" },
    { id: "75-TEACHER", name: "TEACHER-75", pass: "dav@20272" }
];

let loggedInTeacher = null;
let questionBank = [];

// 🔒 AUTHENTICATION SYSTEM
function handleLogin(e) {
    e.preventDefault();
    const enteredId = document.getElementById('loginId').value.trim().toUpperCase();
    const enteredPass = document.getElementById('loginPass').value.trim();

    const teacher = TEACHER_DATABASE.find(t => 
        (t.id.toUpperCase() === enteredId || t.name.toUpperCase().includes(enteredId)) && t.pass === enteredPass
    );

    if (teacher) {
        loggedInTeacher = teacher;
        document.getElementById('loginOverlay').classList.add('hidden');
        document.getElementById('mainPlatform').classList.remove('hidden');
        document.getElementById('teacherWelcome').innerText = `Logged in as: ${teacher.name} (${teacher.id})`;
        
        sessionStorage.setItem('teacherSession', JSON.stringify(teacher));
        loadQuestionBank();
    } else {
        alert("❌ Invalid Teacher ID/Username or Password!");
    }
}

function logout() {
    sessionStorage.removeItem('teacherSession');
    location.reload();
}

// Keep login state active on refresh
window.onload = () => {
    const saved = sessionStorage.getItem('teacherSession');
    if (saved) {
        loggedInTeacher = JSON.parse(saved);
        document.getElementById('loginOverlay').classList.add('hidden');
        document.getElementById('mainPlatform').classList.remove('hidden');
        document.getElementById('teacherWelcome').innerText = `Logged in as: ${loggedInTeacher.name}`;
        loadQuestionBank();
    }
};

// 📂 LOAD INITIAL QUESTION BANK
function loadQuestionBank() {
    fetch('questions.json')
        .then(res => res.json())
        .then(data => questionBank = data)
        .catch(() => console.log("Starting with empty or dynamic question bank"));
}

// 🔀 UI TYPE CHANGE HANDLER
function handleTypeChange() {
    const type = document.getElementById('newType').value;
    document.getElementById('mcqBlock').classList.toggle('hidden', type !== 'MCQ');
    document.getElementById('arBlock').classList.toggle('hidden', type !== 'AR');
}

// ➕ ADD NEW QUESTION & AUTO-SYNC BANK TO GOOGLE DRIVE
function addNewQuestion(e) {
    e.preventDefault();
    const qType = document.getElementById('newType').value;

    const newQ = {
        id: Date.now(),
        class: document.getElementById('newClass').value,
        subject: document.getElementById('newSubject').value,
        chapter: document.getElementById('newChapter').value,
        type: qType,
        marks: parseInt(document.getElementById('newMarks').value),
        question: document.getElementById('newQuestionText').value,
        imageUrl: document.getElementById('newImgUrl').value || null
    };

    if (qType === 'MCQ') {
        newQ.options = [
            document.getElementById('optA').value || "Option A",
            document.getElementById('optB').value || "Option B",
            document.getElementById('optC').value || "Option C",
            document.getElementById('optD').value || "Option D"
        ];
    } else if (qType === 'AR') {
        newQ.assertion = document.getElementById('assertionText').value;
        newQ.reason = document.getElementById('reasonText').value;
    }

    // Add to Local Array
    questionBank.push(newQ);

    // ☁️ Auto Sync Question Bank to Google Drive
    const teacherName = loggedInTeacher ? loggedInTeacher.name : "Teacher";
    const bankData = JSON.stringify(questionBank, null, 2);

    fetch(GOOGLE_DRIVE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            htmlContent: bankData,
            fileName: `Question_Bank_Backup_By_${teacherName.replace(/ /g, '_')}`
        })
    })
    .then(() => alert("✅ Question Saved locally & Bank Backup Synced to Google Drive!"))
    .catch(() => alert("✅ Question Saved locally!"));

    e.target.reset();
    handleTypeChange();
}

// 📄 GENERATE QUESTION PAPER
function generatePaper() {
    const selectedClass = document.getElementById('classSelect').value;
    const selectedSubject = document.getElementById('subjectSelect').value;

    document.getElementById('paperSchoolName').innerText = document.getElementById('schoolNameInput').value;
    document.getElementById('paperExamDetail').innerText = document.getElementById('examDetailInput').value;
    document.getElementById('paperClass').innerText = selectedClass;
    document.getElementById('paperSubject').innerText = selectedSubject;

    const filtered = questionBank.filter(q => q.class === selectedClass && q.subject === selectedSubject);

    if (filtered.length === 0) {
        alert("No questions found for this class and subject selection!");
        return;
    }

    const container = document.getElementById('questionsList');
    container.innerHTML = "";
    let totalMarks = 0;

    filtered.forEach((q, idx) => {
        totalMarks += q.marks;
        let html = `<div class="mb-4"><div class="flex justify-between font-semibold"><span>Q${idx + 1}. ${q.question}</span><span>[${q.marks} Mark${q.marks > 1 ? 's' : ''}]</span></div>`;

        if (q.imageUrl) html += `<div class="my-2"><img src="${q.imageUrl}" class="max-h-48 border rounded"></div>`;
        
        if (q.type === 'AR') {
            html += `<div class="ml-4 mt-1 space-y-1 text-slate-700"><div><strong>Assertion (A):</strong> ${q.assertion}</div><div><strong>Reason (R):</strong> ${q.reason}</div></div>`;
        }

        if (q.type === 'MCQ' && q.options) {
            html += `<div class="grid grid-cols-2 gap-2 mt-2 ml-4">`;
            q.options.forEach((opt, oIdx) => { html += `<div>(${String.fromCharCode(65 + oIdx)}) ${opt}</div>`; });
            html += `</div>`;
        }

        html += `</div>`;
        container.innerHTML += html;
    });

    document.getElementById('paperTotalMarks').innerText = totalMarks;

    // Trigger MathJax equation rendering
    if (window.MathJax) MathJax.typesetPromise();
}

// 📥 DOWNLOAD DOCX & AUTO SYNC PAPER TO GOOGLE DRIVE
function downloadAsDocx() {
    const paperElement = document.getElementById('paperContainer');
    const teacherName = loggedInTeacher ? loggedInTeacher.name : "Teacher";
    const className = document.getElementById('paperClass').innerText;
    const subjectName = document.getElementById('paperSubject').innerText;
    
    const fileName = `${subjectName}_Class${className}_${teacherName.replace(/ /g, '_')}_Paper`;

    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><title>Question Paper</title><style>body{font-family:Arial, sans-serif;}</style></head><body>";
    const footer = "</body></html>";
    const htmlContent = header + paperElement.innerHTML + footer;

    // 1. Local Word Document (.docx) Download
    const converted = htmlDocx.asBlob(htmlContent);
    const link = document.createElement('a');
    link.href = URL.createObjectURL(converted);
    link.download = `${fileName}.docx`;
    link.click();

    // 2. Background Google Drive Sync
    fetch(GOOGLE_DRIVE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ htmlContent: htmlContent, fileName: fileName })
    }).then(() => alert("✅ Paper Downloaded & Saved to School Google Drive!"));
}

// EXPORT QUESTION BANK JSON MANUALLY
function downloadQuestionBank() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(questionBank, null, 2));
    const dl = document.createElement('a');
    dl.setAttribute("href", dataStr);
    dl.setAttribute("download", "questions.json");
    document.body.appendChild(dl);
    dl.click();
    dl.remove();
}

// TAB SWITCHER
function switchTab(tab) {
    document.getElementById('paperSection').classList.toggle('hidden', tab !== 'paper');
    document.getElementById('addSection').classList.toggle('hidden', tab !== 'add');
    
    const btnPaper = document.getElementById('btnTabPaper');
    const btnAdd = document.getElementById('btnTabAdd');

    if (tab === 'paper') {
        btnPaper.className = "bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow";
        btnAdd.className = "bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold";
    } else {
        btnAdd.className = "bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow";
        btnPaper.className = "bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold";
    }
}
