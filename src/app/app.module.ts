import { MyPipe } from './myPipe.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AwardComponent } from './award/award.component';
import { MyTitleCaseComponent } from './my-title-case/my-title-case.component';
import { MyTitleCasePipe } from './my-title-case.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPipe,
    AwardComponent,
    MyTitleCaseComponent,
    MyTitleCasePipe,
    BootstrapPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
