import React from 'react';

export default function withClock(WrappedComponent, interval = 100) {
  const WithClock = class extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = { interval, ...this.createState() };
    }

    componentWillMount() {
      this.intervalID = setInterval(() => {
        this.setState(() => this.createState());
      }, this.state.interval);
    }

    componentWillUnmount() {
      clearInterval(this.intervalID);
      this.intervalID = 0;
    }

    createState() {
      return {
        clock: new Date().toISOString()
      };
    }

    render() {
      return (
        <WrappedComponent
          clock={ this.state.clock }
          { ...this.props }
        />
      );
    }
  };

  return WithClock;
}
