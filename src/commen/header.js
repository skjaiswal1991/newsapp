import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { catlist:'' }
    }

    async componentDidMount(){
        await fetch('http://news4t.com/wp-json/wp/v2/categories')
        .then(response=> response.json())
        .then((res)=>{
                this.setState({catlist:res});
        })
    }
    render() { 
        const { catlist } = this.state;
        return ( 
            
                <div className="header-layout-1">
                <div className="top-masthead">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 device-center">
                                <span className="topbar-date">
                                    Wed. Sep 25th, 2019 </span></div>
                            <div className="col-xs-12 col-sm-12 col-md-4 pull-right"></div>
                        </div>
                    </div>
                </div>
                <header id="masthead" className="site-header">
                    <div className="masthead-banner " data-background="">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="site-branding">
                                        <h1 className="site-title font-family-1">
                                            <a href="http://www.news4t.com/" rel="home">Anguler Project</a></h1>
                                        <p className="site-description">Letest News Updates</p>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="banner-promotions-wrapper">
                                        <div className="promotion-section">
                                            <a href="" target="_blank">
                                            </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav id="site-navigation" className="main-navigation">
                        <div className="container">
                            <div className="row">
                                <div className="kol-12">
                                    <div className="navigation-container">
                                        <div className="cart-search"><span className="af-search-click icon-search">
                                                <i className="fa fa-search"></i>
                                            </span></div><span className="toggle-menu" aria-controls="primary-menu" aria-expanded="false">
                                            <span className="screen-reader-text">Primary Menu</span>
                                            <i className="ham"></i>
                                        </span>
                                        <span className="af-mobile-site-title-wrap">
                                            <p className="site-title font-family-1">
                                                <a href="http://www.news4t.com/" rel="home">News4T</a></p>
                                        </span>
                                        <div className="menu main-menu">
                                            <ul id="primary-menu" className="menu">
                                                { catlist.length > 0  ? (
                                                    catlist.map((c,i) =>(

                                                        <li id={"menu-item-"+c.id} key={i} className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-66173">
                                                            <Link to={'/'+c.id}>{c.name}</Link>
                                                        </li>
                                                    ))
                                                    
                                                ) : ('loading') }
                                            </ul>
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <div id="af-search-wrap">
                    <div className="af-search-box table-block">
                        <div className="table-block-child v-center text-center">
                            <form role="search" method="get" className="search-form" action="http://www.news4t.com/">
                                <label>
                                    <span className="screen-reader-text">Search for:</span>
                                    <input type="search" className="search-field" placeholder="Search &hellip;"  name="s" />
                                </label>
                                <input type="submit" className="search-submit" value="Search" /></form>
                        </div>
                    </div>
                    <div className="af-search-close af-search-click">
                        <span></span>
                        <span></span></div>
                </div>
            </div>
         );
    }
}
 
export default Header;