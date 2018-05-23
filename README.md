# ReduxForm Required Fields Decorator

[![Build Status](https://travis-ci.org/marcacyr/redux-form-required-fields-decorator.svg?branch=master)](https://travis-ci.org/marcacyr/redux-form-required-fields-decorator)

A simple decorator that can be used to easily add required fields to the context of a component tree that leverages Redux Form Fields.

This package is discussed in this blog post: https://blog.hellojs.org/redux-form-is-an-awesome-way-to-handle-forms-in-a-redux-application-in-my-opinion-6b2713a815fa

If you use ReduxForm >=6, then this decorator can help to simplify your management of required fields on a form. 
In version 6 and up in ReduxForm, the Field component is at your disposal for use. This Field takes a UI component as a prop
for what to actually render in the UI. You can provide it an input, text area, radio buttons, etc. This is an awesome tool to
have available to create forms. 

In creating forms, it is common practice to do something to indicate in the UI that a form field is required, and to also handle
validation for required fields. A common example is an asterisk `*` to denote required. The purpose of this decorator (which can
also be used as a Function to which you pass your form component) is to simplify the code needed to handle required.

It accomplishes this simplification by taking in a simple array of field names `Array<string>` and putting that array on the context
the parent form component so that the array is available to any component further down the tree (using React Context https://reactjs.org/docs/context.html).

In doing so, it makes it possible to have a check in your component rendered for your Field component for whether it is required. Basically,
wherever you manage your field components you can check `this.context.requiredFields.includes(currentFieldName)`. One recommendation would be 
to have your own wrapper around ReduxForm's Field that handles every possible field UI you would need to render. Then, in this one wrapper component
you can handle your checking for required, and pass `required` as `true` to the UI components themselves. Then, handle the `*` or other UI to indicate
required in the UI component.

### Usage

```
import { Component } from 'react';
import Field from 'path/to/fieldComponent';
import { reduxForm } from 'redux-form'
import RequireFields from 'redux-form-required-fields';
import someValidator from 'someValidatorYouWrote';

const FOO = 'foo';

// NOTE: it is recommended to define your required fields once as a constant to be used anywhere you need it
const REQUIRED_FIELDS = [ FOO ];

@RequiredFields(REQUIRED_FIELDS)
class SomeForm extends Component {
    render() {
        return <Field name={ FOO } />
    }
}

SomeForm = reduxForm({ form: 'SomeForm', validate: formProps => someValidator(formProps, REQUIRED_FIELDS) })(SomeForm);

export default SomeForm // of course connect with redux if need-be
```

The steps are pretty simple:
1) import the decorator
2) define a constant for your required fields as an array of field name
3) use that array by passing it into the decorator, and optionally into your validator function if you centralize your validation

### tl;dr

This is a super simple decorator that is only here to make your life easier by adding an array of required field names to the context
of a Redux Form at the highest level, so that every component down the tree will have access and can use that array to conditionally render
UI specific to required fields.

### Additional Notes

You will want to make sure you include the right Babel transform plugins to be able to handle decorators. Here is an example of a setup that works for this and other things as well:

```
{
    "presets": ["react", "es2015", "stage-1"],
    "plugins": ["transform-decorators-legacy"]
}
```

## License

MIT © RedLock

