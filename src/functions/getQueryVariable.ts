export const getQueryVariable = (variable: string): string => {
	try {
		const variables: string[] = location.href.split('?')[1].split('&');

		for (let i = 0; i < variables.length; i++) {
			const thisVar: string = variables[i];

			console.log(thisVar);

			const name: string = thisVar.split('=')[0];
			const value: string = thisVar.split('=')[1];

			if (name === variable) {
				return value;
			}
		}
	}
	catch (e) {
		return 'error ' + e;
	}
	return 'not found';
};