import React, { Component } from 'react'
import $ from 'jquery'
import ReactPlayer from 'react-player'

export default class Banner extends Component {

    componentDidMount() {
        $('.moveToBtn').click(function (e) {
            e.preventDefault();
            $('body,html').stop().animate({ scrollTop: $($(this).attr('href')).offset().top - 145 + 'px' }, 500);
        })
    }

    render() {
        return (
            <section className="videoSection">
                <ReactPlayer 
                    url='https://www.youtube.com/watch?v=9910Rui-JFs' 
                    playing = 'true'
                    playsinline = 'true'
                    volume = '0'
                    width='100%'
                    height='100%'
                />
                <div className="videoOverlay"></div>
                <a href="#CosaFacciamo" className="moveToBtn"></a>
            </section>
        )
    }
}
