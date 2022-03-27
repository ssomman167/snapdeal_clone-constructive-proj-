var arr = JSON.parse(localStorage.getItem("lindivisualProduct"));
// let {delreturn,description,hoverimg,img,name,price,quantity,rate} = arr
let {image,price,rating,review,tilte,color} = arr
document.querySelector("#lproName").textContent=tilte;
document.querySelector("title").textContent=tilte;
var img = document.createElement("img");
img.setAttribute("src",image);
img.setAttribute("width","100%");
img.setAttribute("height","100%");
document.querySelector("#limgContainer").appendChild(img);
document.querySelector("#lname").textContent=tilte;
// document.querySelector("#lin").textContent=description;
document.querySelector("#lprice").textContent=`Rs: ${price}`;

// document.getElementById("lcart").addEventListener("click",addItemToCart);
// // let carr= []
// async function addItemToCart(){
//     try{
//         let cartdata = {
//             productIds:[arr._id],
//             userId:user.user._id
//         }
//         console.log(cartdata)
//         let response = await fetch(`http://localhost:9345/carts/${arr._id}/${user.user._id}`,{
//             method:"POST",
//             body:JSON.stringify(cartdata),
//             headers:{
//                 "Content-Type":"application/json"
//             }
//         })
//         let data = await response.json()
//         console.log('data:', data)
//     } catch(err){
//         console.log(err.message)
//     }
// }
document.querySelector(".s24").addEventListener("click",myFunc1);
function myFunc1(){
    var value = document.querySelector(".s24").value;
    document.querySelector("#lno_size").textContent=value;
    arr.size = 24;
}
document.querySelector(".s26").addEventListener("click",myFunc2);
function myFunc2(){
    var value = document.querySelector(".s26").value;
    document.querySelector("#lno_size").textContent=value;
    arr.size = 26;
}
document.querySelector(".s28").addEventListener("click",myFunc3);
function myFunc3(){
    var value = document.querySelector(".s28").value;
    document.querySelector("#lno_size").textContent=value;
    arr.size = 28;
}
document.querySelector(".s30").addEventListener("click",myFunc4);
function myFunc4(){
    var value = document.querySelector(".s30").value;
    document.querySelector("#lno_size").textContent=value;
    arr.size = 30;
}
document.querySelector(".s32").addEventListener("click",myFunc5);
function myFunc5(){
    var value = document.querySelector(".s32").value;
    document.querySelector("#lno_size").textContent=value;
    arr.size = 32;
}
document.querySelector(".s34").addEventListener("click",myFunc6);
function myFunc6(){
    var value = document.querySelector(".s34").value;
    document.querySelector("#lno_size").textContent=value;
    arr.size = 34;
}
document.querySelector("#lno_col").textContent=color[0];
var colo = document.querySelector("#lcol");
colo.style.background=color[0];

document.querySelector("#laddFav").addEventListener("click",addFunction);
function addFunction(){
    var wlist = document.querySelector("#laddFav");
    wlist.style.color="red"
}