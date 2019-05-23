import React from 'react';
import { connect } from 'react-redux';
import { startLogIn } from '../actions/auth';

export const LoginPage = ({ startLogIn }) => (
    <div className="box-layout">
        <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>Always keep track of your expenses here !</p>
        <button className="button" onClick={startLogIn}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogIn: () => dispatch(startLogIn())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);