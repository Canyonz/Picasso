import { PostPage } from "@/pages/postPage";
import { PostsPage } from "@/pages/postsPage";
import { getRoutePost, getRoutePosts } from "@/shared/const/routes";
import { createBrowserRouter } from "react-router-dom";

const errorElement = <div>Страница не найдена!</div>


export const routeConfig = createBrowserRouter([
	{
		element: <PostsPage />,
		path: getRoutePosts(),
		errorElement: errorElement
	},
	{
		element: <PostPage />,
		path: getRoutePost(":id"),
		errorElement: errorElement
	}
], {
	basename: "/Picasso/"
});
