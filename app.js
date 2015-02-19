$(document).ready(function() {

	function decreaseVal($changeNumber, by){
			return parseInt($changeNumber)-by;
	}
	function increaseVal($changeNumber, by){
			return parseInt($changeNumber)+by;
	}

	var inventory ={
		product: {
			money: 1000,
			cookies: 0
		},
		ingredients: {
			sugar: 10,
			flour: 10
		},
		pot: {
			sugar: 0,
			flour: 0
		}
	};
	//TODO Push the inventory values to the html page

	//click on use sugar
	$(".use-sugar").click(function(){
		$('#ingredients .sugar').text(decreaseVal(inventory.ingredients.sugar, 1)),
		$('#pot .sugar').text(increaseVal(inventory.pot.sugar, 1));
	});
	//click on use flour
	$('.use-flour').click(function(){
		$('#ingredients .flour').text(decreaseVal(inventory.ingredients.flour, 1)),
		$('#pot .flour').text(increaseVal(inventory.pot.flour, 1));
	});
	//click on make cookie
	$('#pot button').click(function(){
		$('#pot .flour').text(decreaseVal(inventory.pot.flour, 6)),
		$('#pot .sugar').text(decreaseVal(inventory.pot.sugar, 3)),
		$('#product .cookies').text(increaseVal(inventory.product.cookies, 1));
	});
	// buy sugar for $10
	$('.buy-sugar').click(function(){
		$('#ingredients .sugar').text(decreaseVal(inventory.ingredients.sugar, 1)),
		$('#product .money').text(decreaseVal(inventory.product.money, 10));
	})
	// buy flour for $15
	$('.buy-flour').click(function(){
		$('#ingredients .flour').text(increaseVal(inventory.ingredients.flour, 1)),
		$('#product .money').text(decreaseVal(inventory.product.money, 15));
	})
});
