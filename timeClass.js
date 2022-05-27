class Timer {
    constructor(durationInput, startBtn, pauseBtn, callBacks){
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        this.duration = 3;
        if(callBacks){
            this.onStart = callBacks.onStart;
            this.onTick = callBacks.onTick;
            this.onComplete = callBacks.onComplete;
        }
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
        this.durationInput.addEventListener('change', this.changeDuration);
    }
    start = ()=>{
        if(!this.status){
            this.onStart(this.duration);
            this.tick();
            this.status = true; //true means started
            this.intervalId = setInterval(this.tick, 10)
        }
    }
    pause = ()=>{
        clearInterval(this.intervalId);
        this.status = false;
    }
    tick = ()=>{
        if(this.timeRamining <= 0){
            this.pause();
            this.onComplete();
            this.status = false;
        }
        else{
            this.timeRamining = this.timeRamining - 0.01;
            this.onTick(this.timeRamining);
        }
    }
    changeDuration = ()=>{
        this.duration = this.timeRamining;
    }
    get timeRamining(){
        return this.durationInput.value;
    }
    set timeRamining(time){
        this.durationInput.value = time.toFixed(2);
    }
}