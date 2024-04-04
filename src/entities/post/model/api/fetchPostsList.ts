import { Post } from "@/entities/post/model/types/post";
import { rtkApi } from "@/shared/api/rtkApi";

interface PostsParamsProps {
	page: number;
	limit?: number;
}

export const fetchPostList = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getPosts: build.query<Post[], PostsParamsProps>({
			query: ({ page = 1, limit }) => ({
				url: "/posts/",
				method: "GET",
				params: {
					_page:page,
					_limit:limit,
				},
			}),
		}),

		getPostDetails: build.query<Post, string>({
			query: (id) => ({
				url: `/posts/${id}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetPostsQuery, useGetPostDetailsQuery } = fetchPostList;
