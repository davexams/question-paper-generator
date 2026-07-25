let questionBank = [];

// App load hote hi questions.json load karein
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questionBank = data;
        console.log("Question Bank Loaded:", questionBank.length, "questions");
    })
    .catch(err => console.error("Error loading questions:", err));

function generatePaper() {
    const selectedClass = document.getElementById('classSelect').value;
    const selectedSubject = document.getElementById('subjectSelect').value;
    const schoolName = document.getElementById('schoolNameInput').value;

    // Header updates
    document.getElementById('paperSchoolName').innerText = schoolName || "SCHOOL NAME";
    document.getElementById('paperClass').innerText = selectedClass;
    document.getElementById('paperSubject').innerText = selectedSubject;

    // Questions Filter
    const filteredQuestions = questionBank.filter(q => q.class === selectedClass && q.subject === selectedSubject);

    if (filteredQuestions.length === 0) {
        alert("Iss subject/class ke questions available nahi hain!");
        return;
    }

    const container = document.getElementById('questionsList');
    container.innerHTML = "";

    let totalMarks = 0;

    filteredQuestions.forEach((q, index) => {
        totalMarks += q.marks;

        let questionHTML = `
            <div class="mb-4 text-slate-800">
                <div class="flex justify-between font-semibold">
                    <span>Q${index + 1}. ${q.question}</span>
                    <span class="text-slate-500 ml-2">[${q.marks} Mark${q.marks > 1 ? 's' : ''}]</span>
                </div>
        `;

        // Agar MCQ hai toh Options render karein
        if (q.type === 'MCQ' && q.options) {
            questionHTML += `<div class="grid grid-cols-2 gap-2 mt-2 ml-4 text-sm">`;
            q.options.forEach((opt, idx) => {
                const label = String.fromCharCode(65 + idx); // A, B, C, D
                questionHTML += `<div>(${label}) ${opt}</div>`;
            });
            questionHTML += `</div>`;
        }

        questionHTML += `</div>`;
        container.innerHTML += questionHTML;
    });

    document.getElementById('paperTotalMarks').innerText = totalMarks;
}