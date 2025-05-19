import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "test", component: ProductDetailsComponent },

];
