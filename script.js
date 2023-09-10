// const timer=document.querySelector('.timer');
// timer.innerHTML=''
const date= new Date();
console.log(date)

const start=document.querySelector('.btns')
const reset=document.querySelector('.btnr')
const  stops=document.querySelector('.btnst')
let hh=+'00';
let mm=+'00';
let ss=+'00';
let running=false;
let timer;
let _hh=document.getElementById('hh');
let _mm=document.getElementById('mm');
let _ss=document.getElementById('ss');
let _sss=document.getElementById('sss');

let sss=0;

start.addEventListener('click',fstart);
reset.addEventListener('click', freset);
stops.addEventListener('click',fstop);

function fstart(){
    if(!running){
        running=true;
        timer =setInterval(()=>{
            sss+=1;
            if(sss==1000){
                sss=0;
                ss+=1;
            }
            if(ss==60){
                ss=0;
                mm+=1;
            }
            if(mm==60){
                mm=0;
                hh+=1;
            }
            if(hh==24){
                hh=0;
            }
            _ss.innerText=ss<10?`0${ss}`:ss;
            _mm.innerText=mm<10?`0${mm}`:mm;
            _hh.innerText=hh<10?`0${hh}`:hh;
            _sss.innerText=sss<10?`00${sss}`:sss<100?`0${sss}`:sss;
        },)
    }
}

function freset(){
    clearInterval(timer);
    running=false;
    _hh.innerText="00";
    _mm.innerText="00";
    _ss.innerText="00";
    _sss.innerText="000"
}

function fstop(){
    running=false;
    clearInterval(timer);
}