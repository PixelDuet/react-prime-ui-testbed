import { css }    from 'glamor';
import classNames from 'classnames';
import React      from 'react';

const CARD_CSS = css({
  padding: 20
});

export default class SandboxCard extends React.PureComponent {
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
        <label>
          <p>
            Lorem ipsum <Checkbox /> Culpa nulla do exercitation duis eiusmod irure ea voluptate.
          </p>
        </label>
        <label>
          <p>
            Lorem ipsum <Checkbox disabled={ true } /> Nulla id exercitation nostrud ad occaecat laboris duis consectetur mollit.
          </p>
        </label>
        <label>
          <p>
            <button>Lorem ipsum</button> Dolor in dolore eu elit veniam.
          </p>
        </label>
      </div>
    );
  }
}

const CHECKBOX_CSS = css({
  position: 'relative',

  '> .circle': {
    backgroundColor: 'red',
    borderRadius   : '50%',
    display        : 'inline-block',
    height         : '1em',
    width          : '1em'
  },

  '> input': {
    height  : '100%',
    margin  : 0,
    opacity : .5,
    left    : 0,
    position: 'absolute',
    top     : 0,
    width   : '100%',

    '&:disabled + .circle': {
      backgroundColor: 'lightgray'
    },

    '&:not(:disabled)': {
      '&:hover': {
        '&:checked + .circle': {
          backgroundColor: 'darkgreen'
        },

        '&:not(:checked) + .circle': {
          backgroundColor: 'darkred'
        }
      },

      '&:not(:hover):checked + .circle': {
        backgroundColor: 'green'
      }
    }
  }
});

class Checkbox extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: false
    };
  }

  handleChange(evt) {
    const checked = evt.target.checked;

    this.setState(() => {
      return {
        value: checked
      };
    });
  }

  render() {
    return (
      <span { ...CHECKBOX_CSS }>
        <input
          checked ={ this.state.checked }
          disabled={ this.props.disabled }
          onChange={ this.handleChange }
          type    ="checkbox"
        />
        <span className="circle">
          &nbsp;
        </span>
      </span>
    );
  }
}
