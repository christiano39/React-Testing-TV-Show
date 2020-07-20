import axios from 'axios';

export const fetchShow = () => {
    return axios
        .get('https://api.tvmaze.com/singlesearch/shows?q=futurama&embed=episodes')
        .then(res => res.data)
}