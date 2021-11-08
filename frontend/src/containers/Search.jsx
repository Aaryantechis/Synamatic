import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import queryString from 'query-string';
import { getMovies } from '../reducks/movies/selectors';
import { fetchMovies } from '../reducks/movies/operations';

const Search = () => {
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
            <section class="content">
                <div class="pt">
                    <h1 class="section-heading m-20 p-10">Favourites</h1>
                </div>
                <div class="grid"></div>
            </section>
            <Footer />
        </>
    );
};

export default Search;
