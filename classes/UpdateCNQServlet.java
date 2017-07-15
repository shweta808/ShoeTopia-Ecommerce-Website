/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class UpdateCNQServlet extends HttpServlet {
    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

	response.setContentType("text/html");
  PrintWriter out = response.getWriter();
  String sku=request.getParameter("sku");
  double c=Double.parseDouble(request.getParameter("cost"));
  int q=Integer.parseInt(request.getParameter("quantity"));
  HttpSession session = request.getSession();
  Cart cart = null;
  Object objCart = session.getAttribute("cart");
  if(objCart!=null) {
   cart = (Cart) objCart ;
  } else {
   cart = new Cart();
  }
  int answer=cart.updateCnQ(sku,q,c);
  out.print(answer);
}

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
    	doPost(request, response);
    }
}
