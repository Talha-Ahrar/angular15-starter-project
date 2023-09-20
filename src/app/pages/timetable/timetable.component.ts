import { Component } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent {
  courses = ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5', 'Course 6', 'Course 7', 'Course 8', 'Course 9', 'Course 10', 'Course 11', 'Course 12'];
  classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];

  displayedColumns = ['courseNumber', ...this.classes];

  getRandomTime(): string {
    // Generate random class timings for demonstration
    const hours = Math.floor(Math.random() * 12) + 1;
    const minutes = Math.floor(Math.random() * 60);
    const period = hours >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
  }
}
