import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-feedback',
  standalone: true,
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class feedbackComponent {
  submitted = false;
  feedbackForm: FormGroup;

  // ✅ Inject FormBuilder here
  constructor(private fb: FormBuilder) {
    // ✅ initialize form inside constructor (no error now)
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(40)]],
      comments: ['', [Validators.required, Validators.maxLength(350)]],
    });
  }

  onSubmit() {
    if (this.feedbackForm.invalid) 
      return this.submitted = true;
    console.log(this.feedbackForm.value);

    // Reset form
    this.feedbackForm.reset();
    this.feedbackForm.markAsPristine();
    this.feedbackForm.markAsUntouched();
  }
}