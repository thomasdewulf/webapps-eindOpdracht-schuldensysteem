
import { AuthGuardService } from './../user/auth-guard.service';
import {NgModule} from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
path: 'debt',
canActivate: [ AuthGuardService],
loadChildren: '../debt/debt.module#DebtModule'
    },
    {path: '', redirectTo: 'debt/list', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {}

