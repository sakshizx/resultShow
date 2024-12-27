<!--
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Check Results</title>
    <script src="https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js"></script>
    <script type="module" src="app.js"></script>  
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Check Your Result</h1>

    <div id="firebase-status">Checking Firebase connection...</div>

    <form id="user-form">
        <label for="rollNumber">Roll Number:</label>
        <input type="text" id="rollNumber" placeholder="Enter your roll number" required>
        
        <label for="motherName">Mother's Name:</label>
        <input type="text" id="motherName" placeholder="Enter your mother's name" required>
        
        <button type="submit">Check Result</button>
    </form>
</body>
</html>
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Results</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Check Student Result</h1>
    <p id="firebase-status">Checking Firebase connection...</p>

    <form id="user-form">
        <label for="rollNumber">Roll Number:</label>
        <input type="text" id="rollNumber">
        <br>
        <label for="motherName">Mother's Name:</label>
        <input type="text" id="motherName">
        <br>
        <button type="submit"> Check Result</button>
    </form>

    <div id="result-display"></div>
    <div style="align-items: bottom;">
    <!-- Button to open admin.html -->
    <button onclick="openAdmin()">Go to Admin Panel</button>
</div>
    <script>
        function openAdmin() {
            window.location.href = 'admin.html';
        }
    </script>

    <!-- Place the app.js script at the end of the body -->
    <script type="module" src="app.js"></script>
</body>
</html>
