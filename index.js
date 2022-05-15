class Timer {
    constructor(durationInput, startBtn, pauseBtn, callBacks){
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        if(callBacks){
            this.onStart = callBacks.onStart;
            this.onTick = callBacks.onTick;
            this.onComplete = callBacks.onComplete;
        }
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
        this.durationInput.addEventListener('click', this.changeDuration);
    }
    start = ()=>{
        this.onStart();
        this.tick();
        this.intervalId = setInterval(this.tick, 1000)
    }
    pause = ()=>{
        clearInterval(this.intervalId);
    }
    tick = ()=>{
        if(this.timeRamining <= 0){
            this.pause();
            this.onComplete();
        }
        else{
            this.onTick();
            this.timeRamining = this.timeRamining - 1;
        }
    }
    get timeRamining(){
        return this.durationInput.value;
    }
    set timeRamining(time){
        this.durationInput.value = time;
    }
}

const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

const timer = new Timer(durationInput, startBtn, pauseBtn,
    {
        onStart: ()=>{
            console.log("timer has started");
        },
        onTick: ()=>{
            console.log("time ticked");
        },
        onComplete: ()=>{
            console.log("timer has completed");
        }
    });