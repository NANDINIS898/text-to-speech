const textarea= document.querySelector("textarea"),
speechbtn = document.querySelector("button");

let voices=[];
let voiceselect = document.querySelector("select");

function textTospeech(text){
    let utternance =new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utternance);
    speechSynthesis.onvoiceschanged =() =>{
        voices= window.speechSynthesis.getVoices();
        utternance.voice =voices[0];
    
        voices.forEach( (voice, i) => (voice.Select.option[i] = new Option(voice.name,i)));
        voiceselect.addEventListener("change", () => {
            utternance.voice= voices[voiceselect.value];
        
        });
    
    }
}




speechbtn.addEventListener("click", e=>{
    e.preventDefault();
    if(textarea.value !== ""){
        textTospeech(textarea.value);
    }
});