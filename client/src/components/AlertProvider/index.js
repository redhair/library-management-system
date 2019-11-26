import React, { Component } from 'react';

const AlertContext = React.createContext({
  alert: undefined
});

class AlertProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: undefined
    };

    this.makeAlert = this.makeAlert.bind(this);
    this.hideAlert = this.hideAlert.bind(this);
  }

  makeAlert({ type, message }) {
    this.setState({ alert: { type, message } });
  }

  hideAlert() {
    this.setState({ alert: undefined });
  }

  render() {
    const { children } = this.props;

    return (
      <AlertContext.Provider
        value={{
          ...this.state,
          makeAlert: this.makeAlert,
          hideAlert: this.hideAlert
        }}
      >
        {children}
      </AlertContext.Provider>
    );
  }
}

export { AlertProvider, AlertContext };
