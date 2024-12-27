/*import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAzv-5MpbuDLClWxdd5CyJUsfVYIY_uUU",
    authDomain: "studentsresult-d976b.firebaseapp.com",
    databaseURL: "https://studentsresult-d976b-default-rtdb.firebaseio.com",
    projectId: "studentsresult-d976b",
    storageBucket: "studentsresult-d976b.appspot.com",
    messagingSenderId: "690107354553",
    appId: "1:690107354553:web:1b4483779c8a8c0b5ffa68",
    measurementId: "G-YGQYYRKX9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Firebase connection status element
const connectionStatusElement = document.getElementById("firebase-status");

// Check Firebase connection status
function checkFirebaseConnection() {
    const dbRef = ref(database, 'results/'); // Check the 'results' node

    // Try fetching data to check if the connection works
    get(dbRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                connectionStatusElement.textContent = "Connected to Firebase successfully!";
                connectionStatusElement.style.color = "green";
            } else {
                connectionStatusElement.textContent = "No results found in the Firebase database.";
                connectionStatusElement.style.color = "orange";
            }
        })
        .catch((error) => {
            connectionStatusElement.textContent = `Error connecting to Firebase: ${error.message}`;
            connectionStatusElement.style.color = "red";
        });
}

// Call the function to check Firebase connection status
checkFirebaseConnection();




// Handle User Form Submission (Fetch Result)
document.getElementById('user-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const rollNumber = document.getElementById('rollNumber').value.trim();
    const motherName = document.getElementById('motherName').value.trim();

    if (!rollNumber || !motherName) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        const snapshot = await get(ref(database, `results/${rollNumber}`));

        if (snapshot.exists()) {
            const data = snapshot.val();
            console.log("Fetched data: ", data); // Log the fetched data for debugging

            // Check if mother's name matches
            if (data.motherName === motherName) {
                // Create table and display result
                const resultTable = `
                    <table>
                        <tr><th>Name</th><td>${data.name}</td></tr>
                        <tr><th>Class</th><td>${data.class}</td></tr>
                        <tr><th>Roll Number</th><td>${rollNumber}</td></tr>
                        <tr><th>Mother's Name</th><td>${data.motherName}</td></tr>
                        <tr><th>English</th><td>${data.marks.english}</td></tr>
                        <tr><th>Maths</th><td>${data.marks.maths}</td></tr>
                        <tr><th>Social Science</th><td>${data.marks.ss}</td></tr>
                        <tr><th>Hindi</th><td>${data.marks.hindi}</td></tr>
                        <tr><th>Gujarati</th><td>${data.marks.gujarati}</td></tr>
                    </table>
                `;
                document.getElementById('result-display').innerHTML = resultTable;
            } else {
                alert("Mother's name does not match.");
            }
        } else {
            alert('No data found for this roll number.');
        }
    } catch (error) {
        console.error('Error fetching result:', error);
        alert('An error occurred while fetching the result. Please try again.');
    }
});


// Handle Admin Form Submission
document.getElementById('admin-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('adminName').value.trim();
    const className = document.getElementById('adminClass').value.trim();
    const rollNumber = document.getElementById('rollNumber').value.trim();
    const motherName = document.getElementById('adminMotherName').value.trim();
    const englishMarks = document.getElementById('englishMarks').value.trim();
    const mathsMarks = document.getElementById('mathsMarks').value.trim();
    const ssMarks = document.getElementById('ssMarks').value.trim();
    const hindiMarks = document.getElementById('hindiMarks').value.trim();
    const gujaratiMarks = document.getElementById('gujaratiMarks').value.trim();

    if (!name || !className || !rollNumber || !motherName || !englishMarks || !mathsMarks || !ssMarks || !hindiMarks || !gujaratiMarks) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        await set(ref(database, `results/${rollNumber}`), {
            name: name,
            class: className,
            motherName: motherName,
            marks: {
                english: englishMarks,
                maths: mathsMarks,
                ss: ssMarks,
                hindi: hindiMarks,
                gujarati: gujaratiMarks
            }
        });
        alert('Result added successfully!');
    } catch (error) {
        console.error('Error adding result:', error);
        alert('An error occurred while adding the result. Please try again.');
    }
});*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAzv-5MpbuDLClWxdd5CyJUsfVYIY_uUU",
    authDomain: "studentsresult-d976b.firebaseapp.com",
    databaseURL: "https://studentsresult-d976b-default-rtdb.firebaseio.com",
    projectId: "studentsresult-d976b",
    storageBucket: "studentsresult-d976b.appspot.com",
    messagingSenderId: "690107354553",
    appId: "1:690107354553:web:1b4483779c8a8c0b5ffa68",
    measurementId: "G-YGQYYRKX9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Firebase connection status element
const connectionStatusElement = document.getElementById("firebase-status");

// Check Firebase connection status
function checkFirebaseConnection() {
    const dbRef = ref(database, 'results/'); // Check the 'results' node

    // Try fetching data to check if the connection works
    get(dbRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                connectionStatusElement.textContent = "Connected to Firebase successfully!";
                connectionStatusElement.style.color = "green";
            } else {
                connectionStatusElement.textContent = "No results found in the Firebase database.";
                connectionStatusElement.style.color = "orange";
            }
        })
        .catch((error) => {
            connectionStatusElement.textContent = `Error connecting to Firebase: ${error.message}`;
            connectionStatusElement.style.color = "red";
        });
}

// Call the function to check Firebase connection status
checkFirebaseConnection();

// Handle User Form Submission (Fetch Result)
document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById('user-form');
    if (userForm) {
        userForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const rollNumber = document.getElementById('rollNumber').value.trim();
            const motherName = document.getElementById('motherName').value.trim();

            if (!rollNumber || !motherName) {
                alert('Please fill in all fields.');
                return;
            }

            try {
                const snapshot = await get(ref(database, `results/${rollNumber}`));

                if (snapshot.exists()) {
                    const data = snapshot.val();
                    console.log("Fetched data: ", data); // Log the fetched data for debugging

                    // Check if mother's name matches
                    if (data.motherName === motherName) {
                        // Create table and display result
                        const resultTable = `
                            <table>
                                <tr><th>Name</th><td>${data.name}</td></tr>
                                <tr><th>Class</th><td>${data.class}</td></tr>
                                <tr><th>Roll Number</th><td>${rollNumber}</td></tr>
                                <tr><th>Mother's Name</th><td>${data.motherName}</td></tr>
                                <tr><th>English</th><td>${data.marks.english}</td></tr>
                                <tr><th>Maths</th><td>${data.marks.maths}</td></tr>
                                <tr><th>Social Science</th><td>${data.marks.ss}</td></tr>
                                <tr><th>Hindi</th><td>${data.marks.hindi}</td></tr>
                                <tr><th>Gujarati</th><td>${data.marks.gujarati}</td></tr>
                            </table>
                        `;
                        document.getElementById('result-display').innerHTML = resultTable;
                    } else {
                        alert("Mother's name does not match.");
                    }
                } else {
                    alert('No data found for this roll number.');
                }
            } catch (error) {
                console.error('Error fetching result:', error);
                alert('An error occurred while fetching the result. Please try again.');
            }
        });
    }

    // Handle Admin Form Submission
    const adminForm = document.getElementById('admin-form');
    if (adminForm) {
        adminForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('adminName').value.trim();
            const className = document.getElementById('adminClass').value.trim();
            const rollNumber = document.getElementById('rollNumber').value.trim();
            const motherName = document.getElementById('adminMotherName').value.trim();
            const englishMarks = document.getElementById('englishMarks').value.trim();
            const mathsMarks = document.getElementById('mathsMarks').value.trim();
            const ssMarks = document.getElementById('ssMarks').value.trim();
            const hindiMarks = document.getElementById('hindiMarks').value.trim();
            const gujaratiMarks = document.getElementById('gujaratiMarks').value.trim();

            if (!name || !className || !rollNumber || !motherName || !englishMarks || !mathsMarks || !ssMarks || !hindiMarks || !gujaratiMarks) {
                alert('Please fill in all fields.');
                return;
            }

            try {
                await set(ref(database, `results/${rollNumber}`), {
                    name: name,
                    class: className,
                    motherName: motherName,
                    marks: {
                        english: englishMarks,
                        maths: mathsMarks,
                        ss: ssMarks,
                        hindi: hindiMarks,
                        gujarati: gujaratiMarks
                    }
                });
                alert('Result added successfully!');
            } catch (error) {
                console.error('Error adding result:', error);
                alert('An error occurred while adding the result. Please try again.');
            }
        });
    }
});

