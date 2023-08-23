  // Single page style

  var MainImg= document.getElementById("MainImg");
  var smaillimg=document.getElementsByClassName('small-img');
  
  smaillimg[0].onclick=function(){
    MainImg.src=smaillimg[0].src;
  }
  smaillimg[1].onclick=function(){
    MainImg.src=smaillimg[1].src;
  }
  smaillimg[2].onclick=function(){
    MainImg.src=smaillimg[2].src;
  }
  smaillimg[3].onclick=function(){
    MainImg.src=smaillimg[3].src;
  }



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