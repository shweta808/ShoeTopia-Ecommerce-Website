<!--Name:Shahane,Shweta
  Acc_No:jadrn058 -->

<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta charset="utf-8">
    <title>SHOE STORE ONLINE</title>
    <link rel="stylesheet" href="/jadrn058/css/proj3.css">
    <link rel="stylesheet" href="/jadrn058/css/jquery-ui.css">
    <script src="/jadrn058/jquery.js"></script>
    <script src="/jadrn058/jquery-ui.js"></script>
    <script src="/jadrn058/AddToCart.js"></script>
</head>
<body>
<%@ page import ="java.util.*" %>
<%@ page import ="sdsu.*" %>
<%
ArrayList<Product> cart = (ArrayList<Product>)session.getAttribute("cart_items");
%>
<div class="banner"><div class="shopname">shoetopia</div>
</div>
<div class="navigation_links">
  <a href="http://jadran.sdsu.edu/jadrn058/proj3.html">Home</a>
</div>
<div class="titl">Cart Contents</div>
<div class="cart_table">
  <table id ="cart_table_content" class="cart_table_content">
    <tr class="cart_contents">
          <th>Product Image</th>
          <th>Manufacturing ID</th>
          <th>Quantity</th>
          <th>Product Cost</th>
          <th></th>
      </tr>

<%
      for(int i=0;i<cart.size();i++){
        String url="/~jadrn058/images/";
        url+=cart.get(i).getImage();
        double total=cart.get(i).getCost()*cart.get(i).getQuantity();
        cart.get(i).setTotalCost(total);
%>
<tr id="row_<%=cart.get(i).getSku()%>">
<td> <img src="<%=url%>" width="150px" height="150px"></td>
<td><%=cart.get(i).getmID()%></td>
<td><input type="text" class="update_quantity"  id="<%=cart.get(i).getSku()%>" value="<%=cart.get(i).getQuantity()%>" name="update_quantity"></td>
<td id="cost_<%=cart.get(i).getSku()%>" class="prod_cost">$ <%=cart.get(i).getTotalCost()%></td>
<td><input type="button" name="delete" value="Delete" class="delete_button" id="delete_<%=cart.get(i).getSku()%>"></td>
</tr>
<%
}
%>

</table>
<div id="totalOrderCost" class="totalOrderCost"></div>
<a href="CheckOutServlet" class="checkout_button">Check Out Now</a>
<div class="alertbox"></div>
</div>

</body>
</html>
