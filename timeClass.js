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
        this.onStart(this.timeRamining);
        this.tick();
        this.intervalId = setInterval(this.tick, 10)
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
            this.timeRamining = this.timeRamining - 0.01;
            this.onTick(this.timeRamining);
        }
    }
    get timeRamining(){
        return this.durationInput.value;
    }
    set timeRamining(time){
        this.durationInput.value = time.toFixed(2);
    }
}