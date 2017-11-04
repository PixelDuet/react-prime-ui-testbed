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
        <Reveal
          concealStyle={ CONCEAL_CSS }
          revealStyle ={ REVEAL_CSS }
        >
          {
            this.state.value &&
              <div { ...CONTENT_CSS }>
                <h2>{ this.props.clock }</h2>
                <p>Magna id pariatur magna laboris elit reprehenderit occaecat eu id non culpa dolor cupidatat eiusmod. Tempor elit sunt mollit est magna. Commodo elit incididunt voluptate laborum cillum dolor pariatur consequat dolore reprehenderit non sit adipisicing. Mollit commodo sunt excepteur excepteur occaecat eiusmod Lorem exercitation minim elit. Consequat culpa ad fugiat deserunt et nulla dolore culpa cupidatat laboris labore aliqua minim ullamco. Esse esse mollit cillum dolore qui do. Ad veniam mollit in consequat tempor aute qui exercitation tempor sint.</p>
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
