
import '../css/index.css'; 
import planeLogo from '../asset/avion1.gif';
import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Details() {

    const [selectedPlane, setSelectedPlane] = useState(null);

    useEffect(() => {
        // Retrieve the selected airplane data from the URL query parameters
        const urlParams = new URLSearchParams(window.location.search);
        const selectedPlaneParam = urlParams.get('selectedPlane');
        if (selectedPlaneParam) {
            setSelectedPlane(JSON.parse(decodeURIComponent(selectedPlaneParam)));
        }
    }, []);

    
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
        <title>Myplanes</title>
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
        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navigation-bar w-nav">
            <div className="w-container">
                <a href="/" className="w-nav-brand">
                    <div className="site_name">MyPlanes</div>
                </a>
                <nav role="navigation" className="navigation-menu w-nav-menu">
                    <a className="navigation-link w-nav-link" onClick={signOut}>Log out</a> 
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
                                        <a href="./create-my-plane" className="button_blue">Create My Own Airplane </a>
                                    </div >
                                </div>
                            </div>
                        </div>
                    </div>                    
                    <div class="content-column w-col w-col-9">
                        <div class="post-wrapper">
                        <div class="post-content">
                            <div class="body-copy w-richtext">
                                {selectedPlane && (
                                    <div className="post-wrapper">
                                        <h1>Plane Information</h1>
                                        <div class="plane-data">
                                            <p><strong>Plane Name:</strong> <span id="displayPlaneName">{selectedPlane.Name}</span></p>
                                            <p><strong>Plane Type:</strong> <span id="displayPlaneType">{selectedPlane.Type}</span></p>
                                            <p><strong>Plane Manufacturer:</strong> <span id="displayPlaneManufacturer">{selectedPlane.PlaneManufacturer}</span></p>
                                            <p><strong>Plane Capacity:</strong> <span id="displayPlaneCapacity">{selectedPlane.PlaneCapacity}</span></p>
                                            <p><strong>Plane Weight (in kg):</strong> <span id="displayPlaneWeight">{selectedPlane.PlaneWeight}</span></p>
                                            <p><strong>Plane Speed (in km/h):</strong> <span id="displayPlaneSpeed">{selectedPlane.PlaneSpeed}</span></p>
                                            <p><strong>Plane Range (in km):</strong> <span id="displayPlaneRange">{selectedPlane.PlaneRange}</span></p>
                                            <img src={selectedPlane.Url} className="image-container" style={{  width: '350px', height: 'auto', position: 'relative', top: '0',right: '0',border: '5px solid #047D95',}}/>
                                        </div>
                                    </div>
                                )}
                            </div>
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
} export default Details;