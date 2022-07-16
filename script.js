console.log("Welcome to Music")

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let songs = [
    {songName:"Khuda Jaane", filePath:"1.mp3", coverPath:"cover1.jpeg", timeStamp:"05:14"},
    {songName:"Kun Faya Kun", filePath:"2.mp3", coverPath:"cover2.jpeg", timeStamp:"06:21"},
    {songName:"Bin Tere", filePath:"3.mp3", coverPath:"cover3.jpeg", timeStamp:"02:03"},
    {songName:"Baarishen", filePath:"4.mp3", coverPath:"cover4.jpeg", timeStamp:"03:28"},
    {songName:"Kuch to Hai", filePath:"5.mp3", coverPath:"cover5.jpeg", timeStamp:"04:06"},
    {songName:"Ishq Wala Love", filePath:"6.mp3", coverPath:"cover6.jpeg", timeStamp:"03:57"},
    {songName:"Kabhi Kabhi Aditi", filePath:"7.mp3", coverPath:"cover7.jpeg", timeStamp:"03:30"},
    {songName:"Tum Mile", filePath:"8.mp3", coverPath:"cover8.jpeg", timeStamp:"05:44"},
    {songName:"Tu Hi Hai", filePath:"9.mp3", coverPath:"cover9.jpeg", timeStamp:"02:42"},
    {songName:"Ilahi", filePath:"10.mp3", coverPath:"cover10.jpeg", timeStamp:"03:24"},
]
songItem.forEach((element, i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    element.getElementsByClassName("timeStamp")[0].innerText = songs[i].timeStamp;
})
// audioElement.play();

//handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        audioElement.classList.remove("fa-circle-play");
        audioElement.classList.add("fa-circle-pause");
    }
    else if(audioElement.played || audioElement.currentTime<=0){
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
        audioElement.classList.remove("fa-circle-pause");
        audioElement.classList.play("fa-circle-play");
        
    }
})
//listen To Events
audioElement.addEventListener('timeupdate', ()=>{
    
    //update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressBar.value=progress;
})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})
const makeAllPlays= ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        // makeAllPlays();
        if(audioElement.paused || audioElement.currentTime<=0){
            // audioElement.play();
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            songIndex = parseInt(e.target.id);
            audioElement.src = `${songIndex+1}.mp3`;
            masterSongName.innerText= songs[songIndex].songName;
            audioElement.currentTime=0
            audioElement.play();
        }
        else if(audioElement.played || audioElement.currentTime<=0){
            audioElement.pause();
            e.target.classList.remove("fa-circle-pause");
            e.target.classList.add("fa-circle-play");
            songIndex = parseInt(e.target.id);
            audioElement.src = `${songIndex+1}.mp3`;
            masterSongName.innerText= songs[songIndex].songName;
            audioElement.currentTime=0
        
        }

        // e.target.classList.remove("fa-circle-play");
        // e.target.classList.add("fa-circle-pause");
        // songIndex = parseInt(e.target.id);
        // audioElement.src = `${songIndex+1}.mp3`;
        // masterSongName.innerText= songs[songIndex].songName;
        // audioElement.currentTime=0
        // audioElement.play();
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=09){
        songIndex = 0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0
    audioElement.play();
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0
    audioElement.play();

})