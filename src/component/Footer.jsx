import React from 'react'
import './footer.css'


const Footer = () => {
  return (
     <div>
     <div  className="footer-section">
     <div className="container">
         <div className="footer-cta pt-5 pb-5">
             <div className="row">
                 <div className="col-xl-4 col-md-4 mb-30">
                     <div className="single-cta">
                         <i className="fas fa-map-marker-alt"></i>
                         <div className="cta-text">
                             <h4>Find us</h4>
                             <span>1010 Avenue, sw 54321, Chandigarh</span>
                         </div>
                     </div>
                 </div>
                 <div className="col-xl-4 col-md-4 mb-30">
                     <div className="single-cta">
                         <i className="fas fa-phone"></i>
                         <div className="cta-text">
                             <h4>Call us</h4>
                             <span>9876543210</span>
                         </div>
                     </div>
                 </div>
                 <div className="col-xl-4 col-md-4 mb-30">
                     <div className="single-cta">
                         <i className="far fa-envelope-open"></i>
                         <div className="cta-text">
                             <h4>Mail us</h4>
                             <span>shreysinghtech03@gmail.com</span>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div class="footer-content pt-5 pb-5">
             <div class="row">
                 <div class="col-xl-4 col-lg-4 mb-50">
                     <div class="footer-widget">
                         <div class="footer-text">
                             <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                             elit,Lorem ipsum dolor sit amet.</p>
                         </div>
                         <div class="footer-social-icon">
                             <span>Follow us</span>
                             <a href="https://www.facebook.com/Lehenga/"><i class="fab fa-facebook-f facebook-bg"></i></a>
                             <a href="https://twitter.com/AndLehenga"><i class="fab fa-twitter twitter-bg"></i></a>
                             <a href="https://www.perniaspopupshop.com/clothing/lehenga"><i class="fab fa-google-plus-g google-bg"></i></a>
                             <a href="https://www.instagram.com/lehenga_bazaar/?hl=en"><i class="fab fa-instagram instagram-bg"></i></a>
                         </div>
                     </div>
                 </div>
                 <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                     <div class="footer-widget">
                        
                     </div>
                 </div>
                 <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                     <div class="footer-widget">
                         <div class="footer-widget-heading">
                             <h3>Subscribe</h3>
                         </div>
                         <div class="footer-text mb-25">
                             <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                         </div>
                         <div class="subscribe-form">
                             <form action="#">
                                 <input type="text" placeholder="Email Address"/>
                                 <button><i class="fab fa-telegram-plane"></i></button>
                             </form>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     <div class="copyright-area">
         <div class="container">
             <div class="row">
                 <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                     <div class="copyright-text">
                         <p>Copyright &copy; 2023, All Right Reserved</p>
                     </div>
                 </div>
                 <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                     <div class="footer-menu">
                         <ul>
                             <li><a href='/'>Home</a></li>
                             <li><a href='/component/women'>Women</a></li>
                             <li><a href='/component/men'>Men</a></li>
                             <li><a href='/component/kids'>Kids</a></li>
                             <li><a href='/component/jewellery'>Jewellery</a></li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
 </div>
  )
}

export default Footer
