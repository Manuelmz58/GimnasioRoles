//Recepcion model
export interface dataGym {
  idGimnasio: number;
  nombreGym: string;
}

//Admin model
export class gimnasio {
  idGimnasio!: string;
  nombreGym!: string;
  telefono!: string;
  tipo!: string;
  Franquicia_idFranquicia!: string;
  horarios!: string;
  casilleros!: string;
  estacionamiento!: string;
  energia!: string;
  bicicletero!: string;
  codigoPostal!: string;
  estado!: string;
  ciudad!: string;
  colonia!: string;
  calle!: string;
  numExt!: string;
  numInt!: string;
}
