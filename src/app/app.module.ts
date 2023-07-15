import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SobreComponent } from './sobre/sobre.component';
import { VideosComponent } from './videos/videos.component';
import { FotosComponent } from './fotos/fotos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreComponent,
    VideosComponent,
    FotosComponent,
    ContatosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
