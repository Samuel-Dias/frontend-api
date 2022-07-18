import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './src/app/components/sidenav/sidenav.component';
import { ListaSidenavComponent } from './src/app/components/lista-sidenav/lista-sidenav.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsTelaPrincipalComponent } from './src/app/components/tabs-tela-principal/tabs-tela-principal.component';
import { PerfilSidenavComponent } from './src/app/components/perfil-sidenav/perfil-sidenav.component';
import { AvatarModule } from 'primeng/avatar';
import { FormsComponent } from './src/app/components/forms/forms';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { FormsCursoComponent } from './src/app/components/forms/forms-curso/forms-curso.component';
import { FormsTurmaComponent } from './src/app/components/forms/forms-turma/forms-turma.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { TreeSelectModule } from 'primeng/treeselect';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api'; 
import { ToastModule } from 'primeng/toast';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TableModule } from 'primeng/table';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ListaSidenavComponent,
    TabsTelaPrincipalComponent,
    PerfilSidenavComponent,
    FormsComponent,
    FormsCursoComponent,
    FormsTurmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    TabMenuModule,
    PanelModule,
    TabViewModule,
    AccordionModule,
    MenubarModule,
    ButtonModule,
    PanelMenuModule,
    MatSidenavModule,
    MatTabsModule,
    AvatarModule,
    StepsModule,
    InputTextModule,
    FormsModule,
    CardModule,
    InputMaskModule,
    CalendarModule,
    //ReactiveFormsModule,
    SelectButtonModule,
    InputNumberModule,
    RadioButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    CascadeSelectModule,
    TreeSelectModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    DropdownModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule,
    MatStepperModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    TableModule,
    VirtualScrollerModule 
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
