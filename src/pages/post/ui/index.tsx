import React from 'react';
import {useParams} from "react-router-dom";
import {postAPI} from "../../../shared/lib/services/PostService";
import {Alert, Flex, Spin} from "antd";
import {Post} from "../../../entities/post";

export const PostPage = () => {
    const {id} = useParams();
    console.log(useParams())
    const {data, isLoading, error} = postAPI.useFetchPostByIdQuery(Number(id));
    return (
        <div>
            <Flex justify="center" align="center" style={{height: "100%"}}>
                {isLoading && <Spin size="large"/>}
                {error && <Alert message="Произошла ошибка при загрузке постов" type="error"/>}
            </Flex>
            {data &&
                <Flex justify="center" gap="middle">
                    <Post post={data}/>
                </Flex>
            }
        </div>
    );
};