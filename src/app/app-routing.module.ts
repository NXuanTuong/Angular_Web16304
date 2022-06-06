import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminProductFormComponent } from './pages/admin/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product-list/admin-product-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product-detail/admin-product-detail.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';

const routes: Routes = [
  { 
    path: '', 
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  },
  {
    path: 'admin',
    component : AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard], // Kiểm tra việc login trước khi vào admin
    children: [
      {
        path: 'products',
        children: [
          {path: '', component: AdminProductListComponent},
          {path: 'add', component: AdminProductFormComponent},
          {path: 'edit/:id', component: AdminProductFormComponent},
          {path: ':id', component: AdminProductDetailComponent}
        ]
      },
      {
        path: 'users',
        component: UserComponent
      }
    ]
  },
  { 
    path: 'auth', 
    children: [ 
      { 
        path: 'login', 
        component: LoginComponent 
      } 
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard]
})
export class AppRoutingModule { }
