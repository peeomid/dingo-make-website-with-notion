<script context="module" lang="ts">
	import type { Block } from '$lib/notion/notion.types';
</script>

<script lang="ts">
	import NotionBlockTitle from './NotionBlockTitle.svelte';
	import NotionBlockHeading from './NotionBlockHeading.svelte';
	import NotionBlockRichText from './NotionBlockRichText.svelte';
	import NotionBlockTagList from './NotionBlockTagList.svelte';
	import NotionBlockPeople from './NotionBlockPeople.svelte';
	import NotionBlockParagraph from './NotionBlockParagraph.svelte';
	import NotionBlockNumberedList from './NotionBlockNumberedList.svelte';
	import NotionBlockBulletedList from './NotionBlockBulletedList.svelte';
	import NotionBlockToggleList from './NotionBlockToggleList.svelte';
	import NotionBlockChildrenDatabase from './NotionBlockChildrenDatabase.svelte';

	export let block: Block;
</script>

{#if block.type == 'title'}
	<NotionBlockTitle block={block[block.type]} />
{:else if block.type == 'heading_1' || block.type == 'heading_2' || block.type == 'heading_3'}
	<NotionBlockHeading block={block[block.type]} type={block.type} />
{:else if block.type == 'multi_select'}
	<NotionBlockTagList block={block[block.type]} />
{:else if block.type == 'rich_text'}
	<NotionBlockRichText block={block[block.type]} />
{:else if block.type == 'paragraph'}
	<NotionBlockParagraph block={block[block.type]} />
{:else if block.type == 'people'}
	<NotionBlockPeople block={block[block.type]} />
{:else if block.type == 'numbered_list_item'}
	<NotionBlockNumberedList {block} />
{:else if block.type == 'bulleted_list_item'}
	<NotionBlockBulletedList {block} />
{:else if block.type == 'toggle'}
	<NotionBlockToggleList {block} />
{:else if block.type == 'child_database'}
	<NotionBlockChildrenDatabase block={block[block.type]} />
{:else}
	<!-- handle more types (to_do)  -->
{/if}
