<script context="module" lang="ts">
	import type { PostPreviewProps } from '$types/post.type';
</script>

<script lang="ts">
	import NotionBlock from './notion/NotionBlock.svelte';
	export let props: PostPreviewProps;
	export let id: string;
</script>

<div class="post-preview">
	<a href={`/blog/${id}`}>
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
