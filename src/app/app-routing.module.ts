import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import the LoginPageModule (assuming it's named correctly)
import { LoginPageModule } from './login/login.module';

const routes: Routes = [
  {
    path: '', // This is the default path, will be matched for root URL (localhost:8100)
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  // Add other routes for your app here...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }