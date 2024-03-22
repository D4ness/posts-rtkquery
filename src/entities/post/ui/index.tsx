import React from 'react';
import {Button, Card} from 'antd';
import {Link} from 'react-router-dom';
import {IPost} from '@/shared/lib/types/post';

interface IProps {
    post: IPost;
}
export const Post = ({post}: IProps) => {
    return (
        <Card title={post.title} style={{maxWidth: '450px'}}>
            <p>{post.body}</p>
            <Link to={'/'}>
                <Button>Вернуться назад</Button>
            </Link>
        </Card>
    );
};