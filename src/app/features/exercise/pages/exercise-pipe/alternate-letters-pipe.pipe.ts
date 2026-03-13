import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
	name: "alternateLettersPipe",
})
export class AlternateLettersPipePipe implements PipeTransform {
	transform(value: string): string {
		let result = "";
		for (let i = 0; i < value.length; i++) {
			if (i % 2 === 0) {
				result += value[i].toUpperCase();
			} else {
				result += value[i];
			}
		}
		return result;
		/*
		const tmp = value.toLowerCase().split("");
		for(let i = 0; i< tmp.length; i +=2){
		tmp[i] = tmp[i].toUpperCase}
		
		return tmp.toString*/

	}
}
