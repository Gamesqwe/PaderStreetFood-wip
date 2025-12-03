<?php
$authID = $_POST["authID"];

$client = "";
$secret = "";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api-m.sandbox.paypal.com/v2/payments/authorizations/$authID/void");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
   "Content-Type: application/json",
   "Authorization: Basic " . base64_encode("$client:$secret")
]);
$response = curl_exec($ch);
curl_close($ch);

echo "<h1>Zahlung wurde abgelehnt</h1>";
echo "<pre>$response</pre>";
