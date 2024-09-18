const btn=document.querySelector("#btn")
const content=document.querySelector("#content")
let voice=document.querySelector('#voice')

function speak(text){
    const text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)

}
function wishMe(){
    let day=new Date()
  let hours=  day.getHours()
  if(hours>=0 && hours<12){
    speak("Good morning sir")

  }
  else if(hours>=12 && hours<15){
    speak("Good afternoon sir")
  }
  else{
    speak("Good evening sir")
  }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechrecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recongnition=new speechrecognition()
recongnition.onresult=(event)=>{
   let currentindex= event.resultIndex
  let transcript= event.results[currentindex][0].transcript
  content.innerText=transcript
// console.log(event);
takecommand(transcript.toLowerCase())

}
btn.addEventListener("click",()=>{

    recongnition.start()
    btn.style.display="none"
    voice.style.display='block' 
})
 function takecommand(message){
      btn.style.display="flex"
      voice.style.display='none' 
    if(message.includes("hello")||message.includes("Hey")){
       speak("hello sir what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("I'M virtual assistant created by fahad iqbal sir")
    }
    else if(message.includes("how are you")){
        speak("I'M good , what about you")
    }
    else if(message.includes("open youtube")){
        speak("open youtube")
        window.open('https://www.youtube.com',"_blank")
    }
    else if(message.includes("open google")){
        speak("open google")
        window.open('https://www.google.com',"_blank")
    }
    else if(message.includes("open facebook")){
        speak("open facebook")
        window.open('https://www.facebook.com',"_blank")

    }
    else if(message.includes("open instagarm")){
        speak("open instagram")
        window.open('http://www.instagram.com/',"_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    
    else{
        let finaltext="this is what i found on internet ragarding"+message.replace("shipra",""||message.replace("shifra",""))
        speak(finaltext)
        window.open(`https://www.bing.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
 }