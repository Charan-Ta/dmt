import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresRoutingModule } from '../../routing/app.routing';
import { SharedModule } from '../../modules/shared/shared.module';
import { StoresComponent } from '../../components/stores/stores.component';
import { StoreDetailsComponent } from '../../components/stores/store-details/store-details.component';
import { StoreOverviewComponent } from '../../components/stores/store-overview/store-overview.component';
import { StoreDeploymentsComponent } from '../../components/stores/store-deployments/store-deployments.component';
import { StoreFixturesComponent } from '../../components/stores/store-fixtures/store-fixtures.component';
import { StoreProgramDetailComponent } from '../../components/stores/store-program-detail/store-program-detail.component';
@NgModule({
  imports: [
    CommonModule,
    StoresRoutingModule,
    SharedModule
  ],
  declarations: [
    StoresComponent,
    StoreDetailsComponent,
    StoreOverviewComponent,
    StoreDeploymentsComponent,
    StoreFixturesComponent,
    StoreProgramDetailComponent
  ]
})
export class StoresModule { }
