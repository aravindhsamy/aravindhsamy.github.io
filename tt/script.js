// =====================================================
// TIMETABLE DATA
// =====================================================

const timetable = [

    {
        day: "Monday",

        time: "09:15 AM - 10:10 AM",

        classes: [
            {
                subject: "DAA",
                section: "Sec 2",
                faculty: "David"
            },

            null,

            null,

            {
                subject: "Linear Algebra",
                section: "Sec 1",
                faculty: "Dr. Beaulah"
            },

            {
                subject: "Web Technology",
                section: "Sec 4",
                faculty: "Roopam"
            },

            {
                subject: "Linear Algebra",
                section: "Sec 3",
                faculty: "Dr. Tamil"
            },

            {
                subject: "Web Technology",
                section: "Sec 5",
                faculty: "Aravind"
            },

            {
                subject: "CN",
                section: "Sem 5",
                faculty: "Dr. Ashok"
            },

            {
                subject: "Agentic AI",
                section: "Sem 7",
                faculty: "Sonar"
            }
        ]
    },


    {
        time: "10:15 AM - 11:10 AM",

        classes: [

            {
                subject: "DAA",
                section: "Sec 2",
                faculty: "David"
            },

            null,

            {
                subject: "Linear Algebra",
                section: "Sec 1",
                faculty: "Dr. Beaulah"
            },

            {
                subject: "Design and Analysis of Algorithms",
                section: "Sec 4",
                faculty: "Joy"
            },

            {
                subject: "Design and Analysis of Algorithms",
                section: "Sec 6",
                faculty: "Dr. Angel"
            },

            {
                subject: "Web Technology",
                section: "Sec 5",
                faculty: "Aravind"
            },

            {
                subject: "CN",
                section: "Sem 5",
                faculty: "Dr. Ashok"
            },

            null,

            null
        ]
    },


    {
        time: "11:15 AM - 12:10 PM",

        classes: [

            {
                subject: "DAA",
                section: "Sec 3",
                faculty: "Nitish"
            },

            null,

            {
                subject: "Web Technology",
                section: "Sec 1",
                faculty: "Ujjwal"
            },

            {
                subject: "Foundation of Data Engineering",
                section: "Sec 4",
                faculty: "Mariya"
            },

            {
                subject: "Linear Algebra",
                section: "Sec 7",
                faculty: "Dr. Tamil"
            },

            {
                subject: "Linear Algebra",
                section: "Sec 5",
                faculty: "Dr. Sangeetha"
            },

            null,

            {
                subject: "EFA",
                section: "Sem 1",
                faculty: "Joy"
            },

            null
        ]
    },


    {
        time: "12:15 PM - 12:55 PM",

        lunch: true,

        classes: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ]
    },


    {
        time: "12:15 PM - 01:10 PM",

        classes: [

            {
                subject: "DAA",
                section: "Sec 3",
                faculty: "Nitish"
            },

            null,

            {
                subject: "Web Technology",
                section: "Sec 1",
                faculty: "Ujjwal"
            },

            {
                subject: "Linear Algebra",
                section: "Sec 5",
                faculty: "Dr. Sangeetha"
            },

            {
                subject: "Design and Analysis of Algorithms",
                section: "Sec 7",
                faculty: "Dr. Angel"
            },

            {
                subject: "Foundation of Data Engineering",
                section: "Sec 2",
                faculty: "Arjun"
            },

            null,
            null,
            null
        ]
    },


    {
        time: "01:15 PM - 01:55 PM",

        lunch: true,

        classes: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ]
    },


    {
        time: "01:00 PM - 01:55 PM",

        classes: [

            {
                subject: "DAA",
                section: "Sec 4",
                faculty: "Joy"
            },

            null,

            {
                subject: "ET",
                section: "Sec 3",
                faculty: "Aravind"
            },

            null,
            null,
            null,
            null,

            {
                subject: "Software Engineering",
                section: "Sem 7",
                faculty: "Sonar"
            },

            null
        ]
    },


    {
        time: "02:00 PM - 02:55 PM",

        classes: [

            {
                subject: "DAA",
                section: "Sec 4",
                faculty: "Joy"
            },

            null,

            {
                subject: "Foundation of Data Engineering",
                section: "Sec 1",
                faculty: "Arjun"
            },

            {
                subject: "Linear Algebra",
                section: "Sec 6",
                faculty: "Dr. Sangeetha"
            },

            {
                subject: "Foundation of Data Engineering",
                section: "Sec 7",
                faculty: "Nitish"
            },

            {
                subject: "Web Technology",
                section: "Sec 2",
                faculty: "Roopam"
            },

            null,

            {
                subject: "MATH",
                section: "Sem 1",
                faculty: "Dr. Beaulah"
            },

            null
        ]
    },


    {
        time: "03:00 PM - 03:55 PM",

        classes: [

            {
                subject: "ET",
                section: "Sec 3",
                faculty: "Sonar"
            },

            null,

            {
                subject: "Web Technology",
                section: "Sec 3",
                faculty: "Roopam"
            },

            null,
            null,
            null,

            {
                subject: "DL",
                section: "Sem 5",
                faculty: "Dr. KK"
            },

            {
                subject: "PC",
                section: "Sem 1",
                faculty: "Ujjwal"
            },

            null
        ]
    },


    {
        time: "04:00 PM - 04:55 PM",

        classes: [

            {
                subject: "ET",
                section: "Sec 3",
                faculty: "Sonar"
            },

            null,

            {
                subject: "Design and Analysis of Algorithms",
                section: "Sec 3",
                faculty: "David"
            },

            {
                subject: "Foundation of Data Engineering",
                section: "Sec 2",
                faculty: "Arjun"
            },

            null,
            null,

            {
                subject: "DL",
                section: "Sem 5",
                faculty: "Dr. KK"
            },

            null,
            null
        ]
    }

];


// =====================================================
// ROOM NAMES
// =====================================================

const rooms = [

    "LAB - A - 74 Seats",

    "LAB - B - 64 Seaters",

    "AB2 - Electronic Lab",

    "AB2 - 101 - 110 Seats",

    "AB2 - 203 - 85 Seats",

    "AB2 - 202 - 85 Seats",

    "AB1 - Moot Court Hall - 85 Seats",

    "AB2 - 207 - 110 Seats",

    "AB2 - 205 - 60 Seats"

];


// =====================================================
// VARIABLES
// =====================================================

let currentRow = null;

let currentColumn = null;

let currentDay = "";


// =====================================================
// RENDER TABLE
// =====================================================

function renderTable() {

    const tbody =
        document.getElementById("timetableBody");

    tbody.innerHTML = "";

    timetable.forEach((row, rowIndex) => {

        const tr = document.createElement("tr");


        // ==============================
        // DAY
        // ==============================

        if (row.day) {
            currentDay = row.day;
        }

        const dayCell =
            document.createElement("td");

        dayCell.className = "day-cell";

        dayCell.textContent = currentDay;

        tr.appendChild(dayCell);


        // ==============================
        // TIME
        // ==============================

        const timeCell =
            document.createElement("td");

        timeCell.className = "time-cell";

        timeCell.textContent = row.time;

        tr.appendChild(timeCell);


        // ==============================
        // CLASS CELLS
        // ==============================

        row.classes.forEach(
            (classData, columnIndex) => {

                const td =
                    document.createElement("td");


                if (row.lunch) {

                    td.className =
                        "lunch-cell";

                    td.textContent =
                        "LUNCH BREAK";

                }


                else if (classData) {

                    td.className =
                        "class-cell";

                    td.innerHTML = `

                        <strong>
                            ${classData.subject}
                        </strong>

                        <br>

                        ${classData.section}

                        <br>

                        <small>
                            ${classData.faculty}
                        </small>

                    `;

                }


                else {

                    td.className =
                        "empty-cell";

                    td.innerHTML = "+ Add";

                }


                // ==========================
                // CLICK EVENT
                // ==========================

                td.addEventListener(
                    "click",
                    () => {

                        openModal(
                            rowIndex,
                            columnIndex
                        );

                    }
                );


                tr.appendChild(td);

            }
        );


        tbody.appendChild(tr);

    });

}


// =====================================================
// OPEN MODAL
// =====================================================

function openModal(rowIndex, columnIndex) {

    currentRow = rowIndex;

    currentColumn = columnIndex;


    const row =
        timetable[rowIndex];

    const classData =
        row.classes[columnIndex];


    // Determine day

    let day = "";

    for (let i = rowIndex; i >= 0; i--) {

        if (timetable[i].day) {

            day = timetable[i].day;

            break;

        }

    }


    // Fill basic information

    document.getElementById("editDay")
        .value = day;

    document.getElementById("editTime")
        .value = row.time;

    document.getElementById("editRoom")
        .value = rooms[columnIndex];


    // Existing class

    if (classData) {

        document.getElementById("editSubject")
            .value = classData.subject;

        document.getElementById("editSection")
            .value = classData.section;

        document.getElementById("editFaculty")
            .value = classData.faculty;

    }


    // Empty cell

    else {

        document.getElementById("editSubject")
            .value = "";

        document.getElementById("editSection")
            .value = "";

        document.getElementById("editFaculty")
            .value = "";

    }


    // Show modal

    document
        .getElementById("modalOverlay")
        .classList.add("show");

}


// =====================================================
// CLOSE MODAL
// =====================================================

function closeModal() {

    document
        .getElementById("modalOverlay")
        .classList.remove("show");

}


// =====================================================
// SAVE CLASS
// =====================================================

function saveClass() {

    const subject =
        document
            .getElementById("editSubject")
            .value
            .trim();

    const section =
        document
            .getElementById("editSection")
            .value
            .trim();

    const faculty =
        document
            .getElementById("editFaculty")
            .value
            .trim();


    // If all fields empty, keep cell empty

    if (
        subject === "" &&
        section === "" &&
        faculty === ""
    ) {

        timetable[currentRow]
            .classes[currentColumn] = null;

    }

    else {

        timetable[currentRow]
            .classes[currentColumn] = {

                subject: subject,

                section: section,

                faculty: faculty

            };

    }


    // Re-render table

    renderTable();


    // Close popup

    closeModal();

}


// =====================================================
// DELETE CLASS
// =====================================================

function deleteClass() {

    if (currentRow === null ||
        currentColumn === null) {

        return;

    }


    const confirmDelete =
        confirm(
            "Are you sure you want to delete this class?"
        );


    if (!confirmDelete) {
        return;
    }


    timetable[currentRow]
        .classes[currentColumn] = null;


    renderTable();

    closeModal();

}


// =====================================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// =====================================================

document
    .getElementById("modalOverlay")
    .addEventListener(
        "click",
        function(event) {

            if (event.target === this) {

                closeModal();

            }

        }
    );


// =====================================================
// INITIAL LOAD
// =====================================================

renderTable();