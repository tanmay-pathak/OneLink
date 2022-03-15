
# OneLink

A lightweight DIY alternative to [LinkTree](https://linktr.ee) or [Many.Link](https://many.link). This project is a Next.JS implementation of [LittleLink](https://github.com/sethcottle/littlelink) by [Seth Cottle](https://github.com/sethcottle).

## Screenshots

![Dark Mode](/images/dark.png)
![Light Mode](/images/light.png)

## Demo

[Link](https://one-link-rust.vercel.app/)

## Features

- Light/Dark mode options.
- More than 20 buttons styles.
- Links are opened in a new tab.
- Loads quickly.
- No bloat.

## Documentation

- Add your links in `/pages/index.js`.
- Remove unwanted links from `/pages/index.js`.
- Choose Dark or Light mode by keeping `skeleton-dark.css` or `skeleton-light.css` in `/pages/_app.js`.
- Enter your Google Measurement ID in `.env.local`.

## Additions to the original project

- Added favicons.
- Added a Dockerfile.
- Implemented in Next.JS.
- Added Google Analytics Support

## Deployment

To deploy this project on the host machine, run:

```bash
  npm install
  npm run dev
```

To deploy this project with Docker, run:

```bash
  docker build . -t onelink
  docker run -p 3000:3000 onelink
```

To deploy for free with Vercel, click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftanmay-pathak%2FOneLink)
