$(document).ready(function() {

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

	// function to update html
	function updateHTML(){
		$('#product .cookies').text(inventory.product.cookies);
		$('#product .money').text(inventory.product.money);
		$('#ingredients .sugar').text(inventory.ingredients.sugar);
		$('#ingredients .flour').text(inventory.ingredients.flour);
		$('#pot .sugar').text(inventory.pot.sugar);
		$('#pot .flour').text(inventory.pot.flour);
	}

	// TODO: function to modify object
	function updateInventory(inventory, name, amt){
		inventory[name]+=amt;
		updateHTML();
	}

	function newUpdateInventory(inventory, name, amt, htmlVal){
		inventory[name]+=amt;
		newUpdateHTML(inventory, htmlVal);
	};
	// TODO: make updateHTML less sluggish (not update all html values, only target value)
	function newUpdateHTML(inventory, htmlVal){
		$(htmlVal).html(inventory);
	};

	//click on use sugar
	$(".use-sugar").click(function(){
		if (inventory.ingredients.sugar>0){
			newUpdateInventory(inventory.ingredients, 'sugar', -1, '#ingredients .sugar');
			newUpdateInventory(inventory.pot, 'sugar', 1, '#pot .sugar');
			// updateInventory(inventory.ingredients, 'sugar', -1);
			// updateInventory(inventory.pot, 'sugar', 1);
		}
	});
	//click on use flour
	$('.use-flour').click(function(){
		if(inventory.ingredients.flour>0){
			newUpdateInventory(inventory.ingredients, 'flour', -1, '#ingredients .flour');
			newUpdateInventory(inventory.pot, 'flour', 1, '#pot .flour');
			// updateInventory(inventory.ingredients, 'flour', -1);
			// updateInventory(inventory.pot, 'flour', 1);
		}
	});
	//click on make cookie
	$('#pot button').click(function(){
		if (inventory.pot.flour>=6 && inventory.pot.sugar>=3){
			newUpdateInventory(inventory.pot, 'flour', -6, '#pot .flour');
			newUpdateInventory(inventory.pot, 'sugar', -3, '#pot .sugar');
			newUpdateInventory(inventory.product, 'cookies', 1, '#product .cookies');
			// updateInventory(inventory.pot, 'flour', -6);
			// updateInventory(inventory.pot, 'sugar', -3);
			// updateInventory(inventory.product, 'cookies', 1);
		}
	});
	// buy sugar for $10
	$('.buy-sugar').click(function(){
		if (inventory.product.money >=15){
			newUpdateInventory(inventory.product, 'money', -10, '#product .money');
			newUpdateInventory(inventory.ingredients, 'sugar', 1, '#ingredients .sugar');
			// updateInventory(inventory.product, 'money', -10);
			// updateInventory(inventory.ingredients, 'sugar', 1);
		}
	})
	// buy flour for $15
	$('.buy-flour').click(function(){
		if (inventory.product.money >=15) {
			newUpdateInventory(inventory.product, 'money', -15, '#product .money');
			newUpdateInventory(inventory.ingredients, 'flour', 1, '#ingredients .flour');
			// updateInventory(inventory.product, 'money', -15);
			// updateInventory(inventory.ingredients, 'flour', 1);
		}
	})

	var findSmallestDifference = function(arr) {
	  // Your code goes here
	  arr.sort(function(a,b){return a-b});
	  var smallest = 'Please enter more numbers'
	  for (var i=1;i<arr.length;i++){
	  	if (i==1)
	  		smallest=arr[i]-arr[i-1];
	  	else if(smallest>(arr[i]-arr[i-1]))
	  		smallest=(arr[i]-arr[i-1]);
	  }
	  return smallest;
	};

	var result = findSmallestDifference([100, 500, 300, 1000, -200, 990]);
	console.log(result); 
	// The answer is 10 for this example because the difference between 1000 and 990 is 10
});
