import type { BlogArticle } from "$lib/types";

export const TestBlogArticleListResponse: { data: BlogArticle[] } = {
    "data": [
        {
            "id": 1,
            "attributes": {
                "Title": "My cool title",
                "Body": "Content content content\n\nContent content?\n\nContent!\n\nCONTENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
                "createdAt": "2023-08-08T11:05:22.681Z",
                "updatedAt": "2023-08-08T11:09:30.572Z",
                "publishedAt": "2023-08-08T11:09:30.570Z",
            }
        }
    ]
}