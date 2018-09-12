import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from './../components/stores/stores.component';

const appRoutes: Routes = [
    {
        path: 'stores',
        component: StoresComponent
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

// const DashboardRoute: Routes = [
//     {
//         path: '',
//         component: HomeComponent
//     }
// ];

// export const DashboardRoutingModule: ModuleWithProviders = RouterModule.forChild(DashboardRoute);

