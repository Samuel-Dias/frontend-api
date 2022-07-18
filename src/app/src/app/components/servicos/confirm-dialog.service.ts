import { Injectable } from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  position!: string;

  validador!: boolean;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }
/*
  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            //Actual logic to perform a confirmation
        }
    });
}
*/
valorConfirm(): boolean{
    return this.validador;
}
  
confirm1() {
    
    this.confirmationService.confirm({
        message: 'Tem certeza de que deseja prosseguir?',
        //header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            //severity:'info' - aviso na cor roxa
            this.validador = true;
            this.messageService.add({severity:'success', detail:'Cadastro realizado com sucesso!'});
        },
        reject: (type: any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.validador = false;
                    this.messageService.add({severity:'error', detail:'Ação cancelada!'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                break;
            }
        }
    });
}

confirm2() {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
        },
        reject: (type: any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                break;
            }
        }
    });
}

confirmPosition(position: string) {
    this.position = position;

    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
        },
        reject: (type: any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                break;
            }
        },
        key: "positionDialog"
    });
}

}
