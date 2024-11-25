# App-Development Test
At Floatplane our user-facing applications are built using MobX for state management and React for UI elements. We have a strong emphasis on keeping data and rendering code separate. We also use Typescript with very strict typing rules.

Write a simple example of a React and MobX application to show an infinite scroll-to-load feed of posts from a floatplane creator. It doesn’t need to be anything fancy, but does need to be presentable.

Endpoints: Use those endpoints to get a list of creators and then the posts per creator. The query parameters are example values in bold.

List Creators GET https://www.floatplane.com/api/v3/creator/list?search=linus

List BlogPosts for Creator GET https://www.floatplane.com/api/v3/content/creator?id=59f94c0bdd241b70349eb72b&limit=20&fetchAfter=5

### Notes & Comments

* https://www.floatplane.com/api/v3/creator/list endpoint returns `403` even when using cors proxy and manually passing session cookies. After much trying to break it down, I took the results of the API call and put it in a JSON file inside `/assets`.

* I played around with the different syntaxes for MobX, naturally in a production environment I would follow whatever standards my team follows.

* On the same note, I experimented with using React Context and custom hooks to manage global store access in the app. The goal was to simplify store usage by wrapping the app in a context provider and using hooks. However, I decided to revert to the simpler approach of directly importing stores, as the context-based solution wasn't needed for the scope of this project and I also wasn't sure if subscribing to this paradigm would be welcome. Once again, I would gladly adjust my approach to align with whatever conventions my team follows.


# React + TypeScript + Vite

To run this project:

### `npm run dev`


## Shoutout

[quicktype.io](https://quicktype.io/typescript)

[corsproxy.io](https://corsproxy.io/)

[this article](https://iconof.com/best-practices-for-mobx-with-react/)

[flowbite for some components](https://flowbite.com/)
