import { NgModule } from '@angular/core';
import { BatimentDetailComponent } from './batiment-detail/batiment-detail.component';
import { BatimentComponent } from './batiment.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';

@NgModule({
    declarations: [
        BatimentDetailComponent,
        BatimentComponent,
        ZoneDetailComponent
    ],
    imports: [BrowserModule, SharedModule],
    exports: [
        BatimentComponent
    ],
    providers: []
})
export class BatimentModule { }
