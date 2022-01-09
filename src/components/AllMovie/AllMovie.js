import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie';
import './AllMovie.css'

const AllMovie = () => {
    const [popularMovie, setPopularMovie] = useState([])
    const [pageCount, setPageCount] = useState(1)

    const page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log(pageCount)

    const handleLoadMore = () => {
        setPageCount(pageCount + 1)
    }

    const handlePage = (item) => {
        setPopularMovie([])
        setPageCount(item)
    }


    useEffect(() =>
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0dfc53096333ab008c9b200d9546311e&language=en-US&page=${pageCount}`)
            .then(res => {
                setPopularMovie(res.data.results)
                setPopularMovie([...popularMovie, ...res.data.results])
            })
            .catch(err => console.log(err))
        , [pageCount])


    return (
        <div >
            <div className='page'>
                {
                    page.map((item, index) => <span className='page-item' key={index} onClick={() => handlePage(item)}>{item}</span>)
                }
            </div>
            <div className='movie'>
                {
                    popularMovie &&
                    popularMovie.map((movie, index) =>
                        < SingleMovie
                            key={index}
                            title={movie.original_title}
                            overView={movie.overview}
                            poster_path={movie.poster_path}
                            rating={movie.vote_average}
                            release_date={movie.release_date}
                        />
                    )
                }
            </div>
            {
                pageCount > 9 && pageCount < 32 &&
                < div className='load-more'><button className='load-more-btn' onClick={handleLoadMore}>LoadMore</button></div>
            }
        </div >
    );
};

export default AllMovie;