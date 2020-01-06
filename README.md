# Augmented reality print poster
This augmented reality print poster uses [A-Frame](https://aframe.io/) to create a web-based 3-D scene, the [three.js API](https://aframe.io/docs/1.0.0/introduction/developing-with-threejs.html) to animate elements, and [barcode markers](https://github.com/artoolkit/artoolkit5/blob/master/doc/patterns/Multi%20pattern%204x3%20(A4).pdf) from AR.js to map the scene to the poster. This approach avoids the user to download an app to experience the poster. All you need is a QR code that points to an A-Frame site.

## Development

`npm start` spins up an HTTPS server with browsersync. 

- HTTPS is important. Most browsers don't allow camera access over HTTP.

## Notes
- AR barcode markers need to have both a black and white border to work. 