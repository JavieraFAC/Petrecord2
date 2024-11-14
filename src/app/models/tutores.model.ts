export interface Mascota {
    id?: string;
    nombre: string;
    especie: string;
    fechaNacimiento: Date | string ;
  }


export interface Tutor{
    id: string;
    nombre:string,
    apellido:string,
    direccion:string,
    telefono:string,
    email:string,
    mascotas?: Mascota[];

}