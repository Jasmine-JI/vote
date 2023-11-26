import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: '台灣歷年總統 都幾？',
    loadComponent: () =>
      import('./pages/portal/portal.component').then(
        (m) => m.PortalComponent,
      ),
  },
  {
    path: '',
    title: '台灣歷年總統 | 全台資訊',
    children: [
      {
        path: 'vote-map',
        loadComponent: () =>
          import('./pages/vote-map/vote-map.component').then(
            (m) => m.VoteMapComponent,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
