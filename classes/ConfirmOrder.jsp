<!--Name:Shahane,Shweta
  Acc_No:jadrn058 -->

<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta charset="utf-8">
    <title>SHOE STORE ONLINE</title>
    <link rel="stylesheet" href="/jadrn058/css/order.css">
    <link rel="stylesheet" href="/jadrn058/css/jquery-ui.css">
    <script src="/jadrn058/jquery.js"></script>
    <script src="/jadrn058/jquery-ui.js"></script>
    <script src="/jadrn058/AddToCart.js"></script>
</head>
<body>
<%session.invalidate();%>
<% HttpSession nsession = request.getSession(false);
if(nsession!=null) {
   String data=(String)session.getAttribute( "cart" );
}
%>

<div class="banner"><div class="shopname">shoetopia</div>
</div>
<div class="navigation_links">
  <a href="http://jadran.sdsu.edu/jadrn058/proj3.html">Home</a>
</div>
<div class="thanks">Thank you! for placing Order </div>
<div class="continue"><a href="http://jadran.sdsu.edu/jadrn058/proj3.html" id="home">Continue Shopping</a></div>
</body>
</html>
