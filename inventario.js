class Producto{
    constructor(codigo,nombre,cantidad, costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad =cantidad;
        this.costo = costo;
        this.next = null;   
    }
    informacion(){
        return `Codigo: ${this.codigo}, Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Costo: ${this.costo} `;
    }
}
class Inventario{
    constructor(){
        this.primero = null;      
    }
    agregar(producto){
        if (this.primero == null) {
            this.primero = producto;       
        }else{
            let temp = this.primero;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = producto;
        }

    }
    eliminar(codigo){
           if (this.primero != null) {
                if (this.primero.codigo === codigo) {
                    this.primero = this.primero.next;
                    return true;                    
                }else{
                    let temp = this.primero;
                    while (temp.next != null) {
                        if (temp.next.codigo === codigo) {
                            let eliminadoNext = temp.next.next
                            temp.next = eliminadoNext;

                        }else{
                            temp = temp.next;
                        }
                    }
                }
           }
     }
    buscar(codigo){
        if (this.primero != null) {
            if (this.primero.codigo === codigo) {
                return this.primero;
            }
        }else{
            let temp = this.primero;
            while (temp.next != null) {
                if (temp.next.codigo === codigo) {
                    return temp.next;
                }else{
                    temp = temp.next;
                }
            }
        }
       
      
    }
<<<<<<< HEAD
    insertar(posicion,nuevo){
        if (posicion == 1) {
            if (this.primero == null) {
                this.primero = nuevo;
                return true;
            }
            else {
                nuevo.next = this.primero;
                this.primero = nuevo;
                return true;
            }
        }
        else {
            let temp = this.primero
            let contador = 1;

            while (temp.next != null) {
                if ((contador + 1) == posicion) {
                    nuevo.next = temp.next;
                    temp.next = nuevo;
                    return true;
                }
                else {
                    temp = temp.next;
                    contador += 1;
                }
            }

            return false;
        }

    }
    listado(){
        if (this.primero != null) {
            return listarRecursivo(this.primero);
        }
        else{
            return 'Productos no existentes';
        }

        function listarRecursivo(producto) {
            if (producto.next == null) {
                return `${producto.info()}`;
            }
            else {
                return `${producto.info()}+ ","+${listarRec(producto.next)}`;       
            }
        
    }
}
    listadoInverso(){
        if (this.primero != null) {
            return listarInversoRecursivo(this.primero);
        }
        return "Productos no existentes";

        function listarInversoRecursivo(producto) {
            if (producto.next == null) {
                return `${producto.info()}`;
            }
            else {
                return `${listarInversoRecursivo(producto.next)}+ '.'+${producto.info()}`;
            }
        }

}
//  let p1 = new Producto(123,"Coca cola",10,20);
//  let p2 = new Producto(1234,"Mantecadas",1,24);
//  let p3 = new Producto(12345,"Agua de 1L",40,17);
//  let p4 = new Producto(123456,"Galletas",10,22);
//  let p5 = new Producto(1234567,"Sabritas",30,21);

//  let inventario = new Inventario();

// inventario.agregar(p1);
// inventario.agregar(p2);
// inventario.agregar(p3);
// inventario.agregar(p4);
// inventario.agregar(p5);
// p5 = new Producto(12345678,"pps",30,21);
// inventario.agregar(p5);

// console.log(inventario.listado());

//console.log(inventario.eliminar(123));
// // inventario.listado();
// //  console.log(inventario.listadoInverso());
// //  console.log(inventario.buscar(123));


