import { Bare } from '@pixelduet/react-prime-ui';
import { css }  from 'glamor';
import React    from 'react';

const CARD_CSS = css({
  padding: 20
});

const {
  TextBox
} = Bare;

export default class TextBoxCard extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: 'John'
    };
  }

  handleChange(nextValue) {
    this.setState(() => ({ value: nextValue }));
  }

  render() {
    return (
      <div { ...CARD_CSS }>
        <h1>&lt;TextBox&gt;</h1>
        <p>
          Velit in occaecat do esse velit ullamco amet <TextBox
            onChange   ={ this.handleChange }
            placeholder="8-16 characters"
            value      ={ this.state.value }
          /> consequat voluptate id irure consequat dolore.
        </p>
        <p>
          You typed "{ this.state.value }".
        </p>
        <p>
          As read-only. <TextBox
            onChange   ={ this.handleChange }
            placeholder="8-16 characters"
            readOnly   ={ true }
            value      ={ this.state.value }
          />
        </p>
        <p>
          As disabled. <TextBox
            disabled   ={ true }
            onChange   ={ this.handleChange }
            placeholder="8-16 characters"
            value      ={ this.state.value }
          />
        </p>
        <p>
          As password. <TextBox
            onChange   ={ this.handleChange }
            placeholder="8-16 characters"
            type       ="password"
            value      ={ this.state.value }
          />
        </p>
      </div>
    );
  }
}
