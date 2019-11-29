import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ArrayUniqueItemsPipe } from './pipes/array-unique-items/array-unique-items.pipe';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    ArrayUniqueItemsPipe
  ],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule, QuicklinkModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    ArrayUniqueItemsPipe
  ]
})
export class SharedModule {}
