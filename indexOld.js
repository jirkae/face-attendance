const fr = require('face-recognition')

const jirka = [fr.loadImage('./images/faces/jirka.jpg')]
const martin = [fr.loadImage('./images/faces/martin.jpg')]
const pepa = [fr.loadImage('./images/faces/pepa.jpg')]
const image = fr.loadImage('./images/group.jpg')

const detector = fr.FaceDetector()
const faceRectangles = detector.detectFaces(image)

const recognizer = fr.FaceRecognizer()
recognizer.addFaces(jirka, 'jirka', 15)
recognizer.addFaces(martin, 'martin', 15)
recognizer.addFaces(pepa, 'pepa', 15)

faceRectangles.forEach((item) => {
    //console.log({bottom: item.rect.bottom, left: item.rect.left, right: item.rect.right, top: item.rect.top});

    const predictions = recognizer.predictBest(item)
    console.log(predictions)
})