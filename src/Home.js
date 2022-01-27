import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./css/circle.css";
import Register from "./register";
import Header from "./Header";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tabs from "./Tabs";
import Moment from "moment";

const api_key = "ab1ebe3f4edec2d18c7b9d92b28e022e";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Home() {
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
            <main id="main" class="index" style={{ margin: "0px" }}>
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
            <section class="inner_content no_pad">
                <div class="column_wrapper">
                    <div class="content_wrapper no_bottom_pad wrap">
                        <div class="column">
                            <div class="column_header">
                                <div class="selector_wrap">
                                    <div class="selector">
                                        <h2 class="nw">What's Popular</h2>

                                        <Tabs>
                                            <div label="Streaming" class="anchor selected-background-active">
                                                <div id="popular_scroller" class="media discover scroller_wrap should_fade is_fading">
                                                    <div class="column_content flex scroller">
                                                        {data.map((movie) => (
                                                            <div class="card style_1">
                                                                <div class="image">
                                                                    <div class="wrapper">
                                                                        <div
                                                                            class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"
                                                                            style={{
                                                                                backgroundImage: `url(${"https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path})`,
                                                                            }}
                                                                        ></div>
                                                                    </div>
                                                                </div>
                                                                <div class="content">
                                                                    <div class="consensus tight">
                                                                        <div class="progress-circle" data-progress={movie.vote_average.toString().replace(".", "")}></div>
                                                                    </div>

                                                                    <h2>
                                                                        <a href="#">{movie.original_title}</a>
                                                                    </h2>
                                                                    <p>{Moment(movie.release_date).format("d MMM, YYYY")}</p>

                                                                    <h2></h2>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div label="On TV">
                                                <div id="popular_scroller" class="media discover scroller_wrap should_fade is_fading">
                                                    <div class="column_content flex scroller">
                                                        {data.map((movie) => (
                                                            <div class="card style_1">
                                                                <div class="image">
                                                                    <div class="wrapper">
                                                                        <div
                                                                            class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"
                                                                            style={{
                                                                                backgroundImage: `url(${"https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path})`,
                                                                            }}
                                                                        ></div>
                                                                    </div>
                                                                </div>
                                                                <div class="content">
                                                                    <div class="consensus tight">
                                                                        <div class="progress-circle" data-progress={movie.vote_average.toString().replace(".", "")}></div>
                                                                    </div>

                                                                    <h2>
                                                                        <a href="#">{movie.original_title}</a>
                                                                    </h2>
                                                                    <p>{Moment(movie.release_date).format("d MMM, YYYY")}</p>

                                                                    <h2></h2>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div label="For Rent">
                                                <div id="popular_scroller" class="media discover scroller_wrap should_fade is_fading">
                                                    <div class="column_content flex scroller">
                                                        {data.map((movie) => (
                                                            <div class="card style_1">
                                                                <div class="image">
                                                                    <div class="wrapper">
                                                                        <div
                                                                            class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"
                                                                            style={{
                                                                                backgroundImage: `url(${"https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path})`,
                                                                            }}
                                                                        ></div>
                                                                    </div>
                                                                </div>
                                                                <div class="content">
                                                                    <div class="consensus tight">
                                                                        <div class="progress-circle" data-progress={movie.vote_average.toString().replace(".", "")}></div>
                                                                    </div>

                                                                    <h2>
                                                                        <a href="#">{movie.original_title}</a>
                                                                    </h2>
                                                                    <p>{Moment(movie.release_date).format("d MMM, YYYY")}</p>

                                                                    <h2></h2>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div label="In Theaters">
                                                <div id="popular_scroller" class="media discover scroller_wrap should_fade is_fading">
                                                    <div class="column_content flex scroller">
                                                        {data.map((movie) => (
                                                            <div class="card style_1">
                                                                <div class="image">
                                                                    <div class="wrapper">
                                                                        <div
                                                                            class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"
                                                                            style={{
                                                                                backgroundImage: `url(${"https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path})`,
                                                                            }}
                                                                        ></div>
                                                                    </div>
                                                                </div>
                                                                <div class="content">
                                                                    <div class="consensus tight">
                                                                        <div class="progress-circle" data-progress={movie.vote_average.toString().replace(".", "")}></div>
                                                                    </div>

                                                                    <h2>
                                                                        <a href="#">{movie.original_title}</a>
                                                                    </h2>
                                                                    <p>{Moment(movie.release_date).format("d MMM, YYYY")}</p>

                                                                    <h2></h2>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="inner_content no_pad">
                <div class="column_wrapper">
                    <div class="content_wrapper no_bottom_pad wrap">
                        <div class="column">
                            <div class="column_header">
                                <div class="selector_wrap">
                                    <div class="selector">
                                        <h2 class="nw">Free To Watch</h2>

                                        <Tabs>
                                            <div label="Movie" class="anchor selected-background-active">
                                                <div id="popular_scroller" class="media discover scroller_wrap should_fade is_fading">
                                                    <div class="column_content flex scroller">
                                                        <a href="/details">
                                                        <div class="card style_1">
                                                            <div class="image">
                                                                <div class="wrapper">
                                                                    <div
                                                                        class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"
                                                                        style={{
                                                                            backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face/2AbGdSGlU6CpiV3lswHUgE5CdAA.jpg)`,
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                            <div class="content">
                                                                <div class="consensus tight">
                                                                    <div class="progress-circle" data-progress="70"></div>
                                                                </div>

                                                                <h2>
                                                                    <a href="/details">Dark Spell</a>
                                                                </h2>
                                                                <p>Feb 11, 2021</p>

                                                                <h2></h2>
                                                                <p></p>
                                                            </div>
                                                        </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div label="TV">
                                                <div id="popular_scroller" class="media discover scroller_wrap should_fade is_fading">
                                                    <div class="column_content flex scroller">
                                                        {data.map((movie) => (
                                                            <div class="card style_1">
                                                                <div class="image">
                                                                    <div class="wrapper">
                                                                        <div
                                                                            class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"
                                                                            style={{
                                                                                backgroundImage: `url(${"https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path})`,
                                                                            }}
                                                                        ></div>
                                                                    </div>
                                                                </div>
                                                                <div class="content">
                                                                    <div class="consensus tight">
                                                                        <div class="progress-circle" data-progress={movie.vote_average.toString().replace(".", "")}></div>
                                                                    </div>

                                                                    <h2>
                                                                        <a href="#">{movie.original_title}</a>
                                                                    </h2>
                                                                    <p>{Moment(movie.release_date).format("d MMM, YYYY")}</p>

                                                                    <h2></h2>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="inner_content bg_image no_pad video">
                <div class="column_wrapper">
                    <div class="content_wrapper no_bottom_pad wrap">
                        <div class="column">
                            <div class="column_header">
                                <div class="selector_wrap">
                                    <div class="selector">
                                        <h2 class="nw">Latest Trailers</h2>

                                        <Tabs>
                                            <div label="Movie" class="anchor selected-background-active">
                                                <div id="popular_scroller" class="media discover scroller_wrap should_fade is_fading">
                                                    <div class="column_content flex scroller">
                                                        {data.map((movie) => (
                                                            <div class="card video style_2">
                                                                <div class="image">
                                                                    <div class="wrapper">
                                                                        <div
                                                                            class="glyphicons_v2 picture grey backdrop no_image_holder "
                                                                            style={{
                                                                                backgroundImage: `url(${"https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path})`,
                                                                            }}
                                                                        >
                                                                            <div class="playBtn"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div class="content">
                                                                    <h2>{movie.original_title}</h2>
                                                                    <h3></h3>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div label="TV">
                                                <div id="popular_scroller" class="media discover scroller_wrap should_fade is_fading">
                                                    <div class="column_content flex scroller">
                                                        {data.map((movie) => (
                                                            <div class="card video style_2">
                                                                <div class="image">
                                                                    <div class="wrapper">
                                                                        <div
                                                                            class="glyphicons_v2 picture grey backdrop no_image_holder "
                                                                            style={{
                                                                                backgroundImage: `url(${"https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path})`,
                                                                            }}
                                                                        >
                                                                            <div class="playBtn"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div class="content">
                                                                    <h2>{movie.original_title}</h2>
                                                                    <h3></h3>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="inner_content no_pad">
                <div class="column_wrapper">
                    <div class="content_wrapper no_bottom_pad wrap">
                        <div class="column">
                            <div class="column_header">
                                <div class="selector_wrap">
                                    <div class="selector">
                                        <h2 class="nw">Trending</h2>

                                        <Tabs>
                                            <div label="Movie" class="anchor selected-background-active">
                                                <div id="popular_scroller" class="media discover scroller_wrap should_fade is_fading ml-50">
                                                    <div class="column_content flex scroller">
                                                        {data.map((movie) => (
                                                            <div class="card style_1">
                                                                <div class="image">
                                                                    <div class="wrapper">
                                                                        <div
                                                                            class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"
                                                                            style={{
                                                                                backgroundImage: `url(${"https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path})`,
                                                                            }}
                                                                        ></div>
                                                                    </div>
                                                                </div>
                                                                <div class="content">
                                                                    <div class="consensus tight">
                                                                        <div class="progress-circle" data-progress={movie.vote_average.toString().replace(".", "")}></div>
                                                                    </div>

                                                                    <h2>
                                                                        <a href="#">{movie.original_title}</a>
                                                                    </h2>
                                                                    <p>{Moment(movie.release_date).format("d MMM, YYYY")}</p>

                                                                    <h2></h2>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div label="TV">
                                                <div id="popular_scroller" class="media discover scroller_wrap should_fade is_fading ml-50">
                                                    <div class="column_content flex scroller">
                                                        {data.map((movie) => (
                                                            <div class="card style_1">
                                                                <div class="image">
                                                                    <div class="wrapper">
                                                                        <div
                                                                            class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"
                                                                            style={{
                                                                                backgroundImage: `url(${"https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path})`,
                                                                            }}
                                                                        ></div>
                                                                    </div>
                                                                </div>
                                                                <div class="content">
                                                                    <div class="consensus tight">
                                                                        <div class="progress-circle" data-progress={movie.vote_average.toString().replace(".", "")}></div>
                                                                    </div>

                                                                    <h2>
                                                                        <a href="#">{movie.original_title}</a>
                                                                    </h2>
                                                                    <p>{Moment(movie.release_date).format("d MMM, YYYY")}</p>

                                                                    <h2></h2>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="inner_content leaderboard">
                <div class="column_wrapper">
                    <div class="content_wrapper wrap">
                        <div class="column">
                            <div class="column_header">
                                <h2>Leaderboard</h2>
                                <div>
                                    <p>
                                        <span class="dot all"></span> All Time Edits
                                    </p>
                                    <p>
                                        <span class="dot this_week"></span> Edits This Week
                                    </p>
                                </div>
                            </div>

                            <div class="column_content">
                                <ol class="leaderboard">
                                    <li>
                                        <span class="avatar">
                                            <a href="#">
                                                <img
                                                    loading="lazy"
                                                    class="avatar"
                                                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/myGZow2U5Mh6uycsnIM4pJ3ZzrY.jpg"
                                                    srcset="https://www.themoviedb.org/t/p/w64_and_h64_face/myGZow2U5Mh6uycsnIM4pJ3ZzrY.jpg 1x, https://www.themoviedb.org/t/p/w128_and_h128_face/myGZow2U5Mh6uycsnIM4pJ3ZzrY.jpg 2x"
                                                    alt="Andreas Sellfors"
                                                />
                                            </a>
                                        </span>

                                        <div class="data">
                                            <h3>
                                                <a href="#">Andreas Sellfors</a>
                                            </h3>
                                            <div class="meter all">
                                                <div class="gauge" style={{ width: "50%" }}></div>
                                                <h4>16,818</h4>
                                            </div>
                                            <div class="meter this_week">
                                                <div class="gauge" style={{ width: "100%" }}></div>
                                                <h4>9,188</h4>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <span class="avatar">
                                            <a href="#">
                                                <span class="round initials background_color purple">S</span>
                                            </a>
                                        </span>

                                        <div class="data">
                                            <h3>
                                                <a href="#">Samara</a>
                                            </h3>
                                            <div class="meter all">
                                                <div class="gauge" style={{ width: "100%" }}></div>
                                                <h4>2,417,239</h4>
                                            </div>
                                            <div class="meter this_week">
                                                <div class="gauge" style={{ width: "97%" }}></div>
                                                <h4>11,436</h4>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <span class="avatar">
                                            <a href="#">
                                                <img
                                                    loading="lazy"
                                                    class="avatar"
                                                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/A1pIXQZD86MzfP5pvr37C68YiGv.jpg"
                                                    srcset="https://www.themoviedb.org/t/p/w64_and_h64_face/A1pIXQZD86MzfP5pvr37C68YiGv.jpg 1x, https://www.themoviedb.org/t/p/w128_and_h128_face/A1pIXQZD86MzfP5pvr37C68YiGv.jpg 2x"
                                                    alt="Banana"
                                                />
                                            </a>
                                        </span>

                                        <div class="data">
                                            <h3>
                                                <a href="#">Banana</a>
                                            </h3>
                                            <div class="meter all">
                                                <div class="gauge" style={{ width: "82%" }}></div>
                                                <h4>1,995,173</h4>
                                            </div>
                                            <div class="meter this_week">
                                                <div class="gauge" style={{ width: "71%" }}></div>
                                                <h4>8,374</h4>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <span class="avatar">
                                            <a href="#">
                                                <img
                                                    loading="lazy"
                                                    class="avatar"
                                                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/swDbd2BrozDJwKFLEwuxWAXNdXy.jpg"
                                                    srcset="https://www.themoviedb.org/t/p/w64_and_h64_face/swDbd2BrozDJwKFLEwuxWAXNdXy.jpg 1x, https://www.themoviedb.org/t/p/w128_and_h128_face/swDbd2BrozDJwKFLEwuxWAXNdXy.jpg 2x"
                                                    alt="raze464"
                                                />
                                            </a>
                                        </span>

                                        <div class="data">
                                            <h3>
                                                <a href="#">raze464</a>
                                            </h3>
                                            <div class="meter all">
                                                <div class="gauge" style={{ width: "10%" }}></div>
                                                <h4>242,289</h4>
                                            </div>
                                            <div class="meter this_week">
                                                <div class="gauge" style={{ width: "57%" }}></div>
                                                <h4>6,776</h4>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <span class="avatar">
                                            <a href="#">
                                                <span class="round initials background_color light_blue">F</span>
                                            </a>
                                        </span>

                                        <div class="data">
                                            <h3>
                                                <a href="#">Flr98</a>
                                            </h3>
                                            <div class="meter all">
                                                <div class="gauge" style={{ width: "0.6%" }}></div>
                                                <h4>14,888</h4>
                                            </div>
                                            <div class="meter this_week">
                                                <div class="gauge" style={{ width: "55%" }}></div>
                                                <h4>6,456</h4>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <span class="avatar">
                                            <a href="#">
                                                <img
                                                    loading="lazy"
                                                    class="avatar"
                                                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/oK4iIvthUxoH8ZBJvCj7QtuIAoi.jpg"
                                                    srcset="https://www.themoviedb.org/t/p/w64_and_h64_face/oK4iIvthUxoH8ZBJvCj7QtuIAoi.jpg 1x, https://www.themoviedb.org/t/p/w128_and_h128_face/oK4iIvthUxoH8ZBJvCj7QtuIAoi.jpg 2x"
                                                    alt="Silvers_Rayleigh"
                                                />
                                            </a>
                                        </span>

                                        <div class="data">
                                            <h3>
                                                <a href="#">Silvers_Rayleigh</a>
                                            </h3>
                                            <div class="meter all">
                                                <div class="gauge" style={{ width: "4%" }}></div>
                                                <h4>113,049</h4>
                                            </div>
                                            <div class="meter this_week">
                                                <div class="gauge" style={{ width: "39%" }}></div>
                                                <h4>4,623</h4>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <span class="avatar">
                                            <a href="#">
                                                <span class="round initials background_color yellow">P</span>
                                            </a>
                                        </span>

                                        <div class="data">
                                            <h3>
                                                <a href="#">PhantomRegiment</a>
                                            </h3>
                                            <div class="meter all">
                                                <div class="gauge" style={{ width: "0.4%" }}></div>
                                                <h4>10,574</h4>
                                            </div>
                                            <div class="meter this_week">
                                                <div class="gauge" style={{ width: "37%" }}></div>
                                                <h4>4,416</h4>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <span class="avatar">
                                            <a href="#">
                                                <span class="round initials background_color blue">p</span>
                                            </a>
                                        </span>

                                        <div class="data">
                                            <h3>
                                                <a href="#">pingu51</a>
                                            </h3>
                                            <div class="meter all">
                                                <div class="gauge" style={{ width: "8%" }}></div>
                                                <h4>209,430</h4>
                                            </div>
                                            <div class="meter this_week">
                                                <div class="gauge" style={{ width: "37%" }}></div>
                                                <h4>4,389</h4>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <span class="avatar">
                                            <a href="#">
                                                <span class="round initials background_color pink">s</span>
                                            </a>
                                        </span>

                                        <div class="data">
                                            <h3>
                                                <a href="#">superboy97</a>
                                            </h3>
                                            <div class="meter all">
                                                <div class="gauge" style={{ width: "11%" }}></div>
                                                <h4>267,753</h4>
                                            </div>
                                            <div class="meter this_week">
                                                <div class="gauge" style={{ width: "36%" }}></div>
                                                <h4>4,298</h4>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <span class="avatar">
                                            <a href="#">
                                                <span class="round initials background_color blue">l</span>
                                            </a>
                                        </span>

                                        <div class="data">
                                            <h3>
                                                <a href="#">lucybenson</a>
                                            </h3>
                                            <div class="meter all">
                                                <div class="gauge" style={{ width: "0.7%" }}></div>
                                                <h4>18,953</h4>
                                            </div>
                                            <div class="meter this_week">
                                                <div class="gauge" style={{ width: "33%" }}></div>
                                                <h4>3,900</h4>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="single_column  ">
                <nav>
                    <div class="join">
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database (TMDB)" width="130" height="94" />

                        <a class="rounded" href="signup.html">
                            Join the Community
                        </a>
                    </div>

                    <div>
                        <h3>The Basics</h3>
                        <ul>
                            <li>
                                <a href="#">About TMDB</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Support Forums</a>
                            </li>
                            <li>
                                <a href="#">API</a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener">
                                    System Status
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Get Involved</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    <span class="glyphicons glyphicons-asterisk"></span> Contribution Bible
                                </a>
                            </li>
                            <li>
                                <a href="#">Add New Movie</a>
                            </li>
                            <li>
                                <a href="#">Add New TV Show</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Community</h3>
                        <ul>
                            <li>
                                <a href="#">Guidelines</a>
                            </li>
                            <li>
                                <a href="#">Discussions</a>
                            </li>
                            <li>
                                <a href="#">Leaderboard</a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Legal</h3>
                        <ul>
                            <li>
                                <a href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a href="#">API Terms of Use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <section>Build f99f781 (3376)</section>
            </footer>
        </main>
    );
}

export default Home;
