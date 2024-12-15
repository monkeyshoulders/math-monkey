import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addition-multi-digit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addition-multi-digit.component.html',
  styleUrls: ['./addition-multi-digit.component.scss']
})
export class AdditionMultiDigitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
