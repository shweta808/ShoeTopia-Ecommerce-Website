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
    <script src="/jadrn058/OrderSummary.js"></script>
</head>
<body>
<%@ page import ="java.util.*" %>
<%@ page import ="sdsu.*" %>
<%
  ArrayList<Product> cart = (ArrayList<Product>)session.getAttribute("cart_items");
%>
<jsp:useBean id='clock' scope='page' class='dates.JspCalendar' type="dates.JspCalendar" />
<div class="banner"><div class="shopname">shoetopia</div>
</div>
<div class="navigation_links">
  <a href="http://jadran.sdsu.edu/jadrn058/proj3.html">Home</a>
</div>
<div class="ordersummary">
  <div class="titleo">Order Summary</div>
  <div class="shippingcontent">
  <div id ="ship_table_content" class="ship_table_content">
    <div class="addresstable">Receiver's Name & Address</div>
    <label for="sname"><%=session.getAttribute("name")%></label><br>
    <label for="address1"><%=session.getAttribute("address1")%></label>,
    <label for="address2"><%=session.getAttribute("address2")%></label>,<br>
    <label for="city"><%=session.getAttribute("city")%></label>,
    <td><label for="state"><%=session.getAttribute("state")%></label>,<br>
    <td><label for="zip"><%=session.getAttribute("zip")%></label>.
  </div>
  </div>
  <div class="ordercontent">
  <form name="form1" action="PlaceOrderServlet" method="post">
  <table id ="order_table_content" class="order_table_content">
        <tr class="order_contents">
              <th>Product Image</th>
              <th>Manufacturing ID</th>
              <th>Quantity</th>
              <th>Product Cost</th>
          </tr>

    <%
          for(int i=0;i<cart.size();i++){
            double total=cart.get(i).getCost()*cart.get(i).getQuantity();
            cart.get(i).setTotalCost(total);
            String url="/~jadrn058/images/";
            url+=cart.get(i).getImage();
    %>
    <tr id="row_<%=cart.get(i).getSku()%>">
    <td> <img src="<%=url%>" width="150px" height="150px"></td>
    <td><%=cart.get(i).getmID()%></td>
    <input type="hidden" name="sku" value="<%=cart.get(i).getSku()%>">
    <input type="hidden" name="date" value="<jsp:getProperty name="clock" property="date"/>">
    <td><input type="text" name="quantity" class="update_quantity"  id="<%=cart.get(i).getSku()%>" value="<%=cart.get(i).getQuantity()%>" readonly></td>
    <td id="cost_<%=cart.get(i).getSku()%>" class="prod_cost">$ <%=cart.get(i).getTotalCost()%></td>
    </tr>
    <%
    }
    %>
</table>
<input type="submit" name="place" value="Place Order" id="place_order" class="checkout_button">
<a href="http://jadran.sdsu.edu/jadrn058/proj3.html" class="cancel_button">Cancel Order</a>
</form>
</div>
</div>
<div id="completeOrderCost" class="completeOrderCost">
<div id="totalcost"></div>
<div id="ship"></div>
<div id="tax"></div>
<div id="complete"></div>
</div>
</body>
</html>
