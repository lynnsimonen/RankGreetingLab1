//$ (function () {
$(document).ready(function (){

    $("button").on("click", greeting);
});

//function getColor(name) {
  //  return $('input[data-color="name"]'').val();
//}

function greeting() {

    var filtered = $('input[name=rank]:checked').attr("id");

    let firstName = $("#firstName").val();

    let lastName = $("#lastName").val();

    var colorText = $("input[name=rank]:checked").data("color");

    $("p#greeting").text(`Hello, ${filtered} ${firstName} ${lastName}`).css("color",colorText);

}






/*$(document).ready(function() {
    $("button").on("click", greeting());
});


function greeting() {
//greeting text string
$("p#greeting").text(`Hello, ${rank} ${firstName} ${lastName}`);

}*/

    //$("p#shipping").css("background-color", shippingColor);

    //$("p#subtotal").css("color", "pink");
    //$("p#soaps").css("border", "2px dotted green");

    //$("label").css("font-family", "Arial");
    //$("")
/*$(document).ready(function() {

    var $radios = $('input[type="radio"]');
    $radios.change(function() {
        var $filtered = $radios.filter(function () {
            return this.checked;
        });
        console.log($filtered.val());
    });
});*/