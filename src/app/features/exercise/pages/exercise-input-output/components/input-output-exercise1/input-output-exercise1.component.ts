import {Component} from "@angular/core";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";
import { ColorPickerComponent } from "./components/color-picker/color-picker.component";

@Component({
	selector: "input-output-exercise1",
	imports: [SpoilComponent, ColorPickerComponent],
	templateUrl: "./input-output-exercise1.component.html",
	styleUrl: "./input-output-exercise1.component.scss",
})
export class InputOutputExercise1Component {
	imgUrlResultat: string =
		"assets/exercise/input-output/color-picker-resultat.png";
	imgUrlStructure: string =
		"assets/exercise/input-output/color-picker-structure.png";

	selectedColor: string ="black"
	changeColorEvent(color: string){
		console.log(color)
		this.selectedColor = color;

	}
}
