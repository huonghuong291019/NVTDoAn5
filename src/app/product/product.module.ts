import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: 'list/:id',
    component: ListComponent,
  },
  {
    path: 'search/:tk',
    component: SearchComponent,
  },
];  
@NgModule({
  declarations: [DetailComponent,ListComponent, SearchComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductModule { }