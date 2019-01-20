import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [],
    imports: [ CommonModule , MatCardModule , MatBadgeModule , MatButtonModule]  ,
    exports: [ MatCardModule , MatBadgeModule , MatButtonModule],
    providers: [],
})
export class MaterialModule {}