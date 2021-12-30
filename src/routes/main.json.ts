import { getIndexPageContent } from '$lib/content/page';
import { getBlocks, getSupportedBlocks, getAsSensiblyStructuredBlocks } from '$lib/notion';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
  // const result = await getIndexPageContent();
  if (1 === 1) {
    return {
      // body: {
      // 	result: result
      // }
      body: 
      {
        "result": [
          {
            "object": "block",
            "id": "9cc6f79a-6866-44ab-9c79-07689c534264",
            "created_time": "2021-07-15T10:31:00.000Z",
            "last_edited_time": "2021-12-22T11:02:00.000Z",
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
              "text": [
                {
                  "type": "text",
                  "text": { "content": "Hello", "link": null },
                  "annotations": {
                    "bold": true,
                    "italic": false,
                    "strikethrough": false,
                    "underline": false,
                    "code": false,
                    "color": "default"
                  },
                  "plain_text": "Hello",
                  "href": null
                },
                {
                  "type": "text",
                  "text": { "content": " world!", "link": null },
                  "annotations": {
                    "bold": false,
                    "italic": false,
                    "strikethrough": false,
                    "underline": false,
                    "code": false,
                    "color": "default"
                  },
                  "plain_text": " world!",
                  "href": null
                }
              ]
            }
          },
          {
            "object": "block",
            "id": "0ff50303-0449-4234-bab8-12f6bd3a87d4",
            "created_time": "2021-12-23T06:55:00.000Z",
            "last_edited_time": "2021-12-23T06:55:00.000Z",
            "has_children": false,
            "archived": false,
            "type": "heading_1",
            "heading_1": {
              "text": [
                {
                  "type": "text",
                  "text": { "content": "Heading 1 here", "link": null },
                  "annotations": {
                    "bold": false,
                    "italic": false,
                    "strikethrough": false,
                    "underline": false,
                    "code": false,
                    "color": "default"
                  },
                  "plain_text": "Heading 1 here",
                  "href": null
                }
              ]
            }
          },
          {
            "object": "block",
            "id": "06613f6d-431f-4e6c-9152-6d047f32121e",
            "created_time": "2021-07-15T10:32:00.000Z",
            "last_edited_time": "2021-07-15T13:26:00.000Z",
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
              "text": [
                {
                  "type": "text",
                  "text": { "content": "This is Lua", "link": null },
                  "annotations": {
                    "bold": false,
                    "italic": false,
                    "strikethrough": false,
                    "underline": false,
                    "code": false,
                    "color": "default"
                  },
                  "plain_text": "This is Lua",
                  "href": null
                }
              ]
            }
          },
          {
            "object": "block",
            "id": "662bcde2-2f51-4cf0-89e3-be19999db262",
            "created_time": "2021-11-15T13:54:00.000Z",
            "last_edited_time": "2021-12-22T11:01:00.000Z",
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
              "text": [
                {
                  "type": "text",
                  "text": { "content": "This is links to ", "link": null },
                  "annotations": {
                    "bold": false,
                    "italic": false,
                    "strikethrough": false,
                    "underline": false,
                    "code": false,
                    "color": "default"
                  },
                  "plain_text": "This is links to ",
                  "href": null
                },
                {
                  "type": "mention",
                  "mention": {
                    "type": "database",
                    "database": { "id": "97c5f20b-fb14-463b-92dc-04753bdfb2ea" }
                  },
                  "annotations": {
                    "bold": false,
                    "italic": false,
                    "strikethrough": false,
                    "underline": false,
                    "code": false,
                    "color": "default"
                  },
                  "plain_text": "Blogs",
                  "href": "https://www.notion.so/97c5f20bfb14463b92dc04753bdfb2ea"
                },
                {
                  "type": "text",
                  "text": { "content": " ", "link": null },
                  "annotations": {
                    "bold": false,
                    "italic": false,
                    "strikethrough": false,
                    "underline": false,
                    "code": false,
                    "color": "default"
                  },
                  "plain_text": " ",
                  "href": null
                }
              ]
            }
          },
          {
            "object": "block",
            "id": "1ff03530-6466-4046-afd2-0f68a2fb16df",
            "created_time": "2021-07-15T14:09:00.000Z",
            "last_edited_time": "2021-12-23T06:46:00.000Z",
            "has_children": false,
            "archived": false,
            "type": "child_database",
            "child_database": {
              "title": "Blogs",
              "pages": [
                {
                  "object": "page",
                  "id": "e0936e72-730e-4316-aebe-e788c21bc5ee",
                  "created_time": "2021-11-17T10:00:00.000Z",
                  "last_edited_time": "2021-12-20T14:41:00.000Z",
                  "cover": {
                    "type": "external",
                    "external": {
                      "url": "https://www.notion.so/images/page-cover/nasa_multi-axis_gimble_rig.jpg"
                    }
                  },
                  "icon": null,
                  "parent": {
                    "type": "database_id",
                    "database_id": "97c5f20b-fb14-463b-92dc-04753bdfb2ea"
                  },
                  "archived": false,
                  "properties": {
                    "tags": {
                      "id": "`TdQ",
                      "type": "multi_select",
                      "multi_select": []
                    },
                    "Slug": {
                      "id": "l[|[",
                      "type": "rich_text",
                      "rich_text": [
                        {
                          "type": "text",
                          "text": { "content": "got-the-slug", "link": null },
                          "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                          },
                          "plain_text": "got-the-slug",
                          "href": null
                        }
                      ]
                    },
                    "published": {
                      "id": "z=n|",
                      "type": "checkbox",
                      "checkbox": true
                    },
                    "author": { "id": "}z{k", "type": "people", "people": [] },
                    "summary": {
                      "id": "~XDH",
                      "type": "rich_text",
                      "rich_text": [
                        {
                          "type": "text",
                          "text": {
                            "content": "Just another article to read",
                            "link": null
                          },
                          "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                          },
                          "plain_text": "Just another article to read",
                          "href": null
                        }
                      ]
                    },
                    "title": {
                      "id": "title",
                      "type": "title",
                      "title": [
                        {
                          "type": "text",
                          "text": { "content": "One article here", "link": null },
                          "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                          },
                          "plain_text": "One article here",
                          "href": null
                        }
                      ]
                    }
                  },
                  "url": "https://www.notion.so/One-article-here-e0936e72730e4316aebee788c21bc5ee"
                },
                {
                  "object": "page",
                  "id": "54103258-5cae-47a3-a642-15417bf94c0c",
                  "created_time": "2021-07-13T07:46:00.000Z",
                  "last_edited_time": "2021-12-03T04:01:00.000Z",
                  "cover": {
                    "type": "external",
                    "external": {
                      "url": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb"
                    }
                  },
                  "icon": null,
                  "parent": {
                    "type": "database_id",
                    "database_id": "97c5f20b-fb14-463b-92dc-04753bdfb2ea"
                  },
                  "archived": false,
                  "properties": {
                    "tags": {
                      "id": "`TdQ",
                      "type": "multi_select",
                      "multi_select": []
                    },
                    "Slug": {
                      "id": "l[|[",
                      "type": "rich_text",
                      "rich_text": [
                        {
                          "type": "text",
                          "text": {
                            "content": "2018-01-26-what-i-wish-i-knew-when-i-started-django-development-2018",
                            "link": null
                          },
                          "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                          },
                          "plain_text": "2018-01-26-what-i-wish-i-knew-when-i-started-django-development-2018",
                          "href": null
                        }
                      ]
                    },
                    "Date": {
                      "id": "pwi[",
                      "type": "date",
                      "date": {
                        "start": "2018-01-26",
                        "end": null,
                        "time_zone": null
                      }
                    },
                    "published": {
                      "id": "z=n|",
                      "type": "checkbox",
                      "checkbox": true
                    },
                    "author": {
                      "id": "}z{k",
                      "type": "people",
                      "people": [
                        {
                          "object": "user",
                          "id": "5c287693-a067-481c-932f-074542cd6fd7",
                          "name": "Luan Nguyen",
                          "avatar_url": null,
                          "type": "person",
                          "person": { "email": "lihavim@gmail.com" }
                        }
                      ]
                    },
                    "summary": {
                      "id": "~XDH",
                      "type": "rich_text",
                      "rich_text": [
                        {
                          "type": "text",
                          "text": {
                            "content": "Django - What to note when you start a new projects. A few points I wish I knew when I started out with Django, that would save myself tons of time and effort.",
                            "link": null
                          },
                          "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                          },
                          "plain_text": "Django - What to note when you start a new projects. A few points I wish I knew when I started out with Django, that would save myself tons of time and effort.",
                          "href": null
                        }
                      ]
                    },
                    "title": {
                      "id": "title",
                      "type": "title",
                      "title": [
                        {
                          "type": "text",
                          "text": {
                            "content": "What I Wish I Knew When I Started Django Development 2018",
                            "link": null
                          },
                          "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                          },
                          "plain_text": "What I Wish I Knew When I Started Django Development 2018",
                          "href": null
                        }
                      ]
                    }
                  },
                  "url": "https://www.notion.so/What-I-Wish-I-Knew-When-I-Started-Django-Development-2018-541032585cae47a3a64215417bf94c0c"
                }
              ]
            }
          },
          {
            "object": "block",
            "id": "7ffc550f-8e45-47e0-ab5d-8629ca75452e",
            "created_time": "2021-12-23T06:46:00.000Z",
            "last_edited_time": "2021-12-23T06:46:00.000Z",
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": { "text": [] }
          }
        ]
      }
      
    };
  }

  return {
    body: {
    }
  };

}
