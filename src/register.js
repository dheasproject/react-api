import React, { Component } from "react";
import style_6 from "./css/account-3a7e7607340c2ba9de9204b09ee40d73a687e5df2b2f7f6194e034fa8fd869c7.css";
import Footer from "./footer"

class Register extends Component {
  

  render() {
    return (
      <div>
    <div class="page_wrap _wrap">

<header class="normal smaller no_animation smaller  subtle">
  <div class="content">
    <div class="sub_media">
      <div class="nav_wrapper">
        
          <a class="logo" href="/">
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" width="154" height="20"/>
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
            
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Join TMDB</a></li>
            

            <li class="glyph search_buttons">
              <a class="search" href="#"><span class="glyphicons_v2 search blue"></span></a>
              <a class="close hide" href="#"><span class="glyphicons_v2 menu-close invert svg"></span></a>
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
            <input dir="auto" id="search_v4" name="query" type="text" tabindex="1" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false" placeholder="Search for a movie, tv show, person..." value=""/>
          </label>
          <input type="submit" disabled/>
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

        <div class="settings_panel card no_margin">
          <h3 class="background_color light_blue">Benefits of being a member</h3>

          <div>
            <ul class="panel svg_check no_scroll">
              <li><span class="glyphicons_v2 check"></span> Find something to watch on your subscribed streaming services</li>
              <li><span class="glyphicons_v2 check"></span> Log the movies and TV shows you have watched</li>
              <li><span class="glyphicons_v2 check"></span> Keep track of your favourite movies and TV shows and get recommendations from them</li>
              <li><span class="glyphicons_v2 check"></span> Build and maintain a personal watchlist</li>
              <li><span class="glyphicons_v2 check"></span> Build custom mixed lists (movies and TV)</li>
              <li><span class="glyphicons_v2 check"></span> Take part in movie and TV discussions</li>
              <li><span class="glyphicons_v2 check"></span> Contribute to, and improve the information in our database</li>
            </ul>
          </div>
        </div>

        <section class="content">
          <div class="column_content">
            <h2>Sign up for an account</h2>
            <p>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>

            

            <form id="signup_form" class="k-form" action="/signup" name="account_signup" method="post" accept-charset="utf-8">
              

              <fieldset>
                <label class="k-form-field" for="username">
                  <span>Username</span>
                  <input id="username" class="k-textbox" type="text" name="username" autocapitalize="off" value=""/>
                </label>

                <label class="k-form-field" for="password">
                  <span>Password (4 characters minimum)</span>
                  <input id="password" class="k-textbox" type="password" name="password" value=""/>
                </label>

                <label class="k-form-field" for="password_confirm">
                  Password Confirm
                  <input id="password_confirm" class="k-textbox" type="password" name="password_confirm" value=""/>
                </label>

                <label class="k-form-field" for="email">
                  <span>Email</span>
                  <input id="email" class="k-textbox" type="text" name="email" autocapitalize="off" value=""/>
                </label>
              </fieldset>

              <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>

              <div class="flex">
                <a href="/login"><input id="sign_up_button" class="k-button k-primary" value="Sign Up"/></a>
                <p class="reset"><a href="/">Cancel</a></p>
              </div>
            </form>
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

export default Register;
