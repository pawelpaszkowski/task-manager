import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output()
  close = new EventEmitter<boolean>();

  onClose() {
    this.close.emit(false);
  }
}
