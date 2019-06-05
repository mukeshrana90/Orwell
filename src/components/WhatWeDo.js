import React from 'react'

export default function WhatWeDo() {
    return (
        <section id="CosaFacciamo" className="section text-center mt-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="section-heading mb-4 mt-5">La comunicazione è ovunque</h2>
                        <p className="section-subheading">Orwell è il sistema che rivoluzionerà il mondo della comunicazione</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-4">
                        <div className="iconBox">
                            <figure><i className="fa fa-book"></i></figure>
                            <h4>Method</h4>
                            <p>The book embodies Orwell's philosophy, the necessary approach to understand the contemporary context and communicate with success.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="iconBox">
                            <figure><i className="fa fa-user-circle-o"></i></figure>
                            <h4>Academy</h4>
                            <p>La formazione per comunicare ai massimi livelli: partendo dalla filosofia di Orwell potrai arrivare dovunque vorrai.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="iconBox">
                            <figure><i className="fa fa-globe"></i></figure>
                            <h4>Web Platform</h4>
                            <p>Lo strumento che rivoluzionerà il lavoro dei professionisti di comunicazione e informazione.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
