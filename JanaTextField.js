if (window.Formio) {
    const TextFieldComponent = window.Formio.Components.components.textfield;
    const TextFieldEditForm = window.Formio.Components.components.textfield.editForm;

    class JanaTextField extends TextFieldComponent {
        static schema(...extend) {
            return TextFieldComponent.schema({
                type: 'janaTextField',
                label: 'Jana Text Field',
                key: 'janaTextField',
                input: true
            }, ...extend);
        }

        static get builderInfo() {
            return {
                title: 'Jana Text Field',
                group: 'basic',
                icon: 'terminal',
                weight: 0,
                documentation: '',
                schema: JanaTextField.schema()
            };
        }

        static editForm(...extend) {
            return TextFieldEditForm([
                {
                    key: 'display',
                    components: TextFieldEditForm.components.display
                },
                {
                    key: 'data',
                    components: TextFieldEditForm.components.data
                },
                {
                    key: 'validation',
                    components: TextFieldEditForm.components.validation
                },
                {
                    key: 'api',
                    components: TextFieldEditForm.components.api
                },
                {
                    key: 'conditional',
                    components: TextFieldEditForm.components.conditional
                },
                {
                    key: 'logic',
                    components: TextFieldEditForm.components.logic
                },
                {
                    key: 'layout',
                    components: TextFieldEditForm.components.layout
                }
            ], ...extend);
        }
    }

    window.Formio.Components.addComponent('janaTextField', JanaTextField);
}
