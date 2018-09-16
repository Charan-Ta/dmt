import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from './../components/stores/stores.component';
import { StoreDetailsComponent } from './../components/stores/store-details/store-details.component';

const appRoutes: Routes = [
    {
        path: 'stores',
        loadChildren: 'app/modules/stores/stores.module#StoresModule'
    },
    {
        path: '',
        redirectTo: 'stores',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'welcome',
        pathMatch: 'full'
    }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);

const StoresRoute: Routes = [
    {
        path: '',
        component: StoresComponent
    },
    {
        path: 'store-details',
        component: StoreDetailsComponent
    }
];

export const StoresRoutingModule: ModuleWithProviders = RouterModule.forChild(StoresRoute);

