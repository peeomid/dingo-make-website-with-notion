<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch('/index.json');
		if (res.ok) {
			return {
				props: {
					result: await res.json()
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load database`)
		};
	}
</script>

<script lang="ts">
	import type { NotionItem } from '$types/notion.type';
	import { IndexPage } from '$theme/theme.config';

	export let result: {
		result: Array<NotionItem>;
	};
</script>

<IndexPage {result} />
