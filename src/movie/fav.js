import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./../Header";
import Footer from "./../footer";
import "./../css/circle.css";

const api_key = "ab1ebe3f4edec2d18c7b9d92b28e022e";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Fav() {
    const [data, setData] = useState([]);

    const api = axios.create({ baseURL: BASE_URL });

    const getUpcoming = api.get("movie/upcoming", { params: { api_key } });

    useEffect(() => {
        getUpcoming.then((res) => {
            setData(res.data.results);
        });
    }, []);

    return (
        <main id="main" class="index" style={{ margin: "0px" }}>
            <Header />,
            <main id="main" class="smaller  subtle show_search_false">
                <div class="bg_image">
                    <div class="block header gradient yellow">
                        <div class="inner_content">
                            <div class="content">
                                <span class="avatar">
                                    <a href="/u/dheamonnica">
                                        <img
                                            class="avatar"
                                            src="https://secure.gravatar.com/avatar/309175d4746d3df8c881dced6c5341b2.jpg?s=150"
                                            srcset="https://secure.gravatar.com/avatar/309175d4746d3df8c881dced6c5341b2.jpg?s=150 1x, https://secure.gravatar.com/avatar/309175d4746d3df8c881dced6c5341b2.jpg?s=300 2x"
                                            alt="dheamonnica"
                                            width="150"
                                            height="150"
                                        />
                                    </a>
                                </span>

                                <div>
                                    <div class="about">
                                        <div class="content_wrapper flex">
                                            <h2>
                                                <a href="/u/dheamonnica">dheamonnica</a>
                                            </h2>
                                            <h3>Member since January 2022</h3>
                                        </div>

                                        <div class="content_wrapper flex">
                                            <div class="block">
                                                <div class="consensus no_hover">
                                                    <div class="outer_ring">
                                                        <div class="user_score_chart" data-percent="0" data-track-color="#666666" data-bar-color="#d4d4d4">
                                                            <div class="percent">
                                                                <div class="progress-circle" data-progress="0"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text">Average Movie Score</div>
                                            </div>

                                            <div class="block">
                                                <div class="consensus no_hover">
                                                    <div class="outer_ring">
                                                        <div class="user_score_chart" data-percent="0" data-track-color="#666666" data-bar-color="#d4d4d4">
                                                            <div class="percent">
                                                                <div class="progress-circle" data-progress="0"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text">Average TV Score</div>
                                            </div>

                                            <div class="social_links"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="account_page_data">
                    <div class="inner_block">
                        <div class="inner_content">
                            <div class="content">
                                <div class="title_header">
                                    <div class="title_group">
                                        <div>
                                            <h2>My Favorites</h2>
                                            <div class="list_option_wrapper" data-role="tooltip">
                                                <div class="list_options glyphicons_v2 more"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 class="scroll border_color yellow on">
                                                <a class="no_click" data-media-type="movie" data-title="My Favorites — The Movie Database (TMDB)" data-partial="/u/dheamonnica/items/favorites" href="/u/dheamonnica/favorites">
                                                    Movies <span class="color yellow">1</span>
                                                </a>
                                            </h3>
                                            <h3 class="scroll border_color yellow">
                                                <a class="no_click" data-media-type="tv" data-title="My Favorites — The Movie Database (TMDB)" data-partial="/u/dheamonnica/items/favorites" href="/u/dheamonnica/favorites/tv">
                                                    TV <span class="color yellow">0</span>
                                                </a>
                                            </h3>
                                        </div>
                                    </div>

                                    <div class="filter_group">
                                        <div class="sort_filter">
                                            <h4>Filter by:</h4>
                                            <div class="group_wrapper">
                                                <div class="group_dropdown filters">
                                                    <span id="sort_by_created_at" class=" sort_text color border_color yellow">
                                                        <span class="text">
                                                            Date Added <img src="https://www.themoviedb.org/assets/2/v4/static_cache/down_arrow_yellow-ae97636c79bd7a49c941c2a8fafa0632ba7792e6660f5afae863a17580cda132.svg" />
                                                        </span>
                                                    </span>
                                                    <span id="sort_by_popularity" class="hide sort_text color border_color yellow">
                                                        <span class="text">
                                                            Popularity <img src="https://www.themoviedb.org/assets/2/v4/static_cache/down_arrow_yellow-ae97636c79bd7a49c941c2a8fafa0632ba7792e6660f5afae863a17580cda132.svg" />
                                                        </span>
                                                    </span>
                                                    <span id="sort_by_release_date" class="hide sort_text color border_color yellow">
                                                        <span class="text">
                                                            Release Date <img src="https://www.themoviedb.org/assets/2/v4/static_cache/down_arrow_yellow-ae97636c79bd7a49c941c2a8fafa0632ba7792e6660f5afae863a17580cda132.svg" />
                                                        </span>
                                                    </span>

                                                    <ul class="filters">
                                                        <li id="filter_by_created_at" class="selected">
                                                            <a
                                                                class="filter_list no_click"
                                                                data-title="dheamonnica's Favorites — The Movie Database (TMDB)"
                                                                data-partial="/u/dheamonnica/items/favorites"
                                                                data-sort-order="desc"
                                                                data-sort-by="created_at"
                                                                href="/u/dheamonnica/favorites/movie?sort_by=created_at&amp;sort_order=desc"
                                                            >
                                                                Date Added
                                                            </a>
                                                        </li>
                                                        <li id="filter_by_popularity" class="">
                                                            <a
                                                                class="filter_list no_click"
                                                                data-title="dheamonnica's Favorites — The Movie Database (TMDB)"
                                                                data-partial="/u/dheamonnica/items/favorites"
                                                                data-sort-order="desc"
                                                                data-sort-by="popularity"
                                                                href="/u/dheamonnica/favorites/movie?sort_by=popularity&amp;sort_order=desc"
                                                            >
                                                                Popularity
                                                            </a>
                                                        </li>
                                                        <li id="filter_by_release_date" class="">
                                                            <a
                                                                class="filter_list no_click"
                                                                data-title="dheamonnica's Favorites — The Movie Database (TMDB)"
                                                                data-partial="/u/dheamonnica/items/favorites"
                                                                data-sort-order="desc"
                                                                data-sort-by="release_date"
                                                                href="/u/dheamonnica/favorites/movie?sort_by=release_date&amp;sort_order=desc"
                                                            >
                                                                Release Date
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="order_filter">
                                                <h4>Order:</h4>
                                                <div class="group_wrapper">
                                                    <div class="group_dropdown sort">
                                                        <a class="sort_order selected color_hover yellow no_click" data-order="desc">
                                                            <span>↓</span>
                                                        </a>
                                                        <a class="sort_order hide color_hover yellow no_click" data-order="asc">
                                                            <span>↑</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="group_wrapper">
                                            <a class="item_search_button no_click" href="#">
                                                <span class="glyphicons_v2 search"></span>
                                            </a>
                                            <form class="item_search_form hide">
                                                {/* <input id="with_text_search" data-partial="/u/dheamonnica/items/favorites" class="color border_color yellow" type="text" name="with_text" value="" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false"> */}
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="items_wrapper">
                                    <div id="results_page_1" class="results_page">
                                        <div id="card_movie_5d89edec79b3d4001f84d0dc" class="card v4">
                                            <div class="image">
                                                <div class="poster">
                                                    <a href="/movie/633802">
                                                        <img
                                                            loading="lazy"
                                                            class="poster"
                                                            src="https://www.themoviedb.org/t/p/w150_and_h225_bestv2/2AbGdSGlU6CpiV3lswHUgE5CdAA.jpg"
                                                            srcset="https://www.themoviedb.org/t/p/w150_and_h225_bestv2/2AbGdSGlU6CpiV3lswHUgE5CdAA.jpg 1x, https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2AbGdSGlU6CpiV3lswHUgE5CdAA.jpg 2x"
                                                            alt="Dark Spell"
                                                        />
                                                    </a>
                                                </div>
                                            </div>

                                            <div class="details">
                                                <div class="flex_space_between">
                                                    <div class="wrapper">
                                                        <div class="consensus tight">
                                                            <div class="outer_ring">
                                                                <div class="user_score_chart 5d89edec79b3d4001f84d0dc" data-percent="69.0" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div class="percent">
                                                                        <div class="progress-circle" data-progress="69"></div>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="title">
                                                            <div>
                                                                <a href="/movie/633802">
                                                                    <h2>Dark Spell</h2>
                                                                </a>
                                                            </div>

                                                            <span class="release_date">February 11, 2021</span>
                                                        </div>
                                                    </div>

                                                    <div class="overview true">
                                                        <p>Terror strikes when a heartbroken woman uses black magic to get her husband back.</p>
                                                    </div>
                                                </div>

                                                <div class="action_bar">
                                                    <ul>
                                                        <li id="rating_5d89edec79b3d4001f84d0dc">
                                                            <a
                                                                class="list_item_rating no_click"
                                                                title="Rated on "
                                                                data-rating-url="/movie/633802/remote/rating?created_at="
                                                                data-media-card="card_movie_5d89edec79b3d4001f84d0dc"
                                                                href="/u/dheamonnica/favourite?media_type=movie&amp;media_id=5d89edec79b3d4001f84d0dc"
                                                            >
                                                                <span class="rating wrapper">
                                                                    <span class="glyphicons_v2 star"></span>
                                                                </span>
                                                            </a>
                                                            Your rating
                                                        </li>
                                                        <li>
                                                            <a
                                                                id="favourite_5d89edec79b3d4001f84d0dc"
                                                                class="remove_list_item no_click selected"
                                                                data-media-type="movie"
                                                                data-media-card="card_movie_5d89edec79b3d4001f84d0dc"
                                                                href="/u/dheamonnica/favourite?media_type=movie&amp;media_id=5d89edec79b3d4001f84d0dc"
                                                            >
                                                                <span id="favourite_5d89edec79b3d4001f84d0dc" class="favourite wrapper">
                                                                    <span class="glyphicons_v2 heart"></span>
                                                                </span>{" "}
                                                                Favorite
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                class="add_media_to_list no_click"
                                                                data-media-type="movie"
                                                                data-media-id="633802"
                                                                href="/u/dheamonnica/remote/lists?media_type=movie&amp;media_id=633802&amp;media_title=Dark+Spell"
                                                            >
                                                                <span class="list wrapper">
                                                                    <span class="glyphicons_v2 list"></span>
                                                                </span>{" "}
                                                                Add to list
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a class="remove_list_item no_click" data-media-card="card_movie_5d89edec79b3d4001f84d0dc" href="/u/dheamonnica/favourite?media_type=movie&amp;media_id=5d89edec79b3d4001f84d0dc">
                                                                <span class="remove wrapper">
                                                                    <span class="glyphicons_v2 menu-close"></span>
                                                                </span>{" "}
                                                                Remove
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </main>
    );
}

export default Fav;
