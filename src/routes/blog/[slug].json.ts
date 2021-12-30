import { getPostBySlug } from '$lib/content/page';
import { getBlocks, getSupportedBlocks, getAsSensiblyStructuredBlocks } from '$lib/notion';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	const { slug } = params;
	const page = await getPostBySlug(slug);
	if (page) {
		const pageId = page.id;
		const result = await getBlocks(pageId);
		return {
		body: {
			result: getAsSensiblyStructuredBlocks(getSupportedBlocks(result))
		}
	};
	}

	return {
		body: {
		}
	};
	
}
