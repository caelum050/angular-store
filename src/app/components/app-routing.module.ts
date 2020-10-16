import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'


const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'shop', component: ShoppingCartComponent},
    { path: 'cart', component: CartComponent},
    { path: '**', component: PageNotFoundComponent}
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}