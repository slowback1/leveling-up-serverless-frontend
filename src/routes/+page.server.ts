import API from '$lib/api.js';

export async function load(request) {
    let api = new API();
    let articles = await api.getBlogArticles();

    console.log(articles);

    return { articles: articles.data };
}