<?php
// Allow cross-origin requests (for local testing)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json");

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blueroom";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]);
    exit;
}

// Handle request method
$requestMethod = $_SERVER["REQUEST_METHOD"];

switch ($requestMethod) {
    case "GET":
        // Fetch data from the database
        $sql = "SELECT id, form_data, created_at FROM company_data";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $row['form_data'] = json_decode($row['form_data'], true); // Decode JSON
                $data[] = $row;
            }
            echo json_encode(["status" => "success", "data" => $data]);
        } else {
            echo json_encode(["status" => "error", "message" => "No records found"]);
        }
        break;

    case "POST":
        // Get JSON data from the request
        $data = json_decode(file_get_contents("php://input"), true);

        if (!$data) {
            echo json_encode(["status" => "error", "message" => "Invalid input"]);
            exit;
        }

        // Insert data into the database
        $formData = $conn->real_escape_string(json_encode($data));
        $sql = "INSERT INTO company_data (form_data) VALUES ('$formData')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["status" => "success", "message" => "Form data saved successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
        }
        break;

    default:
        // Handle unsupported request methods
        echo json_encode(["status" => "error", "message" => "Invalid request method"]);
        break;
}

$conn->close();
?>