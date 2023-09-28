
const hrSeconds = 3600
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

class AIProcess{

constructor(name, ph, secondsprocess, estimatedruntime) {
    this.name = name;
    this.ph = ph;
    this.estimatedruntime = estimatedruntime;
    this.dayRatio = estimatedruntime/24;
    this.estimatedruntimePrice = 0.0;
    this.processPerEstimatedRuntime = 0.0;
    this.secondsprocess = secondsprocess;
    this.requestPrice = 0.0;
    this.totalRequestsPerHour = 0.0;
    this.totalRequestsPer5Dollar = 0.0;
    this.totalRequestsPer10Dollar = 0.0;
    this.totalRequestsPer20Dollar = 0.0;
    this.totalHourPer5Dollar = 0.0;
    this.totalHourPer10Dollar = 0.0;
    this.totalHourPer20Dollar = 0.0;
    this.price24Hours = 0.0;
    this.price1Month = 0.0;
    this.price1Year = 0.0;
    this.priceTimeHalf = 0.0;
    this.priceTimeQuarter = 0.0;
    this.processData();
}


processData (){
    this.priceseconds = this.ph/hrSeconds;
    this.requestPrice = this.priceseconds * this.secondsprocess;
    this.totalRequestsPerHour = hrSeconds / this.secondsprocess;
    this.estimatedruntimePrice = this.estimatedruntime * this.ph;
    this.processPerEstimatedRuntime = (this.estimatedruntime * hrSeconds) / this.secondsprocess;
    this.totalRequestsPer5Dollar = (5.0 / this.requestPrice);
    this.totalRequestsPer10Dollar = (10.0 / this.requestPrice);
    this.totalRequestsPer20Dollar = (20.0 / this.requestPrice);
    this.totalHourPer5Dollar = (5.0 / this.ph);
    this.totalHourPer10Dollar = (10.0 / this.ph);
    this.totalHourPer20Dollar = (20.0 / this.ph);
    this.price24Hours = (this.ph * this.estimatedruntime) ;
    this.price1Month = (this.price24Hours * 30);
    this.price1Year = (this.price1Month * 12);
    this.priceTimeHalf = (this.ph / 2);
    this.priceTimeQuarter = (this.ph / 4);
}

}

export default AIProcess;