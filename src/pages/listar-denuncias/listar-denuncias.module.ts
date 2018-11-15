import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarDenunciasPage } from './listar-denuncias';

@NgModule({
  declarations: [
    ListarDenunciasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarDenunciasPage),
  ],
})
export class ListarDenunciasPageModule {}
