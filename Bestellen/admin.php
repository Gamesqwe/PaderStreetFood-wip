<?php
$file = "orders.csv";

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["name"])) {
    $name     = $_POST["name"];
    $address  = $_POST["address"];
    $phone    = $_POST["phone"];
    $email    = $_POST["email"];
    $payment  = $_POST["payment"];
    $distance = $_POST["distance"];
    $authID   = $_POST["paypal_authorization"] ?? "";
    $cartItems = $_POST["cart_items"] ?? "[]"; 
    $status   = ($payment === "paypal") ? "WARTET AUF FREIGABE" : "BARZAHLUNG";

    $row = [$name, $address, $phone, $email, $payment, $distance, $authID, $status, date("Y-m-d H:i:s"), $cartItems];
    $fp = fopen($file, "a");
    fputcsv($fp, $row);
    fclose($fp);
}

$orders = [];
if (file_exists($file)) {
    $fp = fopen($file, "r");
    while (($row = fgetcsv($fp)) !== false) $orders[] = $row;
    fclose($fp);
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Admin</title>
  <style>
    body { font-family: Arial; background:#efefef; }
    .container { background:white; padding:20px; margin:auto; max-width:900px; }
    table { width:100%; border-collapse:collapse; }
    td,th { border:1px solid #ccc; padding:8px; }
    button { padding:5px 10px; margin:2px 0; }
  </style>
</head>
<body>
<div class="container">
<h2>Bestellungen</h2>

<table>
<tr>
  <th>Name</th><th>Adresse</th><th>Telefon</th><th>E-Mail</th>
  <th>Zahlung</th><th>Distanz</th><th>PayPal ID</th>
  <th>Status</th><th>Zeit</th>
  <th>Warenkorb-Items</th>
</tr>

<?php foreach ($orders as $o): ?>
<tr>
  <td><?= $o[0] ?></td>
  <td><?= $o[1] ?></td>
  <td><?= $o[2] ?></td>
  <td><?= $o[3] ?></td>
  <td><?= $o[4] ?></td>
  <td><?= $o[5] ?></td>
  <td><?= $o[6] ?></td>
  <td>
    <?php if ($o[4]==="paypal"): ?>
        <?= $o[7] ?><br>
        <?php if ($o[7]==="WARTET AUF FREIGABE"): ?>
            <form action="capture.php" method="POST">
                <input type="hidden" name="authID" value="<?= $o[6] ?>">
                <button type="submit">Zahlung annehmen</button>
            </form>
            <form action="void.php" method="POST">
                <input type="hidden" name="authID" value="<?= $o[6] ?>">
                <button type="submit">Zahlung ablehnen</button>
            </form>
        <?php endif; ?>
    <?php else: ?>
        BARZAHLUNG
    <?php endif; ?>
  </td>
  <td><?= $o[8] ?></td>
  <td>
    <pre style="white-space: pre-wrap; font-size: 0.8em; line-height: 1.2; margin: 0;"><?= htmlentities($o[9] ?? 'N/A') ?></pre>
  </td>
</tr>
<?php endforeach; ?>
</table>
</div>
</body>
</html>
