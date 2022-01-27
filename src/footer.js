import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Footer;
