# Standard Notes Documentation

## Creating a new documentation file

1. If possible, name the new documentation file using the desired URL path for that file. The default `id` is the name of the file before the `.md`, so naming the documentation files this way allows linking between docs with path names (e.g., `./self-hosting/getting-started.md`).
2. Copy the contents of `docs/template` into your new documentation file. The template contains standard keywords and a link to the standard meta image.
3. In VSCode, right-click the word `Template` and click "Change all occurrences".
4. Finish writing the new documentation. 
5. Add the `id` to `sidebars.js`.

When possible, use path names when linking between docs (see #1 above). This improves the editing experience because we can easily switch between docs in VSCode by pressing `Ctrl/Cmd` and clicking the links. Docusaurus will automatically remove the `.md`. 

## Development

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
