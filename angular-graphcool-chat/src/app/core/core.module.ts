import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloConfigModule } from './../apollo-config.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    BrowserModule,
    ApolloConfigModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ]
})
export class CoreModule {
  constructor(
    // SkipSelf: Ignora Dependencias que estejam no mesmo nível hierarquico do Core Module
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if ( parentModule ) {
      throw new Error('Core Module is already loaded. Import it in the appModule only.');
    }
  }
}
