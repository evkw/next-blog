import GhostContentAPI from "@tryghost/content-api";
import { GhostApiSettings } from '@config/config';


// Create API instance with site credentials
const api = new GhostContentAPI(GhostApiSettings);

export async function getPosts() {
  return await api.posts
    .browse({
      include: 'tags',
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getAuthor(authorSlug) {
  return await api.authors
    .read({
      slug: authorSlug
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getTags() {
  return await api.tags
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}