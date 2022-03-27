

// <---------------------------------Header------------------------------>



function Header(){
    return ` <div id="MainDiv"> 
    <div id="headone"> 
        <div id="First"> 
        <p>Brand Waali Quality, Bazaar Waali Deal!</p>
        </div>
        <div id="Second"> 
            <!-- Impact@Snapdeal  Gift Cards  Help Center  Sell On Snapdeal  Download App -->
            <div> 
                <a href="">Impact@Snapdeal </a>
            </div>
            <div> 
                <a href="">Gift Cards </a>

            </div>
            <div> 
                <a href="">Help Center</a>

            </div>
            <div> 
                <a href="">Sell On Snapdeal</a>

            </div>
            <div> 
                <a href="">Download App</a>

            </div>
        </div>

    </div>
    <div id="SearchDiv"> 
        <div> 
            <a href="home.html"><img height="100%" width="100%" src="https://www.logo.wine/a/logo/Snapdeal/Snapdeal-White-Dark-Background-Logo.wine.svg" alt=""></a>
        </div>
        <div>
             <input type="text" placeholder="Search product & Brands" id="Searchinput">
        </div>
        <button id="Searchbutton">Search</button>

        <div> 
          <p> 
              Cart
            <i class="fas fa-cart-plus fa-lg"></i>

         </p>
        </div>
        <div id="signintextdiv">
                <p id="luser_name"> 
                    Sign In
                </p>

            <div id="LoginIconDiv"> 
                <i class="fas fa-user-alt fa-lg" id="SigninIcon" > 

                </i>
            </div>
            <div id="Hiddendiv"> 
                <div id="InsideHiddenDivFirst"> 
                    <div> 
                        <a href=""> 
                            <i class="far fa-user">   </i>
                        </a>  
                        <a href=""> 
                            <p>Your Account</p>    
                        </a>
                    </div>
                    <div> 
                        <a href=""> 
                            <i class="fas fa-box"></i>
                        </a>
                        <a href=""> 
                        <p>Your Orders</p>
                        </a>
                    </div>
                    <div> 
                        <a href=""> 
                            <i class="far fa-heart"></i>
                        </a>
                        <a href=""> 
                        <p>Shortlist</p>
                        </a>
                    </div>
                </div>
                <div id="InsideHiddenDivSecond"> 
                    <p style="color: #777;">If you are a new user</p>
                    <p style="color: white; font-size: 13px;" id="lregister">Register</p>
                    <button id="llogin">LOGIN</button>
                    <button id="llogout" style="display:none;">LOG OUT</button>
                </div>
            </div>
        </div>  
    </div>
</div> `
}

// link login page
// <-----------------------------------Footerone---------------------------------------->



function Footerone(){
    return`  <div id="FooterMaindiv"> 
    <div id="FooterFirstDiv"> 
        <div>
            <div> 
                <i class="fas fa-user-lock fa-3x" id="SecurePayment"></i>
                <h3>100% Secure Payments</h3>
                <p>Moving your card details to a much more secured place</p>
            </div>
        </div>
        <div> 
            <div> 
                <i class="fas fa-shield-alt fa-3x" id="shield"></i>
                <h3>TRUSTPAY</h3>
                <p>100% Payment Protection.<br/>Easy Return Policy</p>
            </div>
            
        </div>
        <div> 
            <div> 
                <i class="fas fa-phone-square-alt fa-3x" id="HelpDesk"></i>
                <h3>HELP CENTRE</h3>
                <p>Got a question? Look no further.<br/>Browse our FAQs or submit your query here.</p>
            </div>
        </div>
        <div> 
           <div> 
            <i class="fas fa-mobile-alt fa-3x" id="MobileShop"></i>
            <h3> SHOP ON THE GO</h3>
            <p> Download the app and get exciting <br/> app only offers at your fingertips</p>
           </div>
        </div>
    </div>
    <div id="FooterSecondDiv"> 
        <div> 
            <div style="width: 18%;"> 
                <p class="footerPtag"> POLICY INFO </p>
                <ul style="list-style-type:none;" class="listoffooter"> 
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Sale</a></li>
                    <li><a href="">Terms of Use</a></li>
                    <li><a href="">Report Abuse and Takedown Policy</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div style="width: 18%;"> 
                <p class="footerPtag"> COMPANY </p>
                <ul style="list-style-type:none;" class="listoffooter"> 
                    <li><a href="">Imapct@Snapdeal</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Sitemap</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
            </div>
            <div style="width: 18%;"> 
                <p class="footerPtag"> SNAPDEAL BUSINESS </p>
                <ul style="list-style-type:none;" class="listoffooter"> 
                    <li><a href="">Shooping App</a></li>
                    <li><a href="">Sell on snapdeal</a></li>
                    <li><a href="">Media Enquries</a></li>
                </ul>
            </div>
            <div style="width: 18%;"> 
                <p class="footerPtag"> POPULAR LINKS </p>
                <ul style="list-style-type:none;" class="listoffooter"> 
                    <li><a href="">Lehenga</a></li>
                    <li><a href="">Headphones</a></li>
                    <li><a href="">Kid's Clothing</a></li>
                    <li><a href="">Sarees</a></li>
                    <li><a href="">Shoes</a></li>
                    <li><a href="">Winter Wear</a></li>
                    <li><a href="">Shirt For Men</a></li>
                </ul>
            </div>
            <div style="width: 30%;"> 
                <p class="footerPtag">SUBSCRIBE</p>
                <input type="text" id="emailid" placeholder="Your Email Address">
                <button id="emialbtn"> SUBSCRIBE</button>
                <p style="color:#a4a3a3;">Register now to get updates on promotions andcoupons. <span><a href=""  id="Downloadnow">Or Download App</a></span> </p>

            </div>
        </div>
    </div>
    <div id="FooterthirdDiv"> 
        <div> 
             <p class="pymenttext">PAYMENT</p>
             <div id="CardDiv"> 
                <img src="https://img.icons8.com/color/344/visa.png" alt="">
                <img src="https://img.icons8.com/color/344/mastercard-credit-card.png" alt="">
                <img src="https://img.icons8.com/color/344/bank-card-back-side.png" alt="">
                <img src="https://img.icons8.com/color/344/mastercard.png" alt="">
                <img src="https://img.icons8.com/color/344/amex.png" alt="">
                <img src="https://img.icons8.com/color/344/membership-card.png" alt="">
             </div>

        </div>
        <div> 
            <p class="pymenttext">CONNECT</p>
            <div id="socialmedia"> 
                <a href="https://www.facebook.com/">
                <img src="https://i4.sdlcdn.com/img/footer/facebook@4x.png" alt="" height="100%">
                </a>
                <img src="https://i1.sdlcdn.com/img/footer/twitter@4x.png" alt="">
                <img src="https://i4.sdlcdn.com/img/footer/instagram@4x.png" alt="">
                <img src="https://i2.sdlcdn.com/img/footer/linkedin@4x.png" alt="">
                <img src="https://i1.sdlcdn.com/img/footer/youtube@4x.png" alt="">

            </div>
        </div>
    </div>

</div>`
}



// <-----------------------------------FooterSecond---------------------------------------->






function FooterSecond(){
    return` <div id="MainDivFootersecond"> 
    <div id="footersecondinsideDiv"> 
        <div> 
            <p>
                <span> <a href="">Online Shopping:</a> </span> <a href="">Mens Footwear</a> <span class="Slash">/</span> <a href="">Lehenga</a> <span class="Slash">/</span> <a href=""> Dresses</a><span class="Slash">/</span> <a href="">Womens Watches</a> <span class="Slash">/</span> <a href="">Kurtis</a><span class="Slash">/</span> <a href="">Womens Footwear</a> <span class="Slash">/</span>
                <a href="">Sarees</a><span class="Slash">/</span><a href="">Casual Shoes</a><span class="Slash">/</span> <a href=""> Mens Watches</a><span class="Slash">/</span> <a href="">Womens Casual Shoes </a> <span class="Slash">/</span> <a href="">Frocks</a> <span class="Slash">/</span> <a href="">Women Suits</a> <span class="Slash">/</span> <a href="">Tops & Tunics</a> <span class="Slash">/</span> <a href="">Gowns </a> <span class="Slash">/</span>
                <a href="">Watches </a> <span class="Slash">/</span> <a href="">Sports & Bicycles</a> <span class="Slash">/</span> <a href=""> Water Geysers</a> <span class="Slash">/</span> <a href="">Men's Sportswear</a><span class="Slash">/</span> <a href=""> Kids T-shirts</a> <span class="Slash">/</span> <a href="">Kids Watches</a><span class="Slash">/</span> <a href="">Stationery Supplies</a> <span class="Slash">/</span> <a href="">Baby Care Products</a><span class="Slash">/</span> <a href="">Copper Water Bottles</a>
            </p>

        </div>
        <div> 
            <p>
                <span> <a href="">Men's Clothing:</a> </span><a href="">Mens Footwear</a> <span class="Slash">/</span> <a href="">Shirts </a> <span class="Slash">/</span>  <a href=""> Casual Shirts</a> <span class="Slash">/</span>  <a href="">Full Sleeves Casual Shirts</a> <span class="Slash">/</span>  <a href="">Formal Shirts </a> <span class="Slash">/</span>  <a href="">Full Sleeves Formal Shirts</a> <span class="Slash">/</span> 
                <a href="">Regular Fit Formal Shirts  </a> <span class="Slash">/</span>  <a href="">Cotton Shirts</a> <span class="Slash">/</span>  <a href=""> T Shirts</a> <span class="Slash">/</span>  <a href="">Polo T shirts</a> <span class="Slash">/</span>  <a href="">  V Neck T shirts</a> <span class="Slash">/</span>  <a href=""> Polo T shirts </a> <span class="Slash">/</span>  <a href="">Henley T shirts</a> <span class="Slash">/</span>  <a href="">Printed T shirts</a> <span class="Slash">/</span>  <a href="">Round Neck T shirts</a> <span class="Slash">/</span> 
                <a href="">Hooded Sweatshirts  </a> <span class="Slash">/</span>  <a href="">Jackets </a> <span class="Slash">/</span>  <a href=""> Trousers & Chinos</a> <span class="Slash">/</span>  <a href="">Low Rise Jeans</a> <span class="Slash">/</span>  <a href="">  Slim Jeans </a> <span class="Slash">/</span>  <a href="">Kurta Payjama Sets </a> <span class="Slash">/</span>  <a href="">Dhoti Kurta Sets</a>                  
            </p>
        </div>
        <div> 
        <p>
            <span> <a href="">Women's Clothing:</a> </span><a href="">Saree </a> <span class="Slash">/</span><a href="">Designer Saree </a> <span class="Slash">/</span> <a href=""> Cotton Sarees</a> <span class="Slash">/</span> <a href=""> Georgette Sarees</a> <span class="Slash">/</span> <a href="">Chiffon Sarees </a> <span class="Slash">/</span> <a href="">Net Sarees</a> <span class="Slash">/</span>
            <a href="">Anarkali Suits</a> <span class="Slash">/</span> <a href="">Kurtis </a> <span class="Slash">/</span> <a href="">Leggings & Churidars</a> <span class="Slash">/</span> <a href="">Embroidered Lehengas</a> <span class="Slash">/</span> <a href="">Black Dresses </a> <span class="Slash">/</span> <a href="">Jeggings </a> <span class="Slash">/</span> <a href="">Jeans </a> <span class="Slash">/</span> <a href="">A Line Skirts</a> <span class="Slash">/</span> <a href="">Women's Gowns</a> <span class="Slash">/</span> <a href="">Women's Dresses</a>             
        </p>
        </div>
        <div> 
            <p> 
            <span> <a href="">Mobiles Accessories:</a> </span><a href="">Smart Watches</a> <span class="Slash">/</span> <a href="">Mobile Covers </a> <span class="Slash">/</span>  <a href=""> Leather Mobile Covers </a> <span class="Slash">/</span>  <a href=""> Printed Back Covers</a> <span class="Slash">/</span>  <a href="">10000mAh Power Banks </a> <span class="Slash">/</span>  <a href="">Ambrane Power Banks </a> <span class="Slash">/</span> 
            <a href="">Smart Watches</a> <span class="Slash">/</span>  <a href="">Fitness Bands</a> <span class="Slash">/</span>  <a href="">Tempered Glass Mobiles Screen Guards</a> <span class="Slash">/</span>  <a href="">Bluetooth Devices</a>                  
        </p>
        </div>
        <div> 
            <p> 
                <span> <a href="">Watches: </a> </span> <a href="">Mens Watches</a> <span class="Slash">/</span> <a href="">Womens Watches</a>
            </p>
        </div>
        <div> 
            <p> 
            <span> <a href="">TVs, Audio & Video:</a> </span><a href="">Speakers  </a> <span class="Slash">/</span><a href="">Headphones  </a> <span class="Slash">/</span> <a href=""> Earphones </a> <span class="Slash">/</span> <a href=""> Home Theatre Systems</a> 
            </p>
        </div>
        <div> 
            <p> 
            <span> <a href="">Home Furnishing:</a> </span><a href=""> Bed Linen </a> <span class="Slash">/</span><a href="">Bed Sheets </a> <span class="Slash">/</span> <a href=""> Bath Linen </a> <span class="Slash">/</span> <a href=""> Mattresses </a> <span class="Slash">/</span> <a href="">Curtains  </a> <span class="Slash">/</span> <a href="">Cushion Covers</a> <span class="Slash">/</span> <a href="">Pillows </a> <span class="Slash">/</span> <a href="">Carpets </a> <span class="Slash">/</span> <a href="">Kids Bedding</a>      
            </p>
        </div>
        <div> 
            <p> 
                <span> <a href="">Computers & Peripherals:</a> </span><a href="">External Hard Disks </a> <span class="Slash">/</span><a href="">Pen Drives </a> <span class="Slash">/</span> <a href=""> Memory Cards </a>      
            </p>
        </div>
        <div> 
            <p> 
                <span> <a href="">Appliances:</a> </span><a href="">Fans </a> <span class="Slash">/</span><a href="">Mircowaves  </a> <span class="Slash">/</span> <a href=""> Irons  </a> <span class="Slash">/</span> <a href="">Trimmers </a> <span class="Slash">/</span> <a href="">Hair Dryers</a>     
            </p>
        </div>
        <div> 
            <p> 
            <span> <a href="">Toys & Games:</a> </span><a href="">Soft Toys  </a> <span class="Slash">/</span><a href="">Dolls   </a> <span class="Slash">/</span> <a href=""> Earphones </a> <span class="Slash">/</span> <a href=""> Musical Toys</a> <span class="Slash">/</span> <a href="">Kids Skate Scooters</a> <span class="Slash">/</span> <a href="">Electronic Toys</a> <span class="Slash">/</span> <a href="">Toddler Toys</a> <span class="Slash">/</span> <a href="">Die Cast Vehicle</a> <span class="Slash">/</span> <a href="">Ride Ons & Scooters</a>
            </p>
        </div>
        <div> 
            <p> 
            <span> <a href="">Home & Kitchen:</a> </span><a href="">Home Decor  </a> <span class="Slash">/</span><a href="">Paintings    </a> <span class="Slash">/</span> <a href=""> Clocks  </a> <span class="Slash">/</span> <a href=""> Flasks & Thermos</a> <span class="Slash">/</span> <a href="">Photo Frames</a> <span class="Slash">/</span> <a href="">Tupperware Kitchenware</a> 
            </p>
        </div>
        <div> 
            <p> 
          <span> <a href="">FMCG Offer - Top Brands:</a> </span><a href=""> Accu-Chek Health Monitoring Devices </a> <span class="Slash">/</span><a href="">Nutraj - California Walnuts </a> <span class="Slash">/</span> <a href=""> Park Avenue </a> <span class="Slash">/</span> <a href=""> Gillette  </a> <span class="Slash">/</span> <a href="">KamaSutra  </a>       
            </p>
        </div>
        <div> 
            <p> 
          <span> <a href="">Memory Cards:</a> </span><a href=""> 8 GB Memory Cards </a> <span class="Slash">/</span><a href="">16 GB Memory Cards </a> <span class="Slash">/</span> <a href=""> 32 GB Memory Cards </a> <span class="Slash">/</span> <a href=""> 64 GB Memory Cards </a>            
            </p>
        </div>
        <div> 
            <p> 
          <span> <a href="">Books:</a> </span><a href=""> Fiction  </a> <span class="Slash">/</span><a href="">Non Fiction </a> <span class="Slash">/</span> <a href=""> Children & Young Adults </a> <span class="Slash">/</span> <a href=""> Competitive Exams  </a> <span class="Slash">/</span> <a href="">School Books</a> <span class="Slash">/</span> <a href="">Academic Texts</a> <span class="Slash">/</span> <a href="">Reference </a> <span class="Slash">/</span> <a href="">Self Help</a>          
            </p>
        </div>

        <p id="lasttext"> 
            Snapdeal is India's leading pure-play value Ecommerce platform. Founded in 2010 by Kunal Bahl and Rohit Bansal,
            Snapdeal is one of the top four online lifestyle shopping destinations of India. Snapdeal brings together a wide assortment
            of good quality and value- priced merchandise on its platform. Snapdeal's vision is to enable the shoppers of Bharat to 
            experience the joy of living their aspirations through reliable, value-for-money shopping. With a personalized, multilingual
            interface and cutting edge technology, Snapdeal has simplified the shopping experience for its value-conscious buyers by 
            showcasing the most relevant products- products that are a good functional fit with their needs and of a quality that lasts-
            thereby delivering true value to its customers. With its commitment to high service standards, Snapdeal suppliers operate
            under a well structured ecosystem that enables them to offer great quality products at affordable prices. With majority of
            the value-seeking, middle-income, price-conscious buyers coming from the non-metros, Snapdeal's logistics networks powered
            by third party logistics cover more than 96% of India's pin codes enabling order deliveries to more than 2500 towns and 
            cities and expanding. Further, Snapdeal's mission is to become India's value lifestyle omni-channel leader. 
            We are excited about continuing to build a complete ecosystem around value commerce, where we can serve Bharat 
            consumers wherever they are on their offline to online shopping journey.
        </p>
       
        
    </div>
</div>
<div id="lastDiv"> 
    <div> 
        <p>Copyright © 2021, Snapdeal Limited. All Rights Reserved</p>
    </div>
    <div> 
        <p>Made for Bharat <i class="fas fa-heart" style="color: #fd4b4b;"></i></p>
    </div>

</div>`
}



export{Header,Footerone,FooterSecond}



// ==> for Header <==
// <script type="module"> 
//  import{ Header } from "./compo/header.js"
//  let headerDiv = document.getElementById("")
//  headerDiv.innerHTML = Header()
// </script>



// == > forFooterone < ==
/* <script type="module"> 
import{Footerone} from "./compo/header.js"
let FooterOneDiv= document.getElementById("")
FooterOneDiv.innerHTML = Footerone()
</script> */



// == > For FooterSecond < ==
/* <script type="module"> 
import{FooterSecond} from"./compo/header.js"
let FooterSecondDiv = document.getElementById("KSJR")
FooterSecondDiv.innerHTML=FooterSecond()
</script> */