<script context="module" lang="ts">
	import type { BlockMentionRichText, BlockRichText } from '$lib/notion/notion.types';
</script>

<script lang="ts">
	export let block: Array<BlockRichText | BlockMentionRichText>;
</script>

{#each block as blockItem}
	<span
		class:bold={blockItem.annotations.bold}
		class:italic={blockItem.annotations.italic}
		class:strikethrough={blockItem.annotations.strikethrough}
		class:underline={blockItem.annotations.underline}
		class:code={blockItem.annotations.code}
		class="{blockItem.annotations.color !== 'default'
			? blockItem.annotations.color
			: ''} notion__block-type notion__rich-text-item"
	>
		{#if blockItem.type === "mention"}
			{blockItem.plain_text}
		{:else}
			{#if blockItem.text.link}
				<a href={blockItem.text.link.url} title={blockItem.text.content}>{blockItem.text.content}</a>
			{:else}
				{blockItem.text.content}
			{/if}
		{/if}
	</span>
{/each}
