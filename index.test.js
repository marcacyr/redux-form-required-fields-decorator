import React from 'react';
import rf from './index.js';

const REQUIRED_FIELDS_KEY = 'requiredFields';
const dummyComponent = <div>Hello World!</div>

test('RequiredFields should return a component with childContextTypes with a key of "requiredFields"', () => {
    const cmp = rf([ 'foo' ], dummyComponent)();
    const childContextTypes = Object.keys(cmp.childContextTypes);

    // If the childContextTypes are right and include requiredFields, it means we successfully placed requiredFields
    // on context with the decorator
    expect(childContextTypes).toContain(REQUIRED_FIELDS_KEY);
});
