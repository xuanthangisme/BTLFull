import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent} from './section/section.component';
import { ShareModule} from '../share/share.module';
import { HeaderComponent} from '../share/header/header.component';
import { FooterComponent} from '../share/footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { ClassifyComponent } from './classify/classify.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: SectionComponent,
      },
      {
        path: 'classify/:id',
        component: ClassifyComponent,
      },
      {
        path: 'detail/:idpro',
        component: DetailComponent,
      },

    ],
  },
];
@NgModule({
  declarations: [
    HeaderComponent,
    SectionComponent,
    MainComponent,
    FooterComponent,
    DetailComponent,
    ClassifyComponent,
  ],
  imports: [ShareModule, CommonModule, RouterModule.forChild(mainRoutes)],
})
export class MainModule {}
