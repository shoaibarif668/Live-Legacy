let menuData = "" //Menu Data To Be Mapped

function menuPage(){
    menuData+="<div class='menu_top'>";
        menuData+='<img src="./images/logo/livelegacy.png" alt="logo" class="webLogo"/>';
        menuData+='<div class="button cursorEvent" onclick="togglec()">Close</div>'
    menuData += "</div>";
    menuData+='<ul class="ul">'
        menuData+='<li class="li1 li"><a href="./home.html">Home</a></li>'
        menuData+='<li class="li2 li"><a href="./join-us.html">Member Login</a></li>'
        menuData+='<li class="li3 li"><a href="./memorial-gallery.html">Memorial Gallery</a></li>'
        menuData+='<li class="li3 li"><a href="./contact-us.html">Contact Us</a></li>'
    menuData+='</ul>'
    
    menuData+='<div class="social">'
        menuData+='<ul>'
            menuData+='<li class="social-li"><a href="./testimonial.html">Testimonials</a></li>'
            menuData+='<li class="social-li"><a href="./consult.html">Book a consultation</a></li>'
            menuData+='<li class="social-li"><a href="https://www.instagram.com/livelegacyofficial/" target="_blank">instagram</a></li>'
        menuData+='</ul>'
    menuData+='</div>'

    $('#menuDataWrapper').append(menuData); //tbody where the data is appended
}
menuPage()