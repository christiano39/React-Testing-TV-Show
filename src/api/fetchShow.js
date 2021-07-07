import axios from 'axios';

export const fetchShow = showTitle => {
    return axios
        .get(`https://api.tvmaze.com/singlesearch/shows?q=${showTitle}&embed=episodes`)
        .then(res => res.data)
}