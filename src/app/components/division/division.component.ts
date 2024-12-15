import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-division',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
