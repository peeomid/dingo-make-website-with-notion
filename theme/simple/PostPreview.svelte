<script context="module" lang="ts">
</script>

<script lang="ts">
	import type { PostPreviewProps } from '$types/post.type';
	import NotionBlock from '$components/notion/NotionBlock.svelte';
	export let props: PostPreviewProps;
	export let id: string;
</script>

<div class="post-preview">
	<a href={`/blog/${props.Slug.rich_text[0].plain_text}`}>
		<NotionBlock block={props.title} />
	</a>
	<NotionBlock block={props.tags} />
	<NotionBlock block={props.summary} />
	<NotionBlock block={props.author} />
</div>

<style lang="postcss">
	.post-preview {
		@apply mb-6;
	}
</style>
