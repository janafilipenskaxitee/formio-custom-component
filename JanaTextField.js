const TextField = Formio.Components.components.textfield;

class JanaTextField extends TextField {
	static get builderInfo() {
		return {
			title: 'Jana Textfield',
			group: 'basic',
			icon: 'fa fa-font',
			weight: 0,
			schema: JanaTextField.schema()
		};
	}

	static schema(...extend) {
		return TextField.schema({
			type: 'janatextfield',
			label: 'Jana Textfield',
			key: 'janatextfield',
			inputType: 'text'
		}, ...extend);
	}

	static editForm(...extend) {
		return TextField.editForm(...extend);
	}

	get defaultSchema() {
		return JanaTextField.schema();
	}
}
console.log('Registrace komponenty JanaTextField proběhla 4');
Formio.Components.addComponent('janatextfield', JanaTextField);