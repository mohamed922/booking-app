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
        ]  ,
    exports: [ MatCardModule ,
         MatBadgeModule ,
          MatButtonModule,
          MatIconModule,
          MatToolbarModule ,
          MatSidenavModule,
          MatListModule,
          MatTabsModule,
        ],
    providers: [],
})
export class MaterialModule {}