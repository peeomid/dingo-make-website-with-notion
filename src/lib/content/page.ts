import { appConfig } from '$lib/config.server';
import { getAsSensiblyStructuredBlocks, getSupportedBlocks, retrieveChildDatabase } from '$lib/notion';
import type { Block, Page } from '@notionhq/client/build/src/api-types';
import { getPageWithPropertyEquals, getPage, getBlocks, getDatabase } from '../notion/notion.api';

const { databaseId: postDbId, indexPageId } = appConfig.notion;

export const getPublishedDbItems = async (dbId: string): Promise<Page[]> => {
  const filter = {
    property: "published",
    checkbox: {
      equals: true
    }
  }
  return getDatabase(dbId, filter);
}

export const getPostDb = async (): Promise<Page[]> => {
  return getPublishedDbItems(postDbId);
}

export const getPostBySlug = async (slug: string): Promise<Page | null> => {
  const pages = await getPageWithPropertyEquals(postDbId, "Slug", slug);
  if (pages.length > 0) {
    return pages[0];
  }
  return null;
}

export const preprocessBlocksContent = async (blockResult: Block[]) => {
  return getAsSensiblyStructuredBlocks(getSupportedBlocks(blockResult));
}

export const getPageUsableContent = async (pageId: string) => {
  const result = await getBlocks(pageId);
  const blocks = await preprocessBlocksContent(result);
  return retrieveChildDatabase(blocks);
  // return blocks;
}

export const getIndexPageContent = async (): Promise<Block[]> => {
  return getPageUsableContent(indexPageId);
}

export const getPageContentBySlug = async (slug: string) => {
  const page = await getPostBySlug(slug);
	if (page) {
		return getPageUsableContent(page.id);
  };
  return null;
};