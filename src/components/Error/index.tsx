import { Body1, Button, Card, Title1 } from "@fluentui/react-components";
import { HomeRegular, PersonSupportRegular } from "@fluentui/react-icons";

export interface ErrorProps {
	code: string
	message: string
}

export const Error = (props: ErrorProps) => {
	return (
		<Card className="container">
			<Title1>{props.code}</Title1>
			<Body1>{props.message}</Body1>
			<div className="buttons">
				<Button
					icon={<HomeRegular />}
					appearance="primary"
					as="a"
					href="?"
				>На главную</Button>
				<Button
					icon={<PersonSupportRegular />}
					as="a"
					href="mailto:fb24m.hello@yandex.com"
				>Написать в поддержку</Button>
			</div>
		</Card>
	)
};