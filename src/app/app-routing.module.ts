import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account/account-list/account-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list-account' },
  { path: 'list-account', component: AccountListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
