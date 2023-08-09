import { API_KEY, API_URL } from "$env/static/private";
import type { BlogArticle } from "./types";

export default class API {

    private request<T>(url: string): Promise<T> {
        let options = {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
            }
        };

        let fullUrl = API_URL + (url.startsWith("/") ? url : `/${url}`);

        return fetch(fullUrl, options)
            .then(res => res.json())

    }

    getBlogArticles(): Promise<{ data: BlogArticle[] }> {
        return this.request("/api/blog-articles?populate=*");
    }
    getBlogArticle(id: number): Promise<{ data: BlogArticle }> {
        return this.request(`/api/blog-articles/${id}?populate=*`)
    }
}