import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { WhyLoveComponent } from './why-love/why-love.component';
import { FooterComponent } from './footer/footer.component';
import { SubmitComponent } from './submit/submit.component';
import { PlansComponent } from './plans/plans.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HowWorksComponent,
    WhyLoveComponent,
    FooterComponent,
    SubmitComponent,
    PlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
