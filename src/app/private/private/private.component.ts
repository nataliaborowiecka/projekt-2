import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
})
export class PrivateComponent implements OnInit {
  constructor(private router: Router, private acRouter: ActivatedRoute) {}

  ngOnInit(): void {}
  logOut() {
    this.router.navigate(['../']);
    localStorage.clear();
  }
}
