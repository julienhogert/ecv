//% color="#AA278D"
namespace ECV {
    //%
    export class counter { 
         millis:number;
         interval:number;
         interval_set:boolean;
         constructor() {
            this.millis = control.millis();
            this.interval_set=false;
         }
        
    //% block="$this(counter) compte $interval secs. et redémarre"
    //% handlerStatement
    public onEventAsStatement(interval: number, handler: () => void) {
        if(this.interval_set==false){
            this.interval=interval;
            this.interval_set=true;
        }
        if(this.millis + this.interval*1000 < control.millis()){
            this.millis = control.millis();
            this.interval_set=false;
            handler();
        }
    }

    }

    //% block="Créer compteur"
    //% blockSetVariable=Compteur
    export function createCounters(): counter {
        return new counter();
    }
}