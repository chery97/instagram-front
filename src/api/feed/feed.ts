import { authRequest } from '../core';
import { AxiosResponse } from 'axios';
import { PostListResponseTypes } from '../models/post';

const feed = {
    getPostList: () // params?: QrManagerParamTypes,
    : Promise<AxiosResponse<PostListResponseTypes[]>> =>
        authRequest({
            method: 'GET',
            url: '/api/post',
        }),
};

export default feed;
