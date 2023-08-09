export interface BlogArticle {
    id: number;
    attributes: BlogArticleAttributes;
}
export interface BlogArticleAttributes {
    Title: string;
    Body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}