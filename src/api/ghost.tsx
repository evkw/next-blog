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

export async function getLatestArticles() {
  return await api.posts
    .browse({
      limit: 3
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
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

export async function search(term: string) {
  const posts = api.posts.browse({limit: 5, include: 'title', filter:`title:${term}`})

  const blah = await posts;

  console.log(blah);
  return blah;
}