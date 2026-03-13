import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
	name: "arraySeparator",
})
export class ArraySeparatorPipe implements PipeTransform {
	transform(value: string[], arg: string = ", " ) :string {
		return value.join(arg);
		
	}
}
