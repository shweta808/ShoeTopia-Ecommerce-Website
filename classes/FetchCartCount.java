/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class FetchCartCount extends HttpServlet {
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

          response.setContentType("text/html");
          PrintWriter out = response.getWriter();
          HttpSession session = request.getSession();
          Cart cart = null;

          Object objCart = session.getAttribute("cart");

          if(objCart!=null) {
           cart = (Cart) objCart ;
          } else {
           cart = new Cart();
           session.setAttribute("cart", cart);
          }
            int quant=cart.getTotalQ();
            out.print(quant);
          }
  public void doPost(HttpServletRequest request,
                              HttpServletResponse response)
                throws IOException, ServletException
            {
            	doGet(request, response);
            }
        }
