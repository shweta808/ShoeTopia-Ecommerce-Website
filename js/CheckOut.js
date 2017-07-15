/* Name:Shahane,Shweta
  Acc_No:jadrn058 */

$(document).ready(function(){
    $(".add_to_cart").on('click',function(){
      console.log("cart open");
    });
    $("#order_status").text("shweta");
    $("#order_status").hide();
    $("#addr").change(function() {
        if($(this).is(":checked")) {
            console.log("checked");
            var addr1=$("#address1").val();
            var addr2=$("#address2").val();
            var city=$("#city").val();
            var state=$("#state").val();
            var zip=$("#zip").val();
            $("#address1b").val(addr1);
            $("#address2b").val(addr2);
            $("#cityb").val(city);
            $("#stateb").val(state);
            $("#zipb").val(zip);
        }
        else{
          $("#address1b").val('');
          $("#address2b").val('');
          $("#cityb").val('');
          $("#stateb").val('');
          $("#zipb").val('');
        }
    });

    $("#name").blur(function(){
      console.log("check ship name");
      if($("#name").val().length == 0){
        console.log("quantity's length is 0");
        $("#order_status").text("Please enter name");
        $("#name").css('border-color', 'red');
        $("#name").hover(function() {
        $(this).css('cursor','pointer').attr('title', 'Please enter Recievers Name');
        });
    }
    else {
      $("#order_status").text("");
      console.log("in name:"+$("#order_status").text().length);
      $("#order_status").hide();
      $("#name").css('border-color', 'black');
      $("#name").hover(function() {
      $(this).css('cursor','auto').attr('title', 'Recievers Name');
      });
    }
    });
    $("#address1").blur(function(){
      console.log("check ship addr1");
      if($("#address1").val().length == 0){
        console.log("quantity's length is 0");
        $("#order_status").text("Please enter address");
        $("#address1").css('border-color', 'red');
        $("#address1").hover(function() {
        $(this).css('cursor','pointer').attr('title', 'Please enter Recievers Address');
        });
    }
    else {
      $("#order_status").text("");
      console.log("in name:"+$("#order_status").text().length);
      $("#order_status").hide();
      $("#address1").css('border-color', 'black');
      $("#address1").hover(function() {
      $(this).css('cursor','auto').attr('title', 'Recievers Address');
      });
    }
    });

    $("#city").blur(function(){
      console.log("check ship city");
      if($("#city").val().length == 0){
        console.log("quantity's length is 0");
        $("#order_status").text("Please enter City");
        $("#city").css('border-color', 'red');
        $("#city").hover(function() {
        $(this).css('cursor','pointer').attr('title', 'Please enter Recievers City');
        });
    }
    else {
      $("#order_status").text("");
      console.log("in name:"+$("#order_status").text().length);
      $("#order_status").hide();
      $("#city").css('border-color', 'black');
      $("#city").hover(function() {
      $(this).css('cursor','auto').attr('title', 'Recievers City');
      });
    }
    });

    $("#state").blur(function(){
      console.log("check ship state");
      if($("#state").val().length == 0){
        console.log("quantity's length is 0");
        $("#order_status").text("Please enter City");
        $("#state").css('border-color', 'red');
        $("#state").hover(function() {
        $(this).css('cursor','pointer').attr('title', 'Please enter Recievers State');
        });
    }
    else {
      $("#order_status").text("");
      console.log("in name:"+$("#order_status").text().length);
      $("#order_status").hide();
      $("#state").css('border-color', 'black');
      $("#state").hover(function() {
      $(this).css('cursor','auto').attr('title', 'Recievers State');
      });
    }
    });

    $("#zip").blur(function(){
      console.log("check ship state");
      if($("#zip").val().length == 0){
        console.log("quantity's length is 0");
        $("#order_status").text("Please enter Zip");
        $("#zip").css('border-color', 'red');
        $("#zip").hover(function() {
        $(this).css('cursor','pointer').attr('title', 'Please enter Recievers zip');
        });
    }
    else if($("#zip").val().length > 0 && isNaN($("#zip").val())){
        console.log("zip code length");
        console.log("quantity's length is 0");
        $("#order_status").text("Please enter phone no.");
        $("#zip").css('border-color', 'red');
        $("#zip").hover(function() {
        $(this).css('cursor','pointer').attr('title', 'Please enter valid Recievers Zip');
        });
    }
    else {
      $("#order_status").text("");
      console.log("in name:"+$("#order_status").text().length);
      $("#order_status").hide();
      $("#zip").css('border-color', 'black');
      $("#zip").hover(function() {
      $(this).css('cursor','auto').attr('title', 'Recievers zip');
      });
    }
    });

    $("#phone").blur(function(){
      console.log("check ship state");
      if($("#phone").val().length == 0){
        console.log("quantity's length is 0");
        $("#order_status").text("Please enter phone no.");
        $("#phone").css('border-color', 'red');
        $("#phone").hover(function() {
        $(this).css('cursor','pointer').attr('title', 'Please enter Recievers phone number');
        });
    }
    else if($("#phone").val().length > 0 && isNaN($("#phone").val())){
        console.log("zip code length");
        console.log("quantity's length is 0");
        $("#order_status").text("Please enter phone no.");
        $("#phone").css('border-color', 'red');
        $("#phone").hover(function() {
        $(this).css('cursor','pointer').attr('title', 'Please enter valid Recievers phone number');
        });
    }
    else {
      $("#order_status").text("");
      console.log("in name:"+$("#order_status").text().length);
      $("#order_status").hide();
      $("#phone").css('border-color', 'black');
      $("#phone").hover(function() {
      $(this).css('cursor','auto').attr('title', 'Recievers phone number');
      });
    }
    });

    $("#nameb").blur(function(){
      console.log("check ship state");
      if($("#nameb").val().length == 0){
        console.log("quantity's length is 0");
        $("#order_status").text("Please enter phone no.");
        $("#nameb").css('border-color', 'red');
        $("#nameb").hover(function() {
        $(this).css('cursor','pointer').attr('title', 'Please enter Customer name');
        });
    }
    else {
      $("#order_status").text("");
      console.log("in name:"+$("#order_status").text().length);
      $("#order_status").hide();
      $("#nameb").css('border-color', 'black');
      $("#nameb").hover(function() {
      $(this).css('cursor','auto').attr('title', 'Customer name');
      });
    }
    });

    $("#address1b").blur(function(){
      console.log("check ship state");
      if($("#address1b").val().length == 0){
        console.log("quantity's length is 0");
        $("#order_status").text("Please enter phone no.");
        $("#address1b").css('border-color', 'red');
        $("#address1b").hover(function() {
        $(this).css('cursor','pointer').attr('title', 'Please enter Customer Address');
        });
    }
    else {
      $("#order_status").text("");
      console.log("in name:"+$("#order_status").text().length);
      $("#order_status").hide();
      $("#address1b").css('border-color', 'black');
      $("#address1b").hover(function() {
      $(this).css('cursor','auto').attr('title', 'Customer Address');
      });
    }
    });

    $("#cityb").blur(function(){
      console.log("check ship state");
      if($("#cityb").val().length == 0){
        console.log("quantity's length is 0");
        $("#order_status").text("Please enter phone no.");
        $("#cityb").css('border-color', 'red');
        $("#cityb").hover(function() {
        $(this).css('cursor','pointer').attr('title', 'Please enter Customer City');
        });
    }
    else {
      $("#order_status").text("");
      console.log("in name:"+$("#order_status").text().length);
      $("#order_status").hide();
      $("#cityb").css('border-color', 'black');
      $("#cityb").hover(function() {
      $(this).css('cursor','auto').attr('title', 'Customer City');
      });
    }
  });

  $("#stateb").blur(function(){
    console.log("check ship state");
    if($("#stateb").val().length == 0){
      console.log("quantity's length is 0");
      $("#order_status").text("Please enter phone no.");
      $("#stateb").css('border-color', 'red');
      $("#stateb").hover(function() {
      $(this).css('cursor','pointer').attr('title', 'Please enter Customer State');
      });
  }
  else {
    $("#order_status").text("");
    console.log("in name:"+$("#order_status").text().length);
    $("#order_status").hide();
    $("#stateb").css('border-color', 'black');
    $("#stateb").hover(function() {
    $(this).css('cursor','auto').attr('title', 'Customer State');
    });
  }
  });

  $("#zipb").blur(function(){
    console.log("check ship state");
    if($("#zipb").val().length == 0){
      console.log("quantity's length is 0");
      $("#order_status").text("Please enter phone no.");
      $("#zipb").css('border-color', 'red');
      $("#zipb").hover(function() {
      $(this).css('cursor','pointer').attr('title', 'Please enter Customer Zip');
      });
  }
  else if($("#zipb").val().length > 0 && isNaN($("#zipb").val())){
      console.log("zip code length");
      console.log("quantity's length is 0");
      $("#order_status").text("Please enter phone no.");
      $("#zipb").css('border-color', 'red');
      $("#zipb").hover(function() {
      $(this).css('cursor','pointer').attr('title', 'Please enter valid Customer Zip');
      });
  }
  else {
    $("#order_status").text("");
    console.log("in name:"+$("#order_status").text().length);
    $("#order_status").hide();
    $("#zipb").css('border-color', 'black');
    $("#zipb").hover(function() {
    $(this).css('cursor','auto').attr('title', 'Customer Zip');
    });
  }
  });

  $("#phoneb").blur(function(){
    console.log("check ship state");
    if($("#phoneb").val().length == 0){
      console.log("quantity's length is 0");
      $("#order_status").text("Please enter phone no.");
      $("#phoneb").css('border-color', 'red');
      $("#phoneb").hover(function() {
      $(this).css('cursor','pointer').attr('title', 'Please enter Customer Phone number');
      });
  }
  else if($("#phoneb").val().length > 0 && isNaN($("#phoneb").val())){
      console.log("zip code length");
      console.log("quantity's length is 0");
      $("#order_status").text("Please enter phone no.");
      $("#phoneb").css('border-color', 'red');
      $("#phoneb").hover(function() {
      $(this).css('cursor','pointer').attr('title', 'Please enter valid Customer phone number');
      });
  }
  else {
    $("#order_status").text("");
    console.log("in name:"+$("#order_status").text().length);
    $("#order_status").hide();
    $("#phoneb").css('border-color', 'black');
    $("#phoneb").hover(function() {
    $(this).css('cursor','auto').attr('title', 'Customer Phone number');
    });
  }
  });

  $("#credittype").blur(function(){
    console.log("check ship state");
    if($("#credittype").val().length == 0){
      console.log("quantity's length is 0");
      $("#order_status").text("Please enter phone no.");
      $("#credittype").css('border-color', 'red');
      $("#credittype").hover(function() {
      $(this).css('cursor','pointer').attr('title', 'Please enter Customer Credit type');
      });
  }
  else {
    $("#order_status").text("");
    console.log("in name:"+$("#order_status").text().length);
    $("#order_status").hide();
    $("#credittype").css('border-color', 'black');
    $("#credittype").hover(function() {
    $(this).css('cursor','auto').attr('title', 'Customer Credit type');
    });
  }
  });

  $("#creditno").blur(function(){
    console.log("check ship state");
    if($("#creditno").val().length == 0){
      console.log("quantity's length is 0");
      $("#order_status").text("Please enter phone no.");
      $("#creditno").css('border-color', 'red');
      $("#creditno").hover(function() {
      $(this).css('cursor','pointer').attr('title', 'Please enter Customer Credit number ');
      });
  }
  else if($("#creditno").val().length > 0 && isNaN($("#creditno").val())){
      console.log("zip code length");
      console.log("quantity's length is 0");
      $("#order_status").text("Please enter phone no.");
      $("#creditno").css('border-color', 'red');
      $("#creditno").hover(function() {
      $(this).css('cursor','pointer').attr('title', 'Please enter valid Customer Credit card number');
      });
  }
  else {
    $("#order_status").text("");
    console.log("in name:"+$("#order_status").text().length);
    $("#order_status").hide();
    $("#creditno").css('border-color', 'black');
    $("#creditno").hover(function() {
    $(this).css('cursor','auto').attr('title', 'Customer Credit number');
    });
  }
  });

  $("#exp").blur(function(){
    console.log("check ship state");
    if($("#exp").val().length == 0){
      console.log("quantity's length is 0");
      $("#order_status").text("Please enter phone no.");
      $("#exp").css('border-color', 'red');
      $("#exp").hover(function() {
      $(this).css('cursor','pointer').attr('title', 'Please enter Customer Credit Card Expiry Date ');
      });
  }
  else if($("#exp").val().length > 0 && (!($("#exp").val().match(/^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/)))){
    $("#order_status").text("Please enter valid expiry date");
    $("#exp").css('border-color', 'red');
    $("#exp").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Please enter valid Customer Credit Card Expiry Date ');
    });
  }
  else {
    $("#order_status").text("");
    console.log("in name:"+$("#order_status").text().length);
    $("#order_status").hide();
    $("#exp").css('border-color', 'black');
    $("#exp").hover(function() {
    $(this).css('cursor','auto').attr('title', 'Customer Credit Card Expiry Date');
    });
  }
  });

  $("#code").blur(function(){
    console.log("check ship state");
    if($("#code").val().length == 0){
      console.log("quantity's length is 0");
      $("#order_status").text("Please enter phone no.");
      $("#code").css('border-color', 'red');
      $("#code").hover(function() {
      $(this).css('cursor','pointer').attr('title', 'Please enter Customer Credit Card Security Code');
      });
  }
  else if($("#code").val().length > 0 && isNaN($("#code").val())){
      console.log("zip code length");
      console.log("quantity's length is 0");
      $("#order_status").text("Please enter phone no.");
      $("#code").css('border-color', 'red');
      $("#code").hover(function() {
      $(this).css('cursor','pointer').attr('title', 'Please enter valid Customer Credit security code');
      });
  }
  else {
    $("#order_status").text("");
    console.log("in name:"+$("#order_status").text().length);
    $("#order_status").hide();
    $("#code").css('border-color', 'black');
    $("#code").hover(function() {
    $(this).css('cursor','auto').attr('title', 'Customer Credit Card Card Security Code');
    });
    console.log("final length:"+$("#order_status").text().length);
    if($("#order_status").text().length == 0)
      console.log("success");
      $(".order_button").prop('disabled',false);
  }
  });

});
