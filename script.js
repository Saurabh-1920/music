  //
  console.log("welcome to Saurabh Prasad Music Production");
// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('https://pagal.com.in/assets/images/products/Tum_Hi_Ho_-_Aashiqui_2_128_Kbps.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar  = document.getElementById('myProgressBar');
let gif  = document.getElementById('gif');




let songs = [
    {songName:"Tum hi ho", filePath:"https://pagal.com.in/assets/images/products/Tum_Hi_Ho_-_Aashiqui_2_128_Kbps.mp3"},
    {songName:"Bhula Dena", filePath:"https://pagal.com.in/assets/images/products/Bhula_Dena_-_Aashiqui_2_128_Kbps.mp3"},
    {songName:"Sawan Aaya Hai", filePath:"https://pagal.com.in/assets/images/products/Sawan_Aaya_Hai_-_Creature_3D_128_Kbps.mp3"},
    {songName:"Izazat", filePath:"https://pagal.com.in/assets/images/products/Ijazat_-_One_Night_Stand_128_Kbps.mp3"},
    {songName:"Bewajah", filePath:"https://pagal.com.in/assets/images/products/Bewajah_-_Sanam_Teri_Kasam_128_Kbps.mp3"},
    {songName:"Haal-E-Dil", filePath:"https://pagal.com.in/assets/images/products/Haal_E_-_Dil_(Female_Vocals)_-_Sanam_Teri_Kasam_128_Kbps.mp3"},
    {songName:"Piya Aaye Na", filePath:"https://pagal.com.in/assets/images/products/Piya_Aaye_Na_-_Aashiqui_2_128_Kbps.mp3"},
    {songName:"Uska Hi Bana", filePath:"https://pagal.com.in/assets/images/products/Uska_Hi_Banana_-_1920_-_Evil_Returns_128_Kbps.mp3"},
    {songName:"Jeene Bhi De", filePath:"https://pagal.com.in/assets/images/products/Jeene_Bhi_De_-_Yasser_Desai_128_Kbps.mp3"},
    {songName:"Bairi Piya", filePath:"https://pagal.com.in/assets/images/products/Bairi_Piya_-_Devdas_128_Kbps.mp3"},
]
        // Handle play/pause button
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
// listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // Update the seekBar
    myProgressBar.value = (audioElement.currentTime / audioElement.duration) * 100;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;

})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        })

}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click' , (e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);

        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = '${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex > 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = '${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = '${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})