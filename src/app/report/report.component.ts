import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportService } from '../services/report/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public form = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl()
  });

  constructor(private fb: FormBuilder, private reportService: ReportService) { }

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(): void {
    this.form = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });
  }

  public downloadFile(): void {
    if (this.form.valid) {
      console.log(this.form?.get('startDate')?.value, this.form?.get('endDate')?.value);
    }
  }
}
