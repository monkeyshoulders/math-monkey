import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subtraction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.scss']
})
export class SubtractionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
