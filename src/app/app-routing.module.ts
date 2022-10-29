import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './common/about/about.component';
import { BambooComponent } from './common/bamboo/bamboo.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { KenduleafComponent } from './common/kenduleaf/kenduleaf.component';
import { PhotoGalleryComponent } from './common/photo-gallery/photo-gallery.component';
import { PlantationComponent } from './common/plantation/plantation.component';
import { TenderComponent } from './common/tender/tender.component';

const routes: Routes = [
  {
    path:'',
    component:BodyComponent
  },
  {
    path:'about',
    component:AboutComponent
  },

  {
    path:'applytender',
    component:TenderComponent
  },
  {
    path:'bamboo',
    component:BambooComponent
  },
  {
    path:'kenduleaf',
    component:KenduleafComponent
  },
  {
    path:'plantation',
    component:PlantationComponent
  },
  {
    path:'plantation',
    component:PlantationComponent
  },
  {
    path:'contactus',
    component:ContactUsComponent
  },
  {
    path:'photo',
    component:PhotoGalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
