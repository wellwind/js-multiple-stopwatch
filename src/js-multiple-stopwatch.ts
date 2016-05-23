class TickTock {
    public TickTime: number;
    public TockTime: number;
}

class JsMultipleStopwatch {
    private static basicName = "";
    private static stopwatches: {
        [name: string]: TickTock
    } = {};

    private static getTime(): number {
        return new Date().getTime();
    }

    public static Tick(name: string = this.basicName) {
        this.stopwatches[name] = new TickTock();
        this.stopwatches[name].TickTime = new Date().getTime();
    }

    public static Tock(name: string = this.basicName) {
        this.stopwatches[name].TockTime = new Date().getTime();
    }

    public static ElapsedTime(name: string = this.basicName) {
        return this.stopwatches[name].TockTime - this.stopwatches[name].TickTime;
    }

    public static GetStopwatch(name: string = this.basicName) {
        return this.stopwatches[name];
    }
}

export = JsMultipleStopwatch;