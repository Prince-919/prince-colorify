

export class Log{
    static primary(message : string){
        console.log(`%c ${message}`, 'color : blue');
        
    }

    static secondary(message : string){
        console.log(`%c ${message}`, 'color : grey');
    }
    static success(message: string){
        console.log(`%c ${message}`, 'color : green');
    }
    static danger(message: string){
        console.log(`%c ${message}`, 'color : red');
    }
 
    static warning(message: string){
        console.log(`%c ${message}`, 'color : red');
    }

    static info(message: string){
        console.log(`%c ${message}`, 'color : cyan');
    }
    static light(message: string){
        console.log(`%c ${message}`, 'color : white; background : black');
    }
    static muted(message: string){
        console.log(`%c ${message}`, 'color : lightgrey; background : white');
    }
    


}