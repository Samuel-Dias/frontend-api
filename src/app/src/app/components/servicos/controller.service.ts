import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from  '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Aluno, Curso, Matricula, Turma } from '../servicos/model.service';

@Injectable({
  providedIn: 'root'
})

export class ControllerService {

  alunoUrl = 'http://localhost:8080/alunos';
  cursoUrl = 'http://localhost:8080/cursos';
  turmaUrl = 'http://localhost:8080/turmas';
  matriculaUrl = 'http://localhost:8080/matriculas';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mostrarMensagem(msg: string): void{
    this.snackBar.open(msg,'x',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
//--------------------------------------------------------------
  createAluno(aluno: Aluno): Observable<Aluno>{
    return this.http.post<Aluno>(this.alunoUrl,aluno)
  }

  listarAluno(){
    return this.http.get<Aluno[]>(this.alunoUrl)
  }

  listarPorIdAluno(id: string | null): Observable<Aluno>{
    const url = `${this.alunoUrl}/${id}`
    return this.http.get<Aluno>(url)
  }

  atualizarAluno(aluno: Aluno): Observable<Aluno>{
    const url = `${this.alunoUrl}/${aluno.id}`
    return this.http.put<Aluno>(url,aluno)
  }

  excluirAluno(id: string | null): Observable<Aluno>{
    const url = `${this.alunoUrl}/${id}`
    return this.http.delete<Aluno>(url)
  }
//----------------------------------------------------------------
  createCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(this.cursoUrl,curso)
  }

  listarCurso(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.cursoUrl);
  }

  listarCurso2(){
    //return this.http.get(this.cursoUrl)
    
  }

  listarPorIdCurso(id: string | null): Observable<Curso>{
    const url = `${this.cursoUrl}/${id}`
    return this.http.get<Curso>(url)
  }

  atualizarCurso(curso: Curso): Observable<Curso>{
    const url = `${this.cursoUrl}/${curso.id}`
    return this.http.put<Curso>(url,curso)
  }

  excluirCurso(id: string | null): Observable<Curso>{
    const url = `${this.cursoUrl}/${id}`
    return this.http.delete<Curso>(url)
  }
//-----------------------------------------------------------------
  createTurma(turma: Turma): Observable<Turma>{
    return this.http.post<Turma>(this.turmaUrl,turma)
  }

  listarTurma2(){
    //return this.http.get<Turma[]>(this.turmaUrl)
  }

  listarTurma(): Observable<Turma[]>{
    return this.http.get<Turma[]>(this.turmaUrl);
  }

  listarPorIdTurma(id: string | null): Observable<Turma>{
    const url = `${this.turmaUrl}/${id}`
    return this.http.get<Turma>(url)
  }

  atualizarTurma(turma: Turma): Observable<Turma>{
    const url = `${this.turmaUrl}/${turma.id}`
    return this.http.put<Turma>(url,turma)
  }

  excluirTurma(id: string | null): Observable<Turma>{
    const url = `${this.turmaUrl}/${id}`
    return this.http.delete<Turma>(url)
  }
//-------------------------------------------------------------------




listarMatricula(): Observable<Matricula[]>{
  return this.http.get<Matricula[]>(this.matriculaUrl);
}

listarPorIdMatricula(id: string | null): Observable<Matricula>{
  const url = `${this.matriculaUrl}/${id}`
  return this.http.get<Matricula>(url)
}


//-------------------------------------------------------------------
}

