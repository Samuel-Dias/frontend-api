/*
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }
}
*/

export interface Aluno{
  id?: number               
  nome?: string 
  cpf?: string
  email?: string
  telefone?: string
  dataNascimento?: Date
}

export interface Curso{
  id?: number               
  nome?: string 
  cargaHoraria?: number
  valor?: number
}

export interface Turma{
  id?: number               
  cod?: string 
  curso?: Curso
  vagas?: number
  dataDeInicio?: Date
  modalidade?: number
  turno?: number
  matricula?: Matricula
}

export interface Matricula{
  id?: number               
  dataMatricula?: Date 
  prestacoesPagamento?: number
  turma_id?: number
}


