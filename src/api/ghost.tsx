import GhostContentAPI from "@tryghost/content-api";
import {GhostApiSettings} from '@config/config';


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