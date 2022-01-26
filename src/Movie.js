/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import App from "./App";

const api_key = "ab1ebe3f4edec2d18c7b9d92b28e022e";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Movie() {
    const [data, setData] = useState([]);

    const api = axios.create({ baseURL: BASE_URL });

    const getUpcoming = api.get("movie/upcoming", { params: { api_key } });

    useEffect(() => {
        getUpcoming.then((res) => {
            setData(res.data.results);
        });
    }, []);

    return (
           

            

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
                                        <div class="outer_ring">
                                            <div class="user_score_chart">
                                                <div class="percent">
                                                    <span class="icon icon-rNR"></span>
                                                    <canvas height="34" width="34"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2>
                                        <a href="#">{movie.original_title}</a>
                                    </h2>
                                    <p>{movie.release_date}</p>

                                    <h2></h2>
                                    <p></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            

               
    );
}

export default Movie;
