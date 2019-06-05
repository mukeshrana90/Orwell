import React from 'react'

export default function WebPlatform() {
    return (
        <section id="WebPlatform" className="section mb-5 py-5">
            <div className="container pb-4">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-8 text-center">
                        <h2 className="section-heading pb-2">Web Platform</h2>
                        <p className="section-subheading">Il 25 giugno 2019 vedrà la luce Orwell, la piattaforma con cui rivoluzioneremo il mondo della comunicazione. Compila il form sottostante e riceverai tutte le news!</p>
                    </div>
                </div>
                <div className="row">
                    {/* timer goes here */}
                </div>
            </div>

            <div className="newsletterContainer py-5 mt-5">
                <div className="container py-5">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-7 text-center">
                            <h2 className="section-heading pb-2">Ricevi i nostri aggiornamenti</h2>
                            <p className="section-subheading">Iscrivendoti alla newsletter riceverai suggerimenti, aggiornamenti e il calendario delle nostre iniziative</p>

                            <form className="mt-5">
                                <div className="input-group mb-2">
                                    <input type="text" className="form-control" placeholder="LA TUA EMAIL" />
                                    <button type="submit">Iscriviti</button>
                                </div>
                                <label htmlFor="" className="text-secondary"><input type="checkbox" /> Ho letto e accetto la pagina delle condizioni d'uso e l'informativa sulla Privacy.</label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
