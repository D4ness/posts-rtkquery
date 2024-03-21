import {IPost} from "../../../shared/lib/types/post";

export const newSides = (sides: number[], flag: string) => {
    let prepSides = sides;
    if (flag === 'down') {
        if (prepSides[1] > 95) {
            return prepSides;
        }
        prepSides = [prepSides[0], prepSides[1] + 5];
        prepSides = (prepSides[1] - prepSides[0] + 1) > 10 ? [prepSides[0] + 5, prepSides[1]] : prepSides;
        return prepSides
    }
    if (flag === 'up') {
        if (prepSides[0] < 5) {
            return prepSides;
        }
        prepSides = [prepSides[0] - 5, prepSides[1]];
        prepSides = (prepSides[1] - prepSides[0] + 1) > 10 ? [prepSides[0], prepSides[1] - 5] : prepSides;
        return prepSides
    }
    return prepSides;
}

export const preparePosts = (posts: IPost[], data: IPost[]) => {
    let prepPosts: any[] = [];
    if (data && posts[0]?.id > data[data.length - 1]?.id) {
        prepPosts = [...data, ...posts];
        prepPosts = prepPosts.length > 10 ? prepPosts.slice(0, 10) : prepPosts;
    } else if (data) {
        prepPosts = [...posts, ...data]
        prepPosts = prepPosts.length > 10 ? prepPosts.slice(prepPosts.length - 10, prepPosts.length) : prepPosts;
    }
    prepPosts.sort((a, b) => (a.id - b.id));
    return prepPosts;
}