import { UpperCasePipe } from "@angular/common";
import {Component} from "@angular/core";
import { FormsModule } from "@angular/forms";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import { AlternateLettersPipePipe } from "./alternate-letters-pipe.pipe";
import { ArraySeparatorPipe } from "./array-separator.pipe";

@Component({
	selector: "exercise-pipe",
	imports: [ExerciseHeaderComponent, FormsModule, AlternateLettersPipePipe, ArraySeparatorPipe],
	templateUrl: "./exercise-pipe.component.html",
	styleUrl: "./exercise-pipe.component.scss",
})
export class ExercisePipeComponent {
	text: string = "";
	separator: string = ""
}
