import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./../Header";
import Footer from "./../footer";
import "./../css/circle.css";

const api_key = "ab1ebe3f4edec2d18c7b9d92b28e022e";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Details() {
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
                <section class="inner_content movie_content backdrop poster">
                    <div id="shortcut_bar_scroller" class="scroller_wrap shortcut_bar_wrapper should_fade is_fading">
                        <ul id="new_shortcut_bar" class="dropdown_menu scroller">
                            <li class="true">
                                Overview
                                <ul class="media group">
                                    <li>
                                        <a href="/movie/633802">Main</a>
                                    </li>
                                    <li>
                                        <a href="/movie/633802/titles">Alternative Titles</a>
                                    </li>
                                    <li>
                                        <a href="/movie/633802/cast">Cast & Crew</a>
                                    </li>

                                    <li>
                                        <a href="/movie/633802/releases">Release Dates</a>
                                    </li>

                                    <li>
                                        <a href="/movie/633802/translations">Translations</a>
                                    </li>

                                    <li>
                                        <a href="/movie/633802/watch">Watch Now</a>
                                    </li>

                                    <li class="spacer">
                                        <a href="/movie/633802/changes" title="Changes">
                                            Changes
                                        </a>
                                    </li>

                                    <li class="spacer">
                                        <a class="no_click report" window="movie" href="#" title="Report">
                                            Report
                                        </a>
                                    </li>
                                    <li>
                                        <a class="keyboard_s edit_page" href="/movie/633802/edit?active_nav_item=primary_facts" title="Edit">
                                            Edit
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="false">
                                Media
                                <ul class="media number_group">
                                    <li>
                                        <a href="/movie/633802/images/backdrops">
                                            Backdrops <span class="count">5</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/movie/633802/images/logos">
                                            Logos <span class="count">0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/movie/633802/images/posters">
                                            Posters <span class="count">18</span>
                                        </a>
                                    </li>
                                    <li>
                                        Videos
                                        <ul class="number_group">
                                            <li>
                                                <a href="/movie/633802/videos?active_nav_item=Trailers">
                                                    Trailers <span class="count">1</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="false">
                                Fandom
                                <ul class="media">
                                    <li>
                                        Discussions
                                        <ul class="number_group">
                                            <li>
                                                <a href="/movie/633802/discuss">Overview</a>
                                            </li>
                                            <li>
                                                <a href="/movie/633802/discuss/category/5047951f760ee3318900009a">
                                                    General <span class="count">0</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/movie/633802/discuss/category/504794a319c29527aa000640">
                                                    Content Issues <span class="count">0</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/movie/633802/reviews">Reviews</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Share
                                <ul class="media">
                                    <li>
                                        <a id="share" class="no_click" href="#" title="Share">
                                            Share Link
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.themoviedb.org%2Fmovie%2F633802" target="_blank" rel="noopener">
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.themoviedb.org%2Fmovie%2F633802&text=Dark Spell @themoviedb&related=themoviedb" target="_blank" rel="noopener">
                                            Tweet
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="header large border first bg-details">
                        <div class="keyboard_s custom_bg">
                            <div class="single_column">
                                <section id="original_header" class="images inner">
                                    <div class="poster_wrapper true">
                                        <div class="poster">
                                            <div class="image_content backdrop">
                                                <img
                                                    class="poster lazyload"
                                                    src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/h6WSdu91WembH619okLty4Et8uW.jpg"
                                                    data-src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2AbGdSGlU6CpiV3lswHUgE5CdAA.jpg"
                                                    data-srcset="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2AbGdSGlU6CpiV3lswHUgE5CdAA.jpg 1x, https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2AbGdSGlU6CpiV3lswHUgE5CdAA.jpg 2x"
                                                    alt="Dark Spell"
                                                />
                                            </div>

                                            <div class="zoom">
                                                <a href="#" class="no_click">
                                                    <span class="glyphicons_v2 fullscreen white"></span> Expand
                                                </a>
                                            </div>
                                        </div>

                                        <div class="ott_offer">
                                            <div class="text_wrapper">
                                                <div class="loading_wrapper">
                                                    <div class="ball-scale-multiple loader white">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                </div>

                                                {/* <div class="button">
      <div class="provider">
        <img src="https://www.themoviedb.org/t/p/original/e6b6j8t9wNCzR0Y93qlRuJGayMt.jpg" width="36" height="36" alt="Now Streaming on Shout! Factory TV"/>
      </div>
      <div class="text">
        <span>
          <h4>Now Streaming</h4>
          <h3><a class="no_click" href="/movie/633802/watch" title="Now Streaming on Shout! Factory TV">Watch Now</a></h3>
        </span>
      </div>
    </div> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="header_poster_wrapper true">
                                        <section class="header poster">
                                            <div class="title ott_true" dir="auto">
                                                <h2 class="10">
                                                    <a class="text-white" href="/movie/633802">
                                                        Dark Spell
                                                    </a>
                                                    <span class="tag release_date text-white">(2021)</span>
                                                </h2>

                                                <div class="facts">
                                                    <span class="certification text-white">16+</span>

                                                    <span class="release text-white">02/11/2021 (RU)</span>

                                                    <span class="genres">
                                                        <a href="/genre/10749-romance/movie">Romance</a>,&nbsp;<a href="/genre/27-horror/movie">Horror</a>,&nbsp;<a href="/genre/53-thriller/movie">Thriller</a>
                                                    </span>

                                                    <span class="runtime text-white">1h 30m</span>
                                                </div>
                                            </div>
                                            <ul class="auto actions">
                                                <li class="chart">
                                                    <div class="consensus details">
                                                        <div class="outer_ring">
                                                            <div class="user_score_chart" data-percent="69.0" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                <div class="percent">
                                                                    <div class="progress-circle" data-progress="69"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="text text-white">User Score</div>
                                                </li>

                                                <li class="tooltip use_tooltip list tooltip_hover" title="Add to list">
                                                    <a class="no_click" href="#">
                                                        <span class="glyphicons_v2 thumbnails-list white"></span>
                                                    </a>
                                                </li>

                                                <li class="tooltip use_tooltip" title="Mark as favorite">
                                                    <a id="favourite" class="no_click add_to_account_list favourite" href="/fav">
                                                        <span class="glyphicons_v2 heart white false"></span>
                                                    </a>
                                                </li>

                                                <li class="tooltip use_tooltip" title="Add to your watchlist">
                                                    <a id="watchlist" class="no_click add_to_account_list watchlist" href="#">
                                                        <span class="glyphicons_v2 bookmark white false"></span>
                                                    </a>
                                                </li>

                                                <li class="tooltip use_tooltip rating tooltip_hover" title="Rate It!">
                                                    <a id="rate_it" class="no_click rating" href="#">
                                                        <span class="glyphicons_v2 star white false"></span>
                                                    </a>
                                                </li>

                                                <li class="video none">
                                                    <a class="no_click play_trailer" href="#" data-site="YouTube" data-id="kR0RVnMbnOM" data-title="Play Trailer"></a>
                                                </li>
                                            </ul>

                                            <div class="header_info">
                                                <h3 class="tagline text-white" dir="auto">
                                                    Until Death Tears Them Apart
                                                </h3>

                                                <h3 class="text-white" dir="auto ">
                                                    Overview
                                                </h3>
                                                <div class="overview text-white" dir="auto">
                                                    <p class="text-white">Terror strikes when a heartbroken woman uses black magic to get her husband back.</p>
                                                </div>

                                                <ol class="people no_image">
                                                    <li class="profile">
                                                        <p>
                                                            <a class="text-white" href="/person/1311031-svyatoslav-podgaevsky">
                                                                Svyatoslav Podgaevsky
                                                            </a>
                                                        </p>
                                                        <p class="character text-white">Director, Screenplay</p>
                                                    </li>

                                                    <li class="profile">
                                                        <p>
                                                            <a class="text-white" href="/person/2018519-nataliya-dubovaya">
                                                                Nataliya Dubovaya
                                                            </a>
                                                        </p>
                                                        <p class="character text-white">Screenplay</p>
                                                    </li>

                                                    <li class="profile">
                                                        <p>
                                                            <a class="text-white" href="/person/1620055-ivan-kapitonov">
                                                                Ivan Kapitonov
                                                            </a>
                                                        </p>
                                                        <p class="character text-white">Screenplay</p>
                                                    </li>
                                                </ol>
                                            </div>
                                        </section>
                                    </div>
                                </section>

                                <div id="ott_offers_window" class="hidden"></div>
                            </div>
                        </div>
                    </div>

                    <div id="media_v4" class="media movie_v4 header_large">
                        <div class="column_wrapper">
                            <div class="content_wrapper">
                                <div>
                                    <div class="white_column">
                                        <section class="panel top_billed scroller">
                                            <h3 dir="auto">Top Billed Cast</h3>

                                            <div id="cast_scroller" class="scroller_wrap should_fade is_fading">
                                                <ol class="people scroller">
                                                    <li class="card">
                                                        <a href="/person/2097313-yana-enzhaeva">
                                                            <img
                                                                loading="lazy"
                                                                class="profile"
                                                                src="https://www.themoviedb.org/t/p/w138_and_h175_face/ufyMPwnWmDnUb4f2szbKP6QD9Sq.jpg"
                                                                srcset="https://www.themoviedb.org/t/p/w138_and_h175_face/ufyMPwnWmDnUb4f2szbKP6QD9Sq.jpg 1x, https://www.themoviedb.org/t/p/w276_and_h350_face/ufyMPwnWmDnUb4f2szbKP6QD9Sq.jpg 2x"
                                                                alt="Yana Enzhaeva"
                                                            />
                                                        </a>

                                                        <p>
                                                            <a href="/person/2097313-yana-enzhaeva">Yana Enzhaeva</a>
                                                        </p>
                                                        <p class="character">Zhenya</p>
                                                    </li>

                                                    <li class="card">
                                                        <a href="/person/2202678-konstantin-beloshapka">
                                                            <img
                                                                loading="lazy"
                                                                class="profile"
                                                                src="https://www.themoviedb.org/t/p/w138_and_h175_face/nxF11Rue0ILN8B5q7l5drxJbMJW.jpg"
                                                                srcset="https://www.themoviedb.org/t/p/w138_and_h175_face/nxF11Rue0ILN8B5q7l5drxJbMJW.jpg 1x, https://www.themoviedb.org/t/p/w276_and_h350_face/nxF11Rue0ILN8B5q7l5drxJbMJW.jpg 2x"
                                                                alt="Konstantin Beloshapka"
                                                            />
                                                        </a>

                                                        <p>
                                                            <a href="/person/2202678-konstantin-beloshapka">Konstantin Beloshapka</a>
                                                        </p>
                                                        <p class="character">Kir</p>
                                                    </li>

                                                    <li class="card">
                                                        <a href="/person/1626928-ilya-ermolov">
                                                            <img
                                                                loading="lazy"
                                                                class="profile"
                                                                src="https://www.themoviedb.org/t/p/w138_and_h175_face/s3kxd1znLcBSjMBBGYH8AcIVWZZ.jpg"
                                                                srcset="https://www.themoviedb.org/t/p/w138_and_h175_face/s3kxd1znLcBSjMBBGYH8AcIVWZZ.jpg 1x, https://www.themoviedb.org/t/p/w276_and_h350_face/s3kxd1znLcBSjMBBGYH8AcIVWZZ.jpg 2x"
                                                                alt="Ilya Ermolov"
                                                            />
                                                        </a>

                                                        <p>
                                                            <a href="/person/1626928-ilya-ermolov">Ilya Ermolov</a>
                                                        </p>
                                                        <p class="character">Viktor</p>
                                                    </li>

                                                    <li class="card">
                                                        <a href="/person/2017467-varvara-borodina">
                                                            <img
                                                                loading="lazy"
                                                                class="profile"
                                                                src="https://www.themoviedb.org/t/p/w138_and_h175_face/xqCpLus2WI7ktx2PWitlcwkLMrk.jpg"
                                                                srcset="https://www.themoviedb.org/t/p/w138_and_h175_face/xqCpLus2WI7ktx2PWitlcwkLMrk.jpg 1x, https://www.themoviedb.org/t/p/w276_and_h350_face/xqCpLus2WI7ktx2PWitlcwkLMrk.jpg 2x"
                                                                alt="Varvara Borodina"
                                                            />
                                                        </a>

                                                        <p>
                                                            <a href="/person/2017467-varvara-borodina">Varvara Borodina</a>
                                                        </p>
                                                        <p class="character">Sonya</p>
                                                    </li>

                                                    <li class="card">
                                                        <a href="/person/1034698-igor-khripunov">
                                                            <img
                                                                loading="lazy"
                                                                class="profile"
                                                                src="https://www.themoviedb.org/t/p/w138_and_h175_face/k9Nw2mZlLAtbZOJdTmnbX4Vj8hK.jpg"
                                                                srcset="https://www.themoviedb.org/t/p/w138_and_h175_face/k9Nw2mZlLAtbZOJdTmnbX4Vj8hK.jpg 1x, https://www.themoviedb.org/t/p/w276_and_h350_face/k9Nw2mZlLAtbZOJdTmnbX4Vj8hK.jpg 2x"
                                                                alt="Igor Khripunov"
                                                            />
                                                        </a>

                                                        <p>
                                                            <a href="/person/1034698-igor-khripunov">Igor Khripunov</a>
                                                        </p>
                                                        <p class="character">Pastor</p>
                                                    </li>

                                                    <li class="card">
                                                        <a href="/person/228262-sabina-akhmedova">
                                                            <img
                                                                loading="lazy"
                                                                class="profile"
                                                                src="https://www.themoviedb.org/t/p/w138_and_h175_face/k2JIxS4Lekeb6iKmK5HnE4Jw0A6.jpg"
                                                                srcset="https://www.themoviedb.org/t/p/w138_and_h175_face/k2JIxS4Lekeb6iKmK5HnE4Jw0A6.jpg 1x, https://www.themoviedb.org/t/p/w276_and_h350_face/k2JIxS4Lekeb6iKmK5HnE4Jw0A6.jpg 2x"
                                                                alt="Sabina Akhmedova"
                                                            />
                                                        </a>

                                                        <p>
                                                            <a href="/person/228262-sabina-akhmedova">Sabina Akhmedova</a>
                                                        </p>
                                                        <p class="character">Aza the Gypsy</p>
                                                    </li>

                                                    <li class="card">
                                                        <a href="/person/2464803-kristina-marandy">
                                                            <div class="glyphicons_v2 picture grey profile no_image_holder profile one"></div>
                                                        </a>

                                                        <p>
                                                            <a href="/person/2464803-kristina-marandy">Kristina Marandy</a>
                                                        </p>
                                                        <p class="character">gypsy</p>
                                                    </li>

                                                    <li class="card">
                                                        <a href="/person/1987301-larysa-domaskina">
                                                            <img
                                                                loading="lazy"
                                                                class="profile"
                                                                src="https://www.themoviedb.org/t/p/w138_and_h175_face/3TXIncEfwRDYVLf2h4kaTrlS7gD.jpg"
                                                                srcset="https://www.themoviedb.org/t/p/w138_and_h175_face/3TXIncEfwRDYVLf2h4kaTrlS7gD.jpg 1x, https://www.themoviedb.org/t/p/w276_and_h350_face/3TXIncEfwRDYVLf2h4kaTrlS7gD.jpg 2x"
                                                                alt="Larysa Domaskina"
                                                            />
                                                        </a>

                                                        <p>
                                                            <a href="/person/1987301-larysa-domaskina">Larysa Domaskina</a>
                                                        </p>
                                                        <p class="character"></p>
                                                    </li>

                                                    <li class="card">
                                                        <a href="/person/2771611-daniela-bogatyreva">
                                                            <div class="glyphicons_v2 picture grey profile no_image_holder profile one"></div>
                                                        </a>

                                                        <p>
                                                            <a href="/person/2771611-daniela-bogatyreva">Daniela Bogatyreva</a>
                                                        </p>
                                                        <p class="character"></p>
                                                    </li>

                                                    <li class="filler view_more">
                                                        <p>
                                                            <a href="/movie/633802/cast">
                                                                View More <span class="glyphicons_v2 arrow-thin-right"></span>
                                                            </a>
                                                        </p>
                                                    </li>
                                                </ol>
                                                <div class="style_wrapper"></div>
                                            </div>

                                            <p class="new_button">
                                                <a class="" href="/movie/633802/cast">
                                                    Full Cast & Crew
                                                </a>
                                            </p>
                                        </section>

                                        <section class="panel media_panel social_panel">
                                            <section class="review">
                                                <div class="menu">
                                                    <h3 dir="auto">Social</h3>
                                                    <ul>
                                                        <li class="active" dir="auto">
                                                            <a id="reviews" class="media_panel" href="#">
                                                                Reviews <span>0</span>
                                                            </a>
                                                        </li>
                                                        <li class="" dir="auto">
                                                            <a id="discussions" class="media_panel" href="#">
                                                                Discussions <span>0</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="content">
                                                    <div class="original_content">
                                                        <div class="review_container zero">
                                                            <div class="content zero">
                                                                <p class="no_margin" dir="auto">
                                                                    We don't have any reviews for Dark Spell. Would you like to <a href="/review/new?media_type=movie&media_id=5d89edec79b3d4001f84d0dc">write one</a>?
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </section>

                                        <section class="panel media_panel media scroller">
                                            <div class="menu">
                                                <h3 dir="auto">Media</h3>
                                                <ul>
                                                    <li class="active" dir="auto">
                                                        <a id="popular" class="media_panel" href="#">
                                                            Most Popular
                                                        </a>
                                                    </li>
                                                    <li dir="auto">
                                                        <a id="videos" class="media_panel" href="#">
                                                            Videos <span>1</span>
                                                        </a>
                                                    </li>
                                                    <li dir="auto">
                                                        <a id="backdrops" class="media_panel" href="#">
                                                            Backdrops <span>5</span>
                                                        </a>
                                                    </li>
                                                    <li dir="auto">
                                                        <a id="posters" class="media_panel" href="#">
                                                            Posters <span>18</span>
                                                        </a>
                                                    </li>
                                                    <li class="view_all"></li>
                                                </ul>
                                            </div>
                                            <div id="media_scroller" class="scroller_wrap should_fade is_fading">
                                                <div class="h_scroller content scroller">
                                                    {/* <div class="video card no_border">
      <div class="wrapper" 
    //   style={{"background-image: url('https://i.ytimg.com/vi/kR0RVnMbnOM/hqdefault.jpg');"}}
      >
        <a class="no_click play_trailer" href="/video/play?key=kR0RVnMbnOM" data-site="YouTube" data-id="kR0RVnMbnOM" data-title="Dark Spell (2021) - Official Trailer (HD)"><div class="play_background"><span class="glyphicons_v2 play invert svg"></span></div></a>
      </div>
    </div> */}

                                                    <div class="backdrop">
                                                        <img
                                                            loading="lazy"
                                                            class="backdrop"
                                                            src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/o2OSpKzXuB1edCDyVC2MXAxXwyJ.jpg"
                                                            srcset="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/o2OSpKzXuB1edCDyVC2MXAxXwyJ.jpg 1x, https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/o2OSpKzXuB1edCDyVC2MXAxXwyJ.jpg 2x"
                                                            alt="Dark Spell"
                                                        />
                                                    </div>

                                                    <div class="poster">
                                                        <img
                                                            class="poster"
                                                            src="https://www.themoviedb.org/t/p/w220_and_h330_face/2AbGdSGlU6CpiV3lswHUgE5CdAA.jpg"
                                                            srcset="https://www.themoviedb.org/t/p/w220_and_h330_face/2AbGdSGlU6CpiV3lswHUgE5CdAA.jpg 1x, https://www.themoviedb.org/t/p/w440_and_h660_face/2AbGdSGlU6CpiV3lswHUgE5CdAA.jpg 2x"
                                                            alt="Dark Spell"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <section class="inner_content bg_image no_pad video" style={{ overflow: "hidden" }}>
                                            <div class="white_column">
                                                <div class=" no_bottom_pad wrap">
                                                    <div class="column">
                                                        <div class="">
                                                            <div class="selector_wrap">
                                                                <div class="">
                                                                    <h2 class="nw text-black">Disarankan</h2>

                                                                    <div>
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
                                                                                                    {/* <div class="playBtn"></div> */}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div class="content">
                                                                                            <h2 class="text-black">{movie.original_title}</h2>
                                                                                            <h3></h3>
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>

                                <div class="grey_column">
                                    <div>
                                        <section class="split_column">
                                            <div>
                                                <div class="column no_bottom_pad">
                                                    <section class="facts left_column">
                                                        <div class="social_links">
                                                            <div class="homepage">
                                                                <a class="social_link" title="Visit JustWatch" href="https://www.justwatch.com/us/movie/dark-spell" target="_blank" rel="noopener"></a>
                                                            </div>
                                                        </div>

                                                        <p class="wrap">
                                                            <strong>Original Title</strong> Приворот. Чёрное венчание
                                                        </p>

                                                        <p>
                                                            <strong>
                                                                <bdi>Status</bdi>
                                                            </strong>{" "}
                                                            Released
                                                        </p>

                                                        <p>
                                                            <strong>
                                                                <bdi>Original Language</bdi>
                                                            </strong>{" "}
                                                            Russian
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                <bdi>Budget</bdi>
                                                            </strong>{" "}
                                                            -
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                <bdi>Revenue</bdi>
                                                            </strong>{" "}
                                                            $515,596.00
                                                        </p>
                                                    </section>

                                                    <section class="keywords right_column">
                                                        <h4>
                                                            <bdi>Keywords</bdi>
                                                        </h4>

                                                        <ul>
                                                            <li>
                                                                <a href="/keyword/4252-black-magic/movie">black magic</a>
                                                            </li>

                                                            <li>
                                                                <a href="/keyword/282355-spell/movie">spell</a>
                                                            </li>

                                                            <li>
                                                                <a href="/keyword/282356-demonic-ceremony/movie">demonic ceremony</a>
                                                            </li>
                                                        </ul>
                                                    </section>
                                                </div>
                                            </div>

                                            <div>
                                                <section class="content_score">
                                                    <h4 dir="auto">Content Score</h4>
                                                    <div class="content_score">
                                                        <div class="false">
                                                            <p>100</p>
                                                        </div>
                                                    </div>
                                                    <p dir="auto">Yes! Looking good!</p>
                                                </section>

                                                <section class="leaderboard">
                                                    <h4>Top Contributors</h4>

                                                    <div class="leaders">
                                                        <div class="edit_leader">
                                                            <div class="avatar">
                                                                <a href="/u/mrtextortexel">
                                                                    <img
                                                                        loading="lazy"
                                                                        class="avatar"
                                                                        src="https://secure.gravatar.com/avatar/8ac10b0f465d048247506cda738544af.jpg?s=45"
                                                                        srcset="https://secure.gravatar.com/avatar/8ac10b0f465d048247506cda738544af.jpg?s=45 1x, https://secure.gravatar.com/avatar/8ac10b0f465d048247506cda738544af.jpg?s=90 2x"
                                                                        alt="mrtextortexel"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div class="info">
                                                                <p class="edit_count">
                                                                    58
                                                                    <a href="/u/mrtextortexel">mrtextortexel</a>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="edit_leader">
                                                            <div class="avatar">
                                                                <a href="/u/Zwiastuny-HD">
                                                                    <img
                                                                        loading="lazy"
                                                                        class="avatar"
                                                                        src="https://www.themoviedb.org/t/p/w45_and_h45_face/o72v2u76Hjabkwt39QbvrtkRKcU.jpg"
                                                                        srcset="https://www.themoviedb.org/t/p/w45_and_h45_face/o72v2u76Hjabkwt39QbvrtkRKcU.jpg 1x, https://www.themoviedb.org/t/p/w90_and_h90_face/o72v2u76Hjabkwt39QbvrtkRKcU.jpg 2x"
                                                                        alt="Zwiastuny-HD"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div class="info">
                                                                <p class="edit_count">
                                                                    24
                                                                    <a href="/u/Zwiastuny-HD">Zwiastuny-HD</a>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="edit_leader">
                                                            <div class="avatar">
                                                                <a href="/u/Brutal_Kid">
                                                                    <img
                                                                        loading="lazy"
                                                                        class="avatar"
                                                                        src="https://www.themoviedb.org/t/p/w45_and_h45_face/aM1B3mtVa1qvLUxwKh0kVGTH9v5.jpg"
                                                                        srcset="https://www.themoviedb.org/t/p/w45_and_h45_face/aM1B3mtVa1qvLUxwKh0kVGTH9v5.jpg 1x, https://www.themoviedb.org/t/p/w90_and_h90_face/aM1B3mtVa1qvLUxwKh0kVGTH9v5.jpg 2x"
                                                                        alt="Brutal_Kid"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div class="info">
                                                                <p class="edit_count">
                                                                    13
                                                                    <a href="/u/Brutal_Kid">Brutal_Kid</a>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="edit_leader">
                                                            <div class="avatar">
                                                                <a href="/u/karrten3">
                                                                    <span class="round initials background_color pink">k</span>
                                                                </a>
                                                            </div>
                                                            <div class="info">
                                                                <p class="edit_count">
                                                                    12
                                                                    <a href="/u/karrten3">karrten3</a>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <p>
                                                            <a href="/movie/633802/changes">
                                                                <span class="glyphicons glyphicons-chevron-right x1"></span> View Edit History
                                                            </a>
                                                        </p>
                                                    </div>
                                                </section>

                                                <section class="popularity_trend">
                                                    <h4 dir="auto">Popularity Trend</h4>
                                                    <div id="popularity_waypoint" class="popularity">
                                                        <div id="popularity_chart"></div>
                                                    </div>
                                                </section>
                                            </div>

                                            <div class="">
                                                <p class="rounded new_button pad">
                                                    <a class="" href="/movie/633802/edit">
                                                        edit page
                                                    </a>
                                                </p>
                                            </div>

                                            <div class="keyboard_shortcut_text">
                                                <p>
                                                    <a id="keyboard_shortcuts" class="no_click" href="#">
                                                        <span class="glyphicons_v2 keyboard"></span> Keyboard Shortcuts
                                                    </a>
                                                </p>
                                            </div>

                                            <div class="report_issue">
                                                <p class="report_issue">
                                                    <a class="no_click report" window="movie" href="#">
                                                        <span class="glyphicons_v2 speech-bubble-alert"></span> Report an Issue
                                                    </a>
                                                </p>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </main>
    );
}

export default Details;
