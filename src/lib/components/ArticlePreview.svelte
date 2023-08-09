<script lang="ts">
	import type { BlogArticle } from '$lib/types';

	export let article: BlogArticle;

	let createdString = new Date(article.attributes.createdAt).toLocaleDateString();
</script>

<a href={`/blog/${article.id}`} data-testid="article">
	<p data-testid="article__title">
		{article.attributes.Title}
	</p>
	<p data-testid="article__created-date">{createdString}</p>
</a>
