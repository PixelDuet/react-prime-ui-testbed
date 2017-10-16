import { Bare } from '@pixelduet/react-prime-ui';
import { css }  from 'glamor';
import React    from 'react';

const CARD_CSS = css({
  padding: 20
});

const {
  Checkbox
} = Bare;

export default class CheckboxCard extends React.PureComponent {
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
        <h1>&lt;Checkbox&gt;</h1>
        <p>
          <Checkbox
            onChange={ this.handleChange }
            value   ={ this.state.value }
          >
            &lt;Checkbox /&gt;
          </Checkbox>
        </p>
        <p>
          <Checkbox
            disabled={ true }
            onChange={ this.handleChange }
            value   ={ this.state.value }
          >
            &lt;Checkbox disabled={ '{ true }' } /&gt;
          </Checkbox>
        </p>
      </div>
    );
  }
}
