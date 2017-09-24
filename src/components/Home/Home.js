'use strict';

var styles = require('./Home.scss');

var monkey320 = require('./monkey-320.jpg');
var monkey729 = require('./monkey-729.jpg');
var monkey1006 = require('./monkey-1006.jpg');
var monkey1224 = require('./monkey-1224.jpg');
var monkey1440 = require('./monkey-1440.jpg');

import React from 'react';
import { render } from 'react-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content__header">
                    <h1 className="content__title content__reveal content__reveal--left">
                        <div className="content__element">Stefan Piazza</div>
                        <div className="content__revealer content__revealer--primary"></div>
                    </h1><br></br>
                    <p className="content__subtitle content__reveal content__reveal--left content__reveal--delay-200">
                        <div className="content__element">Front End Developer</div>
                        <div className="content__revealer content__revealer--primary"></div>
                    </p>
                </div>
                <div className="content__footer">
                    <div className="content__image content__reveal content__reveal--right content__reveal--delay-600">
                        <div className="content__element">
                            <img
                                srcset="static/images/monkey-320.jpg 320w,
                                        static/images/monkey-729.jpg 729w,
                                        static/images/monkey-1006.jpg 1006w,
                                        static/images/monkey-1224.jpg 1224w,
                                        static/images/monkey-1440.jpg 1440w"
                                src="static/images/monkey-1440.jpg"
                                sizes="(max-width: 1400px) 100vw, 1400px"
                                alt="monkey">
                            </img>
                        </div>
                        <div className="content__revealer content__revealer--secondary"></div>
                    </div>
                    <p className="content__social content__reveal content__reveal--left content__reveal--delay-400">
                        <div className="content__element">
                            <a href="https://github.com/stefanpiazza/" className="content__social-link">Github</a>
                            <a href="https://codepen.io/stefanpiazza/" className="content__social-link">CodePen</a>
                            <a href="https://www.linkedin.com/in/stefanpiazza/" className="content__social-link">LinkedIn</a>
                        </div>
                        <div className="content__revealer content__revealer--primary"></div>
                    </p>
                </div>
            </div>
        );
    }
}

export default Home
