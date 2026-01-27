import * as prismic from '@prismicio/client';
import type { RichTextField } from '@prismicio/client';

const repositoryName = import.meta.env.PUBLIC_PRISMIC_REPOSITORY_NAME || '';
const accessToken = import.meta.env.PUBLIC_PRISMIC_MASTER_TOKEN || '';

export const client = prismic.createClient(repositoryName, {
  accessToken,
});

export interface PrejudiceDocument {
  id: string;
  uid: string | null;
  type: string;
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  linked_documents: unknown[];
  lang: string;
  alternate_languages: unknown[];
  data: {
    title: RichTextField;
    prejudice: RichTextField;
    explanation: RichTextField;
  };
  url?: string | null;
}

export async function fetchAllPrejudices(): Promise<PrejudiceDocument[]> {
  const response = await client.getAllByType('prejudice');
  return response as PrejudiceDocument[];
}
