import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DeleteComponent } from './delete.component';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        MatButtonModule,
        MatDialogModule,
    ],
    exports: [DeleteComponent],
    declarations: [DeleteComponent],
    providers: [],
})
export class SharedModule { }
