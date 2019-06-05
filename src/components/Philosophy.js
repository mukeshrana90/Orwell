import React, { Component } from 'react'
import $ from 'jquery'

import image1 from "../images/child-playing-commodore-64-mazinger-1986.jpg"
import image2 from "../images/alex-anderson-fake-candidate-us-elections-2016.jpg"
import image3 from "../images/alessandro-nardone-web-marketing-festival.jpg"
import image4 from "../images/orwell-libro-nardone-1.jpg"

export default class Philosophy extends Component {
    componentDidMount() {
        $('.tabLinks li a').click(function () {
            $('.tabLinks li a .tabLinkBox').removeClass('active');
            $(this).find('.tabLinkBox').addClass('active');
            var myAttr = $(this).attr('data-attr');
            $('.tabsContent .tab').removeClass('active')
            $(`#${myAttr}`).addClass('active');
        });
    }
    render() {
        return (
            <section id="Filosofia" className="section py-5">
                <div className="container-fluid p-0">
                    <div className="tabsContainer">
                        <div className="tabsContent">
                            <div className="tab active" id="tab1" style={{ backgroundImage: `url(${image1})` }}>a</div>
                            <div className="tab" id="tab2" style={{ backgroundImage: `url(${image2})` }}></div>
                            <div className="tab" id="tab3" style={{ backgroundImage: `url(${image3})` }}></div>
                            <div className="tab" id="tab4" style={{ backgroundImage: `url(${image4})` }}></div>
                        </div>
                        <div className="tabLinks">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="javascript:;" data-attr="tab1">
                                        <div className="tabLinkBox active">
                                            <figure><i className="fa fa-tv"></i></figure>
                                            <div className="TBLContent">
                                                <h5>Una storia</h5>
                                                <p>Che coincide con quella della rivoluzione digitale, che Alessandro Nardone ha vissuto per intero: Pong e Atari 2600, Commodore 64 e Amiga, per poi affacciarsi sin da subito a Internet e alla costruzione di siti web.</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;" data-attr="tab2">
                                        <div className="tabLinkBox">
                                            <figure><i className="fa fa-globe"></i></figure>
                                            <div className="TBLContent">
                                                <h5>Una case history</h5>
                                                <p>Quella di Alex Anderson, che ha fatto il giro del mondo. Alessandro è riuscito a sfidare Trump e Hillary Clinton costruendo da zero un candidato fake capace di catalizzare l'opinione pubblica utilizzando unicamente la Rete.</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;" data-attr="tab3">
                                        <div className="tabLinkBox">
                                            <figure><i className="fa fa-eye"></i></figure>
                                            <div className="TBLContent">
                                                <h5>Una vision</h5>
                                                <p>Quella che Alessandro ha maturato lungo tutto il suo percorso e grazie a ogni sua singola esperienza, personale e professionale. Visione che gli ha consentito di dare vita alla case history di Alex Anderson e di immaginare e, successivamente, creare Orwell.</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;" data-attr="tab4">
                                        <div className="tabLinkBox">
                                            <figure><i className="fa fa-book"></i></figure>
                                            <div className="TBLContent">
                                                <h5>Una filosofia</h5>
                                                <p>Orwell è anzitutto una filosofia, un modo di vedere le cose, un approccio. Conoscere ogni fase della rivoluzione digitale per vivere la Rete da protagonisti e non da schiavi, utilizzandone gli strumenti per comunicare con successo.</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
