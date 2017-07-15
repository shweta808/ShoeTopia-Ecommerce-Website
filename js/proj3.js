/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

$(document).ready(function(){
  var checkFilter;
  $.get("servlet/FetchCartCount",setCartCount);
  $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1000,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        var url="servlet/FetchFilterData?query=";
        url+="select product.sku,product.mnfgIdentity,product.retail,product.image,on_hand.on_hand_quantity from product left join on_hand on product.sku = on_hand.sku where";
        url+=" retail between "+ ui.values[ 0 ] +" and "+ ui.values[ 1 ];
        console.log(ui.values[0] +" "+ui.values[1]);
        $("#products_view").empty();
        $.get(url,populateData);
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  $.get('servlet/FetchAllData', populateData);

  $("#filterButton").on("click",function(){

    var query="servlet/FetchFilterData?query=";
    query+="select product.sku,product.mnfgIdentity,product.retail,product.image,on_hand.on_hand_quantity from product left join on_hand on product.sku = on_hand.sku where";
    var first = true;
    var catFlag = false;
    var venFlag = false;
    if($("#men").is(":checked")) {
      if(first){
      query = query + " ( catID = 1 ";
      first = false;
      catFlag = true;
      }
      else
      {
      query = query + " or catID = 1 ";
      }
    }
    if($("#women").is(":checked")){
      if(first){
      query = query + " ( catID = 2 ";
      first = false;
      catFlag = true;
      }
      else
      {
      query = query + " or catID = 2 ";
      }
    }
    if($("#children").is(":checked")){
      if(first){
      query = query + " ( catID = 3 ";
      first = false;
      catFlag = true;
      }
      else
      {
      query = query + " or catID = 3 ";
      }
    }
    if(catFlag)
    {
    query = query + " )  ";
    }
    if ($('#casual').is(":checked")){
                   venFlag = true;

                   if(first)
                   {
                   query = query + " ( subcatID = 1 ";
                   first = false;

                   }
                   else
                   {
                     if (catFlag) {
                       query = query + " and (";
                       catFlag = false;
                     }
                     else {
                       query = query + " or ";
                     }
                    query = query + " subcatID = 1 ";

                   }
                 }
                 if ($('#sports').is(":checked")){
                             venFlag = true;
                             if(first){
                             query = query + " ( subcatID = 2 ";
                             first = false;
                             venFlag = true;

                             }
                             else
                             {

                               if (catFlag) {
                                 query = query + " AND (";
                                 catFlag = false;
                               }
                               else {
                                 query = query + " OR ";
                               }
                             query = query + " subcatID = 2 ";
                             }
                           }
                           if ($('#formal').is(":checked")){
                                        venFlag = true;
                                        if(first){
                                        query = query + " ( subcatID = 3 ";
                                        first = false;
                                        venFlag = true;

                                      }
                                      else
                                      {


                                          if (catFlag) {
                                            query = query + " AND (";
                                            catFlag = false;
                                          }
                                          else {
                                            query = query + " OR ";
                                          }
                                       query = query + " subcatID = 3 ";
                                      }
                                      }
      if(venFlag == true)
       {
                query = query + " ) ";
                venFlag = false;

       }

    $("#products_view").empty();
    $.get(query,populateData);
  });


});

function setCartCount(response){
  console.log(response);
  var rows=response.split("_");
  $(".cartcount").html(response);
}

function populateData(response){
  console.log(response);
  topx=100;
  leftx=300;
  var rows = response.split("+");
    for(i=0; i<rows.length; i++) {
      console.log(rows[i]);
      tmp = rows[i].split("||");
      if(tmp[2]!=null){
      console.log(tmp[2]);
      imageValue = "<img src='/~jadrn058/images/"+tmp[3]+"' width='250px' height='250px'>";
      divValue=$('<div class="polaroid" id="product"></div>');
      $('#products_view').append(divValue.css({top: topx, left: leftx, position:'absolute'}).html(imageValue));
      buttonValue=$('<input type="button" id="'+tmp[0]+'" name="qs'+i+'" value="Quick View" class="button">');
      divValue.append(buttonValue);
      tableValue1=$('<table><tr><td>Manufacturer ID:'+tmp[1]+'</td></tr></table>');
      tableValue2=$('<table><tr><td>Product Cost:$ '+tmp[2]+'</td></tr></table>');
      if(tmp[4]>0)
        tableValue3=$('<table><tr><td>Status:In Stock</td></tr></table>');
      else if(tmp[4]==0)
        tableValue3=$('<table><tr><td>Status:More On The Way</td></tr></table>');
      else
        tableValue3=$('<table><tr><td>Status:Coming Soon</td></tr></table>');
      divValue.append(tableValue1);
      divValue.append(tableValue2);
      divValue.append(tableValue3);
      leftx+=350;
      if(leftx > 1000){
       topx+=430;
       leftx=300;
     }
      console.log("top:"+divValue.offset().top+" left:"+divValue.offset().left+" window top:"+$(window).scrollTop());
  }
}
$('.button').on('click', function() {
      console.log("Hello "+$(this).attr("id"));
      var sku=$(this).attr("id");
      var url="servlet/FetchModalData?sku=";
      url+=sku;
      console.log(url);
      $.get(url, populateModalData);
  });
}

  function populateModalData(response){
    var rows=response.split("||");
    console.log(response);
    divModalValue=$('<div class="modal" id="modal"></div>');
    modalContent=$('<div class="modal_content"></div>');
    titleContent=$('<h3 class="titleModal">Product Description</h3>');
    imageModalValue = "<img class='imageModal' src='/~jadrn058/images/"+rows[1]+"' width='250px' height='250px'>";
    tableValue1=$('<table class="midModal"><tr><td>Manufacturer ID:'+rows[0]+'</td></tr></table>');
    tableValue2=$('<table class="descModal"><tr><td>Description:'+rows[2]+'</td></tr></table>');
    tableValue3=$('<table class="featModal"><tr><td>Features:'+rows[3]+'</td></tr></table>');
    tableValue4=$('<table class="costModal"><tr><td>Product Cost:$ '+rows[4]+'</td></tr></table>');
    spanValue=$('<span class="close">&times;</span>');
    modalContent.append(spanValue);
    modalContent.append(titleContent);
    modalContent.append(imageModalValue);
    modalContent.append(tableValue1);
    modalContent.append(tableValue2);
    modalContent.append(tableValue3);
    modalContent.append(tableValue4);
    console.log(rows[6]);
    if(rows[6] == 0){
    buttonValue1=$('<input type="button" name="ac'+i+'" value="Add to Cart" class="cart_button"><br>');
    buttonValue1.prop('disabled', true);
    buttonValue2=$('<input type="button" name="co'+i+'" value="Check Out Now" class="check_button">');
    buttonValue2.prop('disabled', true);
    modalContent.append(buttonValue1);
    modalContent.append(buttonValue2);
    statusValue=$('<h4 class="status">Insufficient Quantity , Please check back Later</h4>');
    modalContent.append(statusValue);
    }
    else if(rows[6] == -1){
      buttonValue1=$('<input type="button" name="ac'+i+'" value="Add to Cart" class="cart_button"><br>');
      buttonValue1.prop('disabled', true);
      buttonValue2=$('<input type="button" name="co'+i+'" value="Check Out Now" class="check_button">');
      buttonValue2.prop('disabled', true);
      modalContent.append(buttonValue1);
      modalContent.append(buttonValue2);
      statusValue=$('<h4 class="status">Insufficient Quantity , Please check back Later</h4>');
      modalContent.append(statusValue);
    }
    else {
      console.log("good");
      buttonValue1=$('<input type="button" name="ac'+i+'" value="Add to Cart" class="cart_button"><br>');
      buttonValue2=$('<a href="servlet/CheckOutServlet" class="checkout_modal">Check Out Now</a>');
      modalContent.append(buttonValue1);
      modalContent.append(buttonValue2);
      var quantity_modal=1;
      buttonValue1.on('click',function(){
        $.ajax({
            url: "servlet/CartServlet",
            type: "post",
            data: "&image="+rows[1]+"&mnfgIdentity=" + rows[0] + "&desc="+rows[2]+ "&feat="+rows[3]+ "&cost="+rows[4]+ "&sku="+rows[5]+ "&quantity="+quantity_modal,
            processData: false,
            contentType:'application/x-www-form-urlencoded; charset=UTF-8',
            success: function(response) {
               console.log(response);
               var rows=response.split("_");
               $(".cartcount").html(rows[1]);
                },
            error: function(response) {
               console.log(response);
                }
            });
      });
    }
    $('#modal_view').append(divModalValue.css({'display':'block'}).append(modalContent));
    $('.close').on('click', function() {
      $('#modal_view').append(divModalValue.css({'display':'none'}).append(modalContent));
        });
  }
