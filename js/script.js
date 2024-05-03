let menu= document.querySelector('#menu-icon');
let navlist= document.querySelector('.navlist');

menu.onclick=() =>
menu.classList.toggle('bx-x');
navlist.classList.toggle('open');

window.onscroll=() =>
menu.classList.remove('bx-x');
navlist.classList.remove('open');


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
			'<img src="image/t-shirt.jpg">
				<h2>Product Name</h2>
				<div class="price">$50</div>
				<button>Add To Cart</button>';
			 	listProductHTML.appendChild(newProduct);
		});

	}
}