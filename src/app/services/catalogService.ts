import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class CatalogService {
    constructor(public http: HttpClient){
    }
//METODOS
getEmpleados(){
    return this.http.get<EmpleadosDto[]>(`http://localhost:8080/empleado`);
}
saveEmp(data: EmpleadosDto){
    return this.http.post<EmpleadosDto[]>(`http://localhost:8080/empleado`, data,);
}
borraEmp(id: number){
    return this.http.delete<EmpleadosDto[]>(`http://localhost:8080/empleado/${id}`,);
}
}

export interface EmpleadosDto{
    id: number,
    brm: number,
    nombre: string,
    puesto: string,
    foto: string,
}