import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { L10nTranslationModule, L10nIntlModule } from 'angular-l10n';

import { InitConfig } from './init-config';
import { AppStorage, l10nConfig, HttpTranslationLoader } from './l10n-config';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function initApp(initConfig: InitConfig) {
  return () => initConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HomeComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    L10nTranslationModule.forRoot(l10nConfig, {
      storage: AppStorage,
      translationLoader: HttpTranslationLoader,
    }),
    L10nIntlModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  providers: [
    InitConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [InitConfig],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
