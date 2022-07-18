import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Aluno, Curso, Matricula, Turma} from '../servicos/model.service';
import { ControllerService } from '../servicos/controller.service';
import { idText } from 'typescript';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './forms.html',
  styleUrls: ['./forms.scss']
})

export class FormsComponent implements OnInit {

  formulario1!: FormGroup;
  formulario2!: FormGroup;
  aluno: Aluno = { };
  date3!: Date;
  items: MenuItem[] = [];
  gfg: number = 1;
  nome!: string;
  cpf!: string;
  email!: string;
  telefone!: string;
  data!: string;
  activeIndex: number = 0;
//--------------------------------------------------
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  tresFormGroup!: FormGroup;
  quatroFormGroup!: FormGroup;
  cursoOptions: Curso[] = [];
  turmaOptions: Turma[] = [];
  turnoOptions: any[] = [];
  turno!: any;
  curso!: Curso;
  turma!: Turma;
  filtroTurma!: any;
  filtroTurma2!: any;
  filtroTurma3!: any;
  nomeModalidade!: string;
  nomeTurnoModalidade!: string;
  modalidade!: number;
  modalidadeOptions!: any[];
  turmaSelecionada!: Turma | any;
  matricula!: Matricula;
  validador!: boolean;
//----------------------------------------------------

teste: Turma[] = [];
teste3!: any[]
teste4!: any;
teste5!: any[];
listaFormatada1!: any;
listaFormatada2!: any;
  
  constructor(private formBuilder: FormBuilder, private controllerService: ControllerService) { 

    this.modalidadeOptions = [
      {name: 'Presencial', value: 0},
      {name: 'EAD', value: 1}
    ];

    this.turnoOptions = [
      {name: 'Manhã', value: 0},
      {name: 'Tarde', value: 1},
      {name: 'Noite', value: 2}
    ];

  } 

  voltar() {
    this.gfg -= 1;
  }

filtro1(){

    this.turmaSelecionada = null;
    
    if(this.modalidade == 0){

      this.nomeModalidade = 'PRESENCIAL';
      this.filtroTurma2 = this.filtroTurma.filter((item: { modalidade: string; }) => item.modalidade == this.nomeModalidade).filter((item: { curso: Curso }) => item.curso.nome == this.curso.nome); 
      this.validador = true;

      this.listaFormatada1 = this.filtroTurma2.map((item: { cod: any; matricula: any; vagas: any; id: any;}) => {
        return {
          id: item.id,
          cod: item.cod,
          vagasRestantes: item.vagas - item.matricula.length,
          vagas: item.vagas
        };
    });

    }

    if(this.modalidade == 1){

      this.nomeModalidade = 'EAD',
      this.filtroTurma2 = this.filtroTurma.filter((item: { modalidade: string; }) => item.modalidade == this.nomeModalidade).filter((item: { curso: Curso }) => item.curso.nome == this.curso.nome); 
      this.validador = false;

      this.listaFormatada1 = this.filtroTurma2.map((item: { cod: any; matricula: any; vagas: any; id: any;}) => {
        return {
          id: item.id,
          cod: item.cod,
          vagasRestantes: item.vagas - item.matricula.length,
          vagas: item.vagas
        };
    });
      //this.teste3 = this.teste.map(item => item.matricula);
    }

}

filtro2() {

  if(this.turno == 0){

    this.nomeTurnoModalidade = 'MANHA';
    this.filtroTurma3 = this.filtroTurma.filter((item: { modalidade: string; }) => item.modalidade == this.nomeModalidade).filter((item: { turno: string; }) => item.turno == this.nomeTurnoModalidade); 
    this.validador = true;

    this.listaFormatada2 = this.filtroTurma3.map((item: { cod: any; matricula: any; vagas: any; id: any; modalidade: string; turno: string;}) => {
      return {
        id: item.id,
        cod: item.cod,
        vagasRestantes: item.vagas - item.matricula.length,
        vagas: item.vagas
      };
  });

  }

  if(this.turno == 1){

    this.nomeTurnoModalidade = 'TARDE',
    this.filtroTurma3 = this.filtroTurma.filter((item: { modalidade: string; }) => item.modalidade == this.nomeModalidade).filter((item: { turno: string }) => item.turno == this.nomeTurnoModalidade); 
    this.validador = false;

    this.listaFormatada2 = this.filtroTurma3.map((item: { cod: any; matricula: any; vagas: any; id: any; modalidade: string; turno: string;}) => {
      return {
        id: item.id,
        cod: item.cod,
        vagasRestantes: item.vagas - item.matricula.length,
        vagas: item.vagas
      };
  });

  }

  if(this.turno == 2){

    this.nomeTurnoModalidade = 'NOITE',
    this.filtroTurma3 = this.filtroTurma.filter((item: { modalidade: string; }) => item.modalidade == this.nomeModalidade).filter((item: { turno: string }) => item.turno == this.nomeTurnoModalidade); 
    this.validador = false;

    this.listaFormatada2 = this.filtroTurma3.map((item: { cod: any; matricula: any; vagas: any; id: any; modalidade: string; turno: string;}) => {
      return {
        id: item.id,
        cod: item.cod,
        vagasRestantes: item.vagas - item.matricula.length,
        vagas: item.vagas
      };
  });

  }
    
}

  next1() {

    if (this.nome != null && this.cpf != null && this.email != null && this.data != null){

      this.aluno.nome = this.nome;
      this.aluno.cpf = this.cpf;
      this.aluno.email = this.email;
      this.aluno.telefone = this.telefone;
      const [day, month, year] = this.data.split('/');
      this.date3 = new Date(+year, +month - 1, +day);
      this.aluno.dataNascimento = this.date3;

      this.gfg += 1;
      /*
      this.controllerService.createAluno(this.aluno).subscribe(() => {
        this.controllerService.mostrarMensagem("operação executada")
        this.controllerService.listarAluno().subscribe(console.log) 
      })
      */
    }
  }

  next2() {

    if(this.turmaSelecionada != null){
      
      this.matricula = {
        turma_id: this.turmaSelecionada.id
      }

      this.gfg += 1;
  
    }
    if(this.turmaSelecionada == null){

      document.getElementById("msgError")!.innerText = "Turma é obrigatória"

    }
  }

    ngOnInit() { 

      this.controllerService.listarCurso().subscribe(
        data => {
          this.cursoOptions = data;
      });

      this.controllerService.listarTurma().subscribe(
        data => {
          this.turmaOptions = data;
          //const novoArray = this.turmaOptions.map(item => item.cod);
          const modalidadePresencialTurnoManha = this.turmaOptions.filter(item => item.modalidade?.toString).filter(item => item.turno?.toString) //.map(item => item.cod);
          this.filtroTurma = modalidadePresencialTurnoManha.map(item => {
            return {
                id: item.id,
                cod: item.cod,
                curso: item.curso,
                vagas: item.vagas,
                matricula: item.matricula,
                modalidade: `${item.modalidade}`,
                turno: `${item.turno}`
            };
        });
      });
      
      this.items = [
        {label: 'Dados Pessoais'},
        {label: 'Curso'},
        {label: 'Pagamento'},
        {label: 'Confirmar'}
    ];

    this.formulario1 = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(45)]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['',[Validators.required, Validators.minLength(10)]],
      data: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.formulario2 = this.formBuilder.group({
      curso: ['', [Validators.required]],
      modalidade: ['', [Validators.required]]
    });

    this.firstFormGroup = this.formBuilder.group({
      curso: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      modalidade: ['', Validators.required]
    });
    
    this.tresFormGroup = this.formBuilder.group({
      turma: ['', Validators.required]
    });

    this.quatroFormGroup = this.formBuilder.group({
      turno: ['', Validators.required]
    });

}

}



