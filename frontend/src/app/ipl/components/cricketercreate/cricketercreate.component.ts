import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cricketer } from '../../types/Cricketer';

@Component({
  selector: 'app-cricketercreate',
  templateUrl: './cricketercreate.component.html',
  styleUrls: ['./cricketercreate.component.scss']
})
export class CricketerCreateComponent implements OnInit {
  cricketerForm!: FormGroup;
  cricketer: Cricketer | null = null;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cricketerForm = this.formBuilder.group({
      cricketerId: [null, Validators.required],
      teamId: [null, Validators.required],
      cricketerName: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(18)]],
      nationality: ['', Validators.required],
      experience: [null, Validators.required],
      role: ['', Validators.required],
      totalRuns: [null, Validators.min(0)],
      totalWickets: [null, Validators.min(0)],
    });
  }

  onSubmit(): void {
    if (this.cricketerForm.valid) {
      this.cricketer = this.cricketerForm.value;
      this.successMessage = 'Cricketer created successfully!';
      console.log(this.cricketer);
      this.resetForm();
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
      this.successMessage = null;
    }
  }

  resetForm(): void {
    this.cricketerForm.reset();
  }
}
