# Augmented reality print poster
This augmented reality print poster uses [A-Frame](https://aframe.io/) to create a web-based 3-D scene, the [three.js API](https://aframe.io/docs/1.0.0/introduction/developing-with-threejs.html) to animate elements, and image tracking with [MindAR](https://hiukim.github.io/mind-ar-js-doc/quick-start/overview) to map the scene to the poster. This approach avoids the user to download an app to experience the poster. All you need is a QR code that points to an A-Frame site.

## Development

`npm start` spins up an HTTPS server with browsersync. 

- HTTPS is important. Most browsers don't allow camera access over HTTP.

## Poster

![](./images/future.jpg)

