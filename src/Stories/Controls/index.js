import { App, Bare } from '@pixelduet/react-prime-ui';
import { css }       from 'glamor';
import React         from 'react';

import ButtonCard      from './ButtonCard';
import HyperlinkCard   from './HyperlinkCard';
import RadioButtonCard from './RadioButtonCard';
import TextBoxCard     from './TextBoxCard';
import ToggleCard    from './ToggleCard';

const { Navigation } = App;
const { Button, Palette } = Bare;

const CARD_CSS = css({
  padding: 20
});

export default class ControlsTab extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleBack             = this.handleBack.bind(this);
    this.handleButtonClick      = this.handleNavigate.bind(this, 'Button', ButtonCard);
    this.handleHyperlinkClick   = this.handleNavigate.bind(this, 'Hyperlink', HyperlinkCard);
    this.handleRadioButtonClick = this.handleNavigate.bind(this, 'RadioButton', RadioButtonCard);
    this.handleTextBoxClick     = this.handleNavigate.bind(this, 'TextBox', TextBoxCard);
    this.handleToggleClick      = this.handleNavigate.bind(this, 'Toggle', ToggleCard);

    this.handleGreenClick = this.handleColorChange.bind(this, '#393');
    this.handleRedClick   = this.handleColorChange.bind(this, '#933');
    this.handleBlueClick  = this.handleColorChange.bind(this, '#339');

    this.state = {
      accent       : '#393',
      cardComponent: null,
      title        : ''
    };
  }

  handleBack() {
    this.setState(() => ({
      cardComponent: null,
      title        : null
    }));
  }

  handleColorChange(nextColor) {
    this.setState(() => ({ accent: nextColor }));
  }

  handleNavigate(nextTitle, nextCardComponent) {
    this.setState(() => ({
      cardComponent: nextCardComponent,
      title        : nextTitle
    }));
  }

  render() {
    return (
      <Palette accent={ this.state.accent }>
        <Navigation>
          <Navigation.Card title="Controls">
            <div { ...CARD_CSS }>
              <p>
                <Button onClick={ this.handleButtonClick }>&lt;Button&gt;</Button>
              </p>
              <p>
                <Button onClick={ this.handleHyperlinkClick }>&lt;Hyperlink&gt;</Button>
              </p>
              <p>
                <Button onClick={ this.handleRadioButtonClick }>&lt;RadioButton&gt;</Button>
              </p>
              <p>
                <Button onClick={ this.handleTextBoxClick }>&lt;TextBox&gt;</Button>
              </p>
              <p>
                <Button onClick={ this.handleToggleClick }>&lt;Toggle&gt;</Button>
              </p>
              <h1>Palette</h1>
              <p>
                <Button onClick={ this.handleRedClick }>Change to red</Button>
              </p>
              <p>
                <Button onClick={ this.handleGreenClick }>Change to green</Button>
              </p>
              <p>
                <Button onClick={ this.handleBlueClick }>Change to blue</Button>
              </p>
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
      </Palette>
    );
  }
}
