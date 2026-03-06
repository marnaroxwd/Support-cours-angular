import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {ChapterTDE, CoursesInstance} from "@app/core/constants/chapters.constants";
import {
	NAV_DEMO,
	NAV_EXERCISE,
	NAV_HOME,
	NAV_INSTALLATION,
	NAV_THEORY,
} from "@app/core/constants/navigation.constants";

@Component({
	selector: "app-header",
	imports: [RouterLink],
	templateUrl: "./app-header.component.html",
	styleUrl: "./app-header.component.scss",
})
export class AppHeaderComponent {
	protected readonly NAV_HOME = NAV_HOME;
	protected readonly NAV_INSTALLATION = NAV_INSTALLATION;
	chapterOrder = CoursesInstance.chapterOrder;
	protected readonly ChapterTDE = ChapterTDE;
	protected readonly NAV_THEORY = NAV_THEORY;
	protected readonly NAV_DEMO = NAV_DEMO;
	protected readonly NAV_EXERCISE = NAV_EXERCISE;
}
