import React from 'react';
import '../css/index.css'; 
import planeLogo from '../asset/avion.png';

function Login() {
  return (
    <html data-wf-domain="denali-template.webflow.io" data-wf-page="5e4b1a54e48aed3ca91ff22b" data-wf-site="5e4b1a54e48aed761d1ff229" data-wf-status="1">
    <head>
        <meta charSet="utf-8"/>
        <title>Login</title>
        <meta content="Contact" property="og:title"/>
        <meta content="Contact" property="twitter:title"/>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta content="Webflow" name="generator"/>
        <link href="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/css/denali-template.webflow.170e98de3.css" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com" rel="preconnect"/>
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous"/>
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
        <link href="../src/asset/airbus.png" rel="shortcut icon" type="image/x-icon"/>
        <link href="https://assets.website-files.com/img/webclip.png" rel="apple-touch-icon"/>
    </head>
    <body>
    <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navigation-bar w-nav">
            <div class="w-container">
                <a href="/" class="w-nav-brand">
                    <div class="site-name">MyPlanes</div>
                </a>
                <nav role="navigation" class="navigation-menu w-nav-menu">
                <a href="/" class="navigation-link w-nav-link">Home</a>
                    <a href="/Register" class="navigation-link w-nav-link">Register</a>
                </nav>
                <div class="menu-button w-nav-button">
                    <div class="w-icon-nav-menu"></div>
                </div>
            </div>
        </div>
        <div class="content-wrapper">
            <div class="w-container">
                <div class="w-row">
                    <div class="w-hidden-small w-hidden-tiny w-col w-col-3">
                        <div class="white-wrapper">
                        <img src={planeLogo} alt="Airbus" className="circle-profile" />
                            <p class="site-description">
The global leader in aerospace. Designs and manufactures commercial aircraft, helicopters, satellites, and space systems. Innovative technology, safety, comfort, and sustainability. Tailored solutions for airlines' needs. Pushing the boundaries of aviation.</p>
                            <div class="grey-rule"></div>
                            <div class="feature-posts-list w-dyn-list">
                                <div role="list" class="w-dyn-items">
                                    <div role="listitem" class="w-dyn-item">
                                        <a href="/posts/half-and-half-variety-milk-viennese-body-cappuccino" class="small-post-link">Create my own plane</a>
                                    </div>
                                </div>
                            </div>
                            <div class="grey-rule"></div>
                            <p class="site-description"><a href="https://www.airbus.com/en">Airbus web site</a></p>
                            <div class="grey-rule"></div>
                            <div class="social-link-group">
                                <a href="#" class="social-icon-link w-inline-block">
                                    <img src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed39811ff2c6_social-03.svg" width="25" alt=""/>
                                </a>
                                <a href="#" class="social-icon-link w-inline-block">
                                    <img src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed1ad11ff2da_social-07.svg" width="25" alt=""/>
                                </a>
                                <a href="#" class="social-icon-link w-inline-block">
                                    <img src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed1f5b1ff2bf_social-18.svg" width="25" alt=""/>
                                </a>
                                <a href="#" class="social-icon-link w-inline-block">
                                    <img src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed7e751ff288_social-09.svg" width="25" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="content-column w-col w-col-9">
                        <div class="post-wrapper">
                            <div class="post-content">                              
                                <div class="form-wrapper w-form">
                                    <form id="signinForm" name="email-form" data-name="Email Form" method="get" data-wf-page-id="5e4b1a54e48aed2fe71ff231" data-wf-element-id="17c5e4f0-de69-e391-efc3-33fdb018902c">
                                        <label for="Name">Identifier</label>
                                        <input type="email" id="emailInputSignin" class="text-field w-input" maxlength="256" placeholder="Email" required/>
                                        
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="passwordInputSignin" className="text-field w-input" maxLength="256" name="password" data-name="Password" placeholder="Enter your password" pattern=".*" required/>
                                        
                                        <input type="submit" value="Login" data-wait="Please wait..." className="button w-button"/>
                                    </form>
                                    <div class="success-message w-form-done">
                                        <p class="success-text">Thank you! Your submission has been received!</p>
                                    </div>
                                    <div class="w-form-fail">
                                        <p>Oops! Something went wrong while submitting the form</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-on-mobile">
                            <div class="white-wrapper">
                                <img src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed65841ff2a5_photo-1443180236447-432ea00e6ead.jpg" alt="" class="circle-profile"/>
                                <p class="site-description">Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.</p>
                                <div class="grey-rule"></div>
                                <h2 class="small-heading">Featured Posts:</h2>
                                <div class="feature-posts-list w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item">
                                            <a href="/posts/half-and-half-variety-milk-viennese-body-cappuccino" class="small-post-link">According a funnily until pre-set or arrogant well cheerful</a>
                                        </div>
                                        <div role="listitem" class="w-dyn-item">
                                            <a href="/posts/steamed-siphon-froth-mazagran-cafe-au-lait" class="small-post-link">Overlaid the jeepers uselessly much excluding</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="grey-rule"></div>
                                <div class="social-link-group">
                                    <a href="#" class="social-icon-link w-inline-block">
                                        <img src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed39811ff2c6_social-03.svg" width="25" alt=""/>
                                    </a>
                                    <a href="#" class="social-icon-link w-inline-block">
                                        <img src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed1ad11ff2da_social-07.svg" width="25" alt=""/>
                                    </a>
                                    <a href="#" class="social-icon-link w-inline-block">
                                        <img src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed1f5b1ff2bf_social-18.svg" width="25" alt=""/>
                                    </a>
                                    <a href="#" class="social-icon-link w-inline-block">
                                        <img src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed7e751ff288_social-09.svg" width="25" alt=""/>
                                    </a>
                                </div>
                                <p class="built-with-webflow">
                                    Built with <a target="_blank" href="https://webflow.com" class="webflow-link">Webflow</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5e4b1a54e48aed761d1ff229" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
        <script src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/js/webflow.bf6a5095c.js" type="text/javascript"></script>
    </body>
</html>
  );
} export default Login;