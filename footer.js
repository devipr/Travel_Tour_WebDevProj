function footer() {
    return `<div id="main">
    <div id="upper_left">
        <div id="left_one">
            <p>About Us</p>
            <p>Resources and Policies</p>
            <p>Trust & Safety</p>
            <P>Contact us</P>
        </div>
        <div id="left_two">
            <p>Explore</p>
            <p>Write a review</p>
            <p>Add a Place</p>
            <p>Help Centre</p>
            <p>Travel Articles</p>
        </div>
        <div id="left_three">
            <P>Access our Content API</P>
            <p>Get The App</p>
            <P>iPhone App</P>
            <p>Android App</p>
        </div>
     
    </div>
    <div id="upper_right">
        <p>Tripadvisor Sites</p>
        <p>Book tours and attraction tickets on Viator</p>
    </div>


</div>
<div id="lower">
    <div id="lower_left">
       <div id="lower_left_upper">
        <div id="lower_left_upper_left">
            <img src="data:image/png;base64,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" alt="logo">
        </div>
        <div id="lower_left_upper_right">
            <div id="lower_left_upper_right_upper">
                <p>© 2022 Tripadvisor LLC All rights reserved.</p>
            </div>
            <div id="lower_left_upper_right_lower">
                <p>Terms of Use</p>
                <P>Privacy and Cookies Statement</P>
                <p>Cookie consent</p>
                <P>Site Map</P>
                <p>How the site works</p>
                <p>Contact us</p>
            </div>
        </div>
       </div>
    </div>
    
</div>`
}
function navbar() {
    return ` <div id="logo"> 
    <a href="./index.html"><img src="https://www.hotel-yearbook.com/picture/153007157.jpg" alt="logo" /></a>
</div> 
<div id="input_tag">
     <input id="input_box" type="text"/>
</div>
<div id="Review">
     <img src="https://mpng.subpng.com/20180625/th/kisspng-computer-icons-writing-clip-art-scam-5b310754d7e896.2778623115299397968844.jpg" alt="review"/>
     <p><a href="./Newfolder/basket.html">Review</a></p>
</div>
<div id="trips">
     <img src="https://cdn-icons-png.flaticon.com/512/2/2267.png" alt="trips"/>
     <p><a href="./trip.html">Trips</a></p>
</div>
<div id="alerts">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9_IK0n3lxxsEGO16HdOqnlqa_cKJQbDQdA&usqp=CAU" alt="alerts"/>
     <p><a href="./Newfolder/basket.html">Alerts</a></p>
</div>
<div id="signin">
     <button><a href="./html/login.html">Sign in</a></button>
</div>`
}
export { navbar, footer } 