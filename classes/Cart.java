/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

import java.util.ArrayList;
import sdsu.*;

public class Cart {
private ArrayList<Product> alCartItems = new ArrayList<Product>();
int response;
public int addCartItem(String image, String mid, String desc, String feat,double cost, String sku , int q) {
  Product cartItem = new Product();
  try {
    cartItem.setImage(image);
    cartItem.setmID(mid);
    cartItem.setDesc(desc);
    cartItem.setFeatures(feat);
    cartItem.setCost(cost);
    cartItem.setSku(sku);
    cartItem.setQuantity(q);
    alCartItems.add(cartItem);
    response=alCartItems.size();
   }
   catch (NumberFormatException nfe) {
   System.out.println("Error while parsing from String to primitive types: "+nfe.getMessage());
   response=0;
   nfe.printStackTrace();
  }
  return response;
 }

 public ArrayList getCartItems() {
  return alCartItems;
 }

public int deleteCartItem(String sku){
      int index=-1;
      for(int i=0;i<alCartItems.size();i++)
      {
        Product p = alCartItems.get(i);
        if (p.getSku().equals(sku))
        {
            index=i;
        }
      }
     alCartItems.remove(index);
     return index;
    }

    public int checkDuplicate(String sku){
    int index=-1;
      for(int i = 0; i < alCartItems.size(); i++)
      {
         if(sku.equals(alCartItems.get(i).getSku())){
           index=i;
           break;
         }
      }
      return index;
    }
    public int updateQuantity(String sku,int q){
      int index=-1;
      int total=0;
      for(int i=0;i<alCartItems.size();i++)
      {
        Product p = alCartItems.get(i);
        if (p.getSku().equals(sku))
        {
            index=i;
            total=p.getQuantity()+1;
        }
      }
      alCartItems.get(index).setQuantity(total);
      return index;
    }
    public int updateCnQ(String sku,int q,double c){
      int index=-1;
      int total=0;
      for(int i=0;i<alCartItems.size();i++)
      {
        Product p = alCartItems.get(i);
        if (p.getSku().equals(sku))
        {
            index=i;
        }
      }
      alCartItems.get(index).setQuantity(q);
      alCartItems.get(index).setTotalCost(c);
    return index;
  }
  public double calculateTotalOrder(){
    double order=0;
    for(int i=0;i<alCartItems.size();i++)
    {
        order+=alCartItems.get(i).getTotalCost();
    }
    return order;
  }

  public int getTotalQ(){
    int q=0;
    for(int i=0;i<alCartItems.size();i++)
    {
        q+=alCartItems.get(i).getQuantity();
    }
    return q;
  }

}
