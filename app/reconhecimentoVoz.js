const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";

document.body.addEventListener('click',startSpeechApi)
function startSpeechApi(){
    recognition.start();
};

// recognition.start();

recognition.addEventListener('result',captandoVoz);
function captandoVoz(event){
    var vozCaptada = event.results[0][0].transcript;
    vozCaptada = parseInt(vozCaptada);
    validacaoDados(vozCaptada);
}


 