import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RadioServereService } from './core/services/radioServere.service';
import { IResponseRadioServer } from './models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  radioChanels$: Observable<IResponseRadioServer>;
  clickedChannel: string;
  constructor(private radioServereService: RadioServereService) {
    this.clickedChannel = '';
  }

  ngOnInit(): void {
    this.radioChanels$ = this.radioServereService.getAllRadios();
  }

  clickedItem(name: string): void {
    if (name === this.clickedChannel) {
      this.clickedChannel = '';
    } else {
      this.clickedChannel = name;
    }
  }
}
