/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class DeleteServlet extends HttpServlet {
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

	         doPost(request, response);
}

    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
      String sku=request.getParameter("sku");
      HttpSession session = request.getSession();
      Cart cart = null;
      Object objCart = session.getAttribute("cart");
      if(objCart!=null) {
       cart = (Cart) objCart ;
      } else {
       cart = new Cart();
      }
      int index=cart.deleteCartItem(sku);
      out.print(index);
    }
}
