import {postAPI} from "../../../shared/lib/services/PostService";
import {PostList} from "../../../widgets/postList";
import {Alert, Flex, Spin} from "antd";
import {useEffect, useState} from "react";
import {IPost} from "../../../shared/lib/types/post";
import {newSides, preparePosts} from "../lib/postsPreparing";

export const HomePage = () => {
    const [isFetchingDown, setIsFetchingDown] = useState<boolean>(false);
    const [isFetchingUp, setIsFetchingUp] = useState<boolean>(false);
    const [currentPostStart, setCurrentPostStart] = useState<number>(0);
    const [currentSides, setCurrentSides] = useState<number[]>([1, 5]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const {data, isLoading, error} =
        postAPI.useFetchPostListQuery({limit: 5, start: currentPostStart});

    // Хуки для работы с массивом отображаемых постов
    useEffect(() => {
        if (isFetchingDown) {
            setCurrentSides( [...newSides(currentSides, 'down')]);
            setCurrentPostStart(currentSides[1]);
            setIsFetchingDown(false)
        }
    }, [isFetchingDown]);

    useEffect(() => {
        if (isFetchingUp) {
            setCurrentSides([...newSides(currentSides, 'up')])
            setCurrentPostStart(currentSides[0] - 6);
            if (currentPostStart !== 0) {
                window.scrollTo(0, 55);
            }
            setIsFetchingUp(false)
        }
    }, [isFetchingUp])

    // Подготовкка списка постов для отображения
    useEffect(() => {
        const prepPosts = preparePosts(posts, data)
        setPosts([...prepPosts]);
    }, [data]);


    // Триггеры вверху и внизу страницы на изменение состояния для вызова хуков UseEffect
    const scrollHandler = (e: any): void => {
        if (e.target.documentElement.scrollTop < 50) {
            setIsFetchingUp(true);
        }
        if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 50) {
            setIsFetchingDown(true)
            window.scrollTo(0, (e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop));
        }
    };
    // Debounce, чтобы искусственно замедлить прогрузку постов
    function debounce(callback: any) {
        let timeout: any = null;
        return function (...args: any[]) {
            clearTimeout(timeout);
            timeout = setTimeout(callback, 500, ...args);
        };
    }
    const debounceScroll = debounce(scrollHandler);

    // Обнуление слушателей, чтобы не накапливались
    useEffect(() => {
        document.addEventListener('scroll', debounceScroll);
        return () => {
            document.removeEventListener('scroll', debounceScroll);
        }
    }, []);


    return (
        <section className="post-list" style={{height: "100%"}}>
            Home
            <Flex justify="center" align="center" style={{height: "100%"}}>
                {isLoading && <Spin size="large"/>}
                {error && <Alert message="Произошла ошибка при загрузке постов" type="error"/>}
            </Flex>
            {posts.length !== 0 &&
                <Flex justify="center" gap="middle">
                    <PostList posts={posts}/>
                </Flex>
            }
        </section>
    )
}