import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = "https://picasso-server.vercel.app";

export const rtkApi = createApi({
	reducerPath: "rtkApi",
	baseQuery: fetchBaseQuery({
		baseUrl: API,
	}),
	endpoints: () => ({}),
});
