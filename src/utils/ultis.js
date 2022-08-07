export function customDate(miliseconds, formatString = '#DD#-#MM#-#YYYY#', is) {
    if(!miliseconds) {
        return ''
    }
    if(is){// nếu true thì miliseconds là múi giờ +0 , nếu múi giờ + 0 thì thay đổi miliseconds
        miliseconds -=- new Date(miliseconds).getTimezoneOffset()*60000;
    }
    var dateFm = new Date(miliseconds);
    var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhhh,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
    YY = ((YYYY=dateFm.getFullYear())+"").slice(-2);
    M = dateFm.getMonth()+1
    MM = M<10?('0'+M):M;
    MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substring(0,3);
    DD = (D=dateFm.getDate())<10 ? ('0'+D) : D;
    DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dateFm.getDay()]).substring(0,3);
    th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';
    formatString = formatString.replace("#YYYY#",YYYY).replace("#YY#",YY).replace("#MMMM#",MMMM).replace("#MMM#",MMM).replace("#MM#",MM).replace("#M#",M).replace("#DDDD#",DDDD).replace("#DDD#",DDD).replace("#DD#",DD).replace("#D#",D).replace("#th#",th);
    h=(hhh=dateFm.getHours());
    if (h==0) h=24;
    if (h>12) h-=12;
    hh = h<10?('0'+h):h;
    hhhh = hhh<10?('0'+hhh):hhh;
    AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
    mm=(m=dateFm.getMinutes())<10?('0'+m):m;
    ss=(s=dateFm.getSeconds())<10?('0'+s):s;
    return formatString.replace("#hhhh#",hhhh).replace("#hhh#",hhh).replace("#hh#",hh).replace("#h#",h).replace("#mm#",mm).replace("#m#",m).replace("#ss#",ss).replace("#s#",s).replace("#ampm#",ampm).replace("#AMPM#",AMPM);
}