
### Scope
- User should login on the main website
- Extension should figure out that user is logged in
- Extension should show the user is logged in

### Issue
Currently even if a user is logged in on the main website, the extension is not able to figure that out / shows logged out state.

### Steps taken to setup
Loaded the extension (unpacked) in Chrome and ran:
```
curl  -X PATCH https://api.clerk.com/v1/instance \
      -H "Authorization: Bearer sk_test_KjPfAtbdalVPpzEI8z2KYWeMX48ICvualI02Ut9f0B" \
      -H "Content-type: application/json" \
      -d '{"allowed_origins": ["chrome-extension://hginakcpjpddcfaahaejbdklhaedbiap"]}'
```
### Run locally
`npm i`: Installs deps
`npm run build`: Creates dist-dev folder to load in Chrome
`npm run watch`: dist-dev with watcher

### ENV
 System:
    OS: macOS 14.5
    CPU: (8) arm64 Apple M1
    Memory: 225.14 MB / 16.00 GB
    Shell: 5.9 - /bin/zsh
  Binaries:
    Node: 22.5.1 - ~/.nvm/versions/node/v22.5.1/bin/node
    npm: 10.8.2 - ~/.nvm/versions/node/v22.5.1/bin/npm
    pnpm: 9.3.0 - ~/Library/pnpm/pnpm
  Browsers:
    Brave Browser: 129.1.70.123
    Chrome: 129.0.6668.91
    Safari: 17.5
  npmPackages:
    @clerk/chrome-extension: ^1.3.16 => 1.3.16 
    @clerk/clerk-js: ^5.26.2 => 5.26.2 
    @clerk/clerk-react: ^5.11.0 => 5.11.0 
    @types/chrome: ^0.0.277 => 0.0.277 
    @types/node: ^22.7.5 => 22.7.5 
    @types/react: ^18.3.11 => 18.3.11 
    @types/react-dom: ^18.3.0 => 18.3.0 
    autoprefixer: ^10.4.20 => 10.4.20 
    copy-webpack-plugin: ^12.0.2 => 12.0.2 
    css-loader: ^7.1.2 => 7.1.2 
    dotenv: ^16.4.5 => 16.4.5 
    dotenv-webpack: ^8.1.0 => 8.1.0 
    html-webpack-plugin: ^5.6.0 => 5.6.0 
    mini-css-extract-plugin: ^2.9.1 => 2.9.1 
    path: ^0.12.7 => 0.12.7 
    postcss: ^8.4.47 => 8.4.47 
    postcss-loader: ^8.1.1 => 8.1.1 
    react: ^18.3.1 => 18.3.1 
    react-dom: ^18.3.1 => 18.3.1 
    style-loader: ^4.0.0 => 4.0.0 
    tailwindcss: ^3.4.13 => 3.4.13 
    ts-loader: ^9.5.1 => 9.5.1 
    typescript: ^5.6.3 => 5.6.3 
    webpack: ^5.95.0 => 5.95.0 
    webpack-cli: ^5.1.4 => 5.1.4 
    webpack-dev-server: ^5.1.0 => 5.1.0 
