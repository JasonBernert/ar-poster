# Augmented reality print poster
This augmented reality print poster uses [A-Frame](https://aframe.io/) to create a web-based 3-D scene, the [three.js API](https://aframe.io/docs/1.0.0/introduction/developing-with-threejs.html) to animate elements, and image tracking with [MindAR](https://hiukim.github.io/mind-ar-js-doc/quick-start/overview) to map the scene to the poster. This approach avoids the user to download an app to experience the poster. All you need is a QR code that points to an A-Frame site.

## Development

1. `npm start` spins up an HTTPS server with browsersync. HTTPS is important. Most browsers don't allow camera access over HTTP.
2. `control` + `option` + `i` while running the server opens [inspector](https://github.com/aframevr/aframe-inspector).
3. [aframe-watcher](https://github.com/supermedium/aframe-watcher) runs in the background to save any changes from inspector.
4. Test locally on your phone by going to the external address provided in the console and pointing your phone to the poster.

## Poster

![Lean into the future](./images/future.jpg)

