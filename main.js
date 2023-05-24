/**
 * La palabra reservada Lapiz es la clase padre de la plantilla
*/
class Lapiz{
    /**
     * Atributos que luego se utilizaran  en el constructor
     */
    color
    tamano
    #material
    #mina
    /**
     * * El contructor: Establece por medio de atributos la creacion a nuevos atributos,llamados normalmente por pre-fijo this
     * 
     * @param {color} *Asigna un color determinado a la clase lápiz
     * @param {tamano} *Asigna un tamaño determinado a la clase lápiz 
     * @param {material} *Determina un material PRIVADO especifico para la clase lápiz   
     * @param {mina}  *Determina una mina PRIVADA especifico para la clase lápiz  
     */

    constructor({color = "Amarillo",tamano="9cm",material ="Madera",mina ="Grafito"}){
        this.color = color;
        this.tamano = tamano;
        this.#material = material;
        this.#mina = mina;
    }
    /**
     *  Getters: Llaman al atributo
     *  Setters: Modifica al atributo
    */
    get Mina (){
        return this.#mina
    }
    set Mina (p1){
        this.#mina = p1;
    }
    /**
     * 
     * @param {p1}*se refiere al material del lápiz 
     * @returns *devuelve un mensaje diciendo que el material ha sido actualizado
     */
    static afilar (p1){
        return `la mina de ${p1} ha sido afilada`
    }
}
// let lapiz1 = new Lapiz({});
// let lapiz2 = new Lapiz({material:"Metal"})

// lapiz2.Mina = "papel"

// console.log(lapiz1);
// console.log(lapiz2);
// console.log(Lapiz.afilar(lapiz2.Mina));

/**
 * ? Se crea una subclase apartir de la clase padre lápiz
 */
class boligrafo extends Lapiz{
    /**
     * @param {param0}*Modifica exclusivamente el atributo mina y lo cambia a Metalica 
     */
    constructor({mina="Metalica"}){
        super({mina})
    }
    /**
     * 
     * @param {p1} *Recibe el atributo modificado en el constructor   
     * @returns * Devuelve un mensaje modificado con el atributo mina 
     */
    static afilar(p1){
        return `La mina es de ${p1} por lo tanto no se puede afilar`
    }
}
/**
 * Se crea una instancia de la subclase boligrafo 
 */
let boli = new boligrafo ({});
console.log(boli.Mina);

/**
 * Se Modifica por medio del setter a Mina
 */
boli.Mina = "Aluminio";
console.log(boli.Mina);

/**
 * Se visualiza por medio de getter la mina de la subclase boligrafo
 */
console.log(boligrafo.afilar(boli.Mina));
console.log(boli);
