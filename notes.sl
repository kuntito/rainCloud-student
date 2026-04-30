+   to create the project, (this assumes vite is installed)
    `npm create vite@4.1.0 .`

    `.` uses the cwd as the project root

    * framework, select `React`
    * variant, select `TypeScript`

+   install dependencies
    `npm i`

+   before run server,
    set the port in `vite.config.ts`, add:

    `
    export default defineConfig({
        ...,
        server: {
            port: 5176
        },
    })
    `

    start server with:
    `npm run dev`

+   chakra ui:
    `npm i @chakra-ui/react@2.10.3`

+   zustand state management
    `npm i zustand`


+   to deploy to vercel,

    first run a local build:
    `npm run build`, make sure there are no errors

    then, use this to deploy:
    `vercel`

    NB:
    this works for me, 
    but i assume it's because i've set up vercel in the past.

    if vercel not installed, a starting point is:
    `npm i -g vercel`