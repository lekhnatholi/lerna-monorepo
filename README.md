# Lerna MERN MonoRepo Starting Template

### Lerna is monorepo tool for JavaScript/TypeScript [Learn More](https://lerna.js.org/)

## Available Scripts

1. Install lerna dev dependency
   > ~ npx i -D lerna
2. Initialize the lerna app
   > ~ npx lerna init -y

It will generate the packages directory, node_modules, package.json, lerna.json files.

3. create react app inside packages with `create-react-app` cli

   > ~ npx create-react-app client

4. Make node api inside packages directory with `server-api`
   > ~ npm init -y
   > ~ npx install express body-parser

You have separate node_modules for both client and server app. Monorepo manages the dependency for all the available apps.

5. Clear the node_modules of both the apps.

   > ~ npx lerna clean -y

6. Move all the dependency of apps residing in the packages to root modules

   > ~ npx lerna bootstrap --hoist

7. Add these scripts on root packages.json

   ```
   "scripts": {
   "start": "lerna run start",
   "test": "lerna run test",
   "new-version": "lerna version --convential-commits --yes",
   "diff": "react-scripts eject"
   }
   ```

8. Run apps with
   > ~npm run start

It will start all available applications

9. You can also provide `scope` flags and list the apps inside it.

```
"scripts": {
   "start": "lerna run start --scope={client,server}",
   "test": "lerna run test --scope={client}",
   "new-version": "lerna version --convential-commits --yes",
   "diff": "react-scripts eject"
 }
```
