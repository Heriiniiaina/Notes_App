export class Validators{
    static min(value:string,min:number){
        if(value.length < min)
            return `Veuillez tapez au moins ${min} caractère(s)`
    }
    static max(value:string,max:number){
        if(value.length > max)
        return `Veuillez tapez au plus ${max} caractère(s)`
    }
}