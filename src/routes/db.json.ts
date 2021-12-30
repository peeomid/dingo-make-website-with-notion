import { getPostDb } from '$lib/content/page';
import { getBlocks, getSupportedBlocks, getAsSensiblyStructuredBlocks } from '$lib/notion';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	const result = await getPostDb();
	if (result) {
		return {
		body: {
			result: result
		}
	};
	}

	return {
		body: {
		}
	};
	
}
