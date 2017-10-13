import { App, Bare } from '@pixelduet/react-prime-ui';
import { css }       from 'glamor';
import React         from 'react';

import ButtonCard from './ButtonCard';

const { Navigation } = App;
const { Button } = Bare;

const CARD_CSS = css({
  padding: 20
});

export default class ControlsTab extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleBack        = this.handleBack.bind(this);
    this.handleButtonClick = this.handleNavigate.bind(this, 'Button', ButtonCard);

    this.state = {
      cardComponent: null,
      title        : null
    };
  }

  handleBack() {
    this.setState(() => ({
      cardComponent: null,
      title        : null
    }));
  }

  handleNavigate(nextTitle, nextCardComponent) {
    this.setState(() => ({
      cardComponent: nextCardComponent,
      title        : nextTitle
    }));
  }

  render() {
    return (
      <Navigation>
        <Navigation.Card title="Controls">
          <div { ...CARD_CSS }>
            <Button onClick={ this.handleButtonClick }>&lt;Button&gt;</Button>
          </div>
        </Navigation.Card>
        {
          this.state.cardComponent ?
            <Navigation.Card
              onBack={ this.handleBack }
              title ={ this.state.title }
            >
              { React.createElement(this.state.cardComponent, {}) }
            </Navigation.Card>
          :
            false
        }
      </Navigation>
    );
  }
}
