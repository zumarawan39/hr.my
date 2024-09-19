import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-mangement',
  templateUrl: './mangement.component.html',
  styleUrls: ['./mangement.component.css']
})
export class MangementComponent {
  employeeForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      nationality: ['', Validators.required],
      nationalID: ['', Validators.required],
      passport: [''],
      jobPosition: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      // Here you would handle the form submission logic, such as calling an API
      console.log('Form Submitted:', this.employeeForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }

  // Method for the Quick Entry button (optional)
  onQuickEntry(): void {
    // Example: Quick entry can autofill some fields or navigate to another page
    this.employeeForm.patchValue({
      id: '12345',
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
      birthDate: '1990-01-01',
      nationality: 'USA',
      nationalID: 'A123456789',
      jobPosition: 'Developer',
    });
  }
}
