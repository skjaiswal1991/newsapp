import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer className="site-footer">
                <div className="secondary-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="footer-social-wrapper"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                Copyright © 2018-19 Today New. All rights reserved <span className="sep"> | </span>
                                <a href="https://afthemes.com/covernews">CoverNews</a> by AF themes.</div>
                        </div>
                    </div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;