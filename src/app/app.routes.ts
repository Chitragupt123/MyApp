import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent,
        pathMatch:'full'
    },
   
   
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'home',
                component:HomeComponent
            },
            {
                path:'login',
                component:LoginComponent
            },
        ]
    }
        ]
    
