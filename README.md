[![Netlify Status](https://api.netlify.com/api/v1/badges/dc2147d9-f8d4-4405-bca4-70e13db34af4/deploy-status)](https://app.netlify.com/sites/relaxed-rosalind-83ddf5/deploys)

An app made with sveltekit, netlify identity and functions.

- `/guides`: client side rendering because we need to access store values (can't use `context='module'`) and send it to netlify functions `netlify/functions/guides.ts`, which checks if the user is logged in

- `/guides/[id]`: server side rendering with sveltekit API routes
