$(document).ready(function(){
    $('#add').on("click", function(){
        var oldVal = parseInt($("#counter1").text());
        $('#counter1').text( oldVal + 1)
        });
    });

$(document).ready(function(){
    $('#sub').on("click", function(){
        var oldVal = parseInt($("#counter1").text());
        $('#counter1').text( oldVal - 1)
        });
    });

$(document).ready(function(){
    $('#add2').on("click", function(){
        var oldVal = parseInt($("#counter2").text());
        $('#counter2').text( oldVal + 1)
        });
    });

$(document).ready(function(){
    $('#sub2').on("click", function(){
        var oldVal = parseInt($("#counter2").text());
        $('#counter2').text( oldVal - 1)
        });
    });

$(document).ready(function(){
    $('#add3').on("click", function(){
        var oldVal = parseInt($("#counter3").text());
        $('#counter3').text( oldVal + 1)
        });
    });

$(document).ready(function(){
    $('#sub3').on("click", function(){
        var oldVal = parseInt($("#counter3").text());
        $('#counter3').text( oldVal - 1)
        });
    });

$(document).ready(function(){
    $('#add4').on("click", function(){
        var oldVal = parseInt($("#counter4").text());
        $('#counter4').text( oldVal + 1)
        });
    });

$(document).ready(function(){
$('#sub4').on("click", function(){
    var oldVal = parseInt($("#counter4").text());
    $('#counter4').text( oldVal - 1)
        });
    });

$(document).ready(function(){
    $('#add5').on("click", function(){
        var oldVal = parseInt($("#counter5").text());
        $('#counter5').text( oldVal + 1)
        });
    });

$(document).ready(function(){
$('#sub5').on("click", function(){
    var oldVal = parseInt($("#counter5").text());
    $('#counter5').text( oldVal - 1)
        });
    });

function myFunction() {
    var txt;
    var request = confirm("Please collect your food within 3 minutes once ready \nOr else you have to wait longer for a new one!");
    if (request == null || request == "") {
      txt = "Please enter a valid input";
    } 
    else {
      txt = "You will be redirected to a new page. ";
    }
    document.getElementById("demo").innerHTML = txt;
  }

  function payment_CC() {
    var txt;
    if (confirm("Payment Successful! \nPlease collect your food within 3 minutes once ready" )) {
        txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    window.location.href = "myorders.html";
    document.getElementById("demo").innerHTML = txt;
  }

  function payment_Paynow() {
    var txt;
    if (alert("Payment Successful! \nPlease collect your food within 3 minutes once ready" )) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    window.location.href = "myorders.html";
    document.getElementById("demo").innerHTML = txt;
  }

  function payment_Paylah() {
    var txt;
    if (confirm("Payment Successful! \nPlease collect your food within 3 minutes once ready" )) {
        txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    window.location.href = "myorders.html";
    document.getElementById("demo").innerHTML = txt;
  }

  function myTimer() {
    confirm('Order is ready \nLocated at locker A1');
  }