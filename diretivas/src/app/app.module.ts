import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivasIfComponent } from './diretivas-if/diretivas-if.component';
import { DiretivasSwitchComponent } from './diretivas-switch/diretivas-switch.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { FundoAmareloDirective } from './directives/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './directives/highlight-mouse.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { NgIfDirective } from './directives/ng-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasIfComponent,
    DiretivasSwitchComponent,
    NgClassComponent,
    OperadorElvisComponent,
    NgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
