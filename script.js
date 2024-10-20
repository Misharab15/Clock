let hh = document.getElementById("hr");
let mm = document.getElementById("min");
let ss = document.getElementById("sec");
let ampm = document.getElementById("ampm");
let format = document.getElementById("btn");



const displayTime = () => {
    
    let currDate = new Date();

    let hour = currDate.getHours();  

    hour < 12 ? ampm.innerHTML = "AM" : ampm.innerHTML = "PM";

    if(format.innerText == "12 Hour Clock"){
        if(hour == 0){
            hour = 12;
        }
        if(hour > 12){
            hour = hour - 12;
            ampm.innerHTML = "PM";
        }
    }
    hour = (hour < 10) ? "0" + hour : hour; 
    
    hh.innerText = hour;
    mm.innerText = (currDate.getMinutes() < 10 ? "0" : "") + currDate.getMinutes();
    ss.innerText = (currDate.getSeconds() < 10 ? "0" : "") + currDate.getSeconds(); 
    
    setTimeout(displayTime, 1000);
};

const toggleClockFormat = () => {
    if(format.innerHTML == "12 Hour Clock"){
        format.innerHTML = "24 Hour Clock";
    } else {
        format.innerHTML = "12 Hour Clock";
    }
    displayTime();
}
