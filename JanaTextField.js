const TextField = Formio.Components.components.textfield;

class JanaTextField extends TextField {
    static get builderInfo() {
        return {
            title: 'Jana Text Field',
            group: 'basic',
            icon: 'fa fa-font',
            weight: 0,
            schema: JanaTextField.schema()
        };
    }

    static schema(...extend) {
        return TextField.schema({
            type: 'janatextfield',
            label: 'Jana Text Field',
            key: 'janatextfield',
            inputType: 'text'
        }, ...extend);
    }

    inputInfo(input) {
        const info = super.inputInfo(input);
        info.class += 'xitee'; 
        return info;
    }
}
console.log('Registrace komponenty JanaTextField proběhla 6');
Formio.Components.addComponent('janatextfield', JanaTextField);