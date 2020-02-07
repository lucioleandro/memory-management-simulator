import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenciadorMemoriaComponent } from './gerenciador/gerenciador.component';


const routes: Routes = [
  {
    path: 'mapadebits',
    component: GerenciadorMemoriaComponent,
        data: {
            title: 'dashboard'
        }
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'mapadebits'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
