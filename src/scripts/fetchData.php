<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    // Para testes enquanto rodar no navegador
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    // Informacoes do banco de dados
    /*
    $servername = "sql213.infinityfree.com";
    $username = "if0_34601291";
    $password = "plw7iMvv0jHK7zI";
    $dbname = "if0_34601291_projects";
    $port = 3306;
    */
    $servername = "localhost";
    $username = "tester";
    $password = "Testing123Password!";
    $dbname = "projects";
    $port = 3306;
    // Connect to the database
    $conn = new mysqli($servername, $username, $password, $dbname, $port);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Fetch data from the table
    $sql = "SELECT * FROM myProjects";
    $result = $conn->query($sql);

    // Check if there are any results
    if ($result->num_rows > 0) {
        // Create an array to hold the fetched data
        $projects = array();

        // Loop through the results and store them in the array
        while ($row = $result->fetch_assoc()) {
            $projects[] = $row;
        }

        // Output the data as JSON
        header('Content-Type: application/json');
        echo json_encode($projects);
    } else {
        // If no data found, return an empty array
        echo "[]";
    }

    // Close the database connection
    $conn->close();
?>