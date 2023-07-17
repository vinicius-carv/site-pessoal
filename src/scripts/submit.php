<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    // Para testes enquanto rodar no navegador
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    // Replace these with your actual database credentials
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

    // Establish a connection to the database
    $connection = mysqli_connect($servername, $username, $password, $dbname,$port);

    // Check the connection
    if (mysqli_connect_errno()) {
        die("Failed to connect to MySQL: " . mysqli_connect_error());
    }

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Sanitize and escape the form data
        $nome = mysqli_real_escape_string($connection, $_POST["nome"]);
        $email = mysqli_real_escape_string($connection, $_POST["email"]);
        $empresa = mysqli_real_escape_string($connection, $_POST["empresa"]);
        $assunto = mysqli_real_escape_string($connection, $_POST["assunto"]);

        // Insert the form data into the database
        $sql = "INSERT INTO myContacts (nome, email, empresa, assunto) VALUES ('$nome', '$email', '$empresa', '$assunto')";

        if (mysqli_query($connection, $sql)) {
            echo "Form submitted successfully!";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($connection);
        }
    }

    // Close the database connection
    mysqli_close($connection);
?>