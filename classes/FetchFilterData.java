/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class FetchFilterData extends HttpServlet {
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

	response.setContentType("text/html");
  PrintWriter out = response.getWriter();
  String query=request.getParameter("query");
  String query1= query.replace("%20", " ");
  String answer=DBUtility.handleFilterDB(query1);
  System.out.println("nnnnot working");
  out.print(answer);
}

    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
    	doGet(request, response);
    }
}
