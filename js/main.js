let hour = document.querySelector('#hour');
let minunte = document.querySelector('#min');
let second = document.querySelector('#sec');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minunte.style.transform = `rotateZ(${mm}deg)`;
    second.style.transform = `rotateZ(${ss}deg)`;

    //Digital Clock

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? 'PM' : 'AM';

    //add zero before single digit

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
});
