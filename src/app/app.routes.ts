import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CategoryComponent } from './pages/category/category.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: "", pathMatch: "full", component: HomeComponent },
    { path: "login", canActivate: [authGuard], loadComponent: () => import('../app/pages/auth/login/login.component').then(c => c.LoginComponent) },
    { path: "signup", canActivate: [authGuard], loadComponent: () => import('../app/pages/auth/signup/signup.component').then(c => c.SignupComponent) },

    { path: 'categories/:sub', component: CategoryComponent },
    { path: "test", component: ProductDetailsComponent },

];
