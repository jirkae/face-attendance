// import nodejs bindings to native tensorflow,
// not required, but will speed up things drastically (python required)
require('@tensorflow/tfjs-node');

const faceapi = require('face-api.js');
//import * as faceapi from 'face-api.js';

//import image from './images/group.jpg';
const image = require( './images/group.jpg');


const results = faceapi
  .detectAllFaces(image)
  .withFaceLandmarks()
  .withFaceDescriptors()
console.log(results)
/*
  const faceMatcher = new faceapi.FaceMatcher(results)



results.forEach(fd => {
  const bestMatch = faceMatcher.findBestMatch(fd.descriptor)
  console.log(bestMatch.toString())
})*/