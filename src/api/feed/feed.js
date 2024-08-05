import axios, { AxiosResponse } from 'axios';
import { GetFeedResponse } from '../../models/feed';

const feed = {
    getFeed: Promise<AxiosResponse<GetFeedResponse>> => {
        const url = `http://localhost:8080/feed/list`;
        const reponse = axios.get(url);
        return reponse;
    },
};

export default feed;
