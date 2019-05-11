//higher order component (hoc)- a component(hoc) that renders another component
//reuse code
//render hijacking
//prop manipulationing
//abstract state
import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);
const withAdminWarning = (WrappedComponent) =>
    (props) =>
        (
            <div>
                {
                    props.isAdmin
                    &&
                    <p>
                        This is private info . please don't share
                </p>
                }
                <WrappedComponent {...props} />
            </div>
        );

//requireAuthentication
const requireAuthentication = (WrappedComponent) =>
    (props) =>
        (
            <div>
                {
                    (props.isAuthentiacated)
                        ?
                        <div>
                            <p>You are logged in</p>
                            <WrappedComponent {...props} />
                        </div>
                        :
                        <p>Please log in</p>
                }

            </div>
        )


// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Sina Moraddar" />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthentiacated={true} info="Sina Moraddar" />, document.getElementById("app"));