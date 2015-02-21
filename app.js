$(document).ready(function() {

	function decreaseVal(changeNumber, by){
			var answer = changeNumber-by;
			inventory.ingredients['sugar'] = answer;
			console.log(answer);
			
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
		//function is only being carried out once. Need to trigger function multiple times
		decreaseVal(inventory.ingredients.sugar, 1);
		
		$('#ingredients .sugar').text(inventory.ingredients.sugar);
		// increaseVal(inventory.pot.sugar, 1)

		// $('#pot .sugar').text(inventory.pot.sugar);
	});
	//click on use flour
	$('.use-flour').click(function(){
		decreaseVal(inventory.ingredients.flour, 1)
		$('#ingredients .flour').text(inventory.ingredients.flour),
		increaseVal(inventory.pot.flour, 1)
		$('#pot .flour').text(inventory.pot.flour);
	});
	//click on make cookie
	$('#pot button').click(function(){
		decreaseVal(inventory.pot.flour, 6)
		$('#pot .flour').text(inventory.pot.flour),
		decreaseVal(inventory.pot.sugar, 3)
		$('#pot .sugar').text(inventory.pot.sugar),
		increaseVal(inventory.product.cookies, 1)
		$('#product .cookies').text(inventory.product.cookies);
	});
	// buy sugar for $10
	$('.buy-sugar').click(function(){
		decreaseVal(inventory.ingredients.sugar, 1)
		$('#ingredients .sugar').text(inventory.ingredients.sugar),
		decreaseVal(inventory.product.money, 10)
		$('#product .money').text(inventory.product.money);
	})
	// buy flour for $15
	$('.buy-flour').click(function(){
		increaseVal(inventory.ingredients.flour, 1)
		$('#ingredients .flour').text(inventory.ingredients.flour),
		decreaseVal(inventory.product.money, 15)
		$('#product .money').text(inventory.product.money);
	})
});
