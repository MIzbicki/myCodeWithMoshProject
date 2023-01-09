import { MyPipe } from './myPipe.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AwardComponent } from './award/award.component';
import { MyTitleCaseComponent } from './my-title-case/my-title-case.component';
import { MyTitleCasePipe } from './my-title-case.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { TwitterLikeComponent } from './twitter-like/twitter-like.component';
import { NavNgSwitchComponent } from './nav-ng-switch/nav-ng-switch.component';
import { MyNgForComponent } from './my-ng-for/my-ng-for.component';
import { MyInputFormatDirective } from './my-input-format.directive';
import { MyDirectiveComponent } from './my-directive/my-directive.component';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPipe,
    AwardComponent,
    MyTitleCaseComponent,
    MyTitleCasePipe,
    BootstrapPanelComponent,
    TwitterLikeComponent,
    NavNgSwitchComponent,
    MyNgForComponent,
    MyInputFormatDirective,
    MyDirectiveComponent,
    ZippyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
