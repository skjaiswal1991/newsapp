import React, { Component } from 'react';
import Header from '../commen/header';
import Footer from '../commen/footer';
class Frontend extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment> 
                <div id="page" class="site">            
                    <Header/>
                        {this.props.children}
                    <Footer/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Frontend;