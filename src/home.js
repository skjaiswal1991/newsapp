import React, { Component } from 'react';
import Sidebar from './commen/sidebar';
import {Link} from 'react-router-dom';
import Sliderbanner from './commen/sliderbanner'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { posts:'' }
    }

    // componentWillMount(){
    //     fetch('http://news4t.com/wp-json/wp/v2/posts?per_page=5&_embed')
    //     .then(response => response.json())
    //     .then((res)=>{
    //             this.setState({posts:res});
    //     })
    // }
    render() { 

        const { posts } = this.state;
        //  console.log(posts);
        //  console.log(posts[0]._embedded);
        //  const slid =  posts.map(p=>{
        //  console.log(p);
        // })

        // const slider = posts.length > 0 ? (
        //                 posts.map( post =>(
        //                     <a herf='/'>link</a>
        //                     // <Link to='/dgdfg'>
        //                     //     {/* <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title}/> */}
        //                     //     {/* {post.title} */}</Link>
        //                 ))
        //                 ): 
        //                 (
        //                     <p>Loader</p>
        //                 )
        return ( 

            <React.Fragment>
               
            <section className="af-blocks">
            <div className="container af-main-banner default-section-slider">
                <div className="row">
                        <Sliderbanner></Sliderbanner>
                    <div className="for-main-row">
                        <div className="main-story-wrapper col-sm-6">
                            <h4 className="header-after1">
                                <span className="header-after ">
                                    Letest news </span></h4>
                            <div className="main-slider-wrapper">
                                <div className="main-slider full-slider-mode">
                                    <figure className="slick-item">
                                        <div className="data-bg data-bg-hover data-bg-hover data-bg-slide" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_ajay_singh_spicejet_t.jpg">
                                            <a className="aft-slide-items" href="http://www.news4t.com/spicejet-eyes-rs-71000-cr-airbus-deal-chairman-ajay-singh-reveals-01649999/"></a>
                                            <figcaption className="slider-figcaption slider-figcaption-1">
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/business/" alt="View all posts in Business">
                                                                Business
                                                            </a></li>
                                                    </ul>
                                                </div>
                                                <div className="title-heading">
                                                    <h3 className="article-title slide-title">
                                                        <a href="http://www.news4t.com/spicejet-eyes-rs-71000-cr-airbus-deal-chairman-ajay-singh-reveals-01649999/">एविएशन / स्पाइसजेट 100 एयरबस खरीद सकती है, इनकी वैल्यू 71000 करोड़ रुपए होगी</a></h3>
                                                </div>
                                                <div className="grid-item-metadata grid-item-metadata-1">
                                                    <span className="author-links">
                                                        <span className="item-metadata posts-date">
                                                            <i className="far fa-clock"></i>
                                                            5 hours ago </span>
                                                        <span className="item-metadata posts-author">
                                                            <a href="http://www.news4t.com/author/damdarnews/">
                                                                damdarnews </a>
                                                        </span>
                                                    </span></div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                    <figure className="slick-item">
                                        <div className="data-bg data-bg-hover data-bg-hover data-bg-slide" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_meditation_cover_0.jpg">
                                            <a className="aft-slide-items" href="http://www.news4t.com/bhakti-motivational-story-inspirational-story-story-about-devotion-prerak-prasang-01649989/"></a>
                                            <figcaption className="slider-figcaption slider-figcaption-1">
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/religion/" alt="View all posts in Religion">
                                                                Religion
                                                            </a></li>
                                                    </ul>
                                                </div>
                                                <div className="title-heading">
                                                    <h3 className="article-title slide-title">
                                                        <a href="http://www.news4t.com/bhakti-motivational-story-inspirational-story-story-about-devotion-prerak-prasang-01649989/">कथा / सच्चा सुख भगवान की निस्वार्थ भक्ति में है, जहां स्वार्थ होगा वहां दुख भी होगा</a></h3>
                                                </div>
                                                <div className="grid-item-metadata grid-item-metadata-1">
                                                    <span className="author-links">
                                                        <span className="item-metadata posts-date">
                                                            <i className="far fa-clock"></i>
                                                            5 hours ago </span>
                                                        <span className="item-metadata posts-author">
                                                            <a href="http://www.news4t.com/author/damdarnews/">
                                                                damdarnews </a>
                                                        </span>
                                                    </span></div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                    <figure className="slick-item">
                                        <div className="data-bg data-bg-hover data-bg-hover data-bg-slide" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_miui_11_1569316533974.jpg">
                                            <a className="aft-slide-items" href="http://www.news4t.com/dark-theme-feature-rolled-out-for-gmail-app-it-will-take-more-than-15-days-to-fully-imple-01649997/"></a>
                                            <figcaption className="slider-figcaption slider-figcaption-1">
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/tech-knowledge/" alt="View all posts in Tech knowledge">
                                                                Tech knowledge
                                                            </a></li>
                                                    </ul>
                                                </div>
                                                <div className="title-heading">
                                                    <h3 className="article-title slide-title">
                                                        <a href="http://www.news4t.com/dark-theme-feature-rolled-out-for-gmail-app-it-will-take-more-than-15-days-to-fully-imple-01649997/">नया फीचर / जीमेल ऐप के लिए जारी हुआ डार्क थीम फीचर, पूरी तरह से लागू होने में लगेगा 15 दिन का समय</a></h3>
                                                </div>
                                                <div className="grid-item-metadata grid-item-metadata-1">
                                                    <span className="author-links">
                                                        <span className="item-metadata posts-date">
                                                            <i className="far fa-clock"></i>
                                                            5 hours ago </span>
                                                        <span className="item-metadata posts-author">
                                                            <a href="http://www.news4t.com/author/damdarnews/">
                                                                damdarnews </a>
                                                        </span>
                                                    </span></div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                    <figure className="slick-item">
                                        <div className="data-bg data-bg-hover data-bg-hover data-bg-slide" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_pitru_paksha_18_new.jpg">
                                            <a className="aft-slide-items" href="http://www.news4t.com/pitru-paksha-2019-pitru-paksha-kab-se-hai-shraddha-paksha-2019-01649863/"></a>
                                            <figcaption className="slider-figcaption slider-figcaption-1">
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/religion/" alt="View all posts in Religion">
                                                                Religion
                                                            </a></li>
                                                    </ul>
                                                </div>
                                                <div className="title-heading">
                                                    <h3 className="article-title slide-title">
                                                        <a href="http://www.news4t.com/pitru-paksha-2019-pitru-paksha-kab-se-hai-shraddha-paksha-2019-01649863/">धर्म / 27 को पितृ पक्ष की चतुर्दशी तिथि, इस दिन दुर्घटना में मृत लोगों का होता है श्राद्ध</a></h3>
                                                </div>
                                                <div className="grid-item-metadata grid-item-metadata-1">
                                                    <span className="author-links">
                                                        <span className="item-metadata posts-date">
                                                            <i className="far fa-clock"></i>
                                                            4 hours ago </span>
                                                        <span className="item-metadata posts-author">
                                                            <a href="http://www.news4t.com/author/damdarnews/">
                                                                damdarnews </a>
                                                        </span>
                                                    </span></div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                    <figure className="slick-item">
                                        <div className="data-bg data-bg-hover data-bg-hover data-bg-slide" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_pixel_3a_and_3a_xl_get_new_android_10_update_1.jpg">
                                            <a className="aft-slide-items" href="http://www.news4t.com/pixel-3a-and-3a-xl-get-new-android-10-update-01649963/"></a>
                                            <figcaption className="slider-figcaption slider-figcaption-1">
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/tech-knowledge/" alt="View all posts in Tech knowledge">
                                                                Tech knowledge
                                                            </a></li>
                                                    </ul>
                                                </div>
                                                <div className="title-heading">
                                                    <h3 className="article-title slide-title">
                                                        <a href="http://www.news4t.com/pixel-3a-and-3a-xl-get-new-android-10-update-01649963/">लेटेस्ट एंड्रॉयड / पिक्सल 3a और 3a XL के लिए आया एंड्रॉयड 10 का अपडेट, सेटिंग में जाकर होगा इन्स्टॉल</a></h3>
                                                </div>
                                                <div className="grid-item-metadata grid-item-metadata-1">
                                                    <span className="author-links">
                                                        <span className="item-metadata posts-date">
                                                            <i className="far fa-clock"></i>
                                                            4 hours ago </span>
                                                        <span className="item-metadata posts-author">
                                                            <a href="http://www.news4t.com/author/damdarnews/">
                                                                damdarnews </a>
                                                        </span>
                                                    </span></div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </div>
                                <div className="af-main-navcontrols "></div>
                            </div>
                        </div>
                        <div className="af-main-banner-editors-picks categorized-story col-sm-3">
                            <h4 className="header-after1">
                                <span className="header-after ">
                                    News updates </span></h4>
                            <div className="featured-posts-grid i-row row">
                                <div className="even-grid">
                                    <div className="spotlight-post" data-mh="banner-height">
                                        <figure className="featured-article">
                                            <div className="featured-article-wrapper">
                                                <div className="data-bg data-bg-hover data-bg-hover data-bg-featured" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_sant_2.jpg">
                                                    <a href="http://www.news4t.com/uefa-champions-league-2021-final-will-be-held-at-the-st-petersburg-stadium-russia-01649921/"></a></div>
                                            </div>
                                        </figure>
                                        <figcaption className="cate-fig">
                                            <div className="figure-categories figure-categories-bg">
                                                <ul className="cat-links">
                                                    <li className="meta-category">
                                                        <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/sports/" alt="View all posts in Sports">
                                                            Sports
                                                        </a></li>
                                                </ul>
                                            </div>
                                            <div className="title-heading">
                                                <h3 className="article-title article-title-2">
                                                    <a href="http://www.news4t.com/uefa-champions-league-2021-final-will-be-held-at-the-st-petersburg-stadium-russia-01649921/">
                                                        चैम्पियंस लीग / रूस के सेंट पीटर्सबर्ग में फाइनल होगा, 2022 में म्यूनिख और 2023 में लंदन करेगा मेजबानी </a></h3>
                                            </div>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        4 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                        </figcaption>
                                    </div>
                                </div>
                                <div className="even-grid">
                                    <div className="spotlight-post" data-mh="banner-height">
                                        <figure className="featured-article">
                                            <div className="featured-article-wrapper">
                                                <div className="data-bg data-bg-hover data-bg-hover data-bg-featured" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_sindhu1.jpg">
                                                    <a href="http://www.news4t.com/korea-open-badminton-tournament-live-news-and-updates-sindhu-crashes-out-in-first-round-01649801/"></a></div>
                                            </div>
                                        </figure>
                                        <figcaption className="cate-fig">
                                            <div className="figure-categories figure-categories-bg">
                                                <ul className="cat-links">
                                                    <li className="meta-category">
                                                        <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/sports/" alt="View all posts in Sports">
                                                            Sports
                                                        </a></li>
                                                </ul>
                                            </div>
                                            <div className="title-heading">
                                                <h3 className="article-title article-title-2">
                                                    <a href="http://www.news4t.com/korea-open-badminton-tournament-live-news-and-updates-sindhu-crashes-out-in-first-round-01649801/">
                                                        बैडमिंटन / सिंधु कोरिया ओपन के पहले दौर में बाहर, अमेरिका की झांग बेईवेन ने हराया </a></h3>
                                            </div>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        2 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                        </figcaption>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trending-story col-sm-3">
                            <h4 className="header-after1">
                                <span className="header-after category-color-1">
                                    Bollywood </span></h4>
                            <div className="banner-trending-posts-wrapper clearfix">
                                <div className="trending-posts-carousel">
                                    <div className="slick-item">
                                        <figure className="carousel-image">
                                            <div className="no-gutter-col">
                                                <figure className="featured-article">
                                                    <div className="featured-article-wrapper">
                                                        <div className="data-bg data-bg-hover data-bg-hover data-bg-featured" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_big_b4_1.jpg">
                                                            <a href="http://www.news4t.com/amitabh-bachchan-selected-for-dada-saheb-phalke-award-daughter-shweta-gets-emotional-01649935/"></a></div>
                                                    </div>
                                                    <span className="trending-no">
                                                        1 </span>
                                                </figure>
                                                <figcaption>
                                                    <div className="figure-categories figure-categories-bg">
                                                        <ul className="cat-links">
                                                            <li className="meta-category">
                                                                <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/intertenment/" alt="View all posts in Entertainment">
                                                                    Entertainment
                                                                </a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="title-heading">
                                                        <h3 className="article-title">
                                                            <a href="http://www.news4t.com/amitabh-bachchan-selected-for-dada-saheb-phalke-award-daughter-shweta-gets-emotional-01649935/">
                                                                सम्मान / अमिताभ के दादा साहब फाल्के अवॉर्ड की घोषणा के बाद बेटी श्वेता हुई इमोशनल, बॉलीवुड सेलेब्स ने दी बधाई </a></h3>
                                                    </div>
                                                </figcaption>
                                            </div>
                                            
                                        </figure>
                                    </div>
                                    <div className="slick-item">
                                        <figure className="carousel-image">
                                            <div className="no-gutter-col">
                                                <figure className="featured-article">
                                                    <div className="featured-article-wrapper">
                                                        <div className="data-bg data-bg-hover data-bg-hover data-bg-featured" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_amitabh_bachchan6.jpg">
                                                            <a href="http://www.news4t.com/amitabh-bachchan-dadasaheb-phalke-award-lata-mangeshkar-congrats-superstar-01649797/"></a></div>
                                                    </div>
                                                    <span className="trending-no">
                                                        2 </span>
                                                </figure>
                                                <figcaption>
                                                    <div className="figure-categories figure-categories-bg">
                                                        <ul className="cat-links">
                                                            <li className="meta-category">
                                                                <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/intertenment/" alt="View all posts in Entertainment">
                                                                    Entertainment
                                                                </a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="title-heading">
                                                        <h3 className="article-title">
                                                            <a href="http://www.news4t.com/amitabh-bachchan-dadasaheb-phalke-award-lata-mangeshkar-congrats-superstar-01649797/">
                                                                बधाई / दादा साहब फाल्के अवॉर्ड के लिए अमिताभ के चयन पर लता ने कहा- उन्हें यह पहले ही मिल जाना चाहिए था </a></h3>
                                                    </div>
                                                </figcaption>
                                            </div>
                                            
                                        </figure>
                                    </div>
                                    <div className="slick-item">
                                        <figure className="carousel-image">
                                            <div className="no-gutter-col">
                                                <figure className="featured-article">
                                                    <div className="featured-article-wrapper">
                                                        <div className="data-bg data-bg-hover data-bg-hover data-bg-featured" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_shivin_narang.jpg">
                                                            <a href="http://www.news4t.com/shivin-narang-will-be-paired-with-jennifer-winget-in-beyhadh-2-01649381/"></a></div>
                                                    </div>
                                                    <span className="trending-no">
                                                        3 </span>
                                                </figure>
                                                <figcaption>
                                                    <div className="figure-categories figure-categories-bg">
                                                        <ul className="cat-links">
                                                            <li className="meta-category">
                                                                <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/intertenment/" alt="View all posts in Entertainment">
                                                                    Entertainment
                                                                </a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="title-heading">
                                                        <h3 className="article-title">
                                                            <a href="http://www.news4t.com/shivin-narang-will-be-paired-with-jennifer-winget-in-beyhadh-2-01649381/">
                                                                कन्फर्म / &#8216;बेहद 2&#8217; में जेनिफर विंगेट के अपोजिट नजर आएंगे शिविन नारंग, बोले- सरप्राइज से भरा होगा दूसरा सीजन </a></h3>
                                                    </div>
                                                </figcaption>
                                            </div>
                                            
                                        </figure>
                                    </div>
                                    <div className="slick-item">
                                        <figure className="carousel-image">
                                            <div className="no-gutter-col">
                                                <figure className="featured-article">
                                                    <div className="featured-article-wrapper">
                                                        <div className="data-bg data-bg-hover data-bg-hover data-bg-featured" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_amitabh.jpg">
                                                            <a href="http://www.news4t.com/salim-javed-who-has-written-success-scripts-like-zanjeer-sholay-for-him-are-telling-ami-01649583/"></a></div>
                                                    </div>
                                                    <span className="trending-no">
                                                        4 </span>
                                                </figure>
                                                <figcaption>
                                                    <div className="figure-categories figure-categories-bg">
                                                        <ul className="cat-links">
                                                            <li className="meta-category">
                                                                <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/intertenment/" alt="View all posts in Entertainment">
                                                                    Entertainment
                                                                </a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="title-heading">
                                                        <h3 className="article-title">
                                                            <a href="http://www.news4t.com/salim-javed-who-has-written-success-scripts-like-zanjeer-sholay-for-him-are-telling-ami-01649583/">
                                                                दादा साहेब फाल्के अवॉर्ड / जंजीर, शोले जैसी पटकथाएं लिखने वाले सलीम-जावेद ने बताए अमिताभ बच्चन के मायने </a></h3>
                                                    </div>
                                                </figcaption>
                                            </div>
                                            
                                        </figure>
                                    </div>
                                    <div className="slick-item">
                                        <figure className="carousel-image">
                                            <div className="no-gutter-col">
                                                <figure className="featured-article">
                                                    <div className="featured-article-wrapper">
                                                        <div className="data-bg data-bg-hover data-bg-hover data-bg-featured" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_saand_ki_aankh.jpg">
                                                            <a href="http://www.news4t.com/saand-ki-aankh-neena-gupta-s-strongly-reacted-on-taapsee-and-bhumi-role-01649285/"></a></div>
                                                    </div>
                                                    <span className="trending-no">
                                                        5 </span>
                                                </figure>
                                                <figcaption>
                                                    <div className="figure-categories figure-categories-bg">
                                                        <ul className="cat-links">
                                                            <li className="meta-category">
                                                                <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/intertenment/" alt="View all posts in Entertainment">
                                                                    Entertainment
                                                                </a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="title-heading">
                                                        <h3 className="article-title">
                                                            <a href="http://www.news4t.com/saand-ki-aankh-neena-gupta-s-strongly-reacted-on-taapsee-and-bhumi-role-01649285/">
                                                                रिएक्शन / &#8216;सांड की आंख&#8217; में भूमि-तापसी को देख नीना गुप्ता ने लिखा- हमारी उम्र के रोल तो हमसे करा लो </a></h3>
                                                    </div>
                                                </figcaption>
                                            </div>
                                            
                                        </figure>
                                    </div>
                                </div>
                                <div className="af-trending-navcontrols "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container-full-width">
                <div className="row"></div>
            </div>
        </section>
        <div id="content" className="container">
            <section className="section-block-upper row">
                <div id="primary" className="content-area">
                    <main id="main" className="site-main">
                        <div className="row">
                            <article id="post-70102" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70102 post type-post status-publish format-standard has-post-thumbnail hentry category-tech-knowledge" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_miui_11_1569316533974.jpg">
                                                    <a href="http://www.news4t.com/dark-theme-feature-rolled-out-for-gmail-app-it-will-take-more-than-15-days-to-fully-imple-01649997/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/tech-knowledge/" alt="View all posts in Tech knowledge">
                                                                Tech knowledge
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/dark-theme-feature-rolled-out-for-gmail-app-it-will-take-more-than-15-days-to-fully-imple-01649997/">
                                                    नया फीचर / जीमेल ऐप के लिए जारी हुआ डार्क थीम फीचर, पूरी तरह से लागू होने में लगेगा 15 दिन का समय </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        5 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>गैजेट डेस्क. गूगल ने आधिकारिक तौर से जीमेल ऐप के लिए डार्क थीम रोल आउट&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/dark-theme-feature-rolled-out-for-gmail-app-it-will-take-more-than-15-days-to-fully-imple-01649997/" data-a2a-title="नया फीचर / जीमेल ऐप के लिए जारी हुआ डार्क थीम फीचर, पूरी तरह से लागू होने में लगेगा 15 दिन का समय"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fdark-theme-feature-rolled-out-for-gmail-app-it-will-take-more-than-15-days-to-fully-imple-01649997%2F&amp;linkname=%E0%A4%A8%E0%A4%AF%E0%A4%BE%20%E0%A4%AB%E0%A5%80%E0%A4%9A%E0%A4%B0%20%2F%20%E0%A4%9C%E0%A5%80%E0%A4%AE%E0%A5%87%E0%A4%B2%20%E0%A4%90%E0%A4%AA%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%9C%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%B9%E0%A5%81%E0%A4%86%20%E0%A4%A1%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%A5%E0%A5%80%E0%A4%AE%20%E0%A4%AB%E0%A5%80%E0%A4%9A%E0%A4%B0%2C%20%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%80%20%E0%A4%A4%E0%A4%B0%E0%A4%B9%20%E0%A4%B8%E0%A5%87%20%E0%A4%B2%E0%A4%BE%E0%A4%97%E0%A5%82%20%E0%A4%B9%E0%A5%8B%E0%A4%A8%E0%A5%87%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B2%E0%A4%97%E0%A5%87%E0%A4%97%E0%A4%BE%2015%20%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%95%E0%A4%BE%20%E0%A4%B8%E0%A4%AE%E0%A4%AF" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fdark-theme-feature-rolled-out-for-gmail-app-it-will-take-more-than-15-days-to-fully-imple-01649997%2F&amp;linkname=%E0%A4%A8%E0%A4%AF%E0%A4%BE%20%E0%A4%AB%E0%A5%80%E0%A4%9A%E0%A4%B0%20%2F%20%E0%A4%9C%E0%A5%80%E0%A4%AE%E0%A5%87%E0%A4%B2%20%E0%A4%90%E0%A4%AA%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%9C%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%B9%E0%A5%81%E0%A4%86%20%E0%A4%A1%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%A5%E0%A5%80%E0%A4%AE%20%E0%A4%AB%E0%A5%80%E0%A4%9A%E0%A4%B0%2C%20%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%80%20%E0%A4%A4%E0%A4%B0%E0%A4%B9%20%E0%A4%B8%E0%A5%87%20%E0%A4%B2%E0%A4%BE%E0%A4%97%E0%A5%82%20%E0%A4%B9%E0%A5%8B%E0%A4%A8%E0%A5%87%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B2%E0%A4%97%E0%A5%87%E0%A4%97%E0%A4%BE%2015%20%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%95%E0%A4%BE%20%E0%A4%B8%E0%A4%AE%E0%A4%AF" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fdark-theme-feature-rolled-out-for-gmail-app-it-will-take-more-than-15-days-to-fully-imple-01649997%2F&amp;linkname=%E0%A4%A8%E0%A4%AF%E0%A4%BE%20%E0%A4%AB%E0%A5%80%E0%A4%9A%E0%A4%B0%20%2F%20%E0%A4%9C%E0%A5%80%E0%A4%AE%E0%A5%87%E0%A4%B2%20%E0%A4%90%E0%A4%AA%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%9C%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%B9%E0%A5%81%E0%A4%86%20%E0%A4%A1%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%A5%E0%A5%80%E0%A4%AE%20%E0%A4%AB%E0%A5%80%E0%A4%9A%E0%A4%B0%2C%20%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%80%20%E0%A4%A4%E0%A4%B0%E0%A4%B9%20%E0%A4%B8%E0%A5%87%20%E0%A4%B2%E0%A4%BE%E0%A4%97%E0%A5%82%20%E0%A4%B9%E0%A5%8B%E0%A4%A8%E0%A5%87%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B2%E0%A4%97%E0%A5%87%E0%A4%97%E0%A4%BE%2015%20%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%95%E0%A4%BE%20%E0%A4%B8%E0%A4%AE%E0%A4%AF" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fdark-theme-feature-rolled-out-for-gmail-app-it-will-take-more-than-15-days-to-fully-imple-01649997%2F&amp;linkname=%E0%A4%A8%E0%A4%AF%E0%A4%BE%20%E0%A4%AB%E0%A5%80%E0%A4%9A%E0%A4%B0%20%2F%20%E0%A4%9C%E0%A5%80%E0%A4%AE%E0%A5%87%E0%A4%B2%20%E0%A4%90%E0%A4%AA%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%9C%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%B9%E0%A5%81%E0%A4%86%20%E0%A4%A1%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%A5%E0%A5%80%E0%A4%AE%20%E0%A4%AB%E0%A5%80%E0%A4%9A%E0%A4%B0%2C%20%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%80%20%E0%A4%A4%E0%A4%B0%E0%A4%B9%20%E0%A4%B8%E0%A5%87%20%E0%A4%B2%E0%A4%BE%E0%A4%97%E0%A5%82%20%E0%A4%B9%E0%A5%8B%E0%A4%A8%E0%A5%87%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B2%E0%A4%97%E0%A5%87%E0%A4%97%E0%A4%BE%2015%20%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%95%E0%A4%BE%20%E0%A4%B8%E0%A4%AE%E0%A4%AF" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70104" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70104 post type-post status-publish format-standard has-post-thumbnail hentry category-business" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_ajay_singh_spicejet_t.jpg">
                                                    <a href="http://www.news4t.com/spicejet-eyes-rs-71000-cr-airbus-deal-chairman-ajay-singh-reveals-01649999/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/business/" alt="View all posts in Business">
                                                                Business
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/spicejet-eyes-rs-71000-cr-airbus-deal-chairman-ajay-singh-reveals-01649999/">
                                                    एविएशन / स्पाइसजेट 100 एयरबस खरीद सकती है, इनकी वैल्यू 71000 करोड़ रुपए होगी </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        5 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>नई दिल्ली. स्पाइसजेट विस्तार की योजना के तहत एयरबस एसई कंपनी से 100 विमान खरीद&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/spicejet-eyes-rs-71000-cr-airbus-deal-chairman-ajay-singh-reveals-01649999/" data-a2a-title="एविएशन / स्पाइसजेट 100 एयरबस खरीद सकती है, इनकी वैल्यू 71000 करोड़ रुपए होगी"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fspicejet-eyes-rs-71000-cr-airbus-deal-chairman-ajay-singh-reveals-01649999%2F&amp;linkname=%E0%A4%8F%E0%A4%B5%E0%A4%BF%E0%A4%8F%E0%A4%B6%E0%A4%A8%20%2F%20%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A4%BE%E0%A4%87%E0%A4%B8%E0%A4%9C%E0%A5%87%E0%A4%9F%20100%20%E0%A4%8F%E0%A4%AF%E0%A4%B0%E0%A4%AC%E0%A4%B8%20%E0%A4%96%E0%A4%B0%E0%A5%80%E0%A4%A6%20%E0%A4%B8%E0%A4%95%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A5%88%2C%20%E0%A4%87%E0%A4%A8%E0%A4%95%E0%A5%80%20%E0%A4%B5%E0%A5%88%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A5%82%2071000%20%E0%A4%95%E0%A4%B0%E0%A5%8B%E0%A4%A1%E0%A4%BC%20%E0%A4%B0%E0%A5%81%E0%A4%AA%E0%A4%8F%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A5%80" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fspicejet-eyes-rs-71000-cr-airbus-deal-chairman-ajay-singh-reveals-01649999%2F&amp;linkname=%E0%A4%8F%E0%A4%B5%E0%A4%BF%E0%A4%8F%E0%A4%B6%E0%A4%A8%20%2F%20%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A4%BE%E0%A4%87%E0%A4%B8%E0%A4%9C%E0%A5%87%E0%A4%9F%20100%20%E0%A4%8F%E0%A4%AF%E0%A4%B0%E0%A4%AC%E0%A4%B8%20%E0%A4%96%E0%A4%B0%E0%A5%80%E0%A4%A6%20%E0%A4%B8%E0%A4%95%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A5%88%2C%20%E0%A4%87%E0%A4%A8%E0%A4%95%E0%A5%80%20%E0%A4%B5%E0%A5%88%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A5%82%2071000%20%E0%A4%95%E0%A4%B0%E0%A5%8B%E0%A4%A1%E0%A4%BC%20%E0%A4%B0%E0%A5%81%E0%A4%AA%E0%A4%8F%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A5%80" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fspicejet-eyes-rs-71000-cr-airbus-deal-chairman-ajay-singh-reveals-01649999%2F&amp;linkname=%E0%A4%8F%E0%A4%B5%E0%A4%BF%E0%A4%8F%E0%A4%B6%E0%A4%A8%20%2F%20%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A4%BE%E0%A4%87%E0%A4%B8%E0%A4%9C%E0%A5%87%E0%A4%9F%20100%20%E0%A4%8F%E0%A4%AF%E0%A4%B0%E0%A4%AC%E0%A4%B8%20%E0%A4%96%E0%A4%B0%E0%A5%80%E0%A4%A6%20%E0%A4%B8%E0%A4%95%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A5%88%2C%20%E0%A4%87%E0%A4%A8%E0%A4%95%E0%A5%80%20%E0%A4%B5%E0%A5%88%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A5%82%2071000%20%E0%A4%95%E0%A4%B0%E0%A5%8B%E0%A4%A1%E0%A4%BC%20%E0%A4%B0%E0%A5%81%E0%A4%AA%E0%A4%8F%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A5%80" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fspicejet-eyes-rs-71000-cr-airbus-deal-chairman-ajay-singh-reveals-01649999%2F&amp;linkname=%E0%A4%8F%E0%A4%B5%E0%A4%BF%E0%A4%8F%E0%A4%B6%E0%A4%A8%20%2F%20%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A4%BE%E0%A4%87%E0%A4%B8%E0%A4%9C%E0%A5%87%E0%A4%9F%20100%20%E0%A4%8F%E0%A4%AF%E0%A4%B0%E0%A4%AC%E0%A4%B8%20%E0%A4%96%E0%A4%B0%E0%A5%80%E0%A4%A6%20%E0%A4%B8%E0%A4%95%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A5%88%2C%20%E0%A4%87%E0%A4%A8%E0%A4%95%E0%A5%80%20%E0%A4%B5%E0%A5%88%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A5%82%2071000%20%E0%A4%95%E0%A4%B0%E0%A5%8B%E0%A4%A1%E0%A4%BC%20%E0%A4%B0%E0%A5%81%E0%A4%AA%E0%A4%8F%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A5%80" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70103" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70103 post type-post status-publish format-standard has-post-thumbnail hentry category-religion" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_meditation_cover_0.jpg">
                                                    <a href="http://www.news4t.com/bhakti-motivational-story-inspirational-story-story-about-devotion-prerak-prasang-01649989/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/religion/" alt="View all posts in Religion">
                                                                Religion
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/bhakti-motivational-story-inspirational-story-story-about-devotion-prerak-prasang-01649989/">
                                                    कथा / सच्चा सुख भगवान की निस्वार्थ भक्ति में है, जहां स्वार्थ होगा वहां दुख भी होगा </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        5 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>जीवन मंत्र डेस्क। पुराने समय में एक व्यक्ति बहुत गरीब था। उसके पास कुछ भी&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/bhakti-motivational-story-inspirational-story-story-about-devotion-prerak-prasang-01649989/" data-a2a-title="कथा / सच्चा सुख भगवान की निस्वार्थ भक्ति में है, जहां स्वार्थ होगा वहां दुख भी होगा"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fbhakti-motivational-story-inspirational-story-story-about-devotion-prerak-prasang-01649989%2F&amp;linkname=%E0%A4%95%E0%A4%A5%E0%A4%BE%20%2F%20%E0%A4%B8%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A4%BE%20%E0%A4%B8%E0%A5%81%E0%A4%96%20%E0%A4%AD%E0%A4%97%E0%A4%B5%E0%A4%BE%E0%A4%A8%20%E0%A4%95%E0%A5%80%20%E0%A4%A8%E0%A4%BF%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A5%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B9%E0%A5%88%2C%20%E0%A4%9C%E0%A4%B9%E0%A4%BE%E0%A4%82%20%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A5%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%B5%E0%A4%B9%E0%A4%BE%E0%A4%82%20%E0%A4%A6%E0%A5%81%E0%A4%96%20%E0%A4%AD%E0%A5%80%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fbhakti-motivational-story-inspirational-story-story-about-devotion-prerak-prasang-01649989%2F&amp;linkname=%E0%A4%95%E0%A4%A5%E0%A4%BE%20%2F%20%E0%A4%B8%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A4%BE%20%E0%A4%B8%E0%A5%81%E0%A4%96%20%E0%A4%AD%E0%A4%97%E0%A4%B5%E0%A4%BE%E0%A4%A8%20%E0%A4%95%E0%A5%80%20%E0%A4%A8%E0%A4%BF%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A5%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B9%E0%A5%88%2C%20%E0%A4%9C%E0%A4%B9%E0%A4%BE%E0%A4%82%20%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A5%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%B5%E0%A4%B9%E0%A4%BE%E0%A4%82%20%E0%A4%A6%E0%A5%81%E0%A4%96%20%E0%A4%AD%E0%A5%80%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fbhakti-motivational-story-inspirational-story-story-about-devotion-prerak-prasang-01649989%2F&amp;linkname=%E0%A4%95%E0%A4%A5%E0%A4%BE%20%2F%20%E0%A4%B8%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A4%BE%20%E0%A4%B8%E0%A5%81%E0%A4%96%20%E0%A4%AD%E0%A4%97%E0%A4%B5%E0%A4%BE%E0%A4%A8%20%E0%A4%95%E0%A5%80%20%E0%A4%A8%E0%A4%BF%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A5%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B9%E0%A5%88%2C%20%E0%A4%9C%E0%A4%B9%E0%A4%BE%E0%A4%82%20%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A5%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%B5%E0%A4%B9%E0%A4%BE%E0%A4%82%20%E0%A4%A6%E0%A5%81%E0%A4%96%20%E0%A4%AD%E0%A5%80%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fbhakti-motivational-story-inspirational-story-story-about-devotion-prerak-prasang-01649989%2F&amp;linkname=%E0%A4%95%E0%A4%A5%E0%A4%BE%20%2F%20%E0%A4%B8%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A4%BE%20%E0%A4%B8%E0%A5%81%E0%A4%96%20%E0%A4%AD%E0%A4%97%E0%A4%B5%E0%A4%BE%E0%A4%A8%20%E0%A4%95%E0%A5%80%20%E0%A4%A8%E0%A4%BF%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A5%20%E0%A4%AD%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B9%E0%A5%88%2C%20%E0%A4%9C%E0%A4%B9%E0%A4%BE%E0%A4%82%20%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A5%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%B5%E0%A4%B9%E0%A4%BE%E0%A4%82%20%E0%A4%A6%E0%A5%81%E0%A4%96%20%E0%A4%AD%E0%A5%80%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70097" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70097 post type-post status-publish format-standard has-post-thumbnail hentry category-religion" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_pitru_paksha_18_new.jpg">
                                                    <a href="http://www.news4t.com/pitru-paksha-2019-pitru-paksha-kab-se-hai-shraddha-paksha-2019-01649863/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/religion/" alt="View all posts in Religion">
                                                                Religion
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/pitru-paksha-2019-pitru-paksha-kab-se-hai-shraddha-paksha-2019-01649863/">
                                                    धर्म / 27 को पितृ पक्ष की चतुर्दशी तिथि, इस दिन दुर्घटना में मृत लोगों का होता है श्राद्ध </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        4 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>जीवन मंत्र डेस्क। शनिवार, 28 सितंबर को पितृ पक्ष का अंतिम दिन सर्व पितृमोक्ष अमावस्या&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/pitru-paksha-2019-pitru-paksha-kab-se-hai-shraddha-paksha-2019-01649863/" data-a2a-title="धर्म / 27 को पितृ पक्ष की चतुर्दशी तिथि, इस दिन दुर्घटना में मृत लोगों का होता है श्राद्ध"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fpitru-paksha-2019-pitru-paksha-kab-se-hai-shraddha-paksha-2019-01649863%2F&amp;linkname=%E0%A4%A7%E0%A4%B0%E0%A5%8D%E0%A4%AE%20%2F%2027%20%E0%A4%95%E0%A5%8B%20%E0%A4%AA%E0%A4%BF%E0%A4%A4%E0%A5%83%20%E0%A4%AA%E0%A4%95%E0%A5%8D%E0%A4%B7%20%E0%A4%95%E0%A5%80%20%E0%A4%9A%E0%A4%A4%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%A6%E0%A4%B6%E0%A5%80%20%E0%A4%A4%E0%A4%BF%E0%A4%A5%E0%A4%BF%2C%20%E0%A4%87%E0%A4%B8%20%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%A6%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%98%E0%A4%9F%E0%A4%A8%E0%A4%BE%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AE%E0%A5%83%E0%A4%A4%20%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A4%BE%20%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%88%20%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A5%8D%E0%A4%A7" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fpitru-paksha-2019-pitru-paksha-kab-se-hai-shraddha-paksha-2019-01649863%2F&amp;linkname=%E0%A4%A7%E0%A4%B0%E0%A5%8D%E0%A4%AE%20%2F%2027%20%E0%A4%95%E0%A5%8B%20%E0%A4%AA%E0%A4%BF%E0%A4%A4%E0%A5%83%20%E0%A4%AA%E0%A4%95%E0%A5%8D%E0%A4%B7%20%E0%A4%95%E0%A5%80%20%E0%A4%9A%E0%A4%A4%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%A6%E0%A4%B6%E0%A5%80%20%E0%A4%A4%E0%A4%BF%E0%A4%A5%E0%A4%BF%2C%20%E0%A4%87%E0%A4%B8%20%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%A6%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%98%E0%A4%9F%E0%A4%A8%E0%A4%BE%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AE%E0%A5%83%E0%A4%A4%20%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A4%BE%20%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%88%20%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A5%8D%E0%A4%A7" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fpitru-paksha-2019-pitru-paksha-kab-se-hai-shraddha-paksha-2019-01649863%2F&amp;linkname=%E0%A4%A7%E0%A4%B0%E0%A5%8D%E0%A4%AE%20%2F%2027%20%E0%A4%95%E0%A5%8B%20%E0%A4%AA%E0%A4%BF%E0%A4%A4%E0%A5%83%20%E0%A4%AA%E0%A4%95%E0%A5%8D%E0%A4%B7%20%E0%A4%95%E0%A5%80%20%E0%A4%9A%E0%A4%A4%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%A6%E0%A4%B6%E0%A5%80%20%E0%A4%A4%E0%A4%BF%E0%A4%A5%E0%A4%BF%2C%20%E0%A4%87%E0%A4%B8%20%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%A6%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%98%E0%A4%9F%E0%A4%A8%E0%A4%BE%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AE%E0%A5%83%E0%A4%A4%20%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A4%BE%20%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%88%20%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A5%8D%E0%A4%A7" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fpitru-paksha-2019-pitru-paksha-kab-se-hai-shraddha-paksha-2019-01649863%2F&amp;linkname=%E0%A4%A7%E0%A4%B0%E0%A5%8D%E0%A4%AE%20%2F%2027%20%E0%A4%95%E0%A5%8B%20%E0%A4%AA%E0%A4%BF%E0%A4%A4%E0%A5%83%20%E0%A4%AA%E0%A4%95%E0%A5%8D%E0%A4%B7%20%E0%A4%95%E0%A5%80%20%E0%A4%9A%E0%A4%A4%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%A6%E0%A4%B6%E0%A5%80%20%E0%A4%A4%E0%A4%BF%E0%A4%A5%E0%A4%BF%2C%20%E0%A4%87%E0%A4%B8%20%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%A6%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%98%E0%A4%9F%E0%A4%A8%E0%A4%BE%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AE%E0%A5%83%E0%A4%A4%20%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A4%BE%20%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%88%20%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A5%8D%E0%A4%A7" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70095" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70095 post type-post status-publish format-standard has-post-thumbnail hentry category-tech-knowledge" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_pixel_3a_and_3a_xl_get_new_android_10_update_1.jpg">
                                                    <a href="http://www.news4t.com/pixel-3a-and-3a-xl-get-new-android-10-update-01649963/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/tech-knowledge/" alt="View all posts in Tech knowledge">
                                                                Tech knowledge
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/pixel-3a-and-3a-xl-get-new-android-10-update-01649963/">
                                                    लेटेस्ट एंड्रॉयड / पिक्सल 3a और 3a XL के लिए आया एंड्रॉयड 10 का अपडेट, सेटिंग में जाकर होगा इन्स्टॉल </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        4 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>गैजेट डेस्क. गूगल ने अपने लेटेस्ट ऑपरेटिंग सिस्टम एंड्रॉयड 10 को पिक्सल 3a और पिक्सल&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/pixel-3a-and-3a-xl-get-new-android-10-update-01649963/" data-a2a-title="लेटेस्ट एंड्रॉयड / पिक्सल 3a और 3a XL के लिए आया एंड्रॉयड 10 का अपडेट, सेटिंग में जाकर होगा इन्स्टॉल"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fpixel-3a-and-3a-xl-get-new-android-10-update-01649963%2F&amp;linkname=%E0%A4%B2%E0%A5%87%E0%A4%9F%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20%E0%A4%8F%E0%A4%82%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%89%E0%A4%AF%E0%A4%A1%20%2F%20%E0%A4%AA%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B8%E0%A4%B2%203a%20%E0%A4%94%E0%A4%B0%203a%20XL%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%86%E0%A4%AF%E0%A4%BE%20%E0%A4%8F%E0%A4%82%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%89%E0%A4%AF%E0%A4%A1%2010%20%E0%A4%95%E0%A4%BE%20%E0%A4%85%E0%A4%AA%E0%A4%A1%E0%A5%87%E0%A4%9F%2C%20%E0%A4%B8%E0%A5%87%E0%A4%9F%E0%A4%BF%E0%A4%82%E0%A4%97%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A4%BE%E0%A4%95%E0%A4%B0%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%87%E0%A4%A8%E0%A5%8D%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A5%89%E0%A4%B2" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fpixel-3a-and-3a-xl-get-new-android-10-update-01649963%2F&amp;linkname=%E0%A4%B2%E0%A5%87%E0%A4%9F%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20%E0%A4%8F%E0%A4%82%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%89%E0%A4%AF%E0%A4%A1%20%2F%20%E0%A4%AA%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B8%E0%A4%B2%203a%20%E0%A4%94%E0%A4%B0%203a%20XL%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%86%E0%A4%AF%E0%A4%BE%20%E0%A4%8F%E0%A4%82%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%89%E0%A4%AF%E0%A4%A1%2010%20%E0%A4%95%E0%A4%BE%20%E0%A4%85%E0%A4%AA%E0%A4%A1%E0%A5%87%E0%A4%9F%2C%20%E0%A4%B8%E0%A5%87%E0%A4%9F%E0%A4%BF%E0%A4%82%E0%A4%97%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A4%BE%E0%A4%95%E0%A4%B0%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%87%E0%A4%A8%E0%A5%8D%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A5%89%E0%A4%B2" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fpixel-3a-and-3a-xl-get-new-android-10-update-01649963%2F&amp;linkname=%E0%A4%B2%E0%A5%87%E0%A4%9F%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20%E0%A4%8F%E0%A4%82%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%89%E0%A4%AF%E0%A4%A1%20%2F%20%E0%A4%AA%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B8%E0%A4%B2%203a%20%E0%A4%94%E0%A4%B0%203a%20XL%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%86%E0%A4%AF%E0%A4%BE%20%E0%A4%8F%E0%A4%82%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%89%E0%A4%AF%E0%A4%A1%2010%20%E0%A4%95%E0%A4%BE%20%E0%A4%85%E0%A4%AA%E0%A4%A1%E0%A5%87%E0%A4%9F%2C%20%E0%A4%B8%E0%A5%87%E0%A4%9F%E0%A4%BF%E0%A4%82%E0%A4%97%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A4%BE%E0%A4%95%E0%A4%B0%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%87%E0%A4%A8%E0%A5%8D%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A5%89%E0%A4%B2" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fpixel-3a-and-3a-xl-get-new-android-10-update-01649963%2F&amp;linkname=%E0%A4%B2%E0%A5%87%E0%A4%9F%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20%E0%A4%8F%E0%A4%82%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%89%E0%A4%AF%E0%A4%A1%20%2F%20%E0%A4%AA%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B8%E0%A4%B2%203a%20%E0%A4%94%E0%A4%B0%203a%20XL%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%86%E0%A4%AF%E0%A4%BE%20%E0%A4%8F%E0%A4%82%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%89%E0%A4%AF%E0%A4%A1%2010%20%E0%A4%95%E0%A4%BE%20%E0%A4%85%E0%A4%AA%E0%A4%A1%E0%A5%87%E0%A4%9F%2C%20%E0%A4%B8%E0%A5%87%E0%A4%9F%E0%A4%BF%E0%A4%82%E0%A4%97%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A4%BE%E0%A4%95%E0%A4%B0%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%87%E0%A4%A8%E0%A5%8D%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A5%89%E0%A4%B2" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70093" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70093 post type-post status-publish format-standard has-post-thumbnail hentry category-business" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_senior_citizen_t.jpg">
                                                    <a href="http://www.news4t.com/govt-needs-to-exempt-tax-on-interest-earned-under-senior-citizens-scheme-sbi-study-01649835/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/business/" alt="View all posts in Business">
                                                                Business
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/govt-needs-to-exempt-tax-on-interest-earned-under-senior-citizens-scheme-sbi-study-01649835/">
                                                    रिपोर्ट / सरकार को वरिष्ठ नागरिक बचत योजना का ब्याज टैक्स फ्री करने पर विचार करना चाहिए </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        4 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>नई दिल्ली. एसबीआई की मंगलवार को जारी रिपोर्ट में कहा गया कि सरकार को वरिष्ठ&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/govt-needs-to-exempt-tax-on-interest-earned-under-senior-citizens-scheme-sbi-study-01649835/" data-a2a-title="रिपोर्ट / सरकार को वरिष्ठ नागरिक बचत योजना का ब्याज टैक्स फ्री करने पर विचार करना चाहिए"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fgovt-needs-to-exempt-tax-on-interest-earned-under-senior-citizens-scheme-sbi-study-01649835%2F&amp;linkname=%E0%A4%B0%E0%A4%BF%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%20%2F%20%E0%A4%B8%E0%A4%B0%E0%A4%95%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A5%8B%20%E0%A4%B5%E0%A4%B0%E0%A4%BF%E0%A4%B7%E0%A5%8D%E0%A4%A0%20%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%B0%E0%A4%BF%E0%A4%95%20%E0%A4%AC%E0%A4%9A%E0%A4%A4%20%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE%20%E0%A4%95%E0%A4%BE%20%E0%A4%AC%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%9C%20%E0%A4%9F%E0%A5%88%E0%A4%95%E0%A5%8D%E0%A4%B8%20%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A5%87%20%E0%A4%AA%E0%A4%B0%20%E0%A4%B5%E0%A4%BF%E0%A4%9A%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fgovt-needs-to-exempt-tax-on-interest-earned-under-senior-citizens-scheme-sbi-study-01649835%2F&amp;linkname=%E0%A4%B0%E0%A4%BF%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%20%2F%20%E0%A4%B8%E0%A4%B0%E0%A4%95%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A5%8B%20%E0%A4%B5%E0%A4%B0%E0%A4%BF%E0%A4%B7%E0%A5%8D%E0%A4%A0%20%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%B0%E0%A4%BF%E0%A4%95%20%E0%A4%AC%E0%A4%9A%E0%A4%A4%20%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE%20%E0%A4%95%E0%A4%BE%20%E0%A4%AC%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%9C%20%E0%A4%9F%E0%A5%88%E0%A4%95%E0%A5%8D%E0%A4%B8%20%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A5%87%20%E0%A4%AA%E0%A4%B0%20%E0%A4%B5%E0%A4%BF%E0%A4%9A%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fgovt-needs-to-exempt-tax-on-interest-earned-under-senior-citizens-scheme-sbi-study-01649835%2F&amp;linkname=%E0%A4%B0%E0%A4%BF%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%20%2F%20%E0%A4%B8%E0%A4%B0%E0%A4%95%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A5%8B%20%E0%A4%B5%E0%A4%B0%E0%A4%BF%E0%A4%B7%E0%A5%8D%E0%A4%A0%20%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%B0%E0%A4%BF%E0%A4%95%20%E0%A4%AC%E0%A4%9A%E0%A4%A4%20%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE%20%E0%A4%95%E0%A4%BE%20%E0%A4%AC%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%9C%20%E0%A4%9F%E0%A5%88%E0%A4%95%E0%A5%8D%E0%A4%B8%20%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A5%87%20%E0%A4%AA%E0%A4%B0%20%E0%A4%B5%E0%A4%BF%E0%A4%9A%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fgovt-needs-to-exempt-tax-on-interest-earned-under-senior-citizens-scheme-sbi-study-01649835%2F&amp;linkname=%E0%A4%B0%E0%A4%BF%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%20%2F%20%E0%A4%B8%E0%A4%B0%E0%A4%95%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A5%8B%20%E0%A4%B5%E0%A4%B0%E0%A4%BF%E0%A4%B7%E0%A5%8D%E0%A4%A0%20%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%B0%E0%A4%BF%E0%A4%95%20%E0%A4%AC%E0%A4%9A%E0%A4%A4%20%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE%20%E0%A4%95%E0%A4%BE%20%E0%A4%AC%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%9C%20%E0%A4%9F%E0%A5%88%E0%A4%95%E0%A5%8D%E0%A4%B8%20%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A5%87%20%E0%A4%AA%E0%A4%B0%20%E0%A4%B5%E0%A4%BF%E0%A4%9A%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70091" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70091 post type-post status-publish format-standard has-post-thumbnail hentry category-sports" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_sant_2.jpg">
                                                    <a href="http://www.news4t.com/uefa-champions-league-2021-final-will-be-held-at-the-st-petersburg-stadium-russia-01649921/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/sports/" alt="View all posts in Sports">
                                                                Sports
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/uefa-champions-league-2021-final-will-be-held-at-the-st-petersburg-stadium-russia-01649921/">
                                                    चैम्पियंस लीग / रूस के सेंट पीटर्सबर्ग में फाइनल होगा, 2022 में म्यूनिख और 2023 में लंदन करेगा मेजबानी </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        4 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>खेल डेस्क. चैम्पियंस लीग के मौजूदा सीजन (2019-20) का फाइनल में रूस के सेंट पीटर्सबर्ग&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/uefa-champions-league-2021-final-will-be-held-at-the-st-petersburg-stadium-russia-01649921/" data-a2a-title="चैम्पियंस लीग / रूस के सेंट पीटर्सबर्ग में फाइनल होगा, 2022 में म्यूनिख और 2023 में लंदन करेगा मेजबानी"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fuefa-champions-league-2021-final-will-be-held-at-the-st-petersburg-stadium-russia-01649921%2F&amp;linkname=%E0%A4%9A%E0%A5%88%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%AF%E0%A4%82%E0%A4%B8%20%E0%A4%B2%E0%A5%80%E0%A4%97%20%2F%20%E0%A4%B0%E0%A5%82%E0%A4%B8%20%E0%A4%95%E0%A5%87%20%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%9F%20%E0%A4%AA%E0%A5%80%E0%A4%9F%E0%A4%B0%E0%A5%8D%E0%A4%B8%E0%A4%AC%E0%A4%B0%E0%A5%8D%E0%A4%97%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AB%E0%A4%BE%E0%A4%87%E0%A4%A8%E0%A4%B2%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%2C%202022%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AE%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%A8%E0%A4%BF%E0%A4%96%20%E0%A4%94%E0%A4%B0%202023%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B2%E0%A4%82%E0%A4%A6%E0%A4%A8%20%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%BE%20%E0%A4%AE%E0%A5%87%E0%A4%9C%E0%A4%AC%E0%A4%BE%E0%A4%A8%E0%A5%80" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fuefa-champions-league-2021-final-will-be-held-at-the-st-petersburg-stadium-russia-01649921%2F&amp;linkname=%E0%A4%9A%E0%A5%88%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%AF%E0%A4%82%E0%A4%B8%20%E0%A4%B2%E0%A5%80%E0%A4%97%20%2F%20%E0%A4%B0%E0%A5%82%E0%A4%B8%20%E0%A4%95%E0%A5%87%20%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%9F%20%E0%A4%AA%E0%A5%80%E0%A4%9F%E0%A4%B0%E0%A5%8D%E0%A4%B8%E0%A4%AC%E0%A4%B0%E0%A5%8D%E0%A4%97%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AB%E0%A4%BE%E0%A4%87%E0%A4%A8%E0%A4%B2%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%2C%202022%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AE%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%A8%E0%A4%BF%E0%A4%96%20%E0%A4%94%E0%A4%B0%202023%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B2%E0%A4%82%E0%A4%A6%E0%A4%A8%20%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%BE%20%E0%A4%AE%E0%A5%87%E0%A4%9C%E0%A4%AC%E0%A4%BE%E0%A4%A8%E0%A5%80" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fuefa-champions-league-2021-final-will-be-held-at-the-st-petersburg-stadium-russia-01649921%2F&amp;linkname=%E0%A4%9A%E0%A5%88%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%AF%E0%A4%82%E0%A4%B8%20%E0%A4%B2%E0%A5%80%E0%A4%97%20%2F%20%E0%A4%B0%E0%A5%82%E0%A4%B8%20%E0%A4%95%E0%A5%87%20%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%9F%20%E0%A4%AA%E0%A5%80%E0%A4%9F%E0%A4%B0%E0%A5%8D%E0%A4%B8%E0%A4%AC%E0%A4%B0%E0%A5%8D%E0%A4%97%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AB%E0%A4%BE%E0%A4%87%E0%A4%A8%E0%A4%B2%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%2C%202022%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AE%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%A8%E0%A4%BF%E0%A4%96%20%E0%A4%94%E0%A4%B0%202023%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B2%E0%A4%82%E0%A4%A6%E0%A4%A8%20%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%BE%20%E0%A4%AE%E0%A5%87%E0%A4%9C%E0%A4%AC%E0%A4%BE%E0%A4%A8%E0%A5%80" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fuefa-champions-league-2021-final-will-be-held-at-the-st-petersburg-stadium-russia-01649921%2F&amp;linkname=%E0%A4%9A%E0%A5%88%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%AF%E0%A4%82%E0%A4%B8%20%E0%A4%B2%E0%A5%80%E0%A4%97%20%2F%20%E0%A4%B0%E0%A5%82%E0%A4%B8%20%E0%A4%95%E0%A5%87%20%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%9F%20%E0%A4%AA%E0%A5%80%E0%A4%9F%E0%A4%B0%E0%A5%8D%E0%A4%B8%E0%A4%AC%E0%A4%B0%E0%A5%8D%E0%A4%97%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AB%E0%A4%BE%E0%A4%87%E0%A4%A8%E0%A4%B2%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%2C%202022%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AE%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%A8%E0%A4%BF%E0%A4%96%20%E0%A4%94%E0%A4%B0%202023%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B2%E0%A4%82%E0%A4%A6%E0%A4%A8%20%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%BE%20%E0%A4%AE%E0%A5%87%E0%A4%9C%E0%A4%AC%E0%A4%BE%E0%A4%A8%E0%A5%80" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70090" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70090 post type-post status-publish format-standard has-post-thumbnail hentry category-intertenment" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_big_b4_1.jpg">
                                                    <a href="http://www.news4t.com/amitabh-bachchan-selected-for-dada-saheb-phalke-award-daughter-shweta-gets-emotional-01649935/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/intertenment/" alt="View all posts in Entertainment">
                                                                Entertainment
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/amitabh-bachchan-selected-for-dada-saheb-phalke-award-daughter-shweta-gets-emotional-01649935/">
                                                    सम्मान / अमिताभ के दादा साहब फाल्के अवॉर्ड की घोषणा के बाद बेटी श्वेता हुई इमोशनल, बॉलीवुड सेलेब्स ने दी बधाई </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        4 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>बॉलीवुड डेस्क. सुपरस्टार अमिताभ बच्चन को दादा साहब फाल्के अवॉर्ड के लिए चुने जाने पर&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/amitabh-bachchan-selected-for-dada-saheb-phalke-award-daughter-shweta-gets-emotional-01649935/" data-a2a-title="सम्मान / अमिताभ के दादा साहब फाल्के अवॉर्ड की घोषणा के बाद बेटी श्वेता हुई इमोशनल, बॉलीवुड सेलेब्स ने दी बधाई"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Famitabh-bachchan-selected-for-dada-saheb-phalke-award-daughter-shweta-gets-emotional-01649935%2F&amp;linkname=%E0%A4%B8%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%A8%20%2F%20%E0%A4%85%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%AD%20%E0%A4%95%E0%A5%87%20%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%B9%E0%A4%AC%20%E0%A4%AB%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%B5%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%A1%20%E0%A4%95%E0%A5%80%20%E0%A4%98%E0%A5%8B%E0%A4%B7%E0%A4%A3%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%A6%20%E0%A4%AC%E0%A5%87%E0%A4%9F%E0%A5%80%20%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A5%87%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%81%E0%A4%88%20%E0%A4%87%E0%A4%AE%E0%A5%8B%E0%A4%B6%E0%A4%A8%E0%A4%B2%2C%20%E0%A4%AC%E0%A5%89%E0%A4%B2%E0%A5%80%E0%A4%B5%E0%A5%81%E0%A4%A1%20%E0%A4%B8%E0%A5%87%E0%A4%B2%E0%A5%87%E0%A4%AC%E0%A5%8D%E0%A4%B8%20%E0%A4%A8%E0%A5%87%20%E0%A4%A6%E0%A5%80%20%E0%A4%AC%E0%A4%A7%E0%A4%BE%E0%A4%88" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Famitabh-bachchan-selected-for-dada-saheb-phalke-award-daughter-shweta-gets-emotional-01649935%2F&amp;linkname=%E0%A4%B8%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%A8%20%2F%20%E0%A4%85%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%AD%20%E0%A4%95%E0%A5%87%20%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%B9%E0%A4%AC%20%E0%A4%AB%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%B5%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%A1%20%E0%A4%95%E0%A5%80%20%E0%A4%98%E0%A5%8B%E0%A4%B7%E0%A4%A3%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%A6%20%E0%A4%AC%E0%A5%87%E0%A4%9F%E0%A5%80%20%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A5%87%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%81%E0%A4%88%20%E0%A4%87%E0%A4%AE%E0%A5%8B%E0%A4%B6%E0%A4%A8%E0%A4%B2%2C%20%E0%A4%AC%E0%A5%89%E0%A4%B2%E0%A5%80%E0%A4%B5%E0%A5%81%E0%A4%A1%20%E0%A4%B8%E0%A5%87%E0%A4%B2%E0%A5%87%E0%A4%AC%E0%A5%8D%E0%A4%B8%20%E0%A4%A8%E0%A5%87%20%E0%A4%A6%E0%A5%80%20%E0%A4%AC%E0%A4%A7%E0%A4%BE%E0%A4%88" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Famitabh-bachchan-selected-for-dada-saheb-phalke-award-daughter-shweta-gets-emotional-01649935%2F&amp;linkname=%E0%A4%B8%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%A8%20%2F%20%E0%A4%85%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%AD%20%E0%A4%95%E0%A5%87%20%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%B9%E0%A4%AC%20%E0%A4%AB%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%B5%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%A1%20%E0%A4%95%E0%A5%80%20%E0%A4%98%E0%A5%8B%E0%A4%B7%E0%A4%A3%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%A6%20%E0%A4%AC%E0%A5%87%E0%A4%9F%E0%A5%80%20%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A5%87%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%81%E0%A4%88%20%E0%A4%87%E0%A4%AE%E0%A5%8B%E0%A4%B6%E0%A4%A8%E0%A4%B2%2C%20%E0%A4%AC%E0%A5%89%E0%A4%B2%E0%A5%80%E0%A4%B5%E0%A5%81%E0%A4%A1%20%E0%A4%B8%E0%A5%87%E0%A4%B2%E0%A5%87%E0%A4%AC%E0%A5%8D%E0%A4%B8%20%E0%A4%A8%E0%A5%87%20%E0%A4%A6%E0%A5%80%20%E0%A4%AC%E0%A4%A7%E0%A4%BE%E0%A4%88" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Famitabh-bachchan-selected-for-dada-saheb-phalke-award-daughter-shweta-gets-emotional-01649935%2F&amp;linkname=%E0%A4%B8%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%A8%20%2F%20%E0%A4%85%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%AD%20%E0%A4%95%E0%A5%87%20%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%B9%E0%A4%AC%20%E0%A4%AB%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%B5%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%A1%20%E0%A4%95%E0%A5%80%20%E0%A4%98%E0%A5%8B%E0%A4%B7%E0%A4%A3%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%A6%20%E0%A4%AC%E0%A5%87%E0%A4%9F%E0%A5%80%20%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A5%87%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%81%E0%A4%88%20%E0%A4%87%E0%A4%AE%E0%A5%8B%E0%A4%B6%E0%A4%A8%E0%A4%B2%2C%20%E0%A4%AC%E0%A5%89%E0%A4%B2%E0%A5%80%E0%A4%B5%E0%A5%81%E0%A4%A1%20%E0%A4%B8%E0%A5%87%E0%A4%B2%E0%A5%87%E0%A4%AC%E0%A5%8D%E0%A4%B8%20%E0%A4%A8%E0%A5%87%20%E0%A4%A6%E0%A5%80%20%E0%A4%AC%E0%A4%A7%E0%A4%BE%E0%A4%88" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70086" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70086 post type-post status-publish format-standard has-post-thumbnail hentry category-sports" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_sindhu1.jpg">
                                                    <a href="http://www.news4t.com/korea-open-badminton-tournament-live-news-and-updates-sindhu-crashes-out-in-first-round-01649801/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/sports/" alt="View all posts in Sports">
                                                                Sports
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/korea-open-badminton-tournament-live-news-and-updates-sindhu-crashes-out-in-first-round-01649801/">
                                                    बैडमिंटन / सिंधु कोरिया ओपन के पहले दौर में बाहर, अमेरिका की झांग बेईवेन ने हराया </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        2 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>खेल डेस्क. भारतीय शटलर पीवी सिंधु बुधवार को कोरिया ओपन के पहले दौर में बाहर&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/korea-open-badminton-tournament-live-news-and-updates-sindhu-crashes-out-in-first-round-01649801/" data-a2a-title="बैडमिंटन /		सिंधु कोरिया ओपन के पहले दौर में बाहर, अमेरिका की झांग बेईवेन ने हराया"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fkorea-open-badminton-tournament-live-news-and-updates-sindhu-crashes-out-in-first-round-01649801%2F&amp;linkname=%E0%A4%AC%E0%A5%88%E0%A4%A1%E0%A4%AE%E0%A4%BF%E0%A4%82%E0%A4%9F%E0%A4%A8%20%2F%09%09%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%A7%E0%A5%81%20%E0%A4%95%E0%A5%8B%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%20%E0%A4%93%E0%A4%AA%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%87%20%E0%A4%A6%E0%A5%8C%E0%A4%B0%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%B9%E0%A4%B0%2C%20%E0%A4%85%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A4%BE%20%E0%A4%95%E0%A5%80%20%E0%A4%9D%E0%A4%BE%E0%A4%82%E0%A4%97%20%E0%A4%AC%E0%A5%87%E0%A4%88%E0%A4%B5%E0%A5%87%E0%A4%A8%20%E0%A4%A8%E0%A5%87%20%E0%A4%B9%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A4%BE" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fkorea-open-badminton-tournament-live-news-and-updates-sindhu-crashes-out-in-first-round-01649801%2F&amp;linkname=%E0%A4%AC%E0%A5%88%E0%A4%A1%E0%A4%AE%E0%A4%BF%E0%A4%82%E0%A4%9F%E0%A4%A8%20%2F%09%09%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%A7%E0%A5%81%20%E0%A4%95%E0%A5%8B%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%20%E0%A4%93%E0%A4%AA%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%87%20%E0%A4%A6%E0%A5%8C%E0%A4%B0%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%B9%E0%A4%B0%2C%20%E0%A4%85%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A4%BE%20%E0%A4%95%E0%A5%80%20%E0%A4%9D%E0%A4%BE%E0%A4%82%E0%A4%97%20%E0%A4%AC%E0%A5%87%E0%A4%88%E0%A4%B5%E0%A5%87%E0%A4%A8%20%E0%A4%A8%E0%A5%87%20%E0%A4%B9%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A4%BE" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fkorea-open-badminton-tournament-live-news-and-updates-sindhu-crashes-out-in-first-round-01649801%2F&amp;linkname=%E0%A4%AC%E0%A5%88%E0%A4%A1%E0%A4%AE%E0%A4%BF%E0%A4%82%E0%A4%9F%E0%A4%A8%20%2F%09%09%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%A7%E0%A5%81%20%E0%A4%95%E0%A5%8B%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%20%E0%A4%93%E0%A4%AA%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%87%20%E0%A4%A6%E0%A5%8C%E0%A4%B0%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%B9%E0%A4%B0%2C%20%E0%A4%85%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A4%BE%20%E0%A4%95%E0%A5%80%20%E0%A4%9D%E0%A4%BE%E0%A4%82%E0%A4%97%20%E0%A4%AC%E0%A5%87%E0%A4%88%E0%A4%B5%E0%A5%87%E0%A4%A8%20%E0%A4%A8%E0%A5%87%20%E0%A4%B9%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A4%BE" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fkorea-open-badminton-tournament-live-news-and-updates-sindhu-crashes-out-in-first-round-01649801%2F&amp;linkname=%E0%A4%AC%E0%A5%88%E0%A4%A1%E0%A4%AE%E0%A4%BF%E0%A4%82%E0%A4%9F%E0%A4%A8%20%2F%09%09%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%A7%E0%A5%81%20%E0%A4%95%E0%A5%8B%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%20%E0%A4%93%E0%A4%AA%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%87%20%E0%A4%A6%E0%A5%8C%E0%A4%B0%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%B9%E0%A4%B0%2C%20%E0%A4%85%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A4%BE%20%E0%A4%95%E0%A5%80%20%E0%A4%9D%E0%A4%BE%E0%A4%82%E0%A4%97%20%E0%A4%AC%E0%A5%87%E0%A4%88%E0%A4%B5%E0%A5%87%E0%A4%A8%20%E0%A4%A8%E0%A5%87%20%E0%A4%B9%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A4%BE" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70084" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70084 post type-post status-publish format-standard has-post-thumbnail hentry category-tech-knowledge" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/37_1569391108.jpg">
                                                    <a href="http://www.news4t.com/samsung-galaxy-m30s-is-the-number-1-choice-of-youth-with-strong-battery-better-display-125780711/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/tech-knowledge/" alt="View all posts in Tech knowledge">
                                                                Tech knowledge
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/samsung-galaxy-m30s-is-the-number-1-choice-of-youth-with-strong-battery-better-display-125780711/">
                                                    Tech / दमदार बैटरी , बेहतर डिस्प्ले के साथ Samsung Galaxy M30s है युवाओं की नंबर 1 पसंद </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        2 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>भारतीय स्मार्टफोन बाजार में Samsung Galaxy M सीरीज़ के कुछ बेहतरीन स्मार्टफ़ोन्स के आने के&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/samsung-galaxy-m30s-is-the-number-1-choice-of-youth-with-strong-battery-better-display-125780711/" data-a2a-title="Tech /		दमदार बैटरी , बेहतर डिस्प्ले के साथ Samsung Galaxy M30s है युवाओं की नंबर 1 पसंद"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fsamsung-galaxy-m30s-is-the-number-1-choice-of-youth-with-strong-battery-better-display-125780711%2F&amp;linkname=Tech%20%2F%09%09%E0%A4%A6%E0%A4%AE%E0%A4%A6%E0%A4%BE%E0%A4%B0%20%E0%A4%AC%E0%A5%88%E0%A4%9F%E0%A4%B0%E0%A5%80%20%2C%20%E0%A4%AC%E0%A5%87%E0%A4%B9%E0%A4%A4%E0%A4%B0%20%E0%A4%A1%E0%A4%BF%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A5%87%20%E0%A4%95%E0%A5%87%20%E0%A4%B8%E0%A4%BE%E0%A4%A5%20Samsung%20Galaxy%20M30s%20%E0%A4%B9%E0%A5%88%20%E0%A4%AF%E0%A5%81%E0%A4%B5%E0%A4%BE%E0%A4%93%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%A8%E0%A4%82%E0%A4%AC%E0%A4%B0%201%20%E0%A4%AA%E0%A4%B8%E0%A4%82%E0%A4%A6" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fsamsung-galaxy-m30s-is-the-number-1-choice-of-youth-with-strong-battery-better-display-125780711%2F&amp;linkname=Tech%20%2F%09%09%E0%A4%A6%E0%A4%AE%E0%A4%A6%E0%A4%BE%E0%A4%B0%20%E0%A4%AC%E0%A5%88%E0%A4%9F%E0%A4%B0%E0%A5%80%20%2C%20%E0%A4%AC%E0%A5%87%E0%A4%B9%E0%A4%A4%E0%A4%B0%20%E0%A4%A1%E0%A4%BF%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A5%87%20%E0%A4%95%E0%A5%87%20%E0%A4%B8%E0%A4%BE%E0%A4%A5%20Samsung%20Galaxy%20M30s%20%E0%A4%B9%E0%A5%88%20%E0%A4%AF%E0%A5%81%E0%A4%B5%E0%A4%BE%E0%A4%93%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%A8%E0%A4%82%E0%A4%AC%E0%A4%B0%201%20%E0%A4%AA%E0%A4%B8%E0%A4%82%E0%A4%A6" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fsamsung-galaxy-m30s-is-the-number-1-choice-of-youth-with-strong-battery-better-display-125780711%2F&amp;linkname=Tech%20%2F%09%09%E0%A4%A6%E0%A4%AE%E0%A4%A6%E0%A4%BE%E0%A4%B0%20%E0%A4%AC%E0%A5%88%E0%A4%9F%E0%A4%B0%E0%A5%80%20%2C%20%E0%A4%AC%E0%A5%87%E0%A4%B9%E0%A4%A4%E0%A4%B0%20%E0%A4%A1%E0%A4%BF%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A5%87%20%E0%A4%95%E0%A5%87%20%E0%A4%B8%E0%A4%BE%E0%A4%A5%20Samsung%20Galaxy%20M30s%20%E0%A4%B9%E0%A5%88%20%E0%A4%AF%E0%A5%81%E0%A4%B5%E0%A4%BE%E0%A4%93%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%A8%E0%A4%82%E0%A4%AC%E0%A4%B0%201%20%E0%A4%AA%E0%A4%B8%E0%A4%82%E0%A4%A6" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fsamsung-galaxy-m30s-is-the-number-1-choice-of-youth-with-strong-battery-better-display-125780711%2F&amp;linkname=Tech%20%2F%09%09%E0%A4%A6%E0%A4%AE%E0%A4%A6%E0%A4%BE%E0%A4%B0%20%E0%A4%AC%E0%A5%88%E0%A4%9F%E0%A4%B0%E0%A5%80%20%2C%20%E0%A4%AC%E0%A5%87%E0%A4%B9%E0%A4%A4%E0%A4%B0%20%E0%A4%A1%E0%A4%BF%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A5%87%20%E0%A4%95%E0%A5%87%20%E0%A4%B8%E0%A4%BE%E0%A4%A5%20Samsung%20Galaxy%20M30s%20%E0%A4%B9%E0%A5%88%20%E0%A4%AF%E0%A5%81%E0%A4%B5%E0%A4%BE%E0%A4%93%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%A8%E0%A4%82%E0%A4%AC%E0%A4%B0%201%20%E0%A4%AA%E0%A4%B8%E0%A4%82%E0%A4%A6" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70083" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70083 post type-post status-publish format-standard has-post-thumbnail hentry category-intertenment" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_amitabh_bachchan6.jpg">
                                                    <a href="http://www.news4t.com/amitabh-bachchan-dadasaheb-phalke-award-lata-mangeshkar-congrats-superstar-01649797/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/intertenment/" alt="View all posts in Entertainment">
                                                                Entertainment
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/amitabh-bachchan-dadasaheb-phalke-award-lata-mangeshkar-congrats-superstar-01649797/">
                                                    बधाई / दादा साहब फाल्के अवॉर्ड के लिए अमिताभ के चयन पर लता ने कहा- उन्हें यह पहले ही मिल जाना चाहिए था </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        2 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>बॉलीवुड डेस्क. &nbsp;अमिताभ बच्चन को उनके करियर के 50वें साल में दादा साहब फाल्के अवॉर्ड&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/amitabh-bachchan-dadasaheb-phalke-award-lata-mangeshkar-congrats-superstar-01649797/" data-a2a-title="बधाई /		दादा साहब फाल्के अवॉर्ड के लिए अमिताभ के चयन पर लता ने कहा- उन्हें यह पहले ही मिल जाना चाहिए था"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Famitabh-bachchan-dadasaheb-phalke-award-lata-mangeshkar-congrats-superstar-01649797%2F&amp;linkname=%E0%A4%AC%E0%A4%A7%E0%A4%BE%E0%A4%88%20%2F%09%09%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%B9%E0%A4%AC%20%E0%A4%AB%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%B5%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%A1%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%85%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%AD%20%E0%A4%95%E0%A5%87%20%E0%A4%9A%E0%A4%AF%E0%A4%A8%20%E0%A4%AA%E0%A4%B0%20%E0%A4%B2%E0%A4%A4%E0%A4%BE%20%E0%A4%A8%E0%A5%87%20%E0%A4%95%E0%A4%B9%E0%A4%BE-%20%E0%A4%89%E0%A4%A8%E0%A5%8D%E0%A4%B9%E0%A5%87%E0%A4%82%20%E0%A4%AF%E0%A4%B9%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%87%20%E0%A4%B9%E0%A5%80%20%E0%A4%AE%E0%A4%BF%E0%A4%B2%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%20%E0%A4%A5%E0%A4%BE" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Famitabh-bachchan-dadasaheb-phalke-award-lata-mangeshkar-congrats-superstar-01649797%2F&amp;linkname=%E0%A4%AC%E0%A4%A7%E0%A4%BE%E0%A4%88%20%2F%09%09%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%B9%E0%A4%AC%20%E0%A4%AB%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%B5%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%A1%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%85%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%AD%20%E0%A4%95%E0%A5%87%20%E0%A4%9A%E0%A4%AF%E0%A4%A8%20%E0%A4%AA%E0%A4%B0%20%E0%A4%B2%E0%A4%A4%E0%A4%BE%20%E0%A4%A8%E0%A5%87%20%E0%A4%95%E0%A4%B9%E0%A4%BE-%20%E0%A4%89%E0%A4%A8%E0%A5%8D%E0%A4%B9%E0%A5%87%E0%A4%82%20%E0%A4%AF%E0%A4%B9%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%87%20%E0%A4%B9%E0%A5%80%20%E0%A4%AE%E0%A4%BF%E0%A4%B2%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%20%E0%A4%A5%E0%A4%BE" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Famitabh-bachchan-dadasaheb-phalke-award-lata-mangeshkar-congrats-superstar-01649797%2F&amp;linkname=%E0%A4%AC%E0%A4%A7%E0%A4%BE%E0%A4%88%20%2F%09%09%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%B9%E0%A4%AC%20%E0%A4%AB%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%B5%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%A1%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%85%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%AD%20%E0%A4%95%E0%A5%87%20%E0%A4%9A%E0%A4%AF%E0%A4%A8%20%E0%A4%AA%E0%A4%B0%20%E0%A4%B2%E0%A4%A4%E0%A4%BE%20%E0%A4%A8%E0%A5%87%20%E0%A4%95%E0%A4%B9%E0%A4%BE-%20%E0%A4%89%E0%A4%A8%E0%A5%8D%E0%A4%B9%E0%A5%87%E0%A4%82%20%E0%A4%AF%E0%A4%B9%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%87%20%E0%A4%B9%E0%A5%80%20%E0%A4%AE%E0%A4%BF%E0%A4%B2%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%20%E0%A4%A5%E0%A4%BE" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Famitabh-bachchan-dadasaheb-phalke-award-lata-mangeshkar-congrats-superstar-01649797%2F&amp;linkname=%E0%A4%AC%E0%A4%A7%E0%A4%BE%E0%A4%88%20%2F%09%09%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%B9%E0%A4%AC%20%E0%A4%AB%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%B5%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%A1%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%85%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%AD%20%E0%A4%95%E0%A5%87%20%E0%A4%9A%E0%A4%AF%E0%A4%A8%20%E0%A4%AA%E0%A4%B0%20%E0%A4%B2%E0%A4%A4%E0%A4%BE%20%E0%A4%A8%E0%A5%87%20%E0%A4%95%E0%A4%B9%E0%A4%BE-%20%E0%A4%89%E0%A4%A8%E0%A5%8D%E0%A4%B9%E0%A5%87%E0%A4%82%20%E0%A4%AF%E0%A4%B9%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%87%20%E0%A4%B9%E0%A5%80%20%E0%A4%AE%E0%A4%BF%E0%A4%B2%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%20%E0%A4%A5%E0%A4%BE" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70082" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70082 post type-post status-publish format-standard has-post-thumbnail hentry category-business" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_maruti_cars_nt.png">
                                                    <a href="http://www.news4t.com/maruti-suzuki-cuts-prices-of-select-models-by-rs-5000-01649743/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/business/" alt="View all posts in Business">
                                                                Business
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/maruti-suzuki-cuts-prices-of-select-models-by-rs-5000-01649743/">
                                                    ऑटो / मारुति ने 10 मॉडल की कारों की कीमतें 5000 रुपए घटाईं, नए रेट लागू </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        2 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>नई दिल्ली. मारुति ने 10 मॉडल की कारों की एक्स-शोरूम कीमतों में 5,000 रुपए की&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/maruti-suzuki-cuts-prices-of-select-models-by-rs-5000-01649743/" data-a2a-title="ऑटो /		मारुति ने 10 मॉडल की कारों की कीमतें 5000 रुपए घटाईं, नए रेट लागू"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fmaruti-suzuki-cuts-prices-of-select-models-by-rs-5000-01649743%2F&amp;linkname=%E0%A4%91%E0%A4%9F%E0%A5%8B%20%2F%09%09%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%81%E0%A4%A4%E0%A4%BF%20%E0%A4%A8%E0%A5%87%2010%20%E0%A4%AE%E0%A5%89%E0%A4%A1%E0%A4%B2%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A5%80%E0%A4%AE%E0%A4%A4%E0%A5%87%E0%A4%82%205000%20%E0%A4%B0%E0%A5%81%E0%A4%AA%E0%A4%8F%20%E0%A4%98%E0%A4%9F%E0%A4%BE%E0%A4%88%E0%A4%82%2C%20%E0%A4%A8%E0%A4%8F%20%E0%A4%B0%E0%A5%87%E0%A4%9F%20%E0%A4%B2%E0%A4%BE%E0%A4%97%E0%A5%82" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fmaruti-suzuki-cuts-prices-of-select-models-by-rs-5000-01649743%2F&amp;linkname=%E0%A4%91%E0%A4%9F%E0%A5%8B%20%2F%09%09%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%81%E0%A4%A4%E0%A4%BF%20%E0%A4%A8%E0%A5%87%2010%20%E0%A4%AE%E0%A5%89%E0%A4%A1%E0%A4%B2%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A5%80%E0%A4%AE%E0%A4%A4%E0%A5%87%E0%A4%82%205000%20%E0%A4%B0%E0%A5%81%E0%A4%AA%E0%A4%8F%20%E0%A4%98%E0%A4%9F%E0%A4%BE%E0%A4%88%E0%A4%82%2C%20%E0%A4%A8%E0%A4%8F%20%E0%A4%B0%E0%A5%87%E0%A4%9F%20%E0%A4%B2%E0%A4%BE%E0%A4%97%E0%A5%82" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fmaruti-suzuki-cuts-prices-of-select-models-by-rs-5000-01649743%2F&amp;linkname=%E0%A4%91%E0%A4%9F%E0%A5%8B%20%2F%09%09%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%81%E0%A4%A4%E0%A4%BF%20%E0%A4%A8%E0%A5%87%2010%20%E0%A4%AE%E0%A5%89%E0%A4%A1%E0%A4%B2%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A5%80%E0%A4%AE%E0%A4%A4%E0%A5%87%E0%A4%82%205000%20%E0%A4%B0%E0%A5%81%E0%A4%AA%E0%A4%8F%20%E0%A4%98%E0%A4%9F%E0%A4%BE%E0%A4%88%E0%A4%82%2C%20%E0%A4%A8%E0%A4%8F%20%E0%A4%B0%E0%A5%87%E0%A4%9F%20%E0%A4%B2%E0%A4%BE%E0%A4%97%E0%A5%82" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fmaruti-suzuki-cuts-prices-of-select-models-by-rs-5000-01649743%2F&amp;linkname=%E0%A4%91%E0%A4%9F%E0%A5%8B%20%2F%09%09%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%81%E0%A4%A4%E0%A4%BF%20%E0%A4%A8%E0%A5%87%2010%20%E0%A4%AE%E0%A5%89%E0%A4%A1%E0%A4%B2%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A5%80%E0%A4%AE%E0%A4%A4%E0%A5%87%E0%A4%82%205000%20%E0%A4%B0%E0%A5%81%E0%A4%AA%E0%A4%8F%20%E0%A4%98%E0%A4%9F%E0%A4%BE%E0%A4%88%E0%A4%82%2C%20%E0%A4%A8%E0%A4%8F%20%E0%A4%B0%E0%A5%87%E0%A4%9F%20%E0%A4%B2%E0%A4%BE%E0%A4%97%E0%A5%82" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70078" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70078 post type-post status-publish format-standard has-post-thumbnail hentry category-business" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_doc_pat_t.png">
                                                    <a href="http://www.news4t.com/soon-pay-health-insurance-premium-in-installments-01649677/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/business/" alt="View all posts in Business">
                                                                Business
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/soon-pay-health-insurance-premium-in-installments-01649677/">
                                                    इरडा / हेल्थ इंश्योरेंस प्रीमियम का भुगतान किश्तों में कर सकेंगे, यह सुविधा जल्द शुरू होगी </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        57 mins ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>नई दिल्ली. हेल्थ इंश्योरेंस प्रीमियम किश्तों में चुकाने की सुविधा जल्द शुरू होगी। इंश्योरेंस रेग्युलेटर&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/soon-pay-health-insurance-premium-in-installments-01649677/" data-a2a-title="इरडा /		हेल्थ इंश्योरेंस प्रीमियम का भुगतान किश्तों में कर सकेंगे, यह सुविधा जल्द शुरू होगी"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fsoon-pay-health-insurance-premium-in-installments-01649677%2F&amp;linkname=%E0%A4%87%E0%A4%B0%E0%A4%A1%E0%A4%BE%20%2F%09%09%E0%A4%B9%E0%A5%87%E0%A4%B2%E0%A5%8D%E0%A4%A5%20%E0%A4%87%E0%A4%82%E0%A4%B6%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%B0%E0%A5%87%E0%A4%82%E0%A4%B8%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AE%E0%A4%BF%E0%A4%AF%E0%A4%AE%20%E0%A4%95%E0%A4%BE%20%E0%A4%AD%E0%A5%81%E0%A4%97%E0%A4%A4%E0%A4%BE%E0%A4%A8%20%E0%A4%95%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%82%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%95%E0%A4%B0%20%E0%A4%B8%E0%A4%95%E0%A5%87%E0%A4%82%E0%A4%97%E0%A5%87%2C%20%E0%A4%AF%E0%A4%B9%20%E0%A4%B8%E0%A5%81%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%20%E0%A4%9C%E0%A4%B2%E0%A5%8D%E0%A4%A6%20%E0%A4%B6%E0%A5%81%E0%A4%B0%E0%A5%82%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A5%80" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fsoon-pay-health-insurance-premium-in-installments-01649677%2F&amp;linkname=%E0%A4%87%E0%A4%B0%E0%A4%A1%E0%A4%BE%20%2F%09%09%E0%A4%B9%E0%A5%87%E0%A4%B2%E0%A5%8D%E0%A4%A5%20%E0%A4%87%E0%A4%82%E0%A4%B6%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%B0%E0%A5%87%E0%A4%82%E0%A4%B8%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AE%E0%A4%BF%E0%A4%AF%E0%A4%AE%20%E0%A4%95%E0%A4%BE%20%E0%A4%AD%E0%A5%81%E0%A4%97%E0%A4%A4%E0%A4%BE%E0%A4%A8%20%E0%A4%95%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%82%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%95%E0%A4%B0%20%E0%A4%B8%E0%A4%95%E0%A5%87%E0%A4%82%E0%A4%97%E0%A5%87%2C%20%E0%A4%AF%E0%A4%B9%20%E0%A4%B8%E0%A5%81%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%20%E0%A4%9C%E0%A4%B2%E0%A5%8D%E0%A4%A6%20%E0%A4%B6%E0%A5%81%E0%A4%B0%E0%A5%82%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A5%80" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fsoon-pay-health-insurance-premium-in-installments-01649677%2F&amp;linkname=%E0%A4%87%E0%A4%B0%E0%A4%A1%E0%A4%BE%20%2F%09%09%E0%A4%B9%E0%A5%87%E0%A4%B2%E0%A5%8D%E0%A4%A5%20%E0%A4%87%E0%A4%82%E0%A4%B6%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%B0%E0%A5%87%E0%A4%82%E0%A4%B8%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AE%E0%A4%BF%E0%A4%AF%E0%A4%AE%20%E0%A4%95%E0%A4%BE%20%E0%A4%AD%E0%A5%81%E0%A4%97%E0%A4%A4%E0%A4%BE%E0%A4%A8%20%E0%A4%95%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%82%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%95%E0%A4%B0%20%E0%A4%B8%E0%A4%95%E0%A5%87%E0%A4%82%E0%A4%97%E0%A5%87%2C%20%E0%A4%AF%E0%A4%B9%20%E0%A4%B8%E0%A5%81%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%20%E0%A4%9C%E0%A4%B2%E0%A5%8D%E0%A4%A6%20%E0%A4%B6%E0%A5%81%E0%A4%B0%E0%A5%82%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A5%80" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fsoon-pay-health-insurance-premium-in-installments-01649677%2F&amp;linkname=%E0%A4%87%E0%A4%B0%E0%A4%A1%E0%A4%BE%20%2F%09%09%E0%A4%B9%E0%A5%87%E0%A4%B2%E0%A5%8D%E0%A4%A5%20%E0%A4%87%E0%A4%82%E0%A4%B6%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%B0%E0%A5%87%E0%A4%82%E0%A4%B8%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AE%E0%A4%BF%E0%A4%AF%E0%A4%AE%20%E0%A4%95%E0%A4%BE%20%E0%A4%AD%E0%A5%81%E0%A4%97%E0%A4%A4%E0%A4%BE%E0%A4%A8%20%E0%A4%95%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%82%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%95%E0%A4%B0%20%E0%A4%B8%E0%A4%95%E0%A5%87%E0%A4%82%E0%A4%97%E0%A5%87%2C%20%E0%A4%AF%E0%A4%B9%20%E0%A4%B8%E0%A5%81%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%20%E0%A4%9C%E0%A4%B2%E0%A5%8D%E0%A4%A6%20%E0%A4%B6%E0%A5%81%E0%A4%B0%E0%A5%82%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A5%80" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70076" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70076 post type-post status-publish format-standard has-post-thumbnail hentry category-sports" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_messi.jpg">
                                                    <a href="http://www.news4t.com/lionel-messi-news-messi-again-injured-but-barcelona-beats-villarreal-in-la-liga-01649715/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/sports/" alt="View all posts in Sports">
                                                                Sports
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/lionel-messi-news-messi-again-injured-but-barcelona-beats-villarreal-in-la-liga-01649715/">
                                                    फुटबॉल / मेसी फिर से चोटिल, विलारियाल के खिलाफ हाफटाइम के बाद नहीं उतरे; बार्सिलोना जीता </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        57 mins ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>खेल डेस्क. बार्सिलोना ने स्पैनिश लीग ‘ला लिगा’ में मंगलवार को विलारियाल को 2-1 से&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/lionel-messi-news-messi-again-injured-but-barcelona-beats-villarreal-in-la-liga-01649715/" data-a2a-title="फुटबॉल /		मेसी फिर से चोटिल, विलारियाल के खिलाफ हाफटाइम के बाद नहीं उतरे; बार्सिलोना जीता"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Flionel-messi-news-messi-again-injured-but-barcelona-beats-villarreal-in-la-liga-01649715%2F&amp;linkname=%E0%A4%AB%E0%A5%81%E0%A4%9F%E0%A4%AC%E0%A5%89%E0%A4%B2%20%2F%09%09%E0%A4%AE%E0%A5%87%E0%A4%B8%E0%A5%80%20%E0%A4%AB%E0%A4%BF%E0%A4%B0%20%E0%A4%B8%E0%A5%87%20%E0%A4%9A%E0%A5%8B%E0%A4%9F%E0%A4%BF%E0%A4%B2%2C%20%E0%A4%B5%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%B2%20%E0%A4%95%E0%A5%87%20%E0%A4%96%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%AB%20%E0%A4%B9%E0%A4%BE%E0%A4%AB%E0%A4%9F%E0%A4%BE%E0%A4%87%E0%A4%AE%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%A6%20%E0%A4%A8%E0%A4%B9%E0%A5%80%E0%A4%82%20%E0%A4%89%E0%A4%A4%E0%A4%B0%E0%A5%87%3B%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%B8%E0%A4%BF%E0%A4%B2%E0%A5%8B%E0%A4%A8%E0%A4%BE%20%E0%A4%9C%E0%A5%80%E0%A4%A4%E0%A4%BE" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Flionel-messi-news-messi-again-injured-but-barcelona-beats-villarreal-in-la-liga-01649715%2F&amp;linkname=%E0%A4%AB%E0%A5%81%E0%A4%9F%E0%A4%AC%E0%A5%89%E0%A4%B2%20%2F%09%09%E0%A4%AE%E0%A5%87%E0%A4%B8%E0%A5%80%20%E0%A4%AB%E0%A4%BF%E0%A4%B0%20%E0%A4%B8%E0%A5%87%20%E0%A4%9A%E0%A5%8B%E0%A4%9F%E0%A4%BF%E0%A4%B2%2C%20%E0%A4%B5%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%B2%20%E0%A4%95%E0%A5%87%20%E0%A4%96%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%AB%20%E0%A4%B9%E0%A4%BE%E0%A4%AB%E0%A4%9F%E0%A4%BE%E0%A4%87%E0%A4%AE%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%A6%20%E0%A4%A8%E0%A4%B9%E0%A5%80%E0%A4%82%20%E0%A4%89%E0%A4%A4%E0%A4%B0%E0%A5%87%3B%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%B8%E0%A4%BF%E0%A4%B2%E0%A5%8B%E0%A4%A8%E0%A4%BE%20%E0%A4%9C%E0%A5%80%E0%A4%A4%E0%A4%BE" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Flionel-messi-news-messi-again-injured-but-barcelona-beats-villarreal-in-la-liga-01649715%2F&amp;linkname=%E0%A4%AB%E0%A5%81%E0%A4%9F%E0%A4%AC%E0%A5%89%E0%A4%B2%20%2F%09%09%E0%A4%AE%E0%A5%87%E0%A4%B8%E0%A5%80%20%E0%A4%AB%E0%A4%BF%E0%A4%B0%20%E0%A4%B8%E0%A5%87%20%E0%A4%9A%E0%A5%8B%E0%A4%9F%E0%A4%BF%E0%A4%B2%2C%20%E0%A4%B5%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%B2%20%E0%A4%95%E0%A5%87%20%E0%A4%96%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%AB%20%E0%A4%B9%E0%A4%BE%E0%A4%AB%E0%A4%9F%E0%A4%BE%E0%A4%87%E0%A4%AE%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%A6%20%E0%A4%A8%E0%A4%B9%E0%A5%80%E0%A4%82%20%E0%A4%89%E0%A4%A4%E0%A4%B0%E0%A5%87%3B%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%B8%E0%A4%BF%E0%A4%B2%E0%A5%8B%E0%A4%A8%E0%A4%BE%20%E0%A4%9C%E0%A5%80%E0%A4%A4%E0%A4%BE" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Flionel-messi-news-messi-again-injured-but-barcelona-beats-villarreal-in-la-liga-01649715%2F&amp;linkname=%E0%A4%AB%E0%A5%81%E0%A4%9F%E0%A4%AC%E0%A5%89%E0%A4%B2%20%2F%09%09%E0%A4%AE%E0%A5%87%E0%A4%B8%E0%A5%80%20%E0%A4%AB%E0%A4%BF%E0%A4%B0%20%E0%A4%B8%E0%A5%87%20%E0%A4%9A%E0%A5%8B%E0%A4%9F%E0%A4%BF%E0%A4%B2%2C%20%E0%A4%B5%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%B2%20%E0%A4%95%E0%A5%87%20%E0%A4%96%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%AB%20%E0%A4%B9%E0%A4%BE%E0%A4%AB%E0%A4%9F%E0%A4%BE%E0%A4%87%E0%A4%AE%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%A6%20%E0%A4%A8%E0%A4%B9%E0%A5%80%E0%A4%82%20%E0%A4%89%E0%A4%A4%E0%A4%B0%E0%A5%87%3B%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%B8%E0%A4%BF%E0%A4%B2%E0%A5%8B%E0%A4%A8%E0%A4%BE%20%E0%A4%9C%E0%A5%80%E0%A4%A4%E0%A4%BE" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70072" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70072 post type-post status-publish format-standard has-post-thumbnail hentry category-tech-knowledge" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_redmi_8a_india_launch_today_watch_live_stream.jpg">
                                                    <a href="http://www.news4t.com/redmi-8a-india-launch-today-watch-live-stream-01649665/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/tech-knowledge/" alt="View all posts in Tech knowledge">
                                                                Tech knowledge
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/redmi-8a-india-launch-today-watch-live-stream-01649665/">
                                                    काउंटडाउन स्टार्ट / आज 12 बजे लॉन्च होगा लो बजट रेडमी 8A स्मार्टफोन, वॉटरड्रॉप नॉच डिस्प्ले मिलेगा </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        57 mins ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>गैजेट डेस्क. श्याओमी आज (25 सितंबर) भारतीय बाजार में रेडमी 8A स्मार्टफोन लॉन्च करने जा&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/redmi-8a-india-launch-today-watch-live-stream-01649665/" data-a2a-title="काउंटडाउन स्टार्ट /		आज 12 बजे लॉन्च होगा लो बजट रेडमी 8A स्मार्टफोन, वॉटरड्रॉप नॉच डिस्प्ले मिलेगा"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fredmi-8a-india-launch-today-watch-live-stream-01649665%2F&amp;linkname=%E0%A4%95%E0%A4%BE%E0%A4%89%E0%A4%82%E0%A4%9F%E0%A4%A1%E0%A4%BE%E0%A4%89%E0%A4%A8%20%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%9F%20%2F%09%09%E0%A4%86%E0%A4%9C%2012%20%E0%A4%AC%E0%A4%9C%E0%A5%87%20%E0%A4%B2%E0%A5%89%E0%A4%A8%E0%A5%8D%E0%A4%9A%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%B2%E0%A5%8B%20%E0%A4%AC%E0%A4%9C%E0%A4%9F%20%E0%A4%B0%E0%A5%87%E0%A4%A1%E0%A4%AE%E0%A5%80%208A%20%E0%A4%B8%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%AB%E0%A5%8B%E0%A4%A8%2C%20%E0%A4%B5%E0%A5%89%E0%A4%9F%E0%A4%B0%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%89%E0%A4%AA%20%E0%A4%A8%E0%A5%89%E0%A4%9A%20%E0%A4%A1%E0%A4%BF%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A5%87%20%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A5%87%E0%A4%97%E0%A4%BE" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fredmi-8a-india-launch-today-watch-live-stream-01649665%2F&amp;linkname=%E0%A4%95%E0%A4%BE%E0%A4%89%E0%A4%82%E0%A4%9F%E0%A4%A1%E0%A4%BE%E0%A4%89%E0%A4%A8%20%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%9F%20%2F%09%09%E0%A4%86%E0%A4%9C%2012%20%E0%A4%AC%E0%A4%9C%E0%A5%87%20%E0%A4%B2%E0%A5%89%E0%A4%A8%E0%A5%8D%E0%A4%9A%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%B2%E0%A5%8B%20%E0%A4%AC%E0%A4%9C%E0%A4%9F%20%E0%A4%B0%E0%A5%87%E0%A4%A1%E0%A4%AE%E0%A5%80%208A%20%E0%A4%B8%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%AB%E0%A5%8B%E0%A4%A8%2C%20%E0%A4%B5%E0%A5%89%E0%A4%9F%E0%A4%B0%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%89%E0%A4%AA%20%E0%A4%A8%E0%A5%89%E0%A4%9A%20%E0%A4%A1%E0%A4%BF%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A5%87%20%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A5%87%E0%A4%97%E0%A4%BE" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fredmi-8a-india-launch-today-watch-live-stream-01649665%2F&amp;linkname=%E0%A4%95%E0%A4%BE%E0%A4%89%E0%A4%82%E0%A4%9F%E0%A4%A1%E0%A4%BE%E0%A4%89%E0%A4%A8%20%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%9F%20%2F%09%09%E0%A4%86%E0%A4%9C%2012%20%E0%A4%AC%E0%A4%9C%E0%A5%87%20%E0%A4%B2%E0%A5%89%E0%A4%A8%E0%A5%8D%E0%A4%9A%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%B2%E0%A5%8B%20%E0%A4%AC%E0%A4%9C%E0%A4%9F%20%E0%A4%B0%E0%A5%87%E0%A4%A1%E0%A4%AE%E0%A5%80%208A%20%E0%A4%B8%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%AB%E0%A5%8B%E0%A4%A8%2C%20%E0%A4%B5%E0%A5%89%E0%A4%9F%E0%A4%B0%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%89%E0%A4%AA%20%E0%A4%A8%E0%A5%89%E0%A4%9A%20%E0%A4%A1%E0%A4%BF%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A5%87%20%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A5%87%E0%A4%97%E0%A4%BE" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fredmi-8a-india-launch-today-watch-live-stream-01649665%2F&amp;linkname=%E0%A4%95%E0%A4%BE%E0%A4%89%E0%A4%82%E0%A4%9F%E0%A4%A1%E0%A4%BE%E0%A4%89%E0%A4%A8%20%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%9F%20%2F%09%09%E0%A4%86%E0%A4%9C%2012%20%E0%A4%AC%E0%A4%9C%E0%A5%87%20%E0%A4%B2%E0%A5%89%E0%A4%A8%E0%A5%8D%E0%A4%9A%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%B2%E0%A5%8B%20%E0%A4%AC%E0%A4%9C%E0%A4%9F%20%E0%A4%B0%E0%A5%87%E0%A4%A1%E0%A4%AE%E0%A5%80%208A%20%E0%A4%B8%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%AB%E0%A5%8B%E0%A4%A8%2C%20%E0%A4%B5%E0%A5%89%E0%A4%9F%E0%A4%B0%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%89%E0%A4%AA%20%E0%A4%A8%E0%A5%89%E0%A4%9A%20%E0%A4%A1%E0%A4%BF%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A5%87%20%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A5%87%E0%A4%97%E0%A4%BE" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70074" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70074 post type-post status-publish format-standard has-post-thumbnail hentry category-intertenment" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_shivin_narang.jpg">
                                                    <a href="http://www.news4t.com/shivin-narang-will-be-paired-with-jennifer-winget-in-beyhadh-2-01649381/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/intertenment/" alt="View all posts in Entertainment">
                                                                Entertainment
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/shivin-narang-will-be-paired-with-jennifer-winget-in-beyhadh-2-01649381/">
                                                    कन्फर्म / &#8216;बेहद 2&#8217; में जेनिफर विंगेट के अपोजिट नजर आएंगे शिविन नारंग, बोले- सरप्राइज से भरा होगा दूसरा सीजन </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        57 mins ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>टीवी डेस्क (किरण जैन).&nbsp;जब से एक्ट्रेस जेनिफर विंगेट ने सीरियल &#8216;बेहद&#8217; के दूसरे सीजन के&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/shivin-narang-will-be-paired-with-jennifer-winget-in-beyhadh-2-01649381/" data-a2a-title="कन्फर्म /		‘बेहद 2’ में जेनिफर विंगेट के अपोजिट नजर आएंगे शिविन नारंग, बोले- सरप्राइज से भरा होगा दूसरा सीजन"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fshivin-narang-will-be-paired-with-jennifer-winget-in-beyhadh-2-01649381%2F&amp;linkname=%E0%A4%95%E0%A4%A8%E0%A5%8D%E0%A4%AB%E0%A4%B0%E0%A5%8D%E0%A4%AE%20%2F%09%09%E2%80%98%E0%A4%AC%E0%A5%87%E0%A4%B9%E0%A4%A6%202%E2%80%99%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A5%87%E0%A4%A8%E0%A4%BF%E0%A4%AB%E0%A4%B0%20%E0%A4%B5%E0%A4%BF%E0%A4%82%E0%A4%97%E0%A5%87%E0%A4%9F%20%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%AA%E0%A5%8B%E0%A4%9C%E0%A4%BF%E0%A4%9F%20%E0%A4%A8%E0%A4%9C%E0%A4%B0%20%E0%A4%86%E0%A4%8F%E0%A4%82%E0%A4%97%E0%A5%87%20%E0%A4%B6%E0%A4%BF%E0%A4%B5%E0%A4%BF%E0%A4%A8%20%E0%A4%A8%E0%A4%BE%E0%A4%B0%E0%A4%82%E0%A4%97%2C%20%E0%A4%AC%E0%A5%8B%E0%A4%B2%E0%A5%87-%20%E0%A4%B8%E0%A4%B0%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%87%E0%A4%9C%20%E0%A4%B8%E0%A5%87%20%E0%A4%AD%E0%A4%B0%E0%A4%BE%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%A6%E0%A5%82%E0%A4%B8%E0%A4%B0%E0%A4%BE%20%E0%A4%B8%E0%A5%80%E0%A4%9C%E0%A4%A8" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fshivin-narang-will-be-paired-with-jennifer-winget-in-beyhadh-2-01649381%2F&amp;linkname=%E0%A4%95%E0%A4%A8%E0%A5%8D%E0%A4%AB%E0%A4%B0%E0%A5%8D%E0%A4%AE%20%2F%09%09%E2%80%98%E0%A4%AC%E0%A5%87%E0%A4%B9%E0%A4%A6%202%E2%80%99%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A5%87%E0%A4%A8%E0%A4%BF%E0%A4%AB%E0%A4%B0%20%E0%A4%B5%E0%A4%BF%E0%A4%82%E0%A4%97%E0%A5%87%E0%A4%9F%20%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%AA%E0%A5%8B%E0%A4%9C%E0%A4%BF%E0%A4%9F%20%E0%A4%A8%E0%A4%9C%E0%A4%B0%20%E0%A4%86%E0%A4%8F%E0%A4%82%E0%A4%97%E0%A5%87%20%E0%A4%B6%E0%A4%BF%E0%A4%B5%E0%A4%BF%E0%A4%A8%20%E0%A4%A8%E0%A4%BE%E0%A4%B0%E0%A4%82%E0%A4%97%2C%20%E0%A4%AC%E0%A5%8B%E0%A4%B2%E0%A5%87-%20%E0%A4%B8%E0%A4%B0%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%87%E0%A4%9C%20%E0%A4%B8%E0%A5%87%20%E0%A4%AD%E0%A4%B0%E0%A4%BE%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%A6%E0%A5%82%E0%A4%B8%E0%A4%B0%E0%A4%BE%20%E0%A4%B8%E0%A5%80%E0%A4%9C%E0%A4%A8" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fshivin-narang-will-be-paired-with-jennifer-winget-in-beyhadh-2-01649381%2F&amp;linkname=%E0%A4%95%E0%A4%A8%E0%A5%8D%E0%A4%AB%E0%A4%B0%E0%A5%8D%E0%A4%AE%20%2F%09%09%E2%80%98%E0%A4%AC%E0%A5%87%E0%A4%B9%E0%A4%A6%202%E2%80%99%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A5%87%E0%A4%A8%E0%A4%BF%E0%A4%AB%E0%A4%B0%20%E0%A4%B5%E0%A4%BF%E0%A4%82%E0%A4%97%E0%A5%87%E0%A4%9F%20%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%AA%E0%A5%8B%E0%A4%9C%E0%A4%BF%E0%A4%9F%20%E0%A4%A8%E0%A4%9C%E0%A4%B0%20%E0%A4%86%E0%A4%8F%E0%A4%82%E0%A4%97%E0%A5%87%20%E0%A4%B6%E0%A4%BF%E0%A4%B5%E0%A4%BF%E0%A4%A8%20%E0%A4%A8%E0%A4%BE%E0%A4%B0%E0%A4%82%E0%A4%97%2C%20%E0%A4%AC%E0%A5%8B%E0%A4%B2%E0%A5%87-%20%E0%A4%B8%E0%A4%B0%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%87%E0%A4%9C%20%E0%A4%B8%E0%A5%87%20%E0%A4%AD%E0%A4%B0%E0%A4%BE%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%A6%E0%A5%82%E0%A4%B8%E0%A4%B0%E0%A4%BE%20%E0%A4%B8%E0%A5%80%E0%A4%9C%E0%A4%A8" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fshivin-narang-will-be-paired-with-jennifer-winget-in-beyhadh-2-01649381%2F&amp;linkname=%E0%A4%95%E0%A4%A8%E0%A5%8D%E0%A4%AB%E0%A4%B0%E0%A5%8D%E0%A4%AE%20%2F%09%09%E2%80%98%E0%A4%AC%E0%A5%87%E0%A4%B9%E0%A4%A6%202%E2%80%99%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A5%87%E0%A4%A8%E0%A4%BF%E0%A4%AB%E0%A4%B0%20%E0%A4%B5%E0%A4%BF%E0%A4%82%E0%A4%97%E0%A5%87%E0%A4%9F%20%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%AA%E0%A5%8B%E0%A4%9C%E0%A4%BF%E0%A4%9F%20%E0%A4%A8%E0%A4%9C%E0%A4%B0%20%E0%A4%86%E0%A4%8F%E0%A4%82%E0%A4%97%E0%A5%87%20%E0%A4%B6%E0%A4%BF%E0%A4%B5%E0%A4%BF%E0%A4%A8%20%E0%A4%A8%E0%A4%BE%E0%A4%B0%E0%A4%82%E0%A4%97%2C%20%E0%A4%AC%E0%A5%8B%E0%A4%B2%E0%A5%87-%20%E0%A4%B8%E0%A4%B0%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%87%E0%A4%9C%20%E0%A4%B8%E0%A5%87%20%E0%A4%AD%E0%A4%B0%E0%A4%BE%20%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE%20%E0%A4%A6%E0%A5%82%E0%A4%B8%E0%A4%B0%E0%A4%BE%20%E0%A4%B8%E0%A5%80%E0%A4%9C%E0%A4%A8" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70068" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70068 post type-post status-publish format-standard has-post-thumbnail hentry category-business" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_bse_buil_l_t_11.jpg">
                                                    <a href="http://www.news4t.com/share-stock-market-news-updates-nse-bse-sensex-trade-september-25-2019-01649653/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/business/" alt="View all posts in Business">
                                                                Business
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/share-stock-market-news-updates-nse-bse-sensex-trade-september-25-2019-01649653/">
                                                    शेयर बाजार / सेंसेक्स 300 अंक लुढ़का, निफ्टी 90 प्वाइंट गिरकर 11500 के नीचे फिसला </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        3 mins ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>मुंबई. शेयर बाजार में आज तेज गिरावट आई। सेंसेक्स शुरुआती कारोबार में 319 अंक लुढ़क&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/share-stock-market-news-updates-nse-bse-sensex-trade-september-25-2019-01649653/" data-a2a-title="शेयर बाजार /		सेंसेक्स 300 अंक लुढ़का, निफ्टी 90 प्वाइंट गिरकर 11500 के नीचे फिसला"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fshare-stock-market-news-updates-nse-bse-sensex-trade-september-25-2019-01649653%2F&amp;linkname=%E0%A4%B6%E0%A5%87%E0%A4%AF%E0%A4%B0%20%E0%A4%AC%E0%A4%BE%E0%A4%9C%E0%A4%BE%E0%A4%B0%20%2F%09%09%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%87%E0%A4%95%E0%A5%8D%E0%A4%B8%20300%20%E0%A4%85%E0%A4%82%E0%A4%95%20%E0%A4%B2%E0%A5%81%E0%A4%A2%E0%A4%BC%E0%A4%95%E0%A4%BE%2C%20%E0%A4%A8%E0%A4%BF%E0%A4%AB%E0%A5%8D%E0%A4%9F%E0%A5%80%2090%20%E0%A4%AA%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%87%E0%A4%82%E0%A4%9F%20%E0%A4%97%E0%A4%BF%E0%A4%B0%E0%A4%95%E0%A4%B0%2011500%20%E0%A4%95%E0%A5%87%20%E0%A4%A8%E0%A5%80%E0%A4%9A%E0%A5%87%20%E0%A4%AB%E0%A4%BF%E0%A4%B8%E0%A4%B2%E0%A4%BE" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fshare-stock-market-news-updates-nse-bse-sensex-trade-september-25-2019-01649653%2F&amp;linkname=%E0%A4%B6%E0%A5%87%E0%A4%AF%E0%A4%B0%20%E0%A4%AC%E0%A4%BE%E0%A4%9C%E0%A4%BE%E0%A4%B0%20%2F%09%09%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%87%E0%A4%95%E0%A5%8D%E0%A4%B8%20300%20%E0%A4%85%E0%A4%82%E0%A4%95%20%E0%A4%B2%E0%A5%81%E0%A4%A2%E0%A4%BC%E0%A4%95%E0%A4%BE%2C%20%E0%A4%A8%E0%A4%BF%E0%A4%AB%E0%A5%8D%E0%A4%9F%E0%A5%80%2090%20%E0%A4%AA%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%87%E0%A4%82%E0%A4%9F%20%E0%A4%97%E0%A4%BF%E0%A4%B0%E0%A4%95%E0%A4%B0%2011500%20%E0%A4%95%E0%A5%87%20%E0%A4%A8%E0%A5%80%E0%A4%9A%E0%A5%87%20%E0%A4%AB%E0%A4%BF%E0%A4%B8%E0%A4%B2%E0%A4%BE" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fshare-stock-market-news-updates-nse-bse-sensex-trade-september-25-2019-01649653%2F&amp;linkname=%E0%A4%B6%E0%A5%87%E0%A4%AF%E0%A4%B0%20%E0%A4%AC%E0%A4%BE%E0%A4%9C%E0%A4%BE%E0%A4%B0%20%2F%09%09%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%87%E0%A4%95%E0%A5%8D%E0%A4%B8%20300%20%E0%A4%85%E0%A4%82%E0%A4%95%20%E0%A4%B2%E0%A5%81%E0%A4%A2%E0%A4%BC%E0%A4%95%E0%A4%BE%2C%20%E0%A4%A8%E0%A4%BF%E0%A4%AB%E0%A5%8D%E0%A4%9F%E0%A5%80%2090%20%E0%A4%AA%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%87%E0%A4%82%E0%A4%9F%20%E0%A4%97%E0%A4%BF%E0%A4%B0%E0%A4%95%E0%A4%B0%2011500%20%E0%A4%95%E0%A5%87%20%E0%A4%A8%E0%A5%80%E0%A4%9A%E0%A5%87%20%E0%A4%AB%E0%A4%BF%E0%A4%B8%E0%A4%B2%E0%A4%BE" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fshare-stock-market-news-updates-nse-bse-sensex-trade-september-25-2019-01649653%2F&amp;linkname=%E0%A4%B6%E0%A5%87%E0%A4%AF%E0%A4%B0%20%E0%A4%AC%E0%A4%BE%E0%A4%9C%E0%A4%BE%E0%A4%B0%20%2F%09%09%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%87%E0%A4%95%E0%A5%8D%E0%A4%B8%20300%20%E0%A4%85%E0%A4%82%E0%A4%95%20%E0%A4%B2%E0%A5%81%E0%A4%A2%E0%A4%BC%E0%A4%95%E0%A4%BE%2C%20%E0%A4%A8%E0%A4%BF%E0%A4%AB%E0%A5%8D%E0%A4%9F%E0%A5%80%2090%20%E0%A4%AA%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%87%E0%A4%82%E0%A4%9F%20%E0%A4%97%E0%A4%BF%E0%A4%B0%E0%A4%95%E0%A4%B0%2011500%20%E0%A4%95%E0%A5%87%20%E0%A4%A8%E0%A5%80%E0%A4%9A%E0%A5%87%20%E0%A4%AB%E0%A4%BF%E0%A4%B8%E0%A4%B2%E0%A4%BE" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70069" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70069 post type-post status-publish format-standard has-post-thumbnail hentry category-sports" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_big_bash.jpg">
                                                    <a href="http://www.news4t.com/boundary-count-rule-will-not-be-used-in-this-year-s-big-bash-t20-tournaments-in-australia-01649651/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/sports/" alt="View all posts in Sports">
                                                                Sports
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/boundary-count-rule-will-not-be-used-in-this-year-s-big-bash-t20-tournaments-in-australia-01649651/">
                                                    बिग बैश / फाइनल का पहला सुपर ओवर टाई रहा तो मल्टीपल सुपर ओवर से रिजल्ट </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        3 mins ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>खेल डेस्क. क्रिकेट ऑस्ट्रेलिया मौजूदा टी-20 बिग बैश सीजन से बाउंड्री काउंट नियम फाइनल में&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/boundary-count-rule-will-not-be-used-in-this-year-s-big-bash-t20-tournaments-in-australia-01649651/" data-a2a-title="बिग बैश /		फाइनल का पहला सुपर ओवर टाई रहा तो मल्टीपल सुपर ओवर से रिजल्ट"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fboundary-count-rule-will-not-be-used-in-this-year-s-big-bash-t20-tournaments-in-australia-01649651%2F&amp;linkname=%E0%A4%AC%E0%A4%BF%E0%A4%97%20%E0%A4%AC%E0%A5%88%E0%A4%B6%20%2F%09%09%E0%A4%AB%E0%A4%BE%E0%A4%87%E0%A4%A8%E0%A4%B2%20%E0%A4%95%E0%A4%BE%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A4%BE%20%E0%A4%B8%E0%A5%81%E0%A4%AA%E0%A4%B0%20%E0%A4%93%E0%A4%B5%E0%A4%B0%20%E0%A4%9F%E0%A4%BE%E0%A4%88%20%E0%A4%B0%E0%A4%B9%E0%A4%BE%20%E0%A4%A4%E0%A5%8B%20%E0%A4%AE%E0%A4%B2%E0%A5%8D%E0%A4%9F%E0%A5%80%E0%A4%AA%E0%A4%B2%20%E0%A4%B8%E0%A5%81%E0%A4%AA%E0%A4%B0%20%E0%A4%93%E0%A4%B5%E0%A4%B0%20%E0%A4%B8%E0%A5%87%20%E0%A4%B0%E0%A4%BF%E0%A4%9C%E0%A4%B2%E0%A5%8D%E0%A4%9F" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fboundary-count-rule-will-not-be-used-in-this-year-s-big-bash-t20-tournaments-in-australia-01649651%2F&amp;linkname=%E0%A4%AC%E0%A4%BF%E0%A4%97%20%E0%A4%AC%E0%A5%88%E0%A4%B6%20%2F%09%09%E0%A4%AB%E0%A4%BE%E0%A4%87%E0%A4%A8%E0%A4%B2%20%E0%A4%95%E0%A4%BE%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A4%BE%20%E0%A4%B8%E0%A5%81%E0%A4%AA%E0%A4%B0%20%E0%A4%93%E0%A4%B5%E0%A4%B0%20%E0%A4%9F%E0%A4%BE%E0%A4%88%20%E0%A4%B0%E0%A4%B9%E0%A4%BE%20%E0%A4%A4%E0%A5%8B%20%E0%A4%AE%E0%A4%B2%E0%A5%8D%E0%A4%9F%E0%A5%80%E0%A4%AA%E0%A4%B2%20%E0%A4%B8%E0%A5%81%E0%A4%AA%E0%A4%B0%20%E0%A4%93%E0%A4%B5%E0%A4%B0%20%E0%A4%B8%E0%A5%87%20%E0%A4%B0%E0%A4%BF%E0%A4%9C%E0%A4%B2%E0%A5%8D%E0%A4%9F" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fboundary-count-rule-will-not-be-used-in-this-year-s-big-bash-t20-tournaments-in-australia-01649651%2F&amp;linkname=%E0%A4%AC%E0%A4%BF%E0%A4%97%20%E0%A4%AC%E0%A5%88%E0%A4%B6%20%2F%09%09%E0%A4%AB%E0%A4%BE%E0%A4%87%E0%A4%A8%E0%A4%B2%20%E0%A4%95%E0%A4%BE%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A4%BE%20%E0%A4%B8%E0%A5%81%E0%A4%AA%E0%A4%B0%20%E0%A4%93%E0%A4%B5%E0%A4%B0%20%E0%A4%9F%E0%A4%BE%E0%A4%88%20%E0%A4%B0%E0%A4%B9%E0%A4%BE%20%E0%A4%A4%E0%A5%8B%20%E0%A4%AE%E0%A4%B2%E0%A5%8D%E0%A4%9F%E0%A5%80%E0%A4%AA%E0%A4%B2%20%E0%A4%B8%E0%A5%81%E0%A4%AA%E0%A4%B0%20%E0%A4%93%E0%A4%B5%E0%A4%B0%20%E0%A4%B8%E0%A5%87%20%E0%A4%B0%E0%A4%BF%E0%A4%9C%E0%A4%B2%E0%A5%8D%E0%A4%9F" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fboundary-count-rule-will-not-be-used-in-this-year-s-big-bash-t20-tournaments-in-australia-01649651%2F&amp;linkname=%E0%A4%AC%E0%A4%BF%E0%A4%97%20%E0%A4%AC%E0%A5%88%E0%A4%B6%20%2F%09%09%E0%A4%AB%E0%A4%BE%E0%A4%87%E0%A4%A8%E0%A4%B2%20%E0%A4%95%E0%A4%BE%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A4%BE%20%E0%A4%B8%E0%A5%81%E0%A4%AA%E0%A4%B0%20%E0%A4%93%E0%A4%B5%E0%A4%B0%20%E0%A4%9F%E0%A4%BE%E0%A4%88%20%E0%A4%B0%E0%A4%B9%E0%A4%BE%20%E0%A4%A4%E0%A5%8B%20%E0%A4%AE%E0%A4%B2%E0%A5%8D%E0%A4%9F%E0%A5%80%E0%A4%AA%E0%A4%B2%20%E0%A4%B8%E0%A5%81%E0%A4%AA%E0%A4%B0%20%E0%A4%93%E0%A4%B5%E0%A4%B0%20%E0%A4%B8%E0%A5%87%20%E0%A4%B0%E0%A4%BF%E0%A4%9C%E0%A4%B2%E0%A5%8D%E0%A4%9F" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70065" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70065 post type-post status-publish format-standard has-post-thumbnail hentry category-intertenment" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_amitabh.jpg">
                                                    <a href="http://www.news4t.com/salim-javed-who-has-written-success-scripts-like-zanjeer-sholay-for-him-are-telling-ami-01649583/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/intertenment/" alt="View all posts in Entertainment">
                                                                Entertainment
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/salim-javed-who-has-written-success-scripts-like-zanjeer-sholay-for-him-are-telling-ami-01649583/">
                                                    दादा साहेब फाल्के अवॉर्ड / जंजीर, शोले जैसी पटकथाएं लिखने वाले सलीम-जावेद ने बताए अमिताभ बच्चन के मायने </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        1 hour ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>नई दिल्ली.&nbsp;अमिताभ बच्चन को सिनेमा का सबसे प्रतिष्ठित दादा साहब फाल्के पुरस्कार मिलेगा। 5 दशक&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/salim-javed-who-has-written-success-scripts-like-zanjeer-sholay-for-him-are-telling-ami-01649583/" data-a2a-title="दादा साहेब फाल्के अवॉर्ड /		जंजीर, शोले जैसी पटकथाएं लिखने वाले सलीम-जावेद ने बताए अमिताभ बच्चन के मायने"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Fsalim-javed-who-has-written-success-scripts-like-zanjeer-sholay-for-him-are-telling-ami-01649583%2F&amp;linkname=%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%B9%E0%A5%87%E0%A4%AC%20%E0%A4%AB%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%B5%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%A1%20%2F%09%09%E0%A4%9C%E0%A4%82%E0%A4%9C%E0%A5%80%E0%A4%B0%2C%20%E0%A4%B6%E0%A5%8B%E0%A4%B2%E0%A5%87%20%E0%A4%9C%E0%A5%88%E0%A4%B8%E0%A5%80%20%E0%A4%AA%E0%A4%9F%E0%A4%95%E0%A4%A5%E0%A4%BE%E0%A4%8F%E0%A4%82%20%E0%A4%B2%E0%A4%BF%E0%A4%96%E0%A4%A8%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A5%87%20%E0%A4%B8%E0%A4%B2%E0%A5%80%E0%A4%AE-%E0%A4%9C%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%A6%20%E0%A4%A8%E0%A5%87%20%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%20%E0%A4%85%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%AD%20%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%AE%E0%A4%BE%E0%A4%AF%E0%A4%A8%E0%A5%87" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Fsalim-javed-who-has-written-success-scripts-like-zanjeer-sholay-for-him-are-telling-ami-01649583%2F&amp;linkname=%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%B9%E0%A5%87%E0%A4%AC%20%E0%A4%AB%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%B5%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%A1%20%2F%09%09%E0%A4%9C%E0%A4%82%E0%A4%9C%E0%A5%80%E0%A4%B0%2C%20%E0%A4%B6%E0%A5%8B%E0%A4%B2%E0%A5%87%20%E0%A4%9C%E0%A5%88%E0%A4%B8%E0%A5%80%20%E0%A4%AA%E0%A4%9F%E0%A4%95%E0%A4%A5%E0%A4%BE%E0%A4%8F%E0%A4%82%20%E0%A4%B2%E0%A4%BF%E0%A4%96%E0%A4%A8%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A5%87%20%E0%A4%B8%E0%A4%B2%E0%A5%80%E0%A4%AE-%E0%A4%9C%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%A6%20%E0%A4%A8%E0%A5%87%20%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%20%E0%A4%85%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%AD%20%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%AE%E0%A4%BE%E0%A4%AF%E0%A4%A8%E0%A5%87" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Fsalim-javed-who-has-written-success-scripts-like-zanjeer-sholay-for-him-are-telling-ami-01649583%2F&amp;linkname=%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%B9%E0%A5%87%E0%A4%AC%20%E0%A4%AB%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%B5%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%A1%20%2F%09%09%E0%A4%9C%E0%A4%82%E0%A4%9C%E0%A5%80%E0%A4%B0%2C%20%E0%A4%B6%E0%A5%8B%E0%A4%B2%E0%A5%87%20%E0%A4%9C%E0%A5%88%E0%A4%B8%E0%A5%80%20%E0%A4%AA%E0%A4%9F%E0%A4%95%E0%A4%A5%E0%A4%BE%E0%A4%8F%E0%A4%82%20%E0%A4%B2%E0%A4%BF%E0%A4%96%E0%A4%A8%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A5%87%20%E0%A4%B8%E0%A4%B2%E0%A5%80%E0%A4%AE-%E0%A4%9C%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%A6%20%E0%A4%A8%E0%A5%87%20%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%20%E0%A4%85%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%AD%20%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%AE%E0%A4%BE%E0%A4%AF%E0%A4%A8%E0%A5%87" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Fsalim-javed-who-has-written-success-scripts-like-zanjeer-sholay-for-him-are-telling-ami-01649583%2F&amp;linkname=%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%B9%E0%A5%87%E0%A4%AC%20%E0%A4%AB%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%B5%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%A1%20%2F%09%09%E0%A4%9C%E0%A4%82%E0%A4%9C%E0%A5%80%E0%A4%B0%2C%20%E0%A4%B6%E0%A5%8B%E0%A4%B2%E0%A5%87%20%E0%A4%9C%E0%A5%88%E0%A4%B8%E0%A5%80%20%E0%A4%AA%E0%A4%9F%E0%A4%95%E0%A4%A5%E0%A4%BE%E0%A4%8F%E0%A4%82%20%E0%A4%B2%E0%A4%BF%E0%A4%96%E0%A4%A8%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A5%87%20%E0%A4%B8%E0%A4%B2%E0%A5%80%E0%A4%AE-%E0%A4%9C%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%A6%20%E0%A4%A8%E0%A5%87%20%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%20%E0%A4%85%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%AD%20%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%AE%E0%A4%BE%E0%A4%AF%E0%A4%A8%E0%A5%87" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70063" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70063 post type-post status-publish format-standard has-post-thumbnail hentry category-religion" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/DBB-Logo-730x548.jpg">
                                                    <a href="http://www.news4t.com/todays-shubh-muhurat-25-september-2019-choughadiya-muhurat-vijay-kaal-and-abhijit-muhurat-01649479/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/religion/" alt="View all posts in Religion">
                                                                Religion
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/todays-shubh-muhurat-25-september-2019-choughadiya-muhurat-vijay-kaal-and-abhijit-muhurat-01649479/">
                                                    आज का पंचांग / 25 सितंबर, बुधवार के मुहूर्त, हिन्दू कैलेंडर के अनुसार दिन के शुभ-अशुभ समय और राहुकाल </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        9 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>जीवन मंत्र डेस्क.&nbsp;आज&nbsp;का&nbsp;पंचांग, 25 सितंबर बुधवार को सूर्य-चंद्रमा की स्थिति से शिव नाम का योग&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/todays-shubh-muhurat-25-september-2019-choughadiya-muhurat-vijay-kaal-and-abhijit-muhurat-01649479/" data-a2a-title="आज का पंचांग /		25 सितंबर, बुधवार के मुहूर्त, हिन्दू कैलेंडर के अनुसार दिन के शुभ-अशुभ समय और राहुकाल"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Ftodays-shubh-muhurat-25-september-2019-choughadiya-muhurat-vijay-kaal-and-abhijit-muhurat-01649479%2F&amp;linkname=%E0%A4%86%E0%A4%9C%20%E0%A4%95%E0%A4%BE%20%E0%A4%AA%E0%A4%82%E0%A4%9A%E0%A4%BE%E0%A4%82%E0%A4%97%20%2F%09%0925%20%E0%A4%B8%E0%A4%BF%E0%A4%A4%E0%A4%82%E0%A4%AC%E0%A4%B0%2C%20%E0%A4%AC%E0%A5%81%E0%A4%A7%E0%A4%B5%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A5%87%20%E0%A4%AE%E0%A5%81%E0%A4%B9%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%A4%2C%20%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%82%20%E0%A4%95%E0%A5%88%E0%A4%B2%E0%A5%87%E0%A4%82%E0%A4%A1%E0%A4%B0%20%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%B8%E0%A4%BE%E0%A4%B0%20%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%B6%E0%A5%81%E0%A4%AD-%E0%A4%85%E0%A4%B6%E0%A5%81%E0%A4%AD%20%E0%A4%B8%E0%A4%AE%E0%A4%AF%20%E0%A4%94%E0%A4%B0%20%E0%A4%B0%E0%A4%BE%E0%A4%B9%E0%A5%81%E0%A4%95%E0%A4%BE%E0%A4%B2" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Ftodays-shubh-muhurat-25-september-2019-choughadiya-muhurat-vijay-kaal-and-abhijit-muhurat-01649479%2F&amp;linkname=%E0%A4%86%E0%A4%9C%20%E0%A4%95%E0%A4%BE%20%E0%A4%AA%E0%A4%82%E0%A4%9A%E0%A4%BE%E0%A4%82%E0%A4%97%20%2F%09%0925%20%E0%A4%B8%E0%A4%BF%E0%A4%A4%E0%A4%82%E0%A4%AC%E0%A4%B0%2C%20%E0%A4%AC%E0%A5%81%E0%A4%A7%E0%A4%B5%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A5%87%20%E0%A4%AE%E0%A5%81%E0%A4%B9%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%A4%2C%20%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%82%20%E0%A4%95%E0%A5%88%E0%A4%B2%E0%A5%87%E0%A4%82%E0%A4%A1%E0%A4%B0%20%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%B8%E0%A4%BE%E0%A4%B0%20%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%B6%E0%A5%81%E0%A4%AD-%E0%A4%85%E0%A4%B6%E0%A5%81%E0%A4%AD%20%E0%A4%B8%E0%A4%AE%E0%A4%AF%20%E0%A4%94%E0%A4%B0%20%E0%A4%B0%E0%A4%BE%E0%A4%B9%E0%A5%81%E0%A4%95%E0%A4%BE%E0%A4%B2" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Ftodays-shubh-muhurat-25-september-2019-choughadiya-muhurat-vijay-kaal-and-abhijit-muhurat-01649479%2F&amp;linkname=%E0%A4%86%E0%A4%9C%20%E0%A4%95%E0%A4%BE%20%E0%A4%AA%E0%A4%82%E0%A4%9A%E0%A4%BE%E0%A4%82%E0%A4%97%20%2F%09%0925%20%E0%A4%B8%E0%A4%BF%E0%A4%A4%E0%A4%82%E0%A4%AC%E0%A4%B0%2C%20%E0%A4%AC%E0%A5%81%E0%A4%A7%E0%A4%B5%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A5%87%20%E0%A4%AE%E0%A5%81%E0%A4%B9%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%A4%2C%20%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%82%20%E0%A4%95%E0%A5%88%E0%A4%B2%E0%A5%87%E0%A4%82%E0%A4%A1%E0%A4%B0%20%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%B8%E0%A4%BE%E0%A4%B0%20%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%B6%E0%A5%81%E0%A4%AD-%E0%A4%85%E0%A4%B6%E0%A5%81%E0%A4%AD%20%E0%A4%B8%E0%A4%AE%E0%A4%AF%20%E0%A4%94%E0%A4%B0%20%E0%A4%B0%E0%A4%BE%E0%A4%B9%E0%A5%81%E0%A4%95%E0%A4%BE%E0%A4%B2" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Ftodays-shubh-muhurat-25-september-2019-choughadiya-muhurat-vijay-kaal-and-abhijit-muhurat-01649479%2F&amp;linkname=%E0%A4%86%E0%A4%9C%20%E0%A4%95%E0%A4%BE%20%E0%A4%AA%E0%A4%82%E0%A4%9A%E0%A4%BE%E0%A4%82%E0%A4%97%20%2F%09%0925%20%E0%A4%B8%E0%A4%BF%E0%A4%A4%E0%A4%82%E0%A4%AC%E0%A4%B0%2C%20%E0%A4%AC%E0%A5%81%E0%A4%A7%E0%A4%B5%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A5%87%20%E0%A4%AE%E0%A5%81%E0%A4%B9%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%A4%2C%20%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%82%20%E0%A4%95%E0%A5%88%E0%A4%B2%E0%A5%87%E0%A4%82%E0%A4%A1%E0%A4%B0%20%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%B8%E0%A4%BE%E0%A4%B0%20%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%B6%E0%A5%81%E0%A4%AD-%E0%A4%85%E0%A4%B6%E0%A5%81%E0%A4%AD%20%E0%A4%B8%E0%A4%AE%E0%A4%AF%20%E0%A4%94%E0%A4%B0%20%E0%A4%B0%E0%A4%BE%E0%A4%B9%E0%A5%81%E0%A4%95%E0%A4%BE%E0%A4%B2" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <article id="post-70061" className="col-lg-4 col-sm-4 col-md-4 latest-posts-grid post-70061 post type-post status-publish format-standard has-post-thumbnail hentry category-sports" data-mh="archive-layout-grid">
                                <div className="align-items-center">
                                    <div className="spotlight-post">
                                        <figure className="categorised-article inside-img">
                                            <div className="categorised-article-wrapper">
                                                <div className="data-bg-hover data-bg data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_jasprit_bumrah_vs_south_africa.jpg">
                                                    <a href="http://www.news4t.com/india-vs-south-africa-jasprit-bumrah-ruled-out-repalce-umesh-yadav-01649399/"></a></div>
                                                <div className="figure-categories figure-categories-bg">
                                                    <ul className="cat-links">
                                                        <li className="meta-category">
                                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/sports/" alt="View all posts in Sports">
                                                                Sports
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                        <figcaption>
                                            <h3 className="article-title article-title-1">
                                                <a href="http://www.news4t.com/india-vs-south-africa-jasprit-bumrah-ruled-out-repalce-umesh-yadav-01649399/">
                                                    क्रिकेट / जसप्रीत बुमराह दक्षिण अफ्रीका के खिलाफ टेस्ट सीरीज से बाहर; उमेश यादव लेंगे जगह </a></h3>
                                            <div className="grid-item-metadata">
                                                <span className="author-links">
                                                    <span className="item-metadata posts-date">
                                                        <i className="far fa-clock"></i>
                                                        14 hours ago </span>
                                                    <span className="item-metadata posts-author">
                                                        <a href="http://www.news4t.com/author/damdarnews/">
                                                            damdarnews </a>
                                                    </span>
                                                </span></div>
                                            <div className="full-item-discription">
                                                <div className="post-description">
                                                    <p>नई दिल्ली. जसप्रीत बुमराह दक्षिण अफ्रीका के खिलाफ टेस्ट सीरीज से बाहर हो गए हैं।&#8230;</p>
                                                    <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                                                        <div className="a2a_kit a2a_kit_size_32 addtoany_list" data-a2a-url="http://www.news4t.com/india-vs-south-africa-jasprit-bumrah-ruled-out-repalce-umesh-yadav-01649399/" data-a2a-title="क्रिकेट /		जसप्रीत बुमराह दक्षिण अफ्रीका के खिलाफ टेस्ट सीरीज से बाहर; उमेश यादव लेंगे जगह"><a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.news4t.com%2Findia-vs-south-africa-jasprit-bumrah-ruled-out-repalce-umesh-yadav-01649399%2F&amp;linkname=%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A5%87%E0%A4%9F%20%2F%09%09%E0%A4%9C%E0%A4%B8%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%A4%20%E0%A4%AC%E0%A5%81%E0%A4%AE%E0%A4%B0%E0%A4%BE%E0%A4%B9%20%E0%A4%A6%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A3%20%E0%A4%85%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%96%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%AB%20%E0%A4%9F%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20%E0%A4%B8%E0%A5%80%E0%A4%B0%E0%A5%80%E0%A4%9C%20%E0%A4%B8%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%B9%E0%A4%B0%3B%20%E0%A4%89%E0%A4%AE%E0%A5%87%E0%A4%B6%20%E0%A4%AF%E0%A4%BE%E0%A4%A6%E0%A4%B5%20%E0%A4%B2%E0%A5%87%E0%A4%82%E0%A4%97%E0%A5%87%20%E0%A4%9C%E0%A4%97%E0%A4%B9" title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=http%3A%2F%2Fwww.news4t.com%2Findia-vs-south-africa-jasprit-bumrah-ruled-out-repalce-umesh-yadav-01649399%2F&amp;linkname=%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A5%87%E0%A4%9F%20%2F%09%09%E0%A4%9C%E0%A4%B8%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%A4%20%E0%A4%AC%E0%A5%81%E0%A4%AE%E0%A4%B0%E0%A4%BE%E0%A4%B9%20%E0%A4%A6%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A3%20%E0%A4%85%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%96%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%AB%20%E0%A4%9F%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20%E0%A4%B8%E0%A5%80%E0%A4%B0%E0%A5%80%E0%A4%9C%20%E0%A4%B8%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%B9%E0%A4%B0%3B%20%E0%A4%89%E0%A4%AE%E0%A5%87%E0%A4%B6%20%E0%A4%AF%E0%A4%BE%E0%A4%A6%E0%A4%B5%20%E0%A4%B2%E0%A5%87%E0%A4%82%E0%A4%97%E0%A5%87%20%E0%A4%9C%E0%A4%97%E0%A4%B9" title="Twitter" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=http%3A%2F%2Fwww.news4t.com%2Findia-vs-south-africa-jasprit-bumrah-ruled-out-repalce-umesh-yadav-01649399%2F&amp;linkname=%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A5%87%E0%A4%9F%20%2F%09%09%E0%A4%9C%E0%A4%B8%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%A4%20%E0%A4%AC%E0%A5%81%E0%A4%AE%E0%A4%B0%E0%A4%BE%E0%A4%B9%20%E0%A4%A6%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A3%20%E0%A4%85%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%96%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%AB%20%E0%A4%9F%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20%E0%A4%B8%E0%A5%80%E0%A4%B0%E0%A5%80%E0%A4%9C%20%E0%A4%B8%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%B9%E0%A4%B0%3B%20%E0%A4%89%E0%A4%AE%E0%A5%87%E0%A4%B6%20%E0%A4%AF%E0%A4%BE%E0%A4%A6%E0%A4%B5%20%E0%A4%B2%E0%A5%87%E0%A4%82%E0%A4%97%E0%A5%87%20%E0%A4%9C%E0%A4%97%E0%A4%B9" title="WhatsApp" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fwww.news4t.com%2Findia-vs-south-africa-jasprit-bumrah-ruled-out-repalce-umesh-yadav-01649399%2F&amp;linkname=%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A5%87%E0%A4%9F%20%2F%09%09%E0%A4%9C%E0%A4%B8%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%A4%20%E0%A4%AC%E0%A5%81%E0%A4%AE%E0%A4%B0%E0%A4%BE%E0%A4%B9%20%E0%A4%A6%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A3%20%E0%A4%85%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%96%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%AB%20%E0%A4%9F%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20%E0%A4%B8%E0%A5%80%E0%A4%B0%E0%A5%80%E0%A4%9C%20%E0%A4%B8%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%B9%E0%A4%B0%3B%20%E0%A4%89%E0%A4%AE%E0%A5%87%E0%A4%B6%20%E0%A4%AF%E0%A4%BE%E0%A4%A6%E0%A4%B5%20%E0%A4%B2%E0%A5%87%E0%A4%82%E0%A4%97%E0%A5%87%20%E0%A4%9C%E0%A4%97%E0%A4%B9" title="LinkedIn" rel="nofollow noopener" target="_blank"></a><a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share"></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                            </article>
                            <div className="col col-ten">
                                <div className="covernews-pagination">
                                    <nav className="navigation pagination" role="navigation">
                                        <h2 className="screen-reader-text">Posts navigation</h2>
                                        <div className="nav-links"><span aria-current='page' className='page-numbers current'>1</span>
                                            <a className='page-numbers' href='http://www.news4t.com/page/2/'>2</a>
                                            <a className='page-numbers' href='http://www.news4t.com/page/3/'>3</a>
                                            <a className='page-numbers' href='http://www.news4t.com/page/4/'>4</a>
                                            <span className="page-numbers dots">&hellip;</span>
                                            <a className='page-numbers' href='http://www.news4t.com/page/163/'>163</a>
                                            <a className="next page-numbers" href="http://www.news4t.com/page/2/">Next</a></div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                {/* <Sidebar></Sidebar> */}
            </section>
        </div>
    <div className="af-main-banner-latest-posts grid-layout">
        <div className="container">
            <div className="row">
                <div className="widget-title-section">
                    <h4 className="widget-title header-after1">
                        <span className="header-after">
                            You may have missed </span></h4>
                </div>
                <div className="row">
                    <div className="col-sm-15 latest-posts-grid" data-mh="latest-posts-grid">
                        <div className="spotlight-post">
                            <figure className="categorised-article inside-img">
                                <div className="categorised-article-wrapper">
                                    <div className="data-bg data-bg-hover data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_ajay_singh_spicejet_t.jpg">
                                        <a href="http://www.news4t.com/spicejet-eyes-rs-71000-cr-airbus-deal-chairman-ajay-singh-reveals-01649999/"></a></div>
                                </div>
                                <div className="figure-categories figure-categories-bg">
                                    <ul className="cat-links">
                                        <li className="meta-category">
                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/business/" alt="View all posts in Business">
                                                Business
                                            </a></li>
                                    </ul>
                                </div>
                            </figure>
                            <figcaption>
                                <h3 className="article-title article-title-1">
                                    <a href="http://www.news4t.com/spicejet-eyes-rs-71000-cr-airbus-deal-chairman-ajay-singh-reveals-01649999/">
                                        एविएशन / स्पाइसजेट 100 एयरबस खरीद सकती है, इनकी वैल्यू 71000 करोड़ रुपए होगी </a></h3>
                                <div className="grid-item-metadata">
                                    <span className="author-links">
                                        <span className="item-metadata posts-date">
                                            <i className="far fa-clock"></i>
                                            5 hours ago </span>
                                        <span className="item-metadata posts-author">
                                            <a href="http://www.news4t.com/author/damdarnews/">
                                                damdarnews </a>
                                        </span>
                                    </span></div>
                            </figcaption>
                        </div>
                    </div>
                    <div className="col-sm-15 latest-posts-grid" data-mh="latest-posts-grid">
                        <div className="spotlight-post">
                            <figure className="categorised-article inside-img">
                                <div className="categorised-article-wrapper">
                                    <div className="data-bg data-bg-hover data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_meditation_cover_0.jpg">
                                        <a href="http://www.news4t.com/bhakti-motivational-story-inspirational-story-story-about-devotion-prerak-prasang-01649989/"></a></div>
                                </div>
                                <div className="figure-categories figure-categories-bg">
                                    <ul className="cat-links">
                                        <li className="meta-category">
                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/religion/" alt="View all posts in Religion">
                                                Religion
                                            </a></li>
                                    </ul>
                                </div>
                            </figure>
                            <figcaption>
                                <h3 className="article-title article-title-1">
                                    <a href="http://www.news4t.com/bhakti-motivational-story-inspirational-story-story-about-devotion-prerak-prasang-01649989/">
                                        कथा / सच्चा सुख भगवान की निस्वार्थ भक्ति में है, जहां स्वार्थ होगा वहां दुख भी होगा </a></h3>
                                <div className="grid-item-metadata">
                                    <span className="author-links">
                                        <span className="item-metadata posts-date">
                                            <i className="far fa-clock"></i>
                                            5 hours ago </span>
                                        <span className="item-metadata posts-author">
                                            <a href="http://www.news4t.com/author/damdarnews/">
                                                damdarnews </a>
                                        </span>
                                    </span></div>
                            </figcaption>
                        </div>
                    </div>
                    <div className="col-sm-15 latest-posts-grid" data-mh="latest-posts-grid">
                        <div className="spotlight-post">
                            <figure className="categorised-article inside-img">
                                <div className="categorised-article-wrapper">
                                    <div className="data-bg data-bg-hover data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_miui_11_1569316533974.jpg">
                                        <a href="http://www.news4t.com/dark-theme-feature-rolled-out-for-gmail-app-it-will-take-more-than-15-days-to-fully-imple-01649997/"></a></div>
                                </div>
                                <div className="figure-categories figure-categories-bg">
                                    <ul className="cat-links">
                                        <li className="meta-category">
                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/tech-knowledge/" alt="View all posts in Tech knowledge">
                                                Tech knowledge
                                            </a></li>
                                    </ul>
                                </div>
                            </figure>
                            <figcaption>
                                <h3 className="article-title article-title-1">
                                    <a href="http://www.news4t.com/dark-theme-feature-rolled-out-for-gmail-app-it-will-take-more-than-15-days-to-fully-imple-01649997/">
                                        नया फीचर / जीमेल ऐप के लिए जारी हुआ डार्क थीम फीचर, पूरी तरह से लागू होने में लगेगा 15 दिन का समय </a></h3>
                                <div className="grid-item-metadata">
                                    <span className="author-links">
                                        <span className="item-metadata posts-date">
                                            <i className="far fa-clock"></i>
                                            5 hours ago </span>
                                        <span className="item-metadata posts-author">
                                            <a href="http://www.news4t.com/author/damdarnews/">
                                                damdarnews </a>
                                        </span>
                                    </span></div>
                            </figcaption>
                        </div>
                    </div>
                    <div className="col-sm-15 latest-posts-grid" data-mh="latest-posts-grid">
                        <div className="spotlight-post">
                            <figure className="categorised-article inside-img">
                                <div className="categorised-article-wrapper">
                                    <div className="data-bg data-bg-hover data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_pitru_paksha_18_new.jpg">
                                        <a href="http://www.news4t.com/pitru-paksha-2019-pitru-paksha-kab-se-hai-shraddha-paksha-2019-01649863/"></a></div>
                                </div>
                                <div className="figure-categories figure-categories-bg">
                                    <ul className="cat-links">
                                        <li className="meta-category">
                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/religion/" alt="View all posts in Religion">
                                                Religion
                                            </a></li>
                                    </ul>
                                </div>
                            </figure>
                            <figcaption>
                                <h3 className="article-title article-title-1">
                                    <a href="http://www.news4t.com/pitru-paksha-2019-pitru-paksha-kab-se-hai-shraddha-paksha-2019-01649863/">
                                        धर्म / 27 को पितृ पक्ष की चतुर्दशी तिथि, इस दिन दुर्घटना में मृत लोगों का होता है श्राद्ध </a></h3>
                                <div className="grid-item-metadata">
                                    <span className="author-links">
                                        <span className="item-metadata posts-date">
                                            <i className="far fa-clock"></i>
                                            4 hours ago </span>
                                        <span className="item-metadata posts-author">
                                            <a href="http://www.news4t.com/author/damdarnews/">
                                                damdarnews </a>
                                        </span>
                                    </span></div>
                            </figcaption>
                        </div>
                    </div>
                    <div className="col-sm-15 latest-posts-grid" data-mh="latest-posts-grid">
                        <div className="spotlight-post">
                            <figure className="categorised-article inside-img">
                                <div className="categorised-article-wrapper">
                                    <div className="data-bg data-bg-hover data-bg-categorised" data-background="http://www.news4t.com/wp-content/uploads/2019/09/0521_pixel_3a_and_3a_xl_get_new_android_10_update_1.jpg">
                                        <a href="http://www.news4t.com/pixel-3a-and-3a-xl-get-new-android-10-update-01649963/"></a></div>
                                </div>
                                <div className="figure-categories figure-categories-bg">
                                    <ul className="cat-links">
                                        <li className="meta-category">
                                            <a className="covernews-categories category-color-1" href="http://www.news4t.com/category/tech-knowledge/" alt="View all posts in Tech knowledge">
                                                Tech knowledge
                                            </a></li>
                                    </ul>
                                </div>
                            </figure>
                            <figcaption>
                                <h3 className="article-title article-title-1">
                                    <a href="http://www.news4t.com/pixel-3a-and-3a-xl-get-new-android-10-update-01649963/">
                                        लेटेस्ट एंड्रॉयड / पिक्सल 3a और 3a XL के लिए आया एंड्रॉयड 10 का अपडेट, सेटिंग में जाकर होगा इन्स्टॉल </a></h3>
                                <div className="grid-item-metadata">
                                    <span className="author-links">
                                        <span className="item-metadata posts-date">
                                            <i className="far fa-clock"></i>
                                            4 hours ago </span>
                                        <span className="item-metadata posts-author">
                                            <a href="http://www.news4t.com/author/damdarnews/">
                                                damdarnews </a>
                                        </span>
                                    </span></div>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
          );
    }
}
 
export default Home;