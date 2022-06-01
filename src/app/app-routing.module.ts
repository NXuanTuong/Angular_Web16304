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
    path: 'user', 
    component: UserComponent, 
    children: [ 
      // {
      // path: 'user', 
      // component: UserComponent,
      // },
      { 
        path: 'add', 
        component: UserFormComponent 
      },
      { 
        path: 'edit', 
        component: UserFormComponent 
      }, 
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
