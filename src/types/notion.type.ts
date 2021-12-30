import type { PostPreviewProps } from './post.type';

export type NotionItem = {
	id: string;
	properties: PostPreviewProps;
	created_time: string;
	last_edited_time: string;
};
