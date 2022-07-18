import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { ConfirmDialogService } from '../../servicos/confirm-dialog.service';
import { ControllerService } from '../../servicos/controller.service';
import { Curso } from '../../servicos/model.service';

@Component({
  selector: 'app-forms-curso',
  templateUrl: './forms-curso.component.html',
  styleUrls: ['./forms-curso.component.scss']
})
export class FormsCursoComponent implements OnInit {

  formularioCurso!: FormGroup;
  curso: Curso ={};
  nomeCurso!: string;
  tempoDuracao!: number;
  preco!: number;

  constructor(private formBuilder: FormBuilder, private controllerService: ControllerService, private confirmDialogService: ConfirmDialogService, private confirmationService: ConfirmationService, private messageService: MessageService) { 

  }

  cadastrar(): void{

    if(this.formularioCurso.valid){
      
      this.confirmationService.confirm({
        message: 'Tem certeza de que deseja prosseguir?',
        //header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            //severity:'info' - aviso na cor roxa
        this.curso.nome = this.nomeCurso.toUpperCase();
        this.curso.cargaHoraria = this.tempoDuracao;
        this.curso.valor = this.preco;
        
        this.controllerService.createCurso(this.curso).subscribe(() => {
          //this.controllerService.mostrarMensagem("operação executada")
            this.controllerService.listarCurso().subscribe(console.log) 
        })

        this.formularioCurso.reset();
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

  ngOnInit(): void {

    this.formularioCurso = this.formBuilder.group({
      nomeCurso: ['', [Validators.required, Validators.maxLength(45)]],
      tempoDuracao: ['', [Validators.required, Validators.maxLength(11)]],
      preco: ['', [Validators.required, Validators.maxLength(11)]]
    });
    
  }

}
