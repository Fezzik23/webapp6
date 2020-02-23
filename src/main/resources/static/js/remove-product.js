$(document).ready(function(){
sum2()
  $("button").click(function(){
	var id = $(this).attr("id")
	pid = "product" + id
	$.ajax({
		  url: ("https://localhost:8443/api/product/"+id),
		  method: 'DELETE',
		}).done(function (item) {
	        console.log("Deleted product " + id)
	    })
    $("#" + pid).remove();
	sum2()
  });
});

function sum2(){
	var sum=0;
	$('.sum_item').each(function(){
		var item_val=parseFloat($(this).val());
		if(isNaN(item_val)){
			item_val=0;
		}
		sum+=item_val;
		$('#total').val(sum.toFixed(2));
		document.getElementById("total").innerHTML = sum.toFixed(2)+"€";
	});
	if($('.sum_item').length==false){
		document.getElementById("total").innerHTML ="0.0€";
	}
}

function sum(){
	   var num1 = parseFloat(document.getElementById("totalCheck").value);
	   var num2 = parseFloat(document.getElementById("tax").value);
	   var n = num1 + num2;
	   var sum = n.toFixed(2) + "€";

	   document.getElementById("sum").innerHTML = sum;
	}