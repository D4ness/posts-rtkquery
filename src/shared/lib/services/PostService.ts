import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../types/post";

const baseUrl = 'https://jsonplaceholder.typicode.com/';
export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints: (build) => ({
        fetchPostList: build.query<IPost[], {limit: number, start: number}>({
            query: ({limit = 5, start = 0}) => ({
                url: `/posts`,
                params: {
                    _limit: limit,
                    _start: start
                }
            })
        }),
        fetchPostById: build.query<IPost, number>({
            query: (id: number = 1) => ({
                url: `posts/${id}`
            })
        })
    })
})