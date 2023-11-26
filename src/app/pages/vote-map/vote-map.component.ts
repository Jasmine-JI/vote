import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from 'src/app/components/layout/footer/footer.component';

@Component({
  selector: 'app-vote-map',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './vote-map.component.html',
  styleUrls: ['./vote-map.component.scss']
})
export class VoteMapComponent {

}
