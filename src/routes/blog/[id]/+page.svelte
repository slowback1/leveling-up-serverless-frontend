<script lang="ts">
	import type { BlogArticle } from '$lib/types';

	export let data: { article: BlogArticle };
	let { article } = data;
</script>

<div>
	<a data-testid="blog__back" href="/">Back to Home</a>

	<h1 data-testid="blog__title">
		{article.attributes.Title}
	</h1>

	<p class="blog__content" data-testid="blog__content">{article.attributes.Body}</p>
</div>

<style>
	.blog__content {
		white-space: pre;
	}
</style>
