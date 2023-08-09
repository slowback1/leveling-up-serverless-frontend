import API from '$lib/api.js';

export async function load(request) {
    let id = Number(request.params.id);

    let api = new API();

    let article = await api.getBlogArticle(id);

    return { article: article.data };
}