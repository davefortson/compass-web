import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function createLead(data: {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  orgType: string;
  challenge?: string;
}) {
  return notion.pages.create({
    parent: { database_id: process.env.NOTION_LEADS_DB_ID! },
    properties: {
      Name: { title: [{ text: { content: data.firstName } }] },
      "Last Name": { rich_text: [{ text: { content: data.lastName } }] },
      Email: { email: data.email },
      Organization: {
        rich_text: [{ text: { content: data.organization } }],
      },
      "Org Type": { select: { name: data.orgType } },
      Challenge: {
        rich_text: [{ text: { content: data.challenge || "" } }],
      },
      "Submitted At": { date: { start: new Date().toISOString() } },
      Status: { select: { name: "New" } },
    },
  });
}
