function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassfier('https://teachablemachine.withgoogle.com/models/3QGzN7TdL/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}