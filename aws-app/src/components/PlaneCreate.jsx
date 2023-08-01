import React, { useState } from 'react';
import '../css/index.css'; 
import planeLogo from '../asset/avion1.gif';
import { Auth } from 'aws-amplify';
import axios from 'axios';

function PlaneCreate() {
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const [formData, setFormData] = useState({
    planeName: '',
    planeType: '',
    planeManufacturer: '',
    planeCapacity: '',
    planeWeight: '',
    planeSpeed: '',
    planeRange: '',
    planeImage: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vérifier si tous les champs obligatoires sont remplis
    const inputs = event.target.querySelectorAll("input");
    let allFilled = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        allFilled = false;
        input.classList.add("error"); // Ajouter une classe pour mettre en évidence le champ vide
      } else {
        input.classList.remove("error"); // Retirer la classe d'erreur si le champ est rempli
      }
    });

    // Afficher la popup si des champs sont vides
    if (!allFilled) {
      alert("Please fill in all required fields.");
    } else {
      // Envoyer les données du formulaire vers votre API AWS Lambda
      try {
        await axios.post('https://inqez9auw6.execute-api.eu-west-2.amazonaws.com/prod/planes', formData);

        // Réinitialiser le formulaire après l'envoi réussi
        setFormData({
          planeName: '',
          planeType: '',
          planeManufacturer: '',
          planeCapacity: '',
          planeWeight: '',
          planeSpeed: '',
          planeRange: '',
          planeImage: '',
        });

        alert('The form has been successfully submitted.');
} catch (error) {
    console.error('Error while submitting the form:', error);
    alert('An error occurred while submitting the form. Please try again later.');
      }
    }
  };

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
                                    </div >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-column w-col w-col-9">
                        <div class="post-wrapper">
                            <div class="post-content">
                                <div class="form-wrapper w-form">
                                    <form id="plane-form" name="plane-form" data-name="Plane Form" method="post" data-wf-page-id="5e4b1a54e48aed2fe71ff231" data-wf-element-id="17c5e4f0-de69-e391-efc3-33fdb018902c" onSubmit={handleSubmit}>
                                        <label for="planeName">Plane Name<span class="required" style={{ color: "red" }}> *</span></label>
                                        <input type="text" id="planeName" class="text-field w-input" maxlength="256" name="planeName" data-name="PlaneName" placeholder="Airbus A380"  />
                                       
                                        <label for="planeType">Plane Type<span class="required" style={{ color: "red" }}> *</span></label>
                                        <input type="text" id="planeType" class="text-field w-input" maxlength="256" name="planeType" data-name="PlaneType" placeholder="Wide-body Commercial Airliner" />

                                        <label for="planeManufacturer">Plane Manufacturer<span class="required" style={{ color: "red" }}> *</span></label>
                                        <input type="text" id="planeManufacturer" class="text-field w-input" maxlength="256" name="planeManufacturer" data-name="PlaneManufacturer" placeholder="Airbus"  />

                                        <label for="planeCapacity">Plane Capacity<span class="required" style={{ color: "red" }}> *</span></label>
                                        <input type="number" id="planeCapacity" class="text-field w-input" min="1" max="850" name="planeCapacity" data-name="PlaneCapacity" placeholder="850"  />

                                        <label for="planeWeight">Plane Weight (in kg)<span class="required" style={{ color: "red" }}> *</span></label>
                                        <input type="number" id="planeWeight" class="text-field w-input" min="100000" max="575000" name="planeWeight" data-name="PlaneWeight" placeholder="575000"  />

                                        <label for="planeSpeed">Plane Speed (in km/h)<span class="required" style={{ color: "red" }}> *</span></label>
                                        <input type="number" id="planeSpeed" class="text-field w-input" min="900" max="1000" name="planeSpeed" data-name="PlaneSpeed" placeholder="945"  />

                                        <label for="planeRange">Plane Range (in km)<span class="required" style={{ color: "red" }}> *</span></label>
                                        <input type="number" id="planeRange" class="text-field w-input" min="15000" max="15400" name="planeRange" data-name="PlaneRange" placeholder="15200"  />

                                        <label for="planeImage">Plane Image URL<span class="required" style={{ color: "red" }}> *</span></label>
                                        <input type="url" id="planeImage" class="text-field w-input" name="planeImage" data-name="PlaneImage" placeholder="https://example.com/airbus_a380.jpg" />

                                        <input type="submit" value="Create" class="button_blue" id="createButton" />
                                    </form>
                                    <div class="success-message w-form-done">
                                        <p class="success-text">Thank you! Your plane has been created!</p>
                                    </div>
                                    <div class="w-form-fail">
                                        <p>Oops! Something went wrong while submitting the form</p>
                                    </div>
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
} export default PlaneCreate;