<template>
    <div>
        
           <body>
    <!-- Preloader Start -->
    <!-- <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="text-center">
                    <img class="jump mb-50" src="../assets/imgs/loading.svg" alt="">
                    <h6>Now Loading</h6>
                    <div class="loader">
                        <div class="bar bar1"></div>
                        <div class="bar bar2"></div>
                        <div class="bar bar3"></div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <div class="main-wrap">
        <!--Offcanvas sidebar-->
        <aside id="sidebar-wrapper" class="custom-scrollbar offcanvas-sidebar position-right">
            <button class="off-canvas-close"><i class="ti-close"></i></button>
            <div class="sidebar-inner">
                <!--Search-->
                <div class="siderbar-widget mb-50 mt-30">
                    <form action="#" method="get" class="search-form position-relative">
                        <input type="text" class="search_field" placeholder="Search" value="" name="s">
                        <span class="search-icon"><i class="ti-search mr-5"></i></span>
                    </form>
                </div>
                <!--lastest post-->
                <div class="sidebar-widget mb-50">
                    <div class="widget-header mb-30">
                        <h5 class="widget-title">Top <span>Trending</span></h5>
                    </div>
                    <div class="post-aside-style-2">
                        <ul class="list-post">
                            <li class="mb-30 wow fadeIn animated">
                                <div class="d-flex">
                                    <div class="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                        <a class="color-white" href="single.html">
                                            <img src="../assets/imgs/thumbnail-2.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="post-content media-body">
                                        <h6 class="post-title mb-10 text-limit-2-row"><a href="single.html">Vancouver woman finds pictures and videos of herself online</a></h6>
                                        <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                            <span class="post-by">By <a href="author.html">K. Marry</a></span>
                                            <span class="post-on">4m ago</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-30 wow fadeIn animated">
                                <div class="d-flex">
                                    <div class="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                        <a class="color-white" href="single.html">
                                            <img src="../assets/imgs/thumbnail-3.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="post-content media-body">
                                        <h6 class="post-title mb-10 text-limit-2-row"><a href="single.html">4 Things Emotionally Intelligent People Don’t Do</a></h6>
                                        <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                            <span class="post-by">By <a href="author.html">Mr. John</a></span>
                                            <span class="post-on">3h ago</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-30 wow fadeIn animated">
                                <div class="d-flex">
                                    <div class="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                        <a class="color-white" href="single.html">
                                            <img src="../assets/imgs/thumbnail-5.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="post-content media-body">
                                        <h6 class="post-title mb-10 text-limit-2-row"><a href="single.html">Reflections from a Token Black Friend</a></h6>
                                        <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                            <span class="post-by">By <a href="author.html">Kenedy</a></span>
                                            <span class="post-on">4h ago</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-30 wow fadeIn animated">
                                <div class="d-flex">
                                    <div class="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                        <a class="color-white" href="single.html">
                                            <img src="../assets/imgs/thumbnail-7.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="post-content media-body">
                                        <h6 class="post-title mb-10 text-limit-2-row"><a href="single.html">How to Identify a Smart Person in 3 Minutes</a></h6>
                                        <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                            <span class="post-by">By <a href="author.html">Steven</a></span>
                                            <span class="post-on">5h ago</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="wow fadeIn animated">
                                <div class="d-flex">
                                    <div class="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                        <a class="color-white" href="single.html">
                                            <img src="../assets/imgs/thumbnail-8.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="post-content media-body">
                                        <h6 class="post-title mb-10 text-limit-2-row"><a href="single.html">Blackface Minstrel Songs Don’t Belong in Children’s Music Class</a></h6>
                                        <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                            <span class="post-by">By <a href="author.html">J.Smith</a></span>
                                            <span class="post-on">5h30 ago</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--Categories-->
                <div class="sidebar-widget widget_tag_cloud mb-50">
                    <div class="widget-header tags-close mb-20">
                        <h5 class="widget-title mt-5">Tags Cloud</h5>
                    </div>
                    <div class="tagcloud">
                        <a href="category.html">Beauty</a>
                        <a href="category.html">Book</a>
                        <a href="category.html">Design</a>
                        <a href="category.html">Fashion</a>
                        <a href="category.html">Lifestyle</a>
                        <a href="category.html">Travel</a>
                        <a href="category.html">Science</a>
                        <a href="category.html">Health</a>
                        <a href="category.html">Sports</a>
                        <a href="category.html">Arts</a>
                        <a href="category.html">Books</a>
                        <a href="category.html">Style</a>
                    </div>
                </div>
                <!--Ads-->
                <div class="sidebar-widget widget-ads mb-30">
                    <div class="widget-header tags-close mb-20">
                        <h5 class="widget-title mt-5">Your Ads Here</h5>
                    </div>
                    <a href="../assets/imgs/news-1.jpg" class="play-video" data-animate="zoomIn" data-duration="1.5s" data-delay="0.1s">
                        <img class="border-radius-10" src="../assets/imgs/ads-1.jpg" alt="">
                    </a>
                </div>
            </div>
        </aside>
        <!-- Main Header -->
    
        <!-- Main Wrap Start -->
        <main class="position-relative">
            <div class="container">
                <div class="entry-header entry-header-2 mb-50 mt-50 text-center">
                    <div class="thumb-overlay img-hover-slide border-radius-5 position-relative" style="background-image: url(../assets/imgs/news-24.jpg)">
                        <div class="position-midded">
                            <div class="entry-meta meta-0 font-small mb-30">
                                <a href="category.html"><span class="post-cat bg-success color-white">Get In Touch</span></a>
                            </div>
                            <h1 class="post-title mb-30 text-white">
                                Contact Us
                            </h1>
                            <div class="entry-meta meta-1 font-x-small color-grey text-uppercase text-white">
                                <span class="mr-5">
                                    <ion-icon name="planet"></ion-icon>
                                </span>
                                <span class="mr-15">alithemes.com</span>
                                <span class="ml-15 mr-5">
                                    <ion-icon name="call"></ion-icon>
                                </span>
                                <span>(+01) 234 567 89</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end entry header-->
                <div class="row mb-50">
                    <div class="col-lg-2 d-none d-lg-block"></div>
                    <div class="col-lg-8 col-md-12">
                        <div class="single-social-share single-sidebar-share mt-30">
                            <ul>
                                <li><a class="social-icon facebook-icon text-xs-center" target="_blank" href="#"><i class="ti-facebook"></i></a></li>
                                <li><a class="social-icon twitter-icon text-xs-center" target="_blank" href="#"><i class="ti-twitter-alt"></i></a></li>
                                <li><a class="social-icon pinterest-icon text-xs-center" target="_blank" href="#"><i class="ti-pinterest"></i></a></li>
                                <li><a class="social-icon instagram-icon text-xs-center" target="_blank" href="#"><i class="ti-instagram"></i></a></li>
                                <li><a class="social-icon linkedin-icon text-xs-center" target="_blank" href="#"><i class="ti-linkedin"></i></a></li>
                                <li><a class="social-icon email-icon text-xs-center" target="_blank" href="#"><i class="ti-email"></i></a></li>
                            </ul>
                        </div>
                        <div class="single-excerpt">
                            <p class="font-large">We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our customers.
                                We are passionate team with the mission for achieving the perfection in web design.
                                All designs are made by love with pixel perfect design and excellent coding quality. Speed, security and SEO friendly alway in our mind.</p>
                            <hr class="wp-block-separator is-style-wide">
                            <p><span class="mr-5">
                                    <ion-icon name="location-outline"></ion-icon>
                                </span><strong>Address</strong>: Lorem 142 Str., 2352, Ipsum, State, USA</p>
                            <p><span class="mr-5">
                                    <ion-icon name="home-outline"></ion-icon>
                                </span><strong>Our website</strong>: https://alithemes.com</p>
                            <p><span class="mr-5">
                                    <ion-icon name="planet-outline"></ion-icon>
                                </span><strong>Support center</strong>: https://alithemes.ticksy.com</p>
                        </div>
                        <div class="entry-main-content mt-50">
                            <h3>Advertise</h3>
                            <hr class="wp-block-separator is-style-wide">
                            <p>Please contact us directly at <a href="http://demos.alithemes.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="761712053638130105201f04171a5815191b58">[email&#160;protected]</a> For large or unique campaigns please email <a href="http://demos.alithemes.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="93e0f2fff6d3ddf6e4e0c5fae1f2ffbdf0fcfe">[email&#160;protected]</a> for requests-for-proposal and additional pricing information. </p>
                            <h1 class="mt-30">Get in touch</h1>
                            <hr class="wp-block-separator is-style-wide">
                            <form class="form-contact comment_form" action="#" id="commentForm">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control" name="name" id="name" type="text" placeholder="Name">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control" name="email" id="email" type="email" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <input class="form-control" name="website" id="website" type="text" placeholder="Phone">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <textarea class="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="button button-contactForm">Send message</button>
                                </div>
                            </form>
                        </div>
                        <div class="entry-bottom mt-50 mb-30">
                            <div class="overflow-hidden mt-30">
                                <div class="single-social-share float-left">
                                    <ul class="d-inline-block list-inline">
                                        <li class="list-inline-item"><span class="font-small text-muted"><i class="ti-sharethis mr-5"></i>Share: </span></li>
                                        <li class="list-inline-item"><a class="social-icon facebook-icon text-xs-center" target="_blank" href="#"><i class="ti-facebook"></i></a></li>
                                        <li class="list-inline-item"><a class="social-icon twitter-icon text-xs-center" target="_blank" href="#"><i class="ti-twitter-alt"></i></a></li>
                                        <li class="list-inline-item"><a class="social-icon pinterest-icon text-xs-center" target="_blank" href="#"><i class="ti-pinterest"></i></a></li>
                                        <li class="list-inline-item"><a class="social-icon instagram-icon text-xs-center" target="_blank" href="#"><i class="ti-instagram"></i></a></li>
                                        <li class="list-inline-item"><a class="social-icon linkedin-icon text-xs-center" target="_blank" href="#"><i class="ti-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End row-->
                <div class="row">
                    <div class="col-12 text-center mb-50">
                        <a href="#">
                            <img class="d-inline border-radius-10" src="../assets/imgs/ads.jpg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </main>
        <!-- Footer Start-->
     
    </div> <!-- Main Wrap End-->
    <div class="dark-mark"></div>
    
</body>

    </div>
</template>