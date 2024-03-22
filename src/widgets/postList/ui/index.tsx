import React from 'react';
import {IPost} from "../../../shared/lib/types/post";
import {PostCard} from "../../../entities/postCard";
import './index.scss';

interface IProps {
    posts: IPost[];
    currentSides: number[];
}

export const PostList = ({posts, currentSides}: IProps) => {
    return (
        <div>
            <div className='posts__container'>
                {posts?.map(post => (
                    <PostCard post={post} key={post.id}/>
                ))}
            </div>
            { currentSides[1] < 100 && <p className="posts__loading">Идёт загрузка постов...</p>}
        </div>
    );
};