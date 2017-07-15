/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

$(document).ready(function(){
  $( "#accordion" ).accordion();
  $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    $(".add_to_cart").on('click',function(){
      console.log("cart open");
    });
    $(".update_quantity").blur(function() {
      console.log("inside update_quantity "+$(this).attr("id"));
      var s=$(this).attr("id");
      var url1="CheckOnHand?sku=";
      url1+=s;
      $.get(url1,handleOnHand);
    });
    $.get("CalculateTotalCost",handleTotalOrder);

    $('.delete_button').on('click', function() {
      console.log("Hello "+$(this).attr("id"));
      var deleteid=$(this).attr("id");
      var rows=deleteid.split("_");
      console.log("sku:"+rows[1]);
      $.ajax({
          url: "DeleteServlet",
          type: "post",
          data: "&sku="+rows[1],
          processData: false,
          contentType:'application/x-www-form-urlencoded; charset=UTF-8',
          success: function(response) {
             console.log(response);
             if(response > -1){
               console.log("shweta");
               var delete_row="row_"+rows[1];
               console.log(delete_row);
               $('#'+delete_row+'').remove();
               $.get("CalculateTotalCost",handleTotalOrder);
             }
              },
          error: function(response) {
             console.log(response);
              }
          });
    });
});

function handleCheckOut(response){
  console.log(response);
}

function handleOnHand(response){
  console.log(response);
  var rows=response.split("||");
  var qo=$('#'+rows[0]+'').val();
  console.log("quantity:"+qo);
  console.log("from db:"+rows[1]);
  if(eval(qo) <= eval(rows[1]))
  {
    console.log("calculate cost");
    url="UpdateCost?sku=";
    url+=rows[0];
    $.get(url,updateCost);
}
else if(eval(qo) > eval(rows[1]))
{
  divValue1=$('<div class="alert"></div>');
  spanValue=$('<span class="closebtn">&times;</span>') ;
  contentValue=$('<strong>Quantity entered by you exceeds onhand Quantity</strong>');
  divValue1.append(spanValue);
  divValue1.append(contentValue);
  $(".alertbox").append(divValue1);
  $('.closebtn').on('click', function() {
    $('.alert').css({'display':'none'});
      });
}
}

function updateCost(response){
  console.log(response);
  var rows=response.split("||");
  var costid="cost_"+rows[0];
  var quantity=$('#'+rows[0]+'').val();
  var c=quantity*rows[1];
  console.log("cost:"+c);
  $('#'+costid+'').html("$ "+c);
  $.ajax({
      url: "UpdateCNQServlet",
      type: "post",
      data: "&quantity="+quantity+"&cost="+c+"&sku="+rows[0],
      processData: false,
      contentType:'application/x-www-form-urlencoded; charset=UTF-8',
      success: function(response) {
         console.log(response);
         if(response > -1){
           $.get("CalculateTotalCost",handleTotalOrder);
         }
          },
      error: function(response) {
         console.log(response);
          }
      });
}



function handleTotalOrder(response){
        console.log(response);
        $('#totalOrderCost').text("Total Order Cost: $"+response);
}
