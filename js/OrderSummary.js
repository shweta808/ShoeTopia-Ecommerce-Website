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

    $.get("CalculateTotalCost",handleCompleteOrder);
  });

  function handleCompleteOrder(response){
    var total=eval(response);
    var taxper=eval(0.08);
    var ship=eval(5);
    var tax=(response+ship)*taxper;
    var complete=total+tax;
    $("#totalcost").text("Total Cost:$"+response);
    $("#ship").text("Shipping Charge:$5");
    $("#tax").text("Tax(8%):"+tax);
    $("#complete").text("Total Order Cost:$"+complete);
  }
