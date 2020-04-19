import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TicketsService } from './../tickets.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  form = new FormGroup({
    user: new FormControl(null, [Validators.required]),
    client: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(),
  });

  constructor(
    private ticketsService: TicketsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  save() {
    this.ticketsService.add(this.form.value).subscribe((response) => {
      this.router.navigate(['/app/tickets']);
      this.snackBar.open('Dodano bilet', '', {
        duration: 2000,
      });
    });
  }
}
