import React, { Component } from "react";
import style_6 from "./css/account-3a7e7607340c2ba9de9204b09ee40d73a687e5df2b2f7f6194e034fa8fd869c7.css";
import Footer from "./footer";

class Login extends Component {
    render() {
        return (
            <div>
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
                                            <a href="/login">Login</a>
                                        </li>
                                        <li>
                                            <a href="/register">Join TMDB</a>
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
                                    <form id="search_form" action="/search" method="get" accept-charset="utf-8">
                                        <label>
                                            <input
                                                dir="auto"
                                                id="search_v4"
                                                name="query"
                                                type="text"
                                                tabindex="1"
                                                autocorrect="off"
                                                autofill="off"
                                                autocomplete="off"
                                                spellcheck="false"
                                                placeholder="Search for a movie, tv show, person..."
                                                value=""
                                            />
                                        </label>
                                        <input type="submit" disabled />
                                    </form>
                                </div>
                            </section>
                        </div>
                    </header>
                    <main id="main" class="smaller  subtle show_search_false">
                        <div class="inner_block pad_top">
                            <div class="inner_content">
                                <div class="content">
                                    <div class="column_wrapper">
                                        <section class="main_content content">
                                            <div class="column_wrapper">
                                                <div class="content_wrapper">
                                                    <div class="wrapper">
                                                        <h2>Login to your account</h2>
                                                        <p>
                                                            In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account,
                                                            registering for an account is free and simple. <a href="/register">Click here</a> to get started.
                                                        </p>
                                                        <p>
                                                            If you signed up but didn't get your verification email, <a href="#">click here</a> to have it resent.
                                                        </p>

                                                        <form id="login_form" class="k-form" action="/login" name="account_login" method="post" accept-charset="utf-8">
                                                            <fieldset>
                                                                <label class="k-form-field" for="username">
                                                                    <span>Username</span>
                                                                    <input type="text" class="k-textbox" onChange={e => this.setState({ text: e.target.value })}/>
                                                                </label>

                                                                <label class="k-form-field" for="password">
                                                                    <span>Password</span>
                                                                    <input type="password" class="k-textbox" onChange={e => this.setState({ text: e.target.value })}/>
                                                                </label>
                                                            </fieldset>

                                                            <div class="flex">
                                                                <a href="/home">
                                                                    <input id="sign_up_button" class="k-button k-primary" value="Login" />
                                                                </a>
                                                                <p class="reset">
                                                                    <a href="/reset-password">Reset password</a>
                                                                </p>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Login;
