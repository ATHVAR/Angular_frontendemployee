import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  formData = {
    name: '',
    designation: '',
    location: '',
    salary: ''
  };

  constructor() { }

  ngOnInit(): void {
    
  }

  submitForm(){
    alert('Form submitted');
  }
}
