/**
 * La palabra reservada Lapiz es la clase padre de la plantilla
*/
class Lapiz{
    color
    tamano
    #material
    #mina
    /**
     * * El contructor: Establece por medio de parámetros la creacion a nuevos atributos,llamados normalmente por pre-fijo this
     * 
     * @param {color} *Asigna un color determinado a la clase lápiz
     * @param {tamano} *Asigna un tamaño determinado a la clase lápiz 
     * @param {material} *Determina un material PRIVADO especifico para la clase lápiz   
     * @param {mina}  *Determina una mina PRIVADA especifico para la clase lápiz  
     */

    constructor({color = "Amarillo",tamano="9cm",material ="Madera",mina ="Grafito"}){
        this.color = color;
        this.tamano = tamano;
        this.material = material;
        this.mina = mina;
    }
}
let lapiz1 = new Lapiz({});
let lapiz2 = new Lapiz({material:"Metal"})


console.log(lapiz1);
console.log(lapiz2);