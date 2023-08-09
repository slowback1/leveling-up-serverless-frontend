import type { BlogArticle } from "$lib/types";
import { createServer, Model } from "miragejs";
import { TestBlogArticleListResponse } from "./test-api-responses";

export function makeServer() {
    const server = createServer({
        models: {
            blog: Model.extend<Partial<BlogArticle>>({})
        },
        routes() {
            this.get("/api/blog-articles", () => {
                return TestBlogArticleListResponse;
            })
        },
        trackRequests: true
    })

    return server;
}
