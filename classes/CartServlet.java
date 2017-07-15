/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class CartServlet extends HttpServlet {
    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

	response.setContentType("text/html");
  PrintWriter out = response.getWriter();
  HttpSession session = request.getSession();
  String image=request.getParameter("image");
  String mid=request.getParameter("mnfgIdentity");
  String desc=request.getParameter("desc");
  String feat=request.getParameter("feat");
  double cost=Double.parseDouble(request.getParameter("cost"));
  int q=Integer.parseInt(request.getParameter("quantity"));
  String sku=request.getParameter("sku");
  Cart cart = null;

  Object objCart = session.getAttribute("cart");

  if(objCart!=null) {
   cart = (Cart) objCart ;
  } else {
   cart = new Cart();
   session.setAttribute("cart", cart);
  }
  if(cart.checkDuplicate(sku) == -1){
    int answer=cart.addCartItem(image, mid, desc, feat,cost,sku,q);
    int quant=cart.getTotalQ();
    out.print(answer+"_"+quant);
  }
  else{
    int answer=cart.updateQuantity(sku,q);
    int quant=cart.getTotalQ();
    out.print(answer+"_"+quant);
  }
}

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
    	doPost(request, response);
    }
}
