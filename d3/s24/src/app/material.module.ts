import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

const MATERIAL = [MatButtonModule];

@NgModule({
  imports: MATERIAL,
  exports: MATERIAL
})

export class MaterialModule {

}
