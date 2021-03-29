import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './shared/components';

const routes: Routes = [
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
    data: {
      title: 'Components',
    },
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule),
    data: {
      title: 'Directives',
    },
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule),
    data: {
      title: 'Services',
    },
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule),
    data: {
      title: 'Pipes',
    },
  },
  {
    path: 'other',
    loadChildren: () => import('./other/other.module').then(m => m.OtherModule),
    data: {
      title: 'Other',
    },
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'components',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
