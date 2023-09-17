var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event)

    var Content = event.results[0][0].transcript;
    console.log(Content)

    document.getElementById("textbox").innerHTML = Content;

    if (Content == "Selfie.") {
        while (count < 5) {
            
            speak(count)
            count++

        }
    }

}

camera = document.getElementById("camera")

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
})

count = 1
function speak(count) {
    var synth = window.speechSynthesis

    speak_data = "Taking your selfie in 5 seconds"

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis)

    Webcam.attach(camera)

    setTimeout(function () {
        take_snapshot(count)
        save(count)
      
    }, 5000)

}


function save(count) {
    link = document.getElementById("link");
    img = document.getElementById("selfie_img" + count).src;
    link.href = img
    link.click()
}

function take_snapshot(count) {
    Webcam.snap(function (data) {
        document.getElementById("result" + count).innerHTML = "<img id='selfie_img" + count + "' src='" + data + "'>"
    })
}