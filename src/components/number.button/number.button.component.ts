import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'calc-num-button',
  templateUrl: '../abstract.button/abstract.button.component.html',
  styleUrls: ['../abstract.button/abstract.button.component.scss']
})
export class NumberButtonComponent {
  @Input() public value: number;
  @Input() public total: number;

  get text () : string {
    return String(this.value);
  }

  public onClick(): void {
    this.total += this.value;
    console.log(this.total);
  }

  public ngOnInit(): void {
    console.log(this.value);
  }
}
