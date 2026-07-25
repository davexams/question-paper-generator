const GOOGLE_DRIVE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbySjz8FdbEwywn3stjX--ThZvAQNOYM1iXvXpcE-tmLth7SoGyMUmIK-20JZhyJOnMq/exec";

// 📋 Authorized Teachers Database
const TEACHER_DATABASE = [
    { id: "1-MOHIT CHUG", name: "MR. MOHIT CHUG", pass: "dav@2026" },
    { id: "62-VIKRAM SINGH", name: "MR. VIKRAM SINGH", pass: "dav@2026" }
    // All other 73 teachers stay intact...
];

let loggedInTeacher = null;
let questionBank = [];
let generatedPaperQuestions = [];

// 🔒 AUTHENTICATION
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
        document.getElementById('teacherWelcome').innerText = `Logged in as: ${teacher.name}`;
        sessionStorage.setItem('teacherSession', JSON.stringify(teacher));
        loadQuestionBank();
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
        document.getElementById('teacherWelcome').innerText = `Logged in as: ${loggedInTeacher.name}`;
        loadQuestionBank();
    }
};

// LOAD BANK & RENDER PICKER
function loadQuestionBank() {
    fetch('questions.json')
        .then(res => res.json())
        .then(data => {
            questionBank = data;
            renderQuestionPicker();
        })
        .catch(() => {
            questionBank = getSampleQuestions();
            renderQuestionPicker();
        });
}

// RENDER QUESTION PICKER CHECKBOXES
function renderQuestionPicker() {
    const selClass = document.getElementById('classSelect').value;
    const selSubject = document.getElementById('subjectSelect').value;
    const pickerList = document.getElementById('questionPickerList');
    
    const filtered = questionBank.filter(q => q.class === selClass && q.subject === selSubject);

    if (filtered.length === 0) {
        pickerList.innerHTML = `<p class="text-slate-400 italic">No questions in bank for Class ${selClass} ${selSubject}.</p>`;
        return;
    }

    pickerList.innerHTML = "";
    filtered.forEach(q => {
        pickerList.innerHTML += `
            <label class="flex items-start gap-2 p-1.5 hover:bg-slate-100 rounded cursor-pointer border-b">
                <input type="checkbox" value="${q.id}" class="q-checkbox mt-1" onchange="updateSelectedCount()">
                <div>
                    <span class="font-bold text-indigo-700">[${q.section || 'SECTION - A'}] [${q.marks} Marks]</span> 
                    <span class="text-slate-800">${q.question.substring(0, 90)}...</span>
                </div>
            </label>
        `;
    });
    updateSelectedCount();
}

function updateSelectedCount() {
    const checked = document.querySelectorAll('.q-checkbox:checked').length;
    document.getElementById('selectedCount').innerText = `${checked} questions selected`;
}

// GENERATE PAPER FROM SELECTED CHECKBOXES
function generatePaperFromSelection() {
    const selectedIds = Array.from(document.querySelectorAll('.q-checkbox:checked')).map(cb => parseInt(cb.value));

    if (selectedIds.length === 0) {
        alert("Please select at least one question from the bank!");
        return;
    }

    generatedPaperQuestions = questionBank.filter(q => selectedIds.includes(q.id));
    renderPaperUI();
}

// RENDER PAPER UI WITH EDIT & DELETE OPTIONS
function renderPaperUI() {
    document.getElementById('paperSchoolName').innerText = document.getElementById('schoolNameInput').value;
    document.getElementById('paperExamHeader').innerText = document.getElementById('examHeaderInput').value;
    document.getElementById('paperInstructions').innerText = document.getElementById('instructionsInput').value;
    document.getElementById('paperTime').innerText = document.getElementById('timeInput').value;

    const container = document.getElementById('questionsList');
    container.innerHTML = "";

    let currentSection = "";
    let totalMarks = 0;

    generatedPaperQuestions.forEach((q, idx) => {
        totalMarks += parseInt(q.marks);

        // Section Divider Header
        if (q.section && q.section !== currentSection) {
            currentSection = q.section;
            container.innerHTML += `<div class="text-center font-bold text-lg my-4 tracking-wider border-b pb-1">${currentSection}</div>`;
        }

        let qHTML = `<div class="relative group mb-5" id="q-block-${idx}">
            
            <!-- NO-PRINT EDIT/DELETE BUTTONS -->
            <div class="no-print absolute -top-3 right-0 hidden group-hover:flex gap-1 bg-white border p-1 rounded shadow text-xs">
                <button onclick="editQuestionInline(${idx})" class="bg-amber-500 text-white px-2 py-0.5 rounded hover:bg-amber-600">✏️ Edit</button>
                <button onclick="deleteQuestionInline(${idx})" class="bg-rose-500 text-white px-2 py-0.5 rounded hover:bg-rose-600">🗑️ Delete</button>
            </div>

            <div class="flex justify-between items-start font-bold">
                <div class="flex gap-2">
                    <span>${idx + 1}.</span>
                    <div id="q-text-${idx}">${q.question}</div>
                </div>
                <span class="whitespace-nowrap ml-4">(${q.marks})</span>
            </div>`;

        // Main Diagram/Image
        if (q.imageUrl) {
            qHTML += `<div class="my-2 ml-6"><img src="${q.imageUrl}" class="max-h-48 border rounded"></div>`;
        }

        // MCQ Options (With Images & Text Support)
        if (q.type === 'MCQ' && q.options) {
            qHTML += `<div class="grid grid-cols-2 gap-3 mt-2 ml-6 text-sm">`;
            q.options.forEach((opt, oIdx) => {
                const label = String.fromCharCode(65 + oIdx);
                qHTML += `<div>
                    <span>(${label}) ${opt.text || opt}</span>
                    ${opt.img ? `<img src="${opt.img}" class="h-20 mt-1 rounded border">` : ''}
                </div>`;
            });
            qHTML += `</div>`;
        }

        qHTML += `</div>`;
        container.innerHTML += qHTML;
    });

    document.getElementById('paperMaxMarks').innerText = `Maximum Marks: ${totalMarks}`;

    if (window.MathJax) MathJax.typesetPromise();
}

// INLINE EDIT QUESTION
function editQuestionInline(idx) {
    const q = generatedPaperQuestions[idx];
    const newText = prompt("Edit Question Text:", q.question);
    const newMarks = prompt("Edit Question Marks:", q.marks);

    if (newText !== null && newMarks !== null) {
        q.question = newText;
        q.marks = parseInt(newMarks);
        renderPaperUI();
    }
}

// INLINE DELETE QUESTION
function deleteQuestionInline(idx) {
    if (confirm("Remove this question from current paper?")) {
        generatedPaperQuestions.splice(idx, 1);
        renderPaperUI();
    }
}

// ➕ ADD QUESTION TO BANK WITH IMAGE OPTIONS
function addNewQuestion(e) {
    e.preventDefault();
    const qType = document.getElementById('newType').value;

    const newQ = {
        id: Date.now(),
        class: document.getElementById('newClass').value,
        subject: document.getElementById('newSubject').value,
        section: document.getElementById('newSectionTag').value,
        chapter: document.getElementById('newChapter').value,
        type: qType,
        marks: parseInt(document.getElementById('newMarks').value),
        question: document.getElementById('newQuestionText').value,
        imageUrl: document.getElementById('newImgUrl').value || null
    };

    if (qType === 'MCQ') {
        newQ.options = [
            { text: document.getElementById('optA').value || "Option A", img: document.getElementById('optAImg').value || null },
            { text: document.getElementById('optB').value || "Option B", img: document.getElementById('optBImg').value || null },
            { text: document.getElementById('optC').value || "Option C", img: document.getElementById('optCImg').value || null },
            { text: document.getElementById('optD').value || "Option D", img: document.getElementById('optDImg').value || null }
        ];
    }

    questionBank.push(newQ);
    renderQuestionPicker();

    // Auto Sync Updated Bank to Drive
    const teacherName = loggedInTeacher ? loggedInTeacher.name : "Teacher";
    fetch(GOOGLE_DRIVE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            htmlContent: JSON.stringify(questionBank, null, 2),
            fileName: `Question_Bank_Updated_By_${teacherName.replace(/ /g, '_')}`
        })
    });

    alert("✅ Question Saved & Bank Synced to Google Drive!");
    e.target.reset();
}

// DOCX DOWNLOAD
function downloadAsDocx() {
    const paperElement = document.getElementById('paperContainer');
    const teacherName = loggedInTeacher ? loggedInTeacher.name : "Teacher";
    const header = "<html><head><style>body{font-family:'Times New Roman';}</style></head><body>";
    const footer = "</body></html>";
    const htmlContent = header + paperElement.innerHTML + footer;

    const converted = htmlDocx.asBlob(htmlContent);
    const link = document.createElement('a');
    link.href = URL.createObjectURL(converted);
    link.download = `DAV_Question_Paper_${teacherName.replace(/ /g, '_')}.docx`;
    link.click();
}

function handleTypeChange() {
    const type = document.getElementById('newType').value;
    document.getElementById('mcqBlock').classList.toggle('hidden', type !== 'MCQ');
}

function switchTab(tab) {
    document.getElementById('paperSection').classList.toggle('hidden', tab !== 'paper');
    document.getElementById('addSection').classList.toggle('hidden', tab !== 'add');
}

function getSampleQuestions() {
    return [
        {
            id: 1, class: "10", subject: "English", section: "SECTION - A",
            question: "Read the passage given below:\n1. It is rare to find someone with good technical and communication skills...",
            marks: 10, type: "Passage"
        }
    ];
}
