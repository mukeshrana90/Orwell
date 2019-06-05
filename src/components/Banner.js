import React, { Component } from 'react'
import $ from 'jquery'

export default class Banner extends Component {

    componentDidMount() {
        $('.moveToBtn').click(function(e) {
            e.preventDefault();
            $('body,html').stop().animate({scrollTop:$($(this).attr('href')).offset().top - 145 + 'px'}, 500);
        })
    }

    render() {
        return (
            <section className="videoSection">
                <iframe src="https://www.youtube.com/embed/9910Rui-JFs?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                {/* <iframe src="https://www.youtube-nocookie.com/embed/9910Rui-JFs?version=3&enablejsapi=1&html5=1&volume=100&hd=1&wmode=opaque&showinfo=0&rel=0;;origin=https://orwell.biz;&controls=0&playsinline=1"></iframe> */}

                <a href="#CosaFacciamo" className="moveToBtn"></a>
            </section>
        )
    }
}
