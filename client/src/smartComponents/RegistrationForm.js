import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './Input';
import './RegistrationForm.css';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

let labelStyle = {
    padding: '0 0 10px 0'
}

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, email, password, firstname, lastname} = values;
        const user = {username, email, password, firstname, lastname};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <div>
            <div className="container">
               <center><form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <label htmlFor="firstname">First name</label>
                    <div style={labelStyle}></div>
                    <Field component="input" type="text" name="firstname" />
                    <label htmlFor="lastname">Last name</label>
                    <Field component={Input} type="text" name="lastname" />

                    <label htmlFor="email">Email</label>
                    <Field component={Input} type="text" name="email" validate={[required]}/>

                    <label htmlFor="username">Username</label>
                    <Field component={Input} type="text" name="username" validate={[required, nonEmpty, isTrimmed]} />
                    <label htmlFor="password">Password</label>
                    <Field component={Input} type="password" name="password" validate={[required, passwordLength, isTrimmed]} />
                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <Field component={Input} type="password" name="passwordConfirm" validate={[required, nonEmpty, matchesPassword]} />
                    <button
                        type="submit"
                        >
                        Register
                    </button>
                </form></center> 
            </div>
            </div>
        );
    }
}
export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);