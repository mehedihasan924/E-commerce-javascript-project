// search Product Item
let filterarray=[];

let galleryarray=[
    {
      id:1,
      name:"apple",
      src:"imge/apple2.png",
      price:"50"
    },
    {
      id:2,
      name:"orenge",
      src:"imge/14.png",
      price:"100"
    }, {
      id:3,
      name:"dress",
      src:"imge/New-Stylish-Koti-Gown2.png",
      price:"650"
    }, {
      id:4,
      name:"mango",
      src:"imge/mango1.png",
      price:"200"
    }, {
      id:5,
      name:"flowers",
      src:"imge/rose4.png",
      price:"80"
    },
    {
      id:6,
      name:"leptop",
      src:"imge/lepto1.png",
      price:"56,000 "
    },
    {
      id:7,
      name:"gajor",
      src:"imge/9.png",
      price:"100 "
    }

];
// search Container Product Div
showgallery(galleryarray);

function showgallery(currarray){
    document.getElementById("search-section").innerText="";

   for (var i=0; i<currarray.length; i++){
        document.getElementById('search-section').innerHTML+=
        `<div class="col-md-3 product-box mb-5">
        <div class="card border-0 shadow-ms">
            <div class="card-body active">
                <img onclick="window.location.href='Product-single.html';" class="product-img images" src="${currarray[i].src}" alt="">
                  <div class="card-text">
                      <h2> 
                      <a class=" product-title cart-product-title title " style="text-transform: capitalize;" href=" "> ${currarray[i].name}</a>
                      </h2>
                      <div class="rating">
                          <i class="bi bi-star-fill text-w"> </i>
                          <i class="bi bi-star-fill text-w"> </i>
                          <i class="bi bi-star-fill text-w"> </i>
                          <i class="bi bi-star-fill text-w"> </i>
                          <i class="bi bi-star-fill text-w"> </i>
                      </div>
                      <h3 class="price">৳  ${currarray[i].price}.00</h3>
                      <div class="btn-cart d-flex " >
                        <a class="add-to-cart-btn " > `+
                      
                       ` </a>
                       <a class="view-all-btn" href="fruits.html"> View all <i class="bi bi-arrow-right"></i> </a>
                      </div>
                      
                  </div>
            </div>
        </div>
        </div>`
   }
}

// Product Search section show

document.querySelector('.search-btn').addEventListener('click',function() {
  document.getElementById('product-search-system').classList.add('show');
})
// Search product system
document.getElementById("myinput").addEventListener("keyup",function(){
  let text =document.getElementById("myinput").value;

  filterarray=galleryarray.filter(function(a){
    if(a.name.includes(text)){
        return a.name;
    }
  });
  if( this.value==""){
    showgallery(galleryarray);
  }
  else{
      if(filterarray==""){
        document.getElementById("para").style.display='block';
        document.getElementById("search-section").innerHTML="";
      }
      else{
        showgallery(filterarray);
        document.getElementById("para").style.display="none";
      }
 }
})


// Top section slider
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

 //popup-from-set
 document.querySelector("#show-sinin-popup").addEventListener("click",function(){
  document.querySelector(".container-from-1").classList.add("active");
  });
  document.querySelector(".container-from-1 .mfp-close").addEventListener("click",function(){
    document.querySelector(".container-from-1 " ).classList.remove("active");
    });
//Register-from
 document.querySelector("#show-popup").addEventListener("click",function(){
  document.querySelector(".container-from").classList.add("active");
  });
  document.querySelector(".container-from .mfp-close").addEventListener("click",function(){
    document.querySelector(".container-from " ).classList.remove("active");
    });

    
// Cart-div-dynamic
  let cartIcon= document.querySelector('#Cart-Icon');
  let cartDiv= document.querySelector('.sideber');
  let cartClose= document.querySelector('#close-cart');
// Open Cart
cartIcon.onclick=()=>{
  cartDiv.classList.add("active");
}
// Close Cart
cartClose.onclick=() =>{
  cartDiv.classList.remove("active");
}

// cart Working
if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready);
}
else{
  ready();
}

// Making Function
function ready(){
  // Remve Item from cart
  var removeCartButtons =document.getElementsByClassName('cart-remove')
  // console.log(removeCartButtons);
  for(var i= 0; i< removeCartButtons.length; i++){
    var button=removeCartButtons[i]
    button.addEventListener("click", removeCartItem )
  }
  //  Quantity Changes
  var quantityInputs= document.getElementsByClassName('cart-quantity');
   for ( var i =0 ; i < quantityInputs.length; i++){
      var input=quantityInputs[i];
      input.addEventListener("change", quantityChanged);
   }
  }
  //  Add to cart
  // var addCart=document.getElementsByClassName("add-cart");
  // for(var i= 0; i< addCart.length; i++){
  //   var button=addCart[i];
  //   button.addEventListener("click", addCartclicked);
  // }


//  Remove Item  From cart 
// function removeCartItem (event){
//   var buttonClicked=event.target;
//   buttonClicked.parentElement.remove();
//   updatetotal();
// }

// Quantity Cahange Function
// function quantityChanged(event){
//   var input= event.target;
//   if(isNaN(input.value) || input.value <= 0){
//     input.value=1;
//   }
//   updatetotal();
// }

// add to cart
// function addCartclicked(event){
//  var button = event.target;
//  var shopProducts =button.parentElement;
//  var title=shopProducts.getElementsByClassName("product-title")[0].innerText;
//  console.log(title);
//  var price=shopProducts.getElementsByClassName("price")[0].innerText;
//  var productImg=shopProducts.getElementsByClassName("product-img")[0].src;
//  console.log(title,price);
//  addProductToCart(title,price,productImg);
//  updatetotal();
// }

// function  addProductToCart(title, price, productImg) {
//   var cartShopBox = document.createElement("div");
//      cartShopBox.classList.add('cart-box');
//   var cartItems=document.getElementsByClassName('cart-content')[0];
//   var cartItemsName=cartItems.getElementsByClassName('cart-product-title');
//   for(var i= 0; i< cartItemsName.length; i++){
//     if( cartItemsName[i].innerText==title){
//       alert("You Have already add this Item to cart");
//       return;
//     } 
//   }

// var  cartBoxContent= `<img class="cart-img" src="imge/6.png" alt="">
// <div class="card-text">
//   <div class="product-title cart-product-title "> Apple</div>
//   <div class="cart-price"> $20.5</div>
//   <input type="number" value="1" class="cart-quantity">
// </div>
// <!-- Cart Remover -->
// <i class="fa-solid fa-trash cart-remove " > </i> ` ;

// cartShopBox.innerHTML=cartBoxContent;
// cartItems.append(cartShopBox);
// cartShopBox.getElementsByClassName("cart-remove ")[0].addEventListener("click", removeCartItem);
// cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);

// }

// Cart Total Update

// function updatetotal(){
//  var cartContent = document.getElementsByClassName('cart-content')[0];
//  var cartBoxes = cartContent.getElementsByClassName('cart-box');
//  var total=0;
// for( var i=0; i< cartBoxes.length; i++){
//  var cartBox= cartBoxes [i];
//  var priceElement= cartBox.getElementsByClassName("cart-price")[0];
//  var quantityElement=cartBox.getElementsByClassName("cart-quantity")[0];
//  var price=parseFloat(priceElement.innerText.replace("$", ""));
//  var quantity=quantityElement.value;
//  total= total +  (price* quantity);


 
//  if price Contain some Cents value
// total= Math.round(total*100)/100;

//  document.getElementsByClassName("total-price")[0].innerText= "$" +total;
// }
// }

// New code for cart

// Letest Product
const product=[
  {
    id:0,
    image:'imge/dalim1.png',
    title: 'Pomegranate',
    price:120,
    url:'product-single-page/dalim.html',
  },
  {
    id:1,
    image:'imge/leptop3.png',
    title: 'Dell Leptop',
    price:56000,
    url:'product-single-page/Dell-Leptop.html',

  },
  {
    id:2,
    image:'imge/dress2.png',
    title: 'Mens Winter Jacket',
    price:650,
    url:'product-single-page/Sart-Jeket.html',
  },
  {
    id:3,
    image:'imge/rose6.png',
    title: 'Flowers ',
    price:100,
    url:'product-single-page/f-Long-stem-roses.html',
  },
  {
    id:4,
    image:'imge/dress1.png',
    title: 'Grount Dress',
    price:950,
    url:'product-single-page/New-Stylish-Koti-Gown.html',
  },
  {
    id:5,
    image:'imge/rose5.png',
    title: 'Rose Flowers',
    price:150,
    url:'product-single-page/f-Top-Rose.html',
  },
  {
    id:6,
    image:'imge/dress4.png',
    title: 'Girls Dress',
    price:900,
    url:'product-single-page/Llatest-Design.html',
  },
  {
    id:7,
    image:'imge/9.png',
    title: 'Curey',
    price:100,
    url:'product-single-page/v-Carrot.html',
  }

];
const categories =[...new Set(product.map((item) =>
  {return item}))]
let i=0;
document.getElementById('root-1').innerHTML =categories.map((item)=>
{
   var { image,title, price,url} =item;
   return(
      `<div class="col-md-3 product-box mb-5">
      <div class="card border-0 shadow-ms">
          <div class="card-body active">
              <img onclick="window.location.href='${url}';" class="product-img images" src="${image}" alt="">
                <div class="card-text">
                    <h2> 
                    <a class=" product-title cart-product-title title" href=" "> ${title}</a>
                    </h2>
                    <div class="rating">
                        <i class="bi bi-star-fill text-w"> </i>
                        <i class="bi bi-star-fill text-w"> </i>
                        <i class="bi bi-star-fill text-w"> </i>
                        <i class="bi bi-star-fill text-w"> </i>
                        <i class="bi bi-star-fill text-w"> </i>
                    </div>
                    <h3 class="price"> ${price}.00</h3>
                    <div class="btn-cart d-flex " >
                      <a class="add-to-cart-btn " > `+
                       "<i class='bi bi-cart4' onclick='addtocart("+(i++)+")'>  Add to Cart </i>" +
                     ` </a>
                      <a class="add-to-favorite " >
                        <i class="bi bi-heart "></i>
                      </a>
                    </div>
                    
                </div>
          </div>
      </div>
      </div>`
     
   )
}).join('');

var cart=[];
function addtocart(a){
  cart.push({...categories[a]});
  displyacart();
}
function addtocart(a){
  cart.push({...categories[a]});
  displyacart();
}
function delElement(a){
  cart.splice(a,1);
  displyacart();
}


 function displyacart(a){
  let j=0, total=0;
  document.getElementById('count').innerHTML=cart.length;
  if(cart.length==0){
    document.getElementById('cartItem').innerHTML= "Your  Cart Is Empty";
    document.getElementById('total').innerHTML= "৳" +0+".00";
  }
  else{
    document.getElementById("cartItem").innerHTML=cart.map((items)=>
    {
      var {image, title, price, url} =items;
      total=total+price;
      document.getElementById("total").innerHTML="৳"+total+".00";
      return(
          `<div class='cart-item'>
              <div class='row-img'>
              <a href="${url}  ">   <img  class='rowimg' src=${image} ></a>
              </div>
              <p style='font-size:12px;'> ${title} </p>
              <h2 style='font-size:15px;'>৳ ${price}.00 </h2>`+
              " <i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'> </i> </div>"
      );
    }).join('');
  }
 }





// // Most Sell Products
// const product_2=[
//   {
//     id:11,
//     image:'imge/dress1.png',
//     title: " Women's Dres",
//     price:200,
//   },
//   {
//     id:12,
//     image:'imge/7.png',
//     title: 'Apple',
//     price: 70,

//   },
//   {
//     id:13,
//     image:'imge/9.png',
//     title: 'Carrot',
//     price: 250,

//   },
//   {
//     id:14,
//     image:'imge/microphone1.png',
//     title: 'Sppeker',
//     price: 350,
//   }
// ];
// const categories_2=[...new Set(product_2.map((item) =>
//   {return item}))]
// let k=0;
// document.getElementById('root-2').innerHTML =categories_2.map((item)=>
// {
//    var { image,title, price} =item;
//    return(
//       `<div class="col-md-3 product-box">
//       <div class="card border-0 shadow-ms">
//           <div class="card-body active">
//               <img onclick="window.location.href='Product-single.html';" class="product-img images" src="${image}" alt="">
//                 <div class="card-text">
//                     <h2> 
//                     <a class=" product-title cart-product-title title" href=" "> ${title}</a>
//                     </h2>
//                     <div class="rating">
//                         <i class="bi bi-star-fill text-w"> </i>
//                         <i class="bi bi-star-fill text-w"> </i>
//                         <i class="bi bi-star-fill text-w"> </i>
//                         <i class="bi bi-star-fill text-w"> </i>
//                         <i class="bi bi-star-fill text-w"> </i>
//                     </div>
//                     <h3 class="price">৳ ${price}.00</h3>
//                     <div class="btn-cart d-flex " >
//                       <a class="add-to-cart-btn " > `+
//                        "<i class='bi bi-cart4' onclick='addtocart("+(k++)+")' >  Add to Cart </i>" +
//                      ` </a>
//                       <a class="add-to-favorite " >
//                         <i class="bi bi-heart "></i>
//                       </a>
//                     </div>
                    
//                 </div>
//           </div>
//       </div>
//       </div>`
//    )
// }).join('')





// ======From Code

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

  // Single page style

// var MainImg= document.getElementById("MainImg");
// var smaillimg=document.getElementsByClassName('small-img');

// smaillimg[0].onclick=function(){
//   MainImg.src=smaillimg[0].src;
// }
// smaillimg[1].onclick=function(){
//   MainImg.src=smaillimg[1].src;
// }
// smaillimg[2].onclick=function(){
//   MainImg.src=smaillimg[2].src;
// }
// smaillimg[3].onclick=function(){
//   MainImg.src=smaillimg[3].src;
// }