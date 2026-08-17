import config from "../config.json";

export default {
  async fetch(request) {
    return new Response(JSON.stringify(config), {
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "cache-control": "public, max-age=300"
      }
    });
  }
};