import {Component} from "@angular/core";
import { FormsModule } from "@angular/forms";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-bindings",
	imports: [ExerciseHeaderComponent, FormsModule],
	templateUrl: "./exercise-bindings.component.html",
	styleUrl: "./exercise-bindings.component.scss",
})
export class ExerciseBindingsComponent {
	imageUrlResultat: string = "assets/exercise/binding/resultat.png";
	firstname: string = "";
	name: string = "";
	isDisabled: boolean = true;
	// Rajoute les variables et méthodes nécessaires ici
	keyDown(){
		 if(!this.firstname  || !this.name ){
			this.isDisabled = true
		 }else{
			this.isDisabled = false
		 };
		// console.log("🚨🚨🚨🚨🚨🚨🚨");
		// console.log("WEE WOO WEE WOO WEE WOO");
		// console.log("🚨🚨🚨🚨🚨🚨🚨");
	}
	submit(){
		console.log("🚨🚨🚨🚨🚨🚨🚨");
		console.log(`${this.firstname} ${this.name}`);
		console.log("🚨🚨🚨🚨🚨🚨🚨");
	}
}
