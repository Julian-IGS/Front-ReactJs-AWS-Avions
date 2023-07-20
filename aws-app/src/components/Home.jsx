
import '../css/index.css'; 
import planeLogo from '../asset/big-plane.png';
import { Auth } from 'aws-amplify';
import anime from 'animejs/lib/anime.es.js';
import React, { useEffect } from 'react';
import plane from '../asset/sticker-avion-vue-de-haut-removebg-preview.png';

function Home() {

    
    useEffect(() => {
        let planeItems = document.querySelectorAll('.post-content');
      
        planeItems.forEach(item => {
          item.addEventListener('mouseenter', () => {
            anime({
              targets: item,
              scale: 1.05,
              translateX: {
                value: '20px', // Décalage vers la droite
                duration: 200
              },
              duration: 200
            });
          });
      
          item.addEventListener('mouseleave', () => {
            anime({
              targets: item,
              scale: 1.0,
              translateX: {
                value: '0', // Rétablir la position initiale
                duration: 200
              },
              duration: 200
            });
          });
        });
      }, []);

      useEffect(() => {
        anime({
          targets: '.moving-image',
          translateX: [
            { value: '0vw', duration: 0 }, // position de départ
            { value: '200vw', duration: 2000 } // position finale
          ],
          easing: 'linear',
          complete: (anim) => {
            document.querySelector('.moving-image').style.display = 'none';
          }
        });
      }, []);
      
    
    
    

    async function signOut() {
        try {
          await Auth.signOut();
        } catch (error) {
          console.log('error signing out: ', error);
        }
      }

  return (
    <html data-wf-domain="denali-template.webflow.io" data-wf-page="5e4b1a54e48aed29b41ff22f" data-wf-site="5e4b1a54e48aed761d1ff229" data-wf-status="1">
    <head>
        <meta charSet="utf-8"/>
        <title>Myplane</title>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta content="Webflow" name="generator"/>
        <link href="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/css/denali-template.webflow.170e98de3.css" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com" rel="preconnect"/>
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous"/>
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
        <script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
        <link href="../src/asset/airbus.png" rel="shortcut icon" type="image/x-icon"/>
        <link href="https://assets.website-files.com/img/webclip.png" rel="apple-touch-icon"/>
    </head>
    <body>
        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navigation-bar w-nav">
            <div className="w-container">
                <a href="/" className="w-nav-brand">
                    <div className="site_name">MyPlanes </div>
                </a>
                <nav role="navigation" className="navigation-menu w-nav-menu">
                    <a className="navigation-link w-nav-link" onClick={signOut}>Sign out</a> 
                </nav>
                <div className="menu-button w-nav-button">
                    <div className="w-icon-nav-menu"></div>
                </div>
            </div>
        </div>
        <img src={plane} className="moving-image" alt="Moving Plane"/>
        <div className="content-wrapper">
            <div className="w-container">
                <div className="w-row">
                    <div className="w-hidden-small w-hidden-tiny w-col w-col-3">
                        <div className="white-wrapper">
                        <img src={planeLogo} alt="Airbus" className="circle-profile" />
                            <p className="site-description">
                            Welcome to our website! Our platform serves as a repository for existing aircraft while also allowing creativity to thrive by offering the opportunity to design your own airplane</p>
                            <div className="feature-posts-list w-dyn-list">
                                <div role="list" className="w-dyn-items">
                                    <div role="listitem" className="w-dyn-item" style={{ marginBottom: '20px' }}>
                                        
                                        <a href="./create-my-plane" className="button_blue">Create my own airplane 🛠️</a>
                                    </div >
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="content-column w-col w-col-9">
                        <div className="post-wrapper">
                            <div className="post-content">
                                <div className="body-copy w-richtext">
                                    <h1>Plane 1</h1>
                                </div>
                                <a href="/plane-details" className="button_blue">Plane details</a>
                            </div>
                        </div>
                    </div>

                    <div className="content-column w-col w-col-9">
                        <div className="post-wrapper">
                            <div className="post-content">
                                <div className="body-copy w-richtext">
                                    <h1>Plane 2</h1>
                                </div>
                                <a href="/plane-details" className="button_blue">Plane details</a>
                            </div>
                        </div>
                    </div>

                    <div className="content-column w-col w-col-9">
                        <div className="post-wrapper">
                            <div className="post-content">
                                <div className="body-copy w-richtext">
                                    <h1>Plane 3</h1>
                                </div>
                                <a href="/plane-details" className="button_blue">Plane details</a>
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
}   
export default Home;
