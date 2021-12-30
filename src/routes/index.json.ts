import { getPostDb } from '$lib/content/page';
import { getDatabase } from '$lib/notion';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	// const result = await getDatabase();
	const result = await getPostDb();
	return {
		body: {
			result
		}
	};
}
