/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class PlaceOrderServlet extends HttpServlet {
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

          response.setContentType("text/html");
          PrintWriter out = response.getWriter();
          String sku[]=request.getParameterValues("sku");
          int len=sku.length;
          String date[]=request.getParameterValues("date");
          String q[]=request.getParameterValues("quantity");
          ArrayList<String> ans=new ArrayList<String>();
          for(int i=0;i < len;i++)
          {
              String answer=DBUtility.insertOutDB(sku[i],date[i],Integer.parseInt(q[i]));
              ans.add(answer);
          }
          if(!(ans.contains("fail")))
          {
            String toDo = "/jsp/ConfirmOrder.jsp";
            RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo);
            dispatcher.forward(request, response);
          }
}

    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
    	doGet(request, response);
    }
}
