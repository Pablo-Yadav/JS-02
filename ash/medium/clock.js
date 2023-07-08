let date=new Date();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
let ampm='Am';
let twelveHour=hours;
if(hours>=12)
{
    ampm='Pm';
    twelveHour=hours%12;
    if(hours%12===0)twelveHour=12;
}

let counter=0;
promise=new Promise((resolve,reject)=>{
    setInterval(()=>{
     counter++;
     callback();
    },1000);
});

let callback=function (){
    if(counter+seconds===60)
    {
      counter=0;
      seconds=0;
      if(minutes===59)
      {
        minutes=0;
        if(hours===23)
        hours=0;
        else
        hours+=1;
        if(ampm==='Pm' && twelveHour===11)
        {
            ampm='Am';
            twelveHour=0;
        }
        else if(ampm==='Am' && twelveHour===11)
        {
            ampm='Pm';
            twelveHour=12;
        }
        else
        twelveHour+=1;
      }
        else
        minutes+=1;
    }
    let twelveHourString=(twelveHour<=9? ("0"+ twelveHour) : twelveHour);
    let hourString=(hours<=9? ("0"+ hours): hours);
    let minuteStr=(minutes<=9 ? ("0" + minutes):minutes);
    let secondsStr=((seconds+counter)<=9? ("0" + (seconds+counter)):(seconds+counter))
    console.log("Twelve Hour Format:    "+ twelveHourString+ ":" + minuteStr+":"+secondsStr +"  "+ampm );
    console.log("24 Hour Format:        "+ hourString+ ":"+ minuteStr+ ":"+secondsStr );
    console.log("\n");
}