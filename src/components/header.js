import React, { Component } from "react"
import { Link } from "gatsby"
import $ from 'jquery'
import logoBlack from "../images/orwell-1.png"
import logoWhite from "../images/logo-orwell-white-01-1.png"

class Header extends Component {
  componentDidMount() {
    $('.mainNav li.inLink a').click(function(e) {
        e.preventDefault();
        $('body,html').stop().animate({scrollTop:$($(this).attr('href')).offset().top - 100 + 'px'}, 500);
    })    
    $('.mobileMenuBtn').click(function () {
      $('.mainNav').toggleClass('active');
    })
}

  render() {
    return (
      <header>
        <div className="container">
          <div className="header">
            <div className="logo">
              <Link to="/">
                <img className="logoBlack" src={logoBlack} alt="Orwell" />
                <img className="logoWhite" src={logoWhite} alt="Orwell" />
              </Link>
            </div>

            <button className="mobileMenuBtn">
              <span></span>
              <span></span>
              <span></span>
            </button>
            {/* Mobile Menu Btn */}

            <div className="mainNav">
              <nav>
                <ul className="list-unstyled mb-0">
                  <li><Link to="/">Home</Link></li>                  
                  <li className="inLink"><a href="#CosaFacciamo" title="Cosa facciamo">Cosa facciamo</a></li>
                  <li className="inLink"><a href="#Filosofia" title="Filosofia">Filosofia</a></li>
                  <li className="inLink"><a href="#Noi" title="Noi">Noi</a></li>
                  <li className="inLink"><a href="#WebPlatform" title="Web Platform">Web Platform</a></li>
                  <li className="inLink"><a href="#Contatti" title="Contatti">Contatti</a></li>
                  <li><a href="https://orwell.biz/blog/" title="Blog">Blog</a></li>
                  <li><a href="https://www.orwell.how" target="_blank" title="Libro">Libro</a></li>
                  <li><a href="https://www.orwell.academy/" target="_blank" title="Academy">Academy</a></li>
                  <li><a href="javascript:;" title="EN">EN</a></li>
                </ul>
              </nav>              
            </div>
            {/* Main Nav */}
          </div>
        </div>
      </header>
    )
  }
}

export default Header
