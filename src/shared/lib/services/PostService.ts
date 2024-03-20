import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../types/post";

const baseUrl = 'https://jsonplaceholder.typicode.com/';
export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints: (build) => ({
        fetchPostList: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit
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