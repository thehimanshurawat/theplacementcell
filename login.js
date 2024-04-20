var modal = document.getElementById('id01');
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

const handleSubmit = async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username)
    console.log(password)

    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: username, password: password }),
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem("token", json.authtoken);
            window.location.href = '/';
            alert("Login Successful!", "success");
        } else {
            alert("Invalid credentials!", "error");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again later.", "error");
    }
};