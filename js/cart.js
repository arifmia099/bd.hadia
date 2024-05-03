<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">

	<title>Document</title>
</head>
<body>
	<div class="container">
		<header>
			<h1>LIST PRODUCT</h1>
			<div class="iconCart">
				<img src="image/cart.png" alt="">
				<div class="totalQuantity">0</div>
			</div>
		</header>
		<div class="listProduct">
			<div class="item">
				<img src="image/t-shirt.jpg">
				<h2>Product Name</h2>
				<div class="price">$50</div>
				<button>Add To Cart</button>
			</div>
		</div>
	</div>
	<div class="cart">
		<h2>CART</h2>
		<div class="listCart">
			<div class="item">
				<img src="image/t-shirt.jpg" alt="">
				<div class="content">
					<div class="name">
						Product Name
					</div>
					<div class="price">
						$50/1 product
					</div>
				</div>
				<div class="quantity">
					<button></button>
					<span class="value">3</span>
					<button></button>
				</div>
			</div>
		</div>
		<div class="buttons">
			<div class="close">CLOSE</div>
			<div class="checkout">
				<a href="checkout.html">
					CHECKOUT
				</a>
			</div>
		</div>
	</div>
	
	<script src="js/script.js"></script>
	<script src="app.js"></script>

</body>
</html>