import React, { Component } from 'react'
import $ from 'jquery'
import Team1 from "../images/team/Alessandro-Nardone.jpg"
import Team2 from "../images/team/Sergio-Malagoli.jpg"
import Team3 from "../images/team/guido-giraudo.jpg"
import Team4 from "../images/team/scorpo.jpg"

export default class Team extends Component {
    componentDidMount() {
        $('.playVideo').click(function() {
            $('.videoModal').show();
        })
        $('.videoModal').click(function() {
            $(this).hide();            
        })
    }
    state = {
        URL : "https://www.youtube.com/embed/4J5Ln_kdsaM"
    }
    pauseVideo = ()=> {
        this.setState({URL: ''})
    }
    playVideo = () => {
        this.setState({URL: 'https://www.youtube.com/embed/4J5Ln_kdsaM'})
    }

    render() {
        
        return (
            <section id="Noi" className="section mb-5 py-5">
                <div className="container pb-4">
                    <div className="row">
                        <div className="col">
                            <h2 className="section-heading text-center pb-4">Orwell siamo noi</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="teamBox">
                                <figure><img src={Team1} alt="" /></figure>
                                <h3>Alessandro Nardone</h3>
                                <p>Ceo & Founder</p>
                                <div className="teamDetails">
                                    <h3>Alessandro Nardone</h3>
                                    <p>Ceo & Founder</p>
                                    <p><small>Consulente di marketing digitale e docente allo IED di Milano e alla IATH Academy, Alessandro Nardone è autore di 6 libri. Ha sfidato Trump e Hillary Clinton sotto le mentite spoglie del giovane Congressman Alex Anderson, una case history che ha fatto il giro del mondo.</small></p>
                                    <p><a className="team-more-link" href="http://www.alexanderson.biz" target="_blank" title="sito web">sito web</a></p>
                                    <div className="team-socials">
                                        <a href="https://www.facebook.com/alessandronardone" target=" _blank" title=""><span className="fa fa-facebook"></span></a>
                                        <a href="https://www.twitter.com/alenardone" target=" _blank" title=""><span className="fa fa-twitter"></span></a>
                                        <a href="https://www.linkedin.com/in/alenardone/" target=" _blank" title=""><span className="fa fa-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="teamBox">
                                <figure><img src={Team2} alt="" /></figure>
                                <h3>Sergio Malagoli</h3>
                                <p>Cto & Co-founder</p>
                                <div className="teamDetails">
                                    <h3>Sergio Malagoli</h3>
                                    <p>Cto & Co-founder</p>
                                    <p><small>Technology strategist e formatore web, Sergio Malagoli è il Cto di Orwell. Attraverso l'esperienza maturata nel corso degli anni, aiuta aziende e imprenditori a scegliere e utilizzare le migliori tecnologie per raggiungere i propri obbiettivi.<br></br> Geek di professione e cultore della buona tecnologia.</small></p>
                                    <div className="team-socials">
                                        <a href="https://twitter.com/Gignux" target=" _blank" title=""><span className="fa fa-twitter"></span></a>
                                        <a href="https://www.linkedin.com/in/sergio-malagoli/" target=" _blank" title=""><span className="fa fa-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="teamBox">
                                <figure><img src={Team3} alt="" /></figure>
                                <h3>Guido Giraudo</h3>
                                <p>Academic Director</p>
                                <div className="teamDetails">
                                    <h3>Guido Giraudo</h3>
                                    <p>Academic Director</p>
                                    <p><small>Giornalista professionista. Consulente di comunicazione e di strategie di marketing innovativo. Esperto nella ideazione e organizzazione di top events. Dal 1984 contitolare dell'Agenzia giornalistica Excalibur. Docente di marketing e di event management per aziende e Università. Fondatore, presidente o membro di molte realtà non profit.</small></p>
                                    <div className="team-socials">
                                        <a href="https://www.linkedin.com/in/guido-giraudo-952a99ab/" target=" _blank" title=""><span className="fa fa-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="teamBox">
                                <figure><img src={Team4} alt="" /></figure>
                                <h3>Nicolò Scorpo</h3>
                                <p>Community Manager</p>
                                <div className="teamDetails">
                                    <h3>Nicolò Scorpo</h3>
                                    <p>Community Manager</p>
                                    <p><small>Nato nel pieno della rivoluzione digitale, Nicolò è la sintesi del professionista contemporaneo. Creativo e operativo al tempo stesso, sempre capace d'intercettare le tendenze del momento, svolge attività di consulenza per diversi brand.</small></p>
                                    <p><a className="team-more-link" href="https://www.nicolòscorpo.com/" target=" _blank" title="sito web">sito web</a></p>
                                    <div className="team-socials">
                                        <a href="https://twitter.com/NicoloScorpo" target=" _blank" title=""><span className="fa fa-twitter"></span></a>
                                        <a href="https://www.linkedin.com/in/nicoloscorpo/" target=" _blank" title=""><span className="fa fa-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="digitalRev mt-5">
                    <div className="videoModal" onClick= {this.pauseVideo}>
                        <iframe id="video" src={this.state.URL} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <button className="playVideo" onClick= {this.playVideo}><span className="fa fa-play"></span></button>
                </div>
            </section>
        )
    }
}
