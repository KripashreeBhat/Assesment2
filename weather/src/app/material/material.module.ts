import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
const MaterialComponent =[
  MatDialogModule,
  MatTabsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,

]

@NgModule({
  declarations: [],
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})

export class MaterialModule { }
