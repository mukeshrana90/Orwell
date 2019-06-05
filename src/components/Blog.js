import React from 'react'

import postImage1 from "../images/blog/nardone-zelensky.jpg"
import postImage2 from "../images/blog/zelensky-trump.jpg"
import postImage3 from "../images/blog/david-davies.jpg"

const Blog = () => {
    return (
        <section id="Blog" className="section blogContainer py-5">
            <div className="container pb-5">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-8 text-center">
                        <h2 className="section-heading pt-5 pb-2">Blog e news</h2>
                        <p className="section-subheading">Notizie, approfondimenti e comunicati stampa</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="blogPost">
                            <figure><img src={postImage1} alt="" /></figure>
                            <a href="javascript:;" className="postDetails">
                                <div className="postDetailsBox">
                                    <h4>Zelensky, Alessandro Nardone ospite di Tgcom24</h4>
                                    <p>Il CEO di Orwell è stato chiamato da Tgcom24 per commentare la vittoria di Volodymyr Zelensky, su cui ha realizzato un reportage focalizzato</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blogPost">
                            <figure><img src={postImage2} alt="" /></figure>
                            <a href="javascript:;" className="postDetails">
                                <div className="postDetailsBox">
                                    <h4>Il nostro reportage su Zelensky in anteprima al cinema il 17 aprile. Programma e info per i biglietti gratuiti</h4>
                                    <p>Mercoledì 17 aprile, alle ore 21.00, presso la sala 5 del Cinalandia di Como si svolgerà l’evento “Becoming Digital Leader – Nasce una</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blogPost">
                            <figure><img src={postImage3} alt="" /></figure>
                            <a href="javascript:;" className="postDetails">
                                <div className="postDetailsBox">
                                    <h4>Milioni di persone in piazza, ma il protagonista è un tweet</h4>
                                    <p>Ricordate il primo Ghostbusters? Nel duello finale, gli acchiappafantasmi dovettero affrontare un enorme “Uomo della pubblicità di Marshmallow” materializzato dal perfido Gozer.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog