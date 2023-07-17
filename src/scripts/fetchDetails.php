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
    // Conexao
    $conn = mysqli_connect($servername, $username, $password, $dbname, $port);

    // Recuperando eventuais erros da conexao
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Set character encoding to UTF-8
    mysqli_set_charset($conn, "utf8");

    // Parametro vaga_id do front para buscar as informacoes da vaga a partir da ID inserida na URL
    $projectId = $_GET['value'];

    // Query do sql
    $query = "SELECT * FROM `myProjects` WHERE projectId = $projectId";

    try {
        $stmt = mysqli_query($conn, $query);

        if (!$stmt) {
            throw new Exception(mysqli_error($conn));
        }

        // Recebendo dados
        $result = mysqli_fetch_all($stmt, MYSQLI_ASSOC);

        // Enviando dados recebidos
        echo json_encode($result);
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }

    mysqli_close($conn);
?>