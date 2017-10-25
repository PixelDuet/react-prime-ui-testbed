import { Bare } from '@pixelduet/react-prime-ui';
import { css }  from 'glamor';
import React    from 'react';

const CARD_CSS = css({
  padding: 20
});

// const {
//   Button
// } = Bare;

export default class TemplateCard extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: null
    };
  }

  handleChange(nextValue) {
    this.setState(() => ({ value: nextValue }));
  }

  render() {
    return (
      <div { ...CARD_CSS }>
        <h1>&lt;Template&gt;</h1>
      </div>
    );
  }
}
