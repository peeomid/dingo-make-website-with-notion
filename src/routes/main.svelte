<script lang="ts" context="module">
	import type { Block } from '$lib/notion';

	export async function load({ page: { params }, fetch }) {
		const { slug } = params;
		const res = await fetch(`/main.json`);
		if (res.ok) {
			return {
				props: {
					result: await res.json()
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not pull the block`)
		};
	}
</script>

<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import Post from '$components/Post.svelte';

	export let result: {
		result: Array<Block>;
	};
</script>

<SvelteSeo
	title="Svelte Starter Kit"
	description="Svelte with brilliant bells and useful whistles"
/>

<section>
	<Post props={result.result} />
</section>

<style style lang="postcss">
</style>
