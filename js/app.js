let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');
iconCart.addEventListener('click', ()=>{
	if(cart.style.right== '-100%'){
		cart.style.right='0';
		container.style.transform ='translateX(-400px)';

	}else{
		cart.style.right='-100%';
		container.style.transform ='translateX(-0)';
	}
})
close.addEventListener('click',()=>{
	cart.style.right='-100%';
		container.style.transform ='translateX(-0)';
})
let products = null;
// get data from file json
fetch('product.json')
.then(response => response.json())
.then(data => {
	products = data;
	addDataToHTML();
})
// show datas in list html
function addDataToHTML(){
	// remove datas default in html
	let listProductHTML = document.querySelector('.listProduct');
	listProductHTML.inner HTML = '';

	// add new datas
	if(products != null){
		products.forEach(product =>{
			let newProduct = document.createElement('div');
			newProduct.classlist.add('item');
			newProduct.innerHTML =
			'<img src="..image/t-shirt.jpg">
				<h2>Product Name</h2>
				<div class="price">$50</div>
				<button>Add To Cart</button>';
			 	listProductHTML.appendChild(newProduct);
		


		[
{
	"id": 1,
	"name": "product name 1",
	"price":50,
	"image": "/image/t-shirt.jpg"
}
{
	"id": 2,
	"name": "product name 2",
	"price":70,
	"image": "/image/juta.png"
}
{
	"id": 3,
	"name": "product name 3",
	"price":80,
	"image": "image/watch.jpg"
}
{
	"id": 4,
	"name": "product name 4",
	"price":150,
	"image": "/image/lap.jpg"
}
{
	"id": 5,
	"name": "product name 5",
	"price":180,
	"image": "/image/t-shirt.jpg"
}
{
	"id": 6,
	"name": "product name 6",
	"price":200,
	"image": "/image/juta.png"
}
]
		});
		

	}
}