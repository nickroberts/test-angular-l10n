import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { L10nResolver } from 'angular-l10n';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'page', component: PageComponent },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
    resolve: { l10n: L10nResolver },
    data: {
      l10nProviders: [
        {
          name: 'lazy',
          asset: './assets/i18n/lazy',
        },
      ],
    },
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
