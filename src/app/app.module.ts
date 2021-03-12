import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    NgclassComponent,
    NgcontentComponent,
    NgstyleComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
