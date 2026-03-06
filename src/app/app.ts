import {Component, signal} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {AppHeaderComponent} from "./shared/layout/app-header/app-header.component";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, AppHeaderComponent],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App {
	protected readonly title = signal("Angular21-cours-standalone");
}
