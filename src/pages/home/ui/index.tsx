import {postAPI} from "../../../shared/lib/services/PostService";
import {PostList} from "../../../widgets/postList";
import {Alert, Flex, Spin} from "antd";


export const HomePage = () => {
    const {data, isLoading, error} = postAPI.useFetchPostListQuery(5);
    console.log(data, isLoading, error, 'MAIN')
    return (
        <section className="post-list" style={{height: "100%"}}>
            Home
            <Flex justify="center" align="center" style={{height: "100%"}}>
                {isLoading && <Spin size="large"/>}
                {error && <Alert message="Произошла ошибка при загрузке постов" type="error"/>}
            </Flex>
            {data &&
                <Flex justify="center" gap="middle">
                    <PostList posts={data}/>
                </Flex>
            }
        </section>
    )
}