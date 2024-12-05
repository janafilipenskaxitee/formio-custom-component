//import TextField from 'formiojs/components/textfield/TextField';
//import Components from 'formiojs/components/Components';

//class JanaTextField extends TextField {
//	static get builderInfo() {
//		return {
//			title: 'Jana Textfield',
//			group: 'basic',
//			icon: 'fa fa-font',
//			weight: 0,
//			schema: JanaTextField.schema()
//		};
//	}

//	static schema(...extend) {
//		return TextField.schema({
//			type: 'janatextfield',
//			label: 'Jana Textfield',
//			key: 'janatextfield',
//			inputType: 'text'
//		}, ...extend);
//	}

//	static editForm(...extend) {
//		return TextField.editForm(...extend);
//	}

//	get defaultSchema() {
//		return JanaTextField.schema();
//	}
//}

//Components.addComponent('janatextfield', JanaTextField);

//export default JanaTextField;

import Components from 'formiojs/components/Components';

class JanaTextField {
    static get builderInfo() {
        return {
            title: 'Jana Testovací Komponenta',
            group: 'basic',
            icon: 'fa fa-font',
            schema: {
                type: 'janatextfield',
                key: 'janatextfield',
                label: 'Jana Textfield'
            }
        };
    }
}

Formio.Components.addComponent('janatextfield', JanaTextField);

export default JanaTextField;
