/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class AddToCartServlet extends HttpServlet {
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

	response.setContentType("text/html");
  PrintWriter out = response.getWriter();
  HttpSession session = request.getSession();
  Cart shoppingCart;
  shoppingCart = (Cart) session.getAttribute("cart");
  if(shoppingCart == null){
      shoppingCart = new Cart();
      session.setAttribute("cart", shoppingCart);
  }
  ArrayList<Product> al= shoppingCart.getCartItems();
  session.setAttribute("cart_items",al);
  String toDo = "/jsp/AddCart.jsp";
  RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo);
  dispatcher.forward(request, response);
}

    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
    	doGet(request, response);
    }
}
