<?php
$file = "orders.csv";

// Falls eine neue Bestellung kommt -> speichern
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name     = htmlspecialchars($_POST["name"] ?? "");
    $address  = htmlspecialchars($_POST["address"] ?? "");
    $phone    = htmlspecialchars($_POST["phone"] ?? "");
    $email    = htmlspecialchars($_POST["email"] ?? "");
    $payment  = htmlspecialchars($_POST["payment"] ?? "");
    $distance = htmlspecialchars($_POST["distance"] ?? "");

    if ($name && $address && $phone && $email && $payment) {
        $row = [$name, $address, $phone, $email, $payment, $distance, date("Y-m-d H:i:s")];
        $fp = fopen($file, "a");
        fputcsv($fp, $row);
        fclose($fp);
    }
}

// Bestellungen laden
$orders = [];
if (file_exists($file)) {
    $fp = fopen($file, "r");
    while (($row = fgetcsv($fp)) !== false) {
        $orders[] = $row;
    }
    fclose($fp);
}
?>
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Admin - Bestellungen</title>
  <style>
    body { font-family: Arial, sans-serif; background:#f7f7f7; margin:30px; }
    .container { background:#fff; padding:20px; max-width:800px; margin:auto; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2); }
    table { width:100%; border-collapse: collapse; margin-top:20px; }
    th, td { border:1px solid #ccc; padding:8px; text-align:left; }
    th { background:#eee; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Bestellübersicht</h2>
    <?php if (count($orders) > 0): ?>
      <table>
        <tr>
          <th>Name</th>
          <th>Adresse</th>
          <th>Telefon</th>
          <th>E-Mail</th>
          <th>Zahlung</th>
          <th>Distanz (km)</th>
          <th>Zeit</th>
        </tr>
        <?php foreach ($orders as $order): ?>
          <tr>
            <td><?= htmlspecialchars($order[0]) ?></td>
            <td><?= htmlspecialchars($order[1]) ?></td>
            <td><?= htmlspecialchars($order[2]) ?></td>
            <td><?= htmlspecialchars($order[3]) ?></td>
            <td><?= htmlspecialchars($order[4]) ?></td>
            <td><?= htmlspecialchars($order[5]) ?></td>
            <td><?= htmlspecialchars($order[6]) ?></td>
          </tr>
        <?php endforeach; ?>
      </table>
    <?php else: ?>
      <p>Keine Bestellungen vorhanden.</p>
    <?php endif; ?>
  </div>
</body>
</html>
