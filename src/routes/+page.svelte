<script lang="ts">
	import ArticlePreview from '$lib/components/ArticlePreview.svelte';
	import type { BlogArticle } from '$lib/types';

	export let data: { articles: BlogArticle[] };
</script>

<h1 data-testid="heading">My cool heading</h1>
{#each data.articles as article}
	<ArticlePreview {article} />
{/each}
