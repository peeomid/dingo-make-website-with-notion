# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.


## How to configure Notion?

- Retrieve a `NOTION_TOKEN` by following their [Getting Started guide](https://developers.notion.com/docs/getting-started)
- Create a table as the database of your content, and copy its `id`. Maintain it as `NOTION_DATABASE_ID`
- Add following columns as a post attribute
  - `title` (title) - For post title
  - `summary` (text) - For post summary
  - `tags` (multi-select) - For post tags
  - `author` (person) - For post's Author
  - `published` (checkbox) - Published? (un-used currently)

<img src="./static/structure.png" alt="" />
This will setup your Notion table, as the table for your SvelteKit + Notion blog. Congrats!

## How to configure the SvelteKit App?

- The `NOTION_TOKEN` and `NOTION_DATABASE_ID` is expected to be available in your Vercel/Netlify account as environment variables. Add them, fork the project and deploy on Vercel.
- The project uses the [@sveltejs/adapter-vercel](https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel) by default. If you want to deploy on Netlify, install [@sveltejs/adapter-netlify](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify) and change the `adpater` key in `svelte.config.js` to `netlify()
- **Your local instance expects `VITE_` prefixed with the aforementioned environment variables to run.** Refer `.env.example` for help.

## Ref

This project uses template from https://github.com/one-aalam/svelte-notion-kit
