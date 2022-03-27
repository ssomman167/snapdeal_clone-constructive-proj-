let user = JSON.parse(localStorage.getItem("userData"))
console.log('user:', user)
allItemsInCart()
async function allItemsInCart(){
    try{
        let response = await fetch(`http://localhost:9345/carts/${user.user._id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        let data = await response.json()
        display(data[0].productIds)
        console.log(data)
        console.log('data:', data[0].productIds)
    } catch(err){
        console.log(err.message)
    }
}


// var lc = []
// var l = JSON.parse(localStorage.getItem("cartData"));
// let {delreturn,description,hoverimg,img,name,price,quantity,rate} = l
// lc.push(l)
// console.log('lc:', lc)
var total = 0;
// var c;
var arrTotal = []
// display();    
function display(data){
    document.querySelector("tbody").textContent="";
    
    data.map(function(ele,index){
        console.log(ele)
        let {image,price,rating,review,tilte,color,description,_id,count,title} = ele
        if(tilte==undefined) tilte = title
        price = Number(price)
        var row = document.createElement("tr")
        var col1 = document.createElement("td")
        var col2 = document.createElement("td")
        var col3 = document.createElement("td")
        var col4 = document.createElement("td")
        var img = document.createElement("img");
        var name = document.createElement("p");
        var div = document.createElement("div");
        // var info = document.createElement("p");
        var size = document.createElement("p");
        var colors = document.createElement("p");
        var sizeSpan = document.createElement("span");
        var colorSpan = document.createElement("span");

        img.setAttribute("src",image)
        img.style.marginTop="7px";
        img.setAttribute("height","130px")
        img.setAttribute("width","100px")
        col1.style.display="flex"
        col1.style.lineHeight="0px"
        div.style.marginLeft="2%"
        div.style.marginTop="10%"
        div.style.lineHeight="35px"
        // info.setAttribute("id","lin")
        size.setAttribute("id","lsc")
        colors.setAttribute("id","lsc")
        col2.setAttribute("id","lcol2")
        col4.setAttribute("id","lcol4")

        col2.textContent = "₹"+ +price 
        col4.style.textAlign="center"
        name.textContent = tilte
        // info.textContent = elem.info

        var col5=document.createElement("button");
        col5.textContent="Remove";
        col5.addEventListener("click",function(){
            deleteRow(ele,index,data);
        })
        col5.style.color="white";
        col5.style.backgroundColor="green";
        col5.style.borderRadius="3px";
        col5.style.padding="2px";
        col5.style.fontWeight="bold";
        col5.style.fontSize="10px"
        col5.style.borderRight="none";
        col5.style.borderLeft="none";
        col5.style.marginBottom="5px";
        col5.style.border="1px solid transparent"


        div.append(name,size,colors,col5)
        col1.append(img,div);
        colors.append(colorSpan)
        size.append(sizeSpan)

        var qntDiv = document.createElement("div");
        var pDiv = document.createElement("div");
        pDiv.textContent="+";
        pDiv.style.fontWeight="bold";
        var mDiv = document.createElement("div");
        mDiv.textContent="-";
        mDiv.style.fontWeight="bold";
        var cDiv = document.createElement("div");
        cDiv.textContent=1;


        qntDiv.setAttribute("id","lqntDiv");
        qntDiv.append(mDiv,cDiv,pDiv)
        col3.append(qntDiv);

        row.append(col1,col2,col3,col4)
        document.querySelector("tbody").append(row)

        mDiv.addEventListener("click",myminusFunc);
        pDiv.addEventListener("click",myplusFunc);

        let c = 1;
        // var p = ele.price
        col4.textContent="₹"+ +price * +c;

        arrTotal.push(+price)
        totalPrice(arrTotal)

        // total += p*count;
        // totalArr.push(p*count);
        // localStorage.setItem("tp",JSON.stringify(totalArr))
        function myplusFunc(){
            c++
            cDiv.innerHTML=c;
            // total += +p;
            col4.textContent="₹"+ +price * c;
            arrTotal[index] = +price * c
            totalPrice(arrTotal)
        }
        function myminusFunc(){
            if(cDiv.textContent==0){
                mDiv.removeEventListener("click",myminusFunc)
            }
            else{
                c--;
                cDiv.innerHTML=c;
                col4.textContent="₹"+price*c;
                arrTotal[index] = +price*c
                totalPrice(arrTotal)
            }
        }
    })
}
    async function deleteRow(ele,index,d){
        d.splice(index,1);
        try{
            let bo={
                productIds:d
            }
            let response = await fetch(`http://localhost:9345/carts/${user.user._id}`,{
                method:"PUT",
                body: JSON.stringify(bo),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            let data = await response.json()
            window.location.reload()
        } catch(err){
            console.log(err.message)
        }
        // var tota = JSON.parse(localStorage.getItem("tp"))
        // console.log(tota)
        // total = total- +tota[index];
        // localStorage.setItem("cartData",JSON.stringify(l));
        // display();
        // totalPrice();
    }
    var sum;
    function totalPrice(total){
        sum = total.reduce((a,b)=>{
            return a+b
        },0)
        
        document.querySelector("#lbag").textContent=sum;
        // localStorage.setItem("bagPrice",JSON.stringify(total))
        // localStorage.setItem("quntity",JSON.stringify(count))
        
    }
    document.getElementById("lcheck-out").onclick = ()=>{
        if(sum==0 || sum==null){
            alert("Please add some product in the cart")
        } else if(user==null){
            alert("Please Login Your Account")
        } else{
            user.totalPrice = sum
            localStorage.setItem("userData",JSON.stringify(user))
            window.location.href = "DeliveryPage.html"
        }
    }
