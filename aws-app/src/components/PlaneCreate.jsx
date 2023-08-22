import React, { useState } from 'react';
import '../css/index.css';
import planeLogo from '../asset/avion1.gif';
import { Auth } from 'aws-amplify';
import axios from 'axios';

function PlaneCreate() {
    const [formData, setFormData] = useState({
      PlaneId: 4, // Mettez la valeur souhaitée ici
      Name: '',
      Type: '',
      PlaneManufacturer: '',
      PlaneCapacity: 0,
      PlaneWeight: 0,
      PlaneSpeed: 0,
      PlaneRange: 0,
      Url: '',
    });
  

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            PlaneId: 4, // Mettez la valeur souhaitée ici
            Name: 'juJ',
            Type: 'UJJUH',
            PlaneManufacturer: 'HJJHK',
            PlaneCapacity: 598,
            PlaneWeight: 575000,
            PlaneSpeed: 940,
            PlaneRange: 15200,
            Url: 'HTTPS://fkdjdkfejfk.com',
        })
      }
      console.log('requestOptions',requestOptions)
      fetch(`https://inqez9auw6.execute-api.eu-west-2.amazonaws.com/prod/planes`, requestOptions)
        .then(res => res.json())
        .then((msg) => {
            console.log(msg)
          }
        ).catch((err) => {
        console.log(err);
      })
    /*
    try {
      const response = await axios.post(
        'https://inqez9auw6.execute-api.eu-west-2.amazonaws.com/prod/planes',
        formData
      );

      if (response.status === 200) {
        console.log('Data sent successfully!');
        // Réinitialiser le formulaire après envoi
        setFormData({
          PlaneId: 4,
          Name: '',
          Type: '',
          PlaneManufacturer: '',
          PlaneCapacity: 0,
          PlaneWeight: 0,
          PlaneSpeed: 0,
          PlaneRange: 0,
          Url: '',
        });
      }
    } catch (error) {
      console.error('Error sending data: ', error);
    }*/
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
                                    </div >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-column w-col w-col-9">
                        <div class="post-wrapper">
                            <div class="post-content">
                                <div class="form-wrapper w-form">
                                <form
                                    id="plane-form"
                                    name="plane-form"
                                    data-name="Plane Form"
                                    method="post"
                                    data-wf-page-id="5e4b1a54e48aed2fe71ff231"
                                    data-wf-element-id="17c5e4f0-de69-e391-efc3-33fdb018902c"
                                    onSubmit={handleSubmit}
                                    >
                                    <label htmlFor="Name">Plane Name<span className="required" style={{ color: "red" }}> *</span></label>
                                    <input
                                        type="text"
                                        id="Name"
                                        className="text-field w-input"
                                        maxLength="256"
                                        name="Name"
                                        data-name="Name"
                                        placeholder="Airbus A380"
                                        value={formData.Name}
                                        onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                                    />

                                    <label htmlFor="Type">Plane Type<span className="required" style={{ color: "red" }}> *</span></label>
                                    <input
                                        type="text"
                                        id="Type"
                                        className="text-field w-input"
                                        maxLength="256"
                                        name="Type"
                                        data-name="Type"
                                        placeholder="Wide-body Commercial Airliner"
                                        value={formData.Type}
                                        onChange={(e) => setFormData({ ...formData, Type: e.target.value })}
                                    />

                                    <label htmlFor="PlaneManufacturer">Plane Manufacturer<span className="required" style={{ color: "red" }}> *</span></label>
                                    <input
                                        type="text"
                                        id="PlaneManufacturer"
                                        className="text-field w-input"
                                        maxLength="256"
                                        name="PlaneManufacturer"
                                        data-name="PlaneManufacturer"
                                        placeholder="Airbus"
                                        value={formData.PlaneManufacturer}
                                        onChange={(e) => setFormData({ ...formData, PlaneManufacturer: e.target.value })}
                                    />

                                    <label htmlFor="PlaneCapacity">Plane Capacity<span className="required" style={{ color: "red" }}> *</span></label>
                                    <input
                                        type="number"
                                        id="PlaneCapacity"
                                        className="text-field w-input"
                                        min="1"
                                        max="850"
                                        name="PlaneCapacity"
                                        data-name="PlaneCapacity"
                                        placeholder="850"
                                        value={formData.PlaneCapacity}
                                        onChange={(e) => setFormData({ ...formData, PlaneCapacity: parseInt(e.target.value) })}
                                    />

                                    <label htmlFor="PlaneWeight">Plane Weight (in kg)<span className="required" style={{ color: "red" }}> *</span></label>
                                    <input
                                        type="number"
                                        id="PlaneWeight"
                                        className="text-field w-input"
                                        min="100000"
                                        max="575000"
                                        name="PlaneWeight"
                                        data-name="PlaneWeight"
                                        placeholder="575000"
                                        value={formData.PlaneWeight}
                                        onChange={(e) => setFormData({ ...formData, PlaneWeight: parseInt(e.target.value) })}
                                    />

                                    <label htmlFor="PlaneSpeed">Plane Speed (in km/h)<span className="required" style={{ color: "red" }}> *</span></label>
                                    <input
                                        type="number"
                                        id="PlaneSpeed"
                                        className="text-field w-input"
                                        min="900"
                                        max="1000"
                                        name="PlaneSpeed"
                                        data-name="PlaneSpeed"
                                        placeholder="945"
                                        value={formData.PlaneSpeed}
                                        onChange={(e) => setFormData({ ...formData, PlaneSpeed: parseInt(e.target.value) })}
                                    />

                                    <label htmlFor="PlaneRange">Plane Range (in km)<span className="required" style={{ color: "red" }}> *</span></label>
                                    <input
                                        type="number"
                                        id="PlaneRange"
                                        className="text-field w-input"
                                        min="15000"
                                        max="15400"
                                        name="PlaneRange"
                                        data-name="PlaneRange"
                                        placeholder="15200"
                                        value={formData.PlaneRange}
                                        onChange={(e) => setFormData({ ...formData, PlaneRange: parseInt(e.target.value) })}
                                    />

                                    <label htmlFor="Url">Plane Image URL<span className="required" style={{ color: "red" }}> *</span></label>
                                    <input
                                        type="url"
                                        id="Url"
                                        className="text-field w-input"
                                        name="Url"
                                        data-name="Url"
                                        placeholder="https://example.com/airbus_a380.jpg"
                                        value={formData.Url}
                                        onChange={(e) => setFormData({ ...formData, Url: e.target.value })}
                                    />

                                    <input type="submit" value="Create" className="button_blue" id="createButton" />
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