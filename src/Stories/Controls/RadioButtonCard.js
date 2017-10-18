import { Bare } from '@pixelduet/react-prime-ui';
import { css }  from 'glamor';
import React    from 'react';

const CARD_CSS = css({
  padding: 20
});

const {
  RadioButton
} = Bare;

export default class ButtonCard extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      checkedState: 0
    };
  }

  handleChange(nextChecked, evt, userState) {
    if (nextChecked) {
      this.setState(() => ({ checkedState: userState }));
    }
  }

  render() {
    return (
      <div { ...CARD_CSS }>
        <h1>&lt;RadioButton&gt;</h1>
        <h2>Normal</h2>
        <label>
          <p>
            <RadioButton
              checked  ={ this.state.checkedState === 0 }
              name     ="group-1"
              onChange ={ this.handleChange }
              userState={ 0 }
              value    ="0"
            /> Eiusmod dolor commodo eu irure eu elit Lorem labore velit nostrud enim.
          </p>
        </label>
        <label>
          <p>
            <RadioButton
              checked  ={ this.state.checkedState === 1 }
              name     ="group-1"
              onChange ={ this.handleChange }
              userState={ 1 }
              value    ="1"
            /> Tempor non excepteur ipsum laboris do consequat do officia dolor magna laboris.
          </p>
        </label>
        <h2>Disabled</h2>
        <p>
          <label>
            <RadioButton
              checked  ={ this.state.checkedState === 0 }
              disabled ={ true }
              name     ="group-2"
              onChange ={ this.handleChange }
              userState={ 0 }
              value    ="0"
            /> Eiusmod dolor commodo eu irure eu elit Lorem labore velit nostrud enim.
          </label>
        </p>
        <p>
          <label>
            <RadioButton
              checked  ={ this.state.checkedState === 1 }
              disabled ={ true }
              name     ="group-2"
              onChange ={ this.handleChange }
              userState={ 1 }
              value    ="1"
            /> Tempor non excepteur ipsum laboris do consequat do officia dolor magna laboris.
          </label>
        </p>
      </div>
    );
  }
}
