import Type from "./Type"
import { GenericClassDecorator } from "./GenericClassDecorator"

export const Service = () : GenericClassDecorator<Type<object>> => {
	return (target: Type<object>) => {

	}
}