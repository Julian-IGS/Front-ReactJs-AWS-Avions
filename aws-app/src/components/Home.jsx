
import '../css/index.css'; 
import planeLogo from '../asset/avion1.gif';
import { Auth } from 'aws-amplify';
import anime from 'animejs/lib/anime.es.js';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    
    const [data, setData] = useState(null);

  useEffect(() => {
    // Remplacez 'url_de_votre_api' par l'URL de votre API DynamoDB
    axios.get('https://inqez9auw6.execute-api.eu-west-2.amazonaws.com/prod/planes') 
      .then((response) => {
        // La réponse de l'API est convertie en JSON et mise à jour dans l'état
        const responseData = JSON.parse(response.data.body);
        setData(responseData.Items);
      })
      .catch((error) => {
        console.error(`Il y a eu une erreur lors de l'appel de l'API : ${error}`);
      });
  }, []);




    useEffect(() => {
        let planeItems = document.querySelectorAll('.post-wrapper');
      
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


    async function signOut() {
        try {
          await Auth.signOut();
        } catch (error) {
          console.log('error signing out: ', error);
        }
      }

  return (
    
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
                                        <a href="./" className="button_blue_left">Home</a>
                                        <a href="./create-my-plane" className="button_blue_left">Create My Own Airplane</a>
                                    </div >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-row">
                        <div className="w-hidden-small w-hidden-tiny w-col w-col-3">
                            {/* Votre contenu existant */}
                        </div>
                        <div className="w-col w-col-9">
                            <div className="content-column">
                                {data && data.map((item, index) => ( 
                                    <div className="post-wrapper1" key={index}>
                                        <img src={item.Url} className="image-container" style={{float: 'right', width: '150px', height: 'auto', position: 'relative', top: '0',right: '0',border: '5px solid #047D95',}}/>
                                        <h1>{item.Name}</h1>
                                        <a href={`/plane-details?selectedPlane=${encodeURIComponent(JSON.stringify(item))}`} className="plane-details-link">Plane details</a>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5e4b1a54e48aed761d1ff229" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
        <script src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/js/webflow.bf6a5095c.js" type="text/javascript"></script>
    </body>
  );
}   
export default Home;
