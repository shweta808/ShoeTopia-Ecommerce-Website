/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class OrderSummaryServlet extends HttpServlet {
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

          response.setContentType("text/html");
          PrintWriter out = response.getWriter();
          String sname=request.getParameter("name");
          String saddr1=request.getParameter("address1");
          String saddr2=request.getParameter("address2");
          String city=request.getParameter("city");
          String state=request.getParameter("state");
          String zip=request.getParameter("zip");
          HttpSession session = request.getSession();
          Cart shoppingCart;
          shoppingCart = (Cart) session.getAttribute("cart");
          if(shoppingCart == null){
              shoppingCart = new Cart();
              session.setAttribute("cart", shoppingCart);
          }
          ArrayList<Product> cartAL= shoppingCart.getCartItems();
          session.setAttribute("cart_items",cartAL);
          session.setAttribute("name",sname);
          session.setAttribute("address1",saddr1);
          session.setAttribute("address2",saddr2);
          session.setAttribute("city",city);
          session.setAttribute("state",state);
          session.setAttribute("zip",zip);
          String toDo = "/jsp/OrderSummary.jsp";
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
