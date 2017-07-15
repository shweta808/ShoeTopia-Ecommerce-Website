/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

package sdsu;


public class Product{
String sku;
String image;
String desc;
String features;
String mID;
double cost;
int quantity;
double total;

public int getQuantity() {
	return quantity;
}
public void setQuantity(int quantity) {
	this.quantity = quantity;
}
public String getSku() {
	return sku;
}
public void setSku(String sku) {
	this.sku = sku;
}
public String getImage() {
	return image;
}
public void setImage(String image) {
	this.image = image;
}
public String getDesc() {
	return desc;
}
public void setDesc(String desc) {
	this.desc = desc;
}
public String getFeatures() {
	return features;
}
public void setFeatures(String features) {
	this.features = features;
}
public String getmID() {
	return mID;
}
public void setmID(String mID) {
	this.mID = mID;
}
public double getCost() {
	return cost;
}
public void setCost(double cost) {
	this.cost = cost;
}

public double getTotalCost() {
	return total;
}
public void setTotalCost(double total) {
	this.total = total;
}


}
