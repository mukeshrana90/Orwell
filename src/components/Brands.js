import React from 'react'
import Brand1 from "../images/brands/CAMERA_DI_COMMERCIO_COMO.png"
import Brand2 from "../images/brands/COMO_NEXT.png"
import Brand3 from "../images/brands/GIORNATA_INNOVAZIONE.png"
import Brand4 from "../images/brands/Il-Mise-per-le-startup_1-1.png"
import Brand5 from "../images/brands/PID.png"
import Brand6 from "../images/brands/Startuphome_Logo_Full_o40-1.png"
import Brand7 from "../images/brands/needaly_new-1.png"

export default function Brands() {
    return (
        <div className="brands section py-5 my-5">
            <ul className="list-unstyled">
                <li><img src={Brand1} alt="" /></li>
                <li><img src={Brand2} alt="" /></li>
                <li><img src={Brand3} alt="" /></li>
                <li><img src={Brand4} alt="" /></li>
                <li><img src={Brand5} alt="" /></li>
                <li><img src={Brand6} alt="" /></li>
                <li><img src={Brand7} alt="" /></li>
            </ul>
        </div>
    )
}
