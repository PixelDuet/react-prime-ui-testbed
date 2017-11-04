import { App, Bare } from '@pixelduet/react-prime-ui';
import { css }       from 'glamor';
import PropTypes     from 'prop-types';
import React         from 'react';

import withClock from '../../withClock';

const CARD_CSS = css({
  padding: 20
});

const CONTENT_CSS = css({
  display: 'inline-block'
});

const CONCEAL_CSS = css({
  animationDuration: '300ms',
  animationFillMode: 'both',
  animationName: css.keyframes({
    from: { width: '100%' },
    to  : { width: 0 }
  })
});

const REVEAL_CSS = css({
  animationDuration: '300ms',
  animationFillMode: 'both',
  animationName: css.keyframes({
    from: { width: 0 },
    to  : { width: '100%' }
  })
});

const {
  Reveal
} = App;

const {
  Toggle
} = Bare;

class RevealCard extends React.Component {
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
        <h1>&lt;Reveal&gt;</h1>
        <label>
          <p>
            <Toggle
              checked ={ this.state.value }
              onChange={ this.handleChange }
            /> Reveal
          </p>
        </label>
        <Reveal>
          {
            this.state.value &&
              <div { ...CONTENT_CSS }>
                <h2>Default animation</h2>
                <h3>{ this.props.clock }</h3>
                <p>Veniam et esse eiusmod sunt mollit Lorem fugiat aute aliquip laborum labore aliqua.</p>
              </div>
          }
        </Reveal>
        <Reveal
          concealStyle={ CONCEAL_CSS }
          revealStyle ={ REVEAL_CSS }
        >
          {
            this.state.value &&
              <div { ...CONTENT_CSS }>
                <h2>Custom animation</h2>
                <h3>{ this.props.clock }</h3>
                <p>Commodo nostrud commodo esse do magna laborum velit quis mollit nulla duis sit.</p>
              </div>
          }
        </Reveal>
      </div>
    );
  }
}

RevealCard.propTypes = {
  clock: PropTypes.string
};

export default withClock(RevealCard);
