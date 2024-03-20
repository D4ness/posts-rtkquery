import React from 'react';
import {IPost} from "../../../shared/lib/types/post";
import {Post} from "../../../entities/post";
import './index.scss';

interface IProps {
    posts: IPost[];
}

export const PostList = ({posts}: IProps) => {
    return (
        <div>
            <div>Мб фильтры или что-то</div>
            <div className='posts-container'>
                {posts?.map(post => (
                    <Post post={post} key={post.id}/>
                ))}
            </div>
            <div>Пагинация/infinite scroll</div>
        </div>
    );
};