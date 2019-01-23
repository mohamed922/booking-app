import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
    declarations: [],
    imports: [ CommonModule ,
         MatCardModule ,
          MatBadgeModule ,
           MatButtonModule,
           MatToolbarModule,
           MatIconModule,
           MatSidenavModule,
           MatListModule,
           MatTabsModule,
           MatFormFieldModule,
           MatSelectModule,
           MatInputModule,
           MatCheckboxModule,
        ]  ,
    exports: [ MatCardModule ,
         MatBadgeModule ,
          MatButtonModule,
          MatIconModule,
          MatToolbarModule ,
          MatSidenavModule,
          MatListModule,
          MatTabsModule,
          MatFormFieldModule,
          MatSelectModule,
          MatInputModule,
          MatCheckboxModule,
        ],
    providers: [],
})
export class MaterialModule {}