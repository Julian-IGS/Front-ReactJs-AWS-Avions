import React from 'react';
import '../css/index.css'; 
import airbusImage from '../asset/logo.PNG';


function Home() {
  return (
    <html data-wf-domain="denali-template.webflow.io" data-wf-page="5e4b1a54e48aed29b41ff22f" data-wf-site="5e4b1a54e48aed761d1ff229" data-wf-status="1">
    <head>
        <meta charset="utf-8"/>
        <title>About</title>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta content="Webflow" name="generator"/>
        <link href="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/css/denali-template.webflow.170e98de3.css" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com" rel="preconnect"/>
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous"/>
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
        <link href="../src/asset/airbus.png" rel="shortcut icon" type="image/x-icon"/>
        <link href="https://assets.website-files.com/img/webclip.png" rel="apple-touch-icon"/>
    </head>
    <body>
        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navigation-bar w-nav">
            <div class="w-container">
                <a href="/" class="w-nav-brand">
                    <div class="site-name">MyAirbusPlane</div>
                </a>
                <nav role="navigation" class="navigation-menu w-nav-menu">
                <a href="/Login" class="navigation-link w-nav-link">Login</a>
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
                        <img src={airbusImage} alt="Airbus" className="circle-profile" />
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
                                <div class="body-copy w-richtext">
                                    <h1>Plane 1</h1>
                                </div>
                                <a href="/about" class="button_blue">Plane details</a>
                            </div>
                        </div>
                    </div>

                    <div class="content-column w-col w-col-9">
                        <div class="post-wrapper">
                            <div class="post-content">
                                <div class="body-copy w-richtext">
                                    <h1>Plane 2</h1>
                                </div>
                                <a href="/about" class="button_blue">Plane details</a>
                            </div>
                        </div>
                    </div>

                    <div class="content-column w-col w-col-9">
                        <div class="post-wrapper">
                            <div class="post-content">
                                <div class="body-copy w-richtext">
                                    <h1>Plane 3</h1>
                                </div>
                                <a href="/about" class="button_blue">Plane details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5e4b1a54e48aed761d1ff229" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/js/webflow.bf6a5095c.js" type="text/javascript"></script>
    </body>
</html>

  );
}   
export default Home;
