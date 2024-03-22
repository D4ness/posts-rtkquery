import React from 'react';
import {IPost} from "../../../shared/lib/types/post";
import {Button, Card} from "antd";
import {Link} from "react-router-dom";

interface IProps {
    post: IPost;
}
export const Post = ({post}: IProps) => {
    return (
        <Card title={post.title} style={{maxWidth: '450px'}}>
            <p>{post.body}</p>
            <Link to={"/"}>
                <Button>Вернуться назад</Button>
            </Link>
        </Card>
    );
};