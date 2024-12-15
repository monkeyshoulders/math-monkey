import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multiplication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss']
})
export class MultiplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
