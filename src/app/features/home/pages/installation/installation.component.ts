import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {NAV_THEORY} from "@app/core/constants/navigation.constants";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "app-installation",
	imports: [HighlightJsDirective, RouterLink],
	templateUrl: "./installation.component.html",
	styleUrl: "./installation.component.scss",
})
export class InstallationComponent {
	protected readonly NAV_THEORY = NAV_THEORY;
}
