import React from 'react';

import { RadioGroup, Radio, Title3 } from "@fluentui/react-components";

import { GoodOption } from "../../../interfaces/GoodOption.interface";

interface OptionsListProps {
	options: GoodOption[]
	title?: React.ReactElement | string
};

export const OptionsList = (props: OptionsListProps): React.ReactElement => (
	<>
		<Title3>{props.title}</Title3>
		{props.options?.map((optionsList, index) =>
			<RadioGroup key={index}>
				{optionsList.values.map((name, index) =>
					<>{
						index === 0 ?
							<Radio defaultChecked key={index} label={`${name.value} (+${name.price} руб.)`} /> :
							<Radio key={index} label={`${name.value} (+${name.price} руб.)`} />
					}</>
				)}
			</RadioGroup>
		)}
	</>
);