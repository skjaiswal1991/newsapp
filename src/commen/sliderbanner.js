import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sliderbanner extends Component {
    constructor(props) {
        super(props);
        this.state = { slide:[] }
    }


    async componentDidMount(){
        await fetch('http://news4t.com/wp-json/wp/v2/posts?per_page=5&_embed')
        .then(response=> response.json())
        .then((res)=>{
                this.setState({slide:res});
        })
    }

    render() { 
        const { slide } = this.state;
        
        // console.log(slide);
        // // const slider = slide.length > 0 ?(slide.map( ( post, i) =>(
        // //                 // <Link to={'/'+post.name} key={i}>link</Link>
        // //                 <Link to={'/'+post.id} key={i}>
        // //                     {/* <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title}/> */}
        // //                     {post.title}</Link>
        // //             ))) : ( <p>Loading</p>)
        
        // return ( 
        //         <React.Fragment>
        //         {slide.map( ( post, i) =>(
        //                 // <Link to={'/'+post.name} key={i}>link</Link>
        //                 <Link to={'/'+post.id} key={i}>
        //                     {/* <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title}/> */}
        //                     {post.name}</Link>
        //             ))
        //         }
        //         </React.Fragment>
                
            
            
        //  );
        return (

            <div class="banner-exclusive-posts-wrapper clearfix">
                <div class="exclusive-posts">
                    <div class="exclusive-now primary-color">
                        <div class="alert-spinner">
                            <div class="double-bounce1"></div>
                            <div class="double-bounce2"></div>
                        </div>
                        <strong>Flash Story</strong></div>
                    <div class="exclusive-slides" dir="ltr">
                        <div class="marquee flash-slide-left" data-speed="80000" data-gap="0" data-duplicated="true" data-direction="left">
                            <div  class="js-marquee-wrapper">
                                <div class="js-marquee" >
                                {
                                    this.state.slide.map((post,i)=>{
                                    return(
                                        // <article>
                                        //     <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}}></h2>
                                        //     <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
                                        //     <a  href={post.link}>Read More</a>
                                        // </article>

                                        
                                        <Link to={'/'+post.id} key={i}>
                                            <img src={post._embedded['wp:featuredmedia'][0].source_url} alt=''/>
                                            <span dangerouslySetInnerHTML={{__html: post.title.rendered}}></span>
                                        </Link>
                                    )
                                    })
                                }
                                </div>
                                <div class="js-marquee" >
                                    {
                                        this.state.slide.map((post,i)=>{
                                        return(
                                            // <article>
                                            //     <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}}></h2>
                                            //     <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
                                            //     <a  href={post.link}>Read More</a>
                                            // </article>

                                            
                                            <Link to={'/'+post.id} key={i}>
                                                <img src={post._embedded['wp:featuredmedia'][0].source_url} alt=''/>
                                                <span dangerouslySetInnerHTML={{__html: post.title.rendered}}></span>
                                            </Link>
                                        )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
 
export default Sliderbanner;