import {Component, output} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
	selector: "color-picker",
	imports: [FormsModule],
	templateUrl: "./color-picker.component.html",
	styleUrl: "./color-picker.component.scss",
})
export class ColorPickerComponent {
	color: string = "";
	selectEvent = output<string>();
	selectChangingEvent(){
		this.selectEvent.emit(this.color)
	}
}
