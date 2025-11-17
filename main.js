document.addEventListener("DOMContentLoaded", () => {
    // ===== LOGIN PAGE =====
    const loginForm = document.getElementById("loginForm");
    const user = document.getElementById("username");
    const pass = document.getElementById("password");

    if (loginForm && user && pass) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (user.value.trim() === "") {
                alert("Please enter your email");
                return;
            }

            if (pass.value.trim() === "") {
                alert("Please enter your password");
                return;
            }

            const email = user.value.trim().toLowerCase();

            if (email.startsWith("student")) {
                window.location.href = "students.html";
            } else {
                window.location.href = "admin.html";
            }
        });
    }

    // ===== STUDENTS PAGE =====
    const form = document.getElementById("addStudentForm");
    if (!form) return; 

    const name = document.getElementById("studentName");
    const id = document.getElementById("studentID");
    const email = document.getElementById("studentEmail");
    const studentPass = document.getElementById("studentPassword");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (
            name.value.trim() === "" ||
            id.value.trim() === "" ||
            email.value.trim() === "" ||
            studentPass.value.trim() === ""
        ) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Student created successfully! (Static for Phase 2)");
        form.reset();
    });
});


