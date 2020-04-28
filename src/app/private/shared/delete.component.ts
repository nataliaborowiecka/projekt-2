import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-delete',
    template: `Czy napewno chcesz usunac? <br >
    <button mat-button (click)="onNoClick()">Nie</button>
    <button mat-button [mat-dialog-close]="data.isConfirm" cdkFocusInitial>Ok</button>`
})

export class DeleteComponent implements OnInit {

    constructor( public dialogRef: MatDialogRef<DeleteComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() { }

    onNoClick(): void {
        this.dialogRef.close();
      }
}
