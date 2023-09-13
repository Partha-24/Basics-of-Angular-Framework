import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-error',
  templateUrl: './user-error.component.html',
  styleUrls: ['./user-error.component.css']
})
export class UserErrorComponent {
  @Input() Error_Field: string;
  @Input() Error_Message: string;
  @Input() Hint: string;
  @Output() closeError = new EventEmitter<void>();

  onClose() {
    // Emit the closeError event when the "Close" button is clicked
    this.closeError.emit();
  }
}
