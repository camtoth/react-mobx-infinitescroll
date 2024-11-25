# App-Development Test
At Floatplane our user-facing applications are built using MobX for state management and React for UI elements. We have a strong emphasis on keeping data and rendering code separate. We also use Typescript with very strict typing rules.

Write a simple example of a React and MobX application to show an infinite scroll-to-load feed of posts from a floatplane creator. It doesn’t need to be anything fancy, but does need to be presentable.

Endpoints: Use those endpoints to get a list of creators and then the posts per creator. The query parameters are example values in bold.

List Creators GET https://www.floatplane.com/api/v3/creator/list?search=linus

List BlogPosts for Creator GET https://www.floatplane.com/api/v3/content/creator?id=59f94c0bdd241b70349eb72b&limit=20&fetchAfter=5

# React + TypeScript + Vite

To run this project:

### `npm run dev`


## Shoutout

[quicktype.io](https://quicktype.io/typescript)

[corsproxy.io](https://corsproxy.io/)

[this article](https://iconof.com/best-practices-for-mobx-with-react/)

[flowbite for some components](https://flowbite.com/)
