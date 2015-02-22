$(document).ready(function() {

	function decreaseVal(changeNumber, by){
			var answer = changeNumber-by;
			inventory.ingredients['sugar'] = answer;
			console.log(inventory.ingredients['sugar']);
			
	}

	function increaseVal($changeNumber, by){
			return parseInt($changeNumber)+by;
	}
	function clickSugar(){
		if (inventory.ingredients.sugar>0){
			var answer = inventory.ingredients.sugar-1;
			inventory.ingredients['sugar']=answer;
			var solution = inventory.pot.sugar+1;
			inventory.pot['sugar']=solution;
		}
	}
	function clickFlour(){
		if(inventory.ingredients.flour>0){
			var answer = inventory.ingredients.flour-1;
			inventory.ingredients['flour']=answer;
			var solution = inventory.pot.flour+1;
			inventory.pot['flour']=solution;
		}
	}
	function clickCookie(){
		if (inventory.pot.flour>=6 && inventory.pot.sugar>=3){
			var answer = inventory.pot.flour-6;
			inventory.pot['flour']=answer;
			var solution = inventory.pot.sugar-3;
			inventory.pot['sugar']=solution;
			var revolution = inventory.product.cookies+1;
			inventory.product['cookies']=revolution;
		}
	}
	function buyFlour(){
		if (inventory.product.money >=15)
			var answer=inventory.product.money-15;
			inventory.product['money']=answer;
			var solution=inventory.ingredients.flour+1;
			inventory.ingredients['flour']=solution;
	}
	function buySugar(){
		if (inventory.product.money >=15){
			var answer=inventory.product.money-10;
			inventory.product['money']=answer;
			var solution=inventory.ingredients.sugar+1;
			inventory.ingredients['sugar']=solution;
		}
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
		clickSugar();
		//decreaseVal(inventory.ingredients.sugar, 1);
		
		$('#ingredients .sugar').text(inventory.ingredients.sugar);
		// increaseVal(inventory.pot.sugar, 1)

		$('#pot .sugar').text(inventory.pot.sugar);
	});
	//click on use flour
	$('.use-flour').click(function(){
		clickFlour();
		// decreaseVal(inventory.ingredients.flour, 1)
		$('#ingredients .flour').text(inventory.ingredients.flour),
		// increaseVal(inventory.pot.flour, 1)
		$('#pot .flour').text(inventory.pot.flour);
	});
	//click on make cookie
	$('#pot button').click(function(){
		clickCookie();
		// decreaseVal(inventory.pot.flour, 6)
		$('#pot .flour').text(inventory.pot.flour),
		// decreaseVal(inventory.pot.sugar, 3)
		$('#pot .sugar').text(inventory.pot.sugar),
		// increaseVal(inventory.product.cookies, 1)
		$('#product .cookies').text(inventory.product.cookies);
	});
	// buy sugar for $10
	$('.buy-sugar').click(function(){
		buySugar();
		// decreaseVal(inventory.ingredients.sugar, 1)
		$('#ingredients .sugar').text(inventory.ingredients.sugar),
		// decreaseVal(inventory.product.money, 10)
		$('#product .money').text(inventory.product.money);
	})
	// buy flour for $15
	$('.buy-flour').click(function(){
		buyFlour();
		// increaseVal(inventory.ingredients.flour, 1)
		$('#ingredients .flour').text(inventory.ingredients.flour),
		// decreaseVal(inventory.product.money, 15)
		$('#product .money').text(inventory.product.money);
	})
});
