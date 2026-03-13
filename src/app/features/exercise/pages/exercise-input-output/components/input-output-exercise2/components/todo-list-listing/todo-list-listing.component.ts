import {Component} from "@angular/core";
import {TodoListFormComponent} from "../todo-list-form/todo-list-form.component";

@Component({
	selector: "todo-list-listing",
	imports: [TodoListFormComponent],
	templateUrl: "./todo-list-listing.component.html",
	styleUrl: "./todo-list-listing.component.scss",
})
export class TodoListListingComponent {
	tasks: string[] = [];
	onDeleteEvent(task: string) {
		let index: number = this.tasks.indexOf(task);
		this.tasks.splice(index, 1);
	}
	onPushEvent(prootId: string) {
		this.tasks.push(prootId);
	}
}
