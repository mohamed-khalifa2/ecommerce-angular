import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { CategoryComponent } from './pages/category/category.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "cat", component: CategoryComponent },

];
