import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/common/Card';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ImgCover from '../assets/img/coverImage.png';
import ImgButton from '../assets/img/button1.png';
import Imgbutton from '../assets/img/sp-cover.png';
import { getMovies } from '../reducks/movies/selectors';
import { fetchMovies } from '../reducks/movies/operations';
import queryString from 'query-string';

const Home = () => {
    const parsed = queryString.parse(window.location.search);
    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState(null);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const movies = getMovies(selector);
    useEffect(() => {
        dispatch(fetchMovies());

        if (parsed.search !== undefined) {
            setSearch(parsed.search);
        }
        if (parsed.category !== undefined) {
            setCategory(parsed.category);
        }
    }, []);
    useEffect(() => {
        if (search != null || category != null) {
            dispatch(fetchMovies(search, category));
        }
    }, [search, category]);
    return (
        <>
            <Header />
            <section class="cover">
                <div class="gradient">
                    <div class="coverdetails m-25">
                        <div class="row sp-coverdetails">
                            <div class="trailer m-10 row">
                                <img src={ImgButton} alt="" />
                                <div class="p-10">Watch Trailer</div>
                            </div>
                            <div class="m-10">
                                <p class="date">October 1st</p>
                                In cinemas
                            </div>
                        </div>
                        <div class="cover-description m-10">
                            <p>
                                James Bond has left active service. His peace is short-lived when Felix Leiter, an old
                                friend from the CIA, turns up asking for help, leading Bond onto the trail of a
                                mysterious villain armed with dangerous new technology.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={ImgCover} alt="" class="backgroundcover" />
                <img src={Imgbutton} class="sp-backgroundcover" alt="" />
            </section>
            <section class="content">
                <h1 class="section-heading m-20 p-10">Newly Released</h1>
                {movies.results.length > 0 ? (
                    <div class="grid">
                        {movies.results.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}

                <hr class="divider" />

                <h1 class="section-heading m-20">Coming Soon</h1>

                <div class="grid">
                    {/* <Card />
                    
                    <Card /> */}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
