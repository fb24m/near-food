import { Spinner } from "@fluentui/react-components"
import { IError } from "../../interfaces/error.interface"
import { Error } from "../Error"

export interface RequestHandlerProps {
	states: {
		isLoading: boolean,
		isError: boolean,
		isSuccess: boolean
	},
	error: IError
	body: JSX.Element
}

export const RequestHandler = (props: RequestHandlerProps): JSX.Element => {
	if (props.states.isLoading) return <Spinner />
	if (props.states.isSuccess && !props.states.isLoading) return props.body;
	if (props.states.isError) return <Error code={`API Error ${props.error.response.status}`} message={props.error.message} />;
	else return <></>;
}