import { Bare } from '@pixelduet/react-prime-ui';
import { css }  from 'glamor';
import React    from 'react';

const CARD_CSS = css({
  padding: 20
});

const {
  Toggle
} = Bare;

export default class ToggleCard extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: true
    };
  }

  handleChange(nextValue) {
    this.setState(() => ({ value: nextValue }));
  }

  render() {
    return (
      <div { ...CARD_CSS }>
        <h1>&lt;Toggle&gt;</h1>
        <p>
          <Toggle
            checked ={ this.state.value }
            onChange={ this.handleChange }
          /> Laboris laboris elit magna laboris velit laborum aute non pariatur non laboris.
        </p>
        <p>
          <Toggle
            checked ={ this.state.value }
            disabled={ true }
            onChange={ this.handleChange }
          /> &lt;Toggle disabled={ '{ true }' }&gt;
        </p>
      </div>
    );
  }
}
