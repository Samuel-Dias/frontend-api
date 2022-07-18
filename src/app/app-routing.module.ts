import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidenavComponent } from './src/app/components/sidenav/sidenav.component';
import { TabsTelaPrincipalComponent } from './src/app/components/tabs-tela-principal/tabs-tela-principal.component';
import { FormsComponent } from './src/app/components/forms/forms';
import { FormsCursoComponent } from './src/app/components/forms/forms-curso/forms-curso.component';
import { FormsTurmaComponent } from './src/app/components/forms/forms-turma/forms-turma.component';

const routes: Routes = [
/*
      {path: "", component: SidenavComponent},
      {path: "sistema/cadastro", component: TabsTelaPrincipalComponent},
      {path: "sistema/cadastro/alunos", component: FormAlunoComponent, outlet: 'content'}
     // { path: '**', component: PageNotFoundComponent, outlet: 'formAlunos' },
*/
{path: "", component: SidenavComponent},
/*
      {path: "sistema/cadastro", component: TabsTelaPrincipalComponent, children: [
            {path: "alunos", component: FormsComponent},
            {path: "cursos", component: FormsCursoComponent},
            {path: "turmas", component: FormsTurmaComponent}
      ]}
      */
      {path: "sistema/cadastro", component: TabsTelaPrincipalComponent},
      {path: "sistema/cadastro/turmas", component: FormsTurmaComponent},
      {path: "sistema/cadastro/cursos", component: FormsCursoComponent},
      {path: "sistema/cadastro/alunos", component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


