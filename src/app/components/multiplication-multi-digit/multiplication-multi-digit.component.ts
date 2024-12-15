import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multiplication-multi-digit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multiplication-multi-digit.component.html',
  styleUrls: ['./multiplication-multi-digit.component.scss']
})
export class MultiplicationMultiDigitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
