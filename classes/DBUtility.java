/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;
public class DBUtility{
  public static String handleDB(){
    String query = "select product.sku,product.mnfgIdentity,product.retail,product.image,on_hand.on_hand_quantity from product left join on_hand on product.sku = on_hand.sku";
    Vector<String []> tmp = DBHelper.runQuery(query);
  	String answer ="";
    for(int i=0;i<tmp.size();i++){
    String s[]=tmp.elementAt(i);
      for(int j=0;j < s.length;j++){
        answer += s[j];
    		answer += "||";
      }
      answer+="+";
    }
    return answer;
  }
  public static String handleModalDB(String sku){
    String query = "select mnfgIdentity,image,description,features,cost,sku from product where sku=\"" + sku + "\"";
    Vector<String []> tmp = DBHelper.runQuery(query);
  	String answer ="";
    String s[]=tmp.elementAt(0);
      for(int i=0;i < s.length;i++){
        answer += s[i];
    		answer += "||";
      }
    return answer;
  }
  public static int handleModalQ(String sku){
    String query = "select on_hand_quantity from on_hand where sku=\"" + sku + "\"";
    Vector<String []> tmp = DBHelper.runQuery(query);
  	String answer ="";
    int quantity;
    if(tmp.size() > 0){
    String s[]=tmp.elementAt(0);
      for(int i=0;i < s.length;i++){
        answer += s[i];
      }
    int quant=Integer.parseInt(answer);
    if(quant == 0)
      quantity=0;
    else
      quantity=quant;
    }
    else
      quantity=-1;
  return quantity;
  }

  public static String fetchCost(String sku){
    String query = "select sku,cost from product where sku=\"" + sku + "\"";
    Vector<String []> tmp = DBHelper.runQuery(query);
  	String answer ="";
    String s[]=tmp.elementAt(0);
      for(int i=0;i < s.length;i++){
        answer += s[i];
        answer += "||";
      }
    return answer;
  }

  public static String handleOnHand(String sku){
    String query = "select sku,on_hand_quantity from on_hand where sku=\"" + sku + "\"";
    Vector<String []> tmp = DBHelper.runQuery(query);
  	String answer ="";
    String s[]=tmp.elementAt(0);
      for(int i=0;i < s.length;i++){
        answer += s[i];
        answer +="||";
      }
      return answer;
  }

  public static String insertOutDB(String sku , String date , int quantity){
    String ans="",an="";
    String query="select on_hand_quantity from on_hand where sku=\"" + sku + "\"";
    Vector<String []> tmp = DBHelper.runQuery(query);
    String sq[]=tmp.elementAt(0);
    for(int i=0;i <sq.length;i++){
      an += sq[i];
    }
    int on_hand_q=Integer.parseInt(an);
    if(quantity <= on_hand_q){
      String query1 = "insert into merchandise_out(sku,date,quantity) values(\"" + sku + "\",\"" + date + "\",\"" + quantity + "\")";
      int rows = DBHelper.executeCommand(query1);
      int total_q=on_hand_q-quantity;
      String query2 = "update on_hand set last_date_modified=\"" + date + "\",on_hand_quantity=\"" + total_q + "\" where sku=\"" + sku + "\"";
      int rows1= DBHelper.executeCommand(query2);
      ans="success";
    }
    else{
      ans="fail";
    }

    return ans;
  }

  public static String handleFilterDB(String q){
    String query = q;
    Vector<String []> tmp = DBHelper.runQuery(query);
  	String answer ="";
    for(int i=0;i<tmp.size();i++){
    String s[]=tmp.elementAt(i);
      for(int j=0;j < s.length;j++){
        answer += s[j];
    		answer += "||";
      }
      answer+="+";
    }
    return answer;
  }

}
