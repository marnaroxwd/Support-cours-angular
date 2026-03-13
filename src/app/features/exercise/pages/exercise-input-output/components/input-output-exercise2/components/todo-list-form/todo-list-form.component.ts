import {Component, output} from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "todo-list-form",
	imports: [FormsModule],
	templateUrl: "./todo-list-form.component.html",
	styleUrl: "./todo-list-form.component.scss",
})
export class TodoListFormComponent {
	submitEvent = output<string>();
	task: string = ''
	onSubmitBtn(){
		this.submitEvent.emit(this.task)
	}
}
