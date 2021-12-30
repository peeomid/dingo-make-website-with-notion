<script context="module" lang="ts">
	import type { BlockRichText } from '$lib/notion/notion.types';
import PostPreview from '$theme/simple/PostPreview.svelte';
import { blocksChildrenList } from '@notionhq/client/build/src/api-endpoints';
	export type Cover = {
		type: "external";
		external: {
			url: string
		}
	}
	export type Page = {
		object: "page";
		id: string;
		cover: Cover;
		icon: string;
		properties: {}
	}
	export type ChildDbBlock = {
		// text: Array<BlockRichText>;
		title: string;
		pages: Array<Page>
	};
</script>

<script lang="ts">
	import NotionBlockRichText from './NotionBlockRichText.svelte';
	export let block: ChildDbBlock;
</script>

<section class="">
	{console.log(block)}
	{#each block.pages as page}
		{console.log(page)}
		<PostPreview id={page.id} props={page.properties} />
		<!-- <PostPreview id={notionItem.id} props={notionItem.properties} /> -->
	{/each}
</section>