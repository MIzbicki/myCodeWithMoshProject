import { MyAppErrorHandler } from './my-errors-handler/app-error-handler';
import { MyFollowersService } from './services/my-followers.service';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { MyPipe } from './myPipes/myPipe.pipe';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AwardComponent } from './award/award.component';
import { MyTitleCaseComponent } from './my-title-case/my-title-case.component';
import { MyTitleCasePipe } from './myPipes/my-title-case.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { TwitterLikeComponent } from './twitter-like/twitter-like.component';
import { NavNgSwitchComponent } from './nav-ng-switch/nav-ng-switch.component';
import { MyNgForComponent } from './my-ng-for/my-ng-for.component';
import { MyInputFormatDirective } from './my-input-format.directive';
import { MyDirectiveComponent } from './my-directive/my-directive.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemyFormComponent } from './udemy-form/udemy-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostComponent } from './post/post.component';
import { MyFollowersComponent } from './my-followers/my-followers.component';


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
    SignupFormComponent,
    MyDirectiveComponent,
    ZippyComponent,
    ContactFormComponent,
    UdemyFormComponent,
    FormArrayComponent,
    FormBuilderComponent,
    ChangePasswordComponent,
    PostComponent,
    MyFollowersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService,
    MyFollowersService,
    {provide: ErrorHandler, useClass: MyAppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
