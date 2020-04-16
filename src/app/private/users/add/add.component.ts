import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form = new FormGroup ({
    name: new FormControl(),
    surname: new FormControl(),
    id: new FormControl(),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
