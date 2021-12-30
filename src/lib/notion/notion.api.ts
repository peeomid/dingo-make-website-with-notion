import { Client } from '@notionhq/client';
import { appConfig } from '$lib/config.server';
import type { Block, Filter, Page } from '@notionhq/client/build/src/api-types';
import type { PagesRetrieveResponse } from '@notionhq/client/build/src/api-endpoints';

const { token, databaseId: notionDatabaseId } = appConfig.notion;

/**
 * Initialize the Notion client
 */
export const notionClient = new Client({
	auth: token
});

/**
 * Notion's DB to pull
 * @param databaseId
 * @returns
 */
export const getDatabase = async (databaseId = notionDatabaseId, filter: Filter = undefined): Promise<Page[]> => {
	const { results } = await notionClient.databases.query({
		database_id: databaseId,
		filter: filter
	});
	return results;
};

/**
 *
 * @param pageId PageId of the Notion page you'd like to retrieve
 * @returns
 */
export const getPage = async (pageId: string): Promise<PagesRetrieveResponse> => await notionClient.pages.retrieve({ page_id: pageId });

/**
 *
 * @param blockId Block id of the Notion block you'd like to retrieve
 * @returns
 */
export const getBlocks = async (blockId: string): Promise<Block[]> => {
	const { results } = await notionClient.blocks.children.list({
		block_id: blockId,
		page_size: 50
	});
	return results;
};

export const getPageWithPropertyEquals = async (databaseId: string, propertyName: string, value: string): Promise<Page[]> => {
	const { results } = await notionClient.databases.query({
		database_id: databaseId,
		filter: {
			and: [
				{
					property: propertyName,
					text: {
						equals: value
					}
				},
				{
					property: "published",
					checkbox: {
						equals: true
					}
				}
			]
		}
	});
	return results;
}