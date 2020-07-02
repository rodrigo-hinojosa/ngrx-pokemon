import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileContainerComponent } from './components/profile-container/profile-container.component';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';

@NgModule({
    declarations: [
        ProfileContainerComponent,
        ProfileDetailComponent
    ],
    imports: [
        SharedModule,
        ProfileRoutingModule
    ]
})
export class ProfileModule { }
