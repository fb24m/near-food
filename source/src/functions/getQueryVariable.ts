export const getQueryVariable = (variable: string): string | false => {
	try {
		const variables: string[] = location.search.replace('?', '').split('&');

		for (let i = 0; i < variable.length; i++) {
			const thisVar: string = variables[i];



			const name: string = thisVar.split('=')[0];
			const value: string = thisVar.split('=')[1];

			if (name === variable) {
				return value;
			}
		}
	}
	catch {
		return false;
	}
	return false;
};