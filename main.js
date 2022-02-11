function startClassification()
{
    navigator.mediaDevices,getUserMedia({audio : true});
    classfier.soundClassifier('https://teachablemachine.withgoogle.com/models/OVk9S4udE/model.json', modelReady) ;

}
function modelReady(){
    classfier.classify(gotResult);
    
}