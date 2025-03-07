import { authRequest } from '../core';
import { AxiosResponse } from 'axios';
import { PostListResponseTypes } from '../models/post';

const post = {
    getPostList: () // params?: QrManagerParamTypes,
    : Promise<AxiosResponse<PostListResponseTypes[]>> =>
        authRequest({
            method: 'GET',
            url: '/api/post',
        }),

    getPost: (
        postId: number, // params?: QrManagerParamTypes,
    ): Promise<AxiosResponse<PostListResponseTypes[]>> =>
        authRequest({
            method: 'GET',
            url: `/api/post/${postId}`,
        }),
};

export default post;
