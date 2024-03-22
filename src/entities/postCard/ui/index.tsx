import React from 'react';
import {Button, Card} from 'antd';
import {Link} from 'react-router-dom';
import {IPost} from '@/shared/lib/types/post';

interface IProps {
    post: IPost;
}
export const PostCard = ({post}: IProps) => {
    return (
        <Card title={`${post.id}. ${post.title}`} style={{width: 300}}>
            <p>{post.body.length>60?post.body.substring(0,60)+'...':post.body}</p>
            <Link to={`${post.id}`}>
                <Button type='primary'>Просмотр</Button>
            </Link>
        </Card>
    );
};

