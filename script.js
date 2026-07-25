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
let currentPaperQuestions = [];

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
        document.getElementById('teacherWelcome').innerText = `Welcome, ${teacher.name}!`;
        sessionStorage.setItem('teacherSession', JSON.stringify(teacher));
    } else {
        alert("❌ Invalid Credentials!");
    }
}

function logout() {
    sessionStorage.removeItem('teacherSession');
    location.reload();
}

window.onload = () => {
    const saved = sessionStorage.getItem('teacherSession');
    if (saved) {
        loggedInTeacher = JSON.parse(saved);
        document.getElementById('loginOverlay').classList.add('hidden');
        document.getElementById('mainPlatform').classList.remove('hidden');
        document.getElementById('teacherWelcome').innerText = `Welcome, ${loggedInTeacher.name}!`;
    }
};

// Helper for Image Base64 Conversion
function fileToBase64(file) {
    return new Promise((resolve) => {
        if (!file) resolve(null);
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
    });
}

async function addQuestionToPaper(e) {
    e.preventDefault();
    const qType = document.getElementById('newType').value;
    const diagFile = document.getElementById('qDiagram').files[0];
    const diagBase64 = await fileToBase64(diagFile);

    const newQ = {
        id: Date.now(),
        section: document.getElementById('newSectionTag').value,
        type: qType,
        marks: parseInt(document.getElementById('newMarks').value),
        question: document.getElementById('newQuestionText').value,
        diagram: diagBase64
    };

    if (qType === 'MCQ') {
        const imgA = await fileToBase64(document.getElementById('optImgA').files[0]);
        const imgB = await fileToBase64(document.getElementById('optImgB').files[0]);
        const imgC = await fileToBase64(document.getElementById('optImgC').files[0]);
        const imgD = await fileToBase64(document.getElementById('optImgD').files[0]);

        newQ.options = [
            { text: document.getElementById('optA').value || "Option A", img: imgA },
            { text: document.getElementById('optB').value || "Option B", img: imgB },
            { text: document.getElementById('optC').value || "Option C", img: imgC },
            { text: document.getElementById('optD').value || "Option D", img: imgD }
        ];
    }

    currentPaperQuestions.push(newQ);
    renderPaperUI();

    // Reset fields
    document.getElementById('newQuestionText').value = "";
    document.getElementById('qDiagram').value = "";
}

function renderPaperUI() {
    updatePaperHeader();
    const container = document.getElementById('questionsList');
    container.innerHTML = "";

    let currentSection = "";

    currentPaperQuestions.forEach((q, idx) => {
        if (q.section && q.section !== currentSection) {
            currentSection = q.section;
            container.innerHTML += `<div style="text-align:center; font-weight:bold; font-size:12pt; margin: 15px 0 5px 0; border-bottom: 1px solid #000; text-transform:uppercase;">${currentSection}</div>`;
        }

        let qHTML = `<div style="margin-bottom: 12px;">
            <table style="width:100%; font-size:11pt; color:#000;">
                <tr>
                    <td style="width: 25px; vertical-align: top; font-weight: bold;">${idx + 1}.</td>
                    <td style="vertical-align: top; text-align: left;">
                        ${q.question}
                        ${q.diagram ? `<br><img src="${q.diagram}" style="max-height:150px; margin-top:5px;">` : ''}
                    </td>
                    <td style="width: 40px; vertical-align: top; text-align: right; font-weight: bold;">(${q.marks})</td>
                </tr>
            </table>`;

        if (q.type === 'MCQ' && q.options) {
            qHTML += `<table style="width:90%; margin-left: 25px; margin-top: 5px; font-size:10pt; color:#000;">
                <tr>
                    <td style="width:50%;">(a) ${q.options[0].text} ${q.options[0].img ? `<br><img src="${q.options[0].img}" style="max-height:80px;">` : ''}</td>
                    <td style="width:50%;">(b) ${q.options[1].text} ${q.options[1].img ? `<br><img src="${q.options[1].img}" style="max-height:80px;">` : ''}</td>
                </tr>
                <tr>
                    <td style="width:50%;">(c) ${q.options[2].text} ${q.options[2].img ? `<br><img src="${q.options[2].img}" style="max-height:80px;">` : ''}</td>
                    <td style="width:50%;">(d) ${q.options[3].text} ${q.options[3].img ? `<br><img src="${q.options[3].img}" style="max-height:80px;">` : ''}</td>
                </tr>
            </table>`;
        }

        qHTML += `</div>`;
        container.innerHTML += qHTML;
    });

    if (window.MathJax) MathJax.typesetPromise();
}

function updatePaperHeader() {
    document.getElementById('paperSchoolName').innerText = document.getElementById('schoolNameInput').value;
    document.getElementById('paperExamHeader').innerText = `Class ${document.getElementById('classInput').value} - ${document.getElementById('subjectInput').value} - ${document.getElementById('examHeaderInput').value} (${document.getElementById('sessionInput').value})`;
    document.getElementById('paperInstructions').innerText = document.getElementById('instructionsInput').value;
    document.getElementById('paperTime').innerText = `Time Allowed: ${document.getElementById('timeInput').value}`;
    document.getElementById('paperMaxMarks').innerText = `Max Marks: ${document.getElementById('maxMarksInput').value}`;
}

// 📄 GENERATE & SAVE BOTH WORD + PDF TO GOOGLE DRIVE
function saveAndSyncDrive() {
    const paperElement = document.getElementById('paperContainer');
    const teacherName = loggedInTeacher ? loggedInTeacher.name : "Teacher";
    
    const header = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <style>
          body { font-family: 'Times New Roman', serif; font-size: 11pt; line-height: 1.3; color: #000000; }
          h2 { font-size: 16pt; font-weight: bold; text-align: center; margin: 0; }
          h3 { font-size: 12pt; font-weight: bold; text-align: center; margin: 4px 0; }
          table { width: 100%; border-collapse: collapse; }
          td { vertical-align: top; }
        </style>
      </head>
      <body>`;
    const footer = "</body></html>";
    const htmlContent = header + paperElement.innerHTML + footer;

    const fileName = `DAV_Paper_${teacherName.replace(/ /g, '_')}_${Date.now()}`;

    fetch(GOOGLE_DRIVE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ htmlContent: htmlContent, fileName: fileName })
    })
    .then(() => alert("🚀 Success! Question Paper saved in Google Drive as BOTH Word (.doc) and PDF (.pdf) files!"))
    .catch(() => alert("Error syncing to Drive!"));
}

function insertSymbol(textareaId, symbolText) {
    const txtArea = document.getElementById(textareaId);
    if (!txtArea) return;
    const startPos = txtArea.selectionStart;
    const endPos = txtArea.selectionEnd;
    txtArea.value = txtArea.value.substring(0, startPos) + symbolText + txtArea.value.substring(endPos);
    txtArea.focus();
}

function handleTypeChange() {
    const type = document.getElementById('newType').value;
    document.getElementById('mcqBlock').classList.toggle('hidden', type !== 'MCQ');
}
