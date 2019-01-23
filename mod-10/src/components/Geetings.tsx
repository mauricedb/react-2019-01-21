import React, { Component } from 'react';

type GeetingsProps = {
  firstName?: string;
};

class Geetings extends Component<GeetingsProps> {
  render() {
    const { firstName } = this.props;
    return <div>{this.getGreeting(firstName)}</div>;
  }

  getGreeting(name: string | null | undefined) {
    if (name) {
      const greeting = `Hello there ${name} ${name.length}`;
      return greeting;
    }

    return '';
  }
}

export default Geetings;
