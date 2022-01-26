import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
// import $ from 'jquery'; 
// import Home from "./Home";
import App from "./App";
import style_1 from "./css/application-3347283f99cad225814854f5ea694cf04f29ef25498f29c5d44fcf7ebb202a6b.css";
import style_2 from "./css/media-7b01183c64a6819c82ef4f23a3087f1ff79f8de786653d6ffb10a07d2a5b70ef.css";
import style_3 from "./css/discover-421028eba2c3eaf5699e02314870662bfc46a923ce94d25af7cfb312dd37ad93.css";
import style_4 from "./css/index-22ae5cf76b44e5115ea8049c717a06255873388dd7ae02a2ea653e75829b5eff.css";
import style_5 from "./css/2021-20f6213395992680de63c49b86035dc3f6c06bb2575c8c9c3e30a9264da38e63.css";
// import js_1 from "./js/jquery-3.5.1.min-f7f6a5894f1d19ddad6fa392b2ece2c5e578cbf7da4ea805b6885eb6985b6e3d.js";
// import js_2 from "./js/lozad.min-7f803337d01a657607bca6b20e06f371c3895b36a5f2be03a8fa9b5e16c9a83e.js";
// import js_3 from "./script.js";



class Main extends Component {
    render() {
        return (
            <div class="page_wrap _wrap">
                <header class="normal smaller no_animation smaller  subtle">
                    <div class="content">
                        <div class="sub_media">
                            <div class="nav_wrapper">
                                <a class="logo" href="/">
                                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" width="154" height="20" />
                                </a>

                                <ul class="dropdown_menu navigation">
                                    <li>
                                        <a class="no_click" href="#">
                                            Movies
                                        </a>

                                    </li>
                                    <li>
                                        <a class="no_click" href="#">
                                            TV Shows
                                        </a>

                                    </li>
                                    <li>
                                        <a class="no_click" href="#">
                                            People
                                        </a>

                                       
                                    </li>
                                    <li>
                                        <a class="no_click" href="#">
                                            More
                                        </a>

                                    </li>
                                </ul>
                            </div>

                            <div class="flex">
                                <ul class="primary">
                                    <li class="glyph new_buttons">
                                        <a class="new_icon no_click" href="#">
                                            <span class="glyphicons_v2 plus white"></span>
                                        </a>
                                    </li>
                                    <li class="translate">
                                        <div>en</div>
                                    </li>

                                    <li>
                                        <a href="login.html">Login</a>
                                    </li>
                                    <li>
                                        <a href="signup.html">Join TMDB</a>
                                    </li>

                                    <li class="glyph search_buttons">
                                        <a class="search" href="#">
                                            <span class="glyphicons_v2 search blue"></span>
                                        </a>
                                        <a class="close hide" href="#">
                                            <span class="glyphicons_v2 menu-close invert svg"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="search_bar hide">
                        <section class="search show_search_false">
                            <div class="sub_media">
                                {/* <form id="search_form" action="https://www.themoviedb.org/search" method="get" accept-charset="utf-8"> */}

                                <label>
                                    {/* <input dir="auto" id="search_v4" name="query" type="text" tabindex="1" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false" placeholder="Search for a movie, tv show, person..." value=""> */}
                                </label>
                                {/* <input type="submit" disabled> */}
                                {/* </form> */}
                            </div>
                        </section>
                    </div>
                </header>
                <main id="main" class="index">
                    <section class="inner_content new_index taw_2021">
                        <div id="media_v4" class="media discover">
                            <div class="column_wrapper">
                                <div class="content_wrapper wrap">
                                    <div class="numbers">
                                        <h2>2021</h2>
                                    </div>

                                    <div class="taw">
                                        <h2>That's a Wrap</h2>
                                        <h3>
                                            <a href="2021.html" title="That's a Wrap 2021">
                                                Let's dive into 2021's best and worst! →
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="search">
                                        <form id="inner_search_form" action="#" method="get" accept-charset="utf-8">
                                            <label>
                                                <input
                                                    dir="auto"
                                                    id="inner_search_v4"
                                                    name="query"
                                                    type="text"
                                                    tabindex="1"
                                                    autocorrect="off"
                                                    autofill="off"
                                                    autocomplete="off"
                                                    spellcheck="false"
                                                    placeholder="Search for a movie, tv show, person......"
                                                    value=""
                                                />
                                            </label>
                                            <input type="submit" value="Search" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default Main;
