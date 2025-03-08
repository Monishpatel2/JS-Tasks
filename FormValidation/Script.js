    function validateForm() {
        let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^\d{10}$/;

    if (!name || !email || !phone || !age || !gender) {
        alert("All fields are required!");
    return false;
            }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
    return false;
            }

    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
    return false;
            }

    if (age < 0 || age > 120) {
        alert("Age must be between 0 and 120.");
    return false;
            }

    let userData = {name, email, phone, age, gender};
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    displayData();
    return false;
        }

    function displayData() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
            users.forEach(user => {
        let row = `<tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.age}</td>
        <td>${user.gender}</td>
    </tr>`;
    tableBody.innerHTML += row;
            });
        }

    document.addEventListener("DOMContentLoaded", displayData);
