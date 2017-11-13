import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RomsComponent } from './components/roms/roms.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { CppComponent } from './components/cpp/cpp.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'roms', component: RomsComponent },
  { path: 'cpp', component: CppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RomsComponent,
    ProjectsComponent,
    AboutComponent,
    CppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    Title
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
