import React, { Component } from 'react'
import GoogleMap from "./GoogleMap"

export default class Contact extends Component {    
    render() {
        return (
            <section id="Contatti" className="section contactContainer pt-5">
                <div className="container pb-4">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-8 text-center">
                            <h2 className="section-heading pt-5 pb-3 text-white">Contatti</h2>
                        </div>
                    </div>                    
                </div>
                <div className="container">
                    <div className="contactDetails">
                        <div className="CDBox">
                            <figure><i className="fa fa-map-pin"></i></figure>
                            <h5>UFFICIO</h5>
                            <p>ComoNExT - Innovation Hub <br></br>Via Cavour, 2 - 22074 Lomazzo (CO)</p>
                        </div>
                        <div className="CDBox">
                            <figure><i className="fa fa-envelope"></i></figure>
                            <h5>E-MAIL</h5>
                            <p>contact@orwell.biz</p>
                        </div>
                        <div className="CDBox">
                            <figure><i className="fa fa-comments"></i></figure>
                            <h5>TELEFONO</h5>
                            <p>+39 02 36714750</p>
                        </div>
                    </div>
                </div>
                <GoogleMap />
            </section>            
        )
    }
}
