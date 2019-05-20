import React from 'react';
import { connect } from 'react-redux';
import { startLogIn } from '../actions/auth';

export const LoginPage = ({ startLogIn }) => (
    <div>
        <button onClick={startLogIn}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogIn: () => dispatch(startLogIn())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);