import { Component } from 'react';
import PropTypes from 'prop-types';

const { arrayOf, string } = PropTypes;

const RequiredFields = requiredFields => ComposedComponent => (
    class RequiredFields extends Component {

        //--------------------------------------------------
        // Context Methods
        //--------------------------------------------------

        getChildContext = () => ({ requiredFields })

        static childContextTypes = { requiredFields: arrayOf(string).isRequired }

        //--------------------------------------------------
        // React LifeCycle Methods
        //--------------------------------------------------

        render() {
            return <ComposedComponent { ...this.props } />
        }
    }
);

export default RequiredFields;
