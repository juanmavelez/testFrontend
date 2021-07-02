import { Component, Input, OnInit } from '@angular/core';
import { IRadios } from '../models';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.sass'],
})
export class ChannelComponent implements OnInit {
  @Input() channel: IRadios;
  @Input() clickedChannel: string;

  constructor() {}

  ngOnInit(): void {}
}
