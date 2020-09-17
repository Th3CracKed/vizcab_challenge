import { NgModule } from '@angular/core';
import { BatimentComponent } from './batiment.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        BatimentComponent
    ],
    imports: [BrowserModule],
    exports: [
        BatimentComponent
    ],
    providers: []
})
export class BatimentModule { }
