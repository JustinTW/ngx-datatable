import { Component } from '@angular/core';

@Component({
  selector: 'datatable-progress',
  template: `
    <div
      class="progress-linear"
      role="progressbar">
      <div class="container">
        <div class="bar"></div>
      </div>
    </div>
  `
})
export class ProgressBar {}