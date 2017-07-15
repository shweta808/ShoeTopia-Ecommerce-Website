<!--Name:Shahane,Shweta
  Acc_No:jadrn058 -->

<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta charset="utf-8">
    <title>SHOE STORE ONLINE</title>
    <link rel="stylesheet" href="/jadrn058/css/proj3.css">
    <link rel="stylesheet" href="/jadrn058/css/order.css">
    <link rel="stylesheet" href="/jadrn058/css/jquery-ui.css">
    <script src="/jadrn058/jquery.js"></script>
    <script src="/jadrn058/jquery-ui.js"></script>
    <script src="/jadrn058/CheckOut.js"></script>
</head>
<body>
<div class="banner"><div class="shopname">shoetopia</div>

<div class="nava">
  <a href="http://jadran.sdsu.edu/jadrn058/proj3.html">Home</a>
</div>
<div class="nav">Please enter Shipping and Billing Information </div>
<form name="form" action="OrderSummaryServlet" method="get" class="addrtable">
    <div class="shipping_table">
      <div class="title_ship">Shipping Information</div>
  <table id ="shipping_table_content" class="shipping_table_content">
  <tr>
    <td><input class="box" name="name" id="name" type="text" placeholder="Name" required></td>
  </tr>
  <tr>
    <td><input class="box" name="address1" id="address1" type="text" placeholder="Address Line 1" required></td>
  </tr>
  <tr>
    <td><input class="box"  name="address2" id="address2" type="text" placeholder="Address Line 2" required></td>
  </tr>
  <tr>
    <td><input class="box" name="city" id="city" type="text" placeholder="City" required></td>
  </tr>
  <tr>
    <td><input class="box" name="state" id="state" type="text" placeholder="State" required></td>
  </tr>
  <tr>
    <td><input class="box" name="zip" id="zip" type="text" placeholder="Zip" required></td>
  </tr>
  <tr>
    <td><input class="box" name="phone" id="phone" type="text" placeholder="Contact Phone" required></td>
  </tr>
</table>
</div>
<div class="sameaddr">
  <input type="checkbox" name="addr" id="addr" value="false"></input>
  Billing Address same as Shipping Address
</div>
<div class="billing_table">
  <div class="title_bill">Billing Information</div>
  <table id ="billing_table_content" class="billing_table_content">
  <tr>
    <td><input class="box" id="nameb" type="text" placeholder="Name" required></td>
  </tr>
  <tr>
    <td><input class="box" id="address1b" type="text" placeholder="Address Line 1" required></td>
  </tr>
  <tr>
    <td><input class="box" id="address2b" type="text" placeholder="Address Line 2" required></td>
  </tr>
  <tr>
    <td><input class="box" id="cityb" type="text" placeholder="City" required></td>
  </tr>
  <tr>
    <td><input class="box" id="stateb" type="text" placeholder="State" required></td>
  </tr>
  <tr>
    <td><input class="box" id="zipb" type="text" placeholder="Zip" required></td>
  </tr>
  <tr>
    <td><input class="box" id="phoneb" type="text" placeholder="Contact Phone" required></td>
  </tr>
  <tr>
    <td><input class="box" id="credittype" type="text" placeholder="Credit Card Type" required></td>
  </tr>
  <tr>
    <td><input class="box" id="creditno" type="text" placeholder="Credit Card Number" required></td>
  </tr>
  <tr>
    <td><input class="box" id="exp" type="text" placeholder="Credit Card Expiration Date" required></td>
  </tr>
  <tr>
    <td><input class="box" id="code" type="text" placeholder="Security Code" required></td>
  </tr>
</table>
</div>
<input type="submit" name="OrderSummary" value="OrderSummary" class="order_button" disabled>
</form>
<div id="order_status"></div>
</body>
</html>
