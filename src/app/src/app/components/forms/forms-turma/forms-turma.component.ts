import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../../servicos/controller.service';
import { Curso, Turma } from '../../servicos/model.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmDialogService } from '../../servicos/confirm-dialog.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-forms-turma',
  templateUrl: './forms-turma.component.html',
  styleUrls: ['./forms-turma.component.scss']
})

export class FormsTurmaComponent implements OnInit {

  formularioTurma!: FormGroup;
  turno!: number;
  turnoOptions!: any[];
  modalidade!: number;
  modalidadeOptions!: any[];
  cursoOptions: Curso[] = []
  curso!: Curso;
  dataSource = this.controllerService.listarCurso();
  displayedColumns: string[] = ['nome'];
  validador: boolean = false;
  quantidadeVagas!: number;
  turma: Turma ={}
  data!: Date;
  day!: number;
  month!: number;
  year!: number;

  constructor(private formBuilder: FormBuilder, private controllerService: ControllerService, private confirmDialogService: ConfirmDialogService, private confirmationService: ConfirmationService, private messageService: MessageService) {  

    this.turnoOptions = [
        {name: 'Manhã', value: 0},
        {name: 'Tarde', value: 1},
        {name: 'Noite', value: 2}
    ];

    this.modalidadeOptions = [
      {name: 'Presencial', value: 0},
      {name: 'EAD', value: 1}
  ];

}

  bot1():void{
    if (this.modalidade == 0) {
      this.validador = true;
      this.turno = 0;
    }
    if (this.modalidade == 1) {
      this.validador = false;
    }
  }

  bot2(): void{

    if (this.formularioTurma.valid){

      this.confirmationService.confirm({
        message: 'Tem certeza de que deseja prosseguir?',
        //header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            //severity:'info' - aviso na cor roxa
        this.data = new Date();
        this.turma = {
                "curso": {
                    "id": this.curso.id
        }
        };
        this.turma.vagas = this.quantidadeVagas;
        this.turma.dataDeInicio = this.data;
        this.turma.modalidade = this.modalidade;
        //this.turma.cod = "teste";
        this.turma.turno = this.turno;
        this.day = this.data.getDate();
        this.month = this.data.getMonth()
        this.year = this.data.getFullYear();
        this.turma.dataDeInicio = new Date(this.year, this.month, this.day);
        
        this.controllerService.createTurma(this.turma).subscribe(() => {
          //this.controllerService.mostrarMensagem("operação executada")
            //this.controllerService.listarTurma().subscribe(console.log) 
        })
        this.formularioTurma.reset();
        this.validador = false;
        this.messageService.add({severity:'success', detail:'Cadastro realizado com sucesso!'});
        },
        reject: (type: any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', detail:'Ação cancelada!'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                break;
            }
        }
    });
  }
  }

  ngOnInit() {

    this.controllerService.listarCurso().subscribe(
      data => {
        this.cursoOptions = data;
      });

      this.formularioTurma = this.formBuilder.group({
        curso: ['', [Validators.required]],
        quantidadeVagas: ['', [Validators.required]],
        modalidade: ['', [Validators.required]],
        turno: ['', []]
      });
    
}

}


