<script lang="ts" context="module">
</script>

<script lang="ts">
	import type { NotionItem } from '$types/notion.type';
	import SvelteSeo from 'svelte-seo';
	// $theme/theme.configew from '$theme/PostPreview.svelte';
// import { PostPreview } from '$theme/theme.config';
import PostPreview from '$theme/simple/PostPreview.svelte';

	export let result: {
		result: Array<NotionItem>;
	};
</script>

<SvelteSeo title="Svelte Notion Kit" description="Brings your Notion pages to SvelteKit" />
<section class="">
	{#each result.result as notionItem}
		<PostPreview id={notionItem.id} props={notionItem.properties} />
		<!-- <PostPreview id={notionItem.id} props={notionItem.properties} /> -->
	{/each}
</section>
<button class="btn btn-primary">daisyUI Button</button>

<style style lang="postcss">
</style>
