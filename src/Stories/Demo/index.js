import { App, Bare } from '@pixelduet/react-prime-ui';
import loremIpsum    from 'lorem-ipsum';
import React         from 'react';

import logo from './logo.svg';

const { Navigation, Popup, SwipeUp } = App;

const {
  Button,
  Hyperlink,
  Input,
  Toggle
} = Bare;

export default class DemoTab extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleClockTick        = this.handleClockTick.bind(this);
    this.handleDisabledChange   = this.handleDisabledChange.bind(this);
    this.handleInputChange      = this.handleInputChange.bind(this);
    this.handleNextPage         = this.handleNextPage.bind(this);
    this.handlePrevPage         = this.handlePrevPage.bind(this);
    this.handlePopupDismiss     = this.handlePopupDismiss.bind(this);
    this.handlePopupShow        = this.handlePopupShow.bind(this);
    this.handleSwipeUpClick     = this.handleSwipeUpClick.bind(this);
    this.handleSwipeUpDismiss   = this.handleSwipeUpDismiss.bind(this);

    this.state = {
      clock    : null,
      disabled : false,
      input    : 'Hello, World!',
      pages    : [],
      popup    : false,
      swipeUp  : false
    };
  }

  handleClockTick(nextClock) {
    this.setState(() => ({ clock: nextClock }));
  }

  handleDisabledChange(value) {
    this.setState(() => ({ disabled: value }));
  }

  handleInputChange(nextValue) {
    this.setState(() => ({ input: nextValue }));
  }

  handleNextPage() {
    this.setState(state => ({
      pages: state.pages.slice().concat([
        new Array(20).fill().map(() => loremIpsum({ sentenceLowerBound: 15, sentenceUpperBound: 40 }))
      ])
    }));
  }

  handlePrevPage() {
    this.setState(state => ({
      pages: state.pages.slice(0, state.pages.length - 1)
    }));
  }

  handlePopupDismiss() {
    this.setState(() => ({ popup: false }));
  }

  handlePopupShow() {
    this.setState(() => ({ popup: true }));
  }

  handleSwipeUpClick() {
    this.setState(() => ({ swipeUp: true }));
  }

  handleSwipeUpDismiss() {
    this.setState(() => ({ swipeUp: false }));
  }

  render() {
    const { disabled } = this.state;

    return (
      <Navigation>
        <Navigation.Card title="Welcome to React">
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <h3>Navigation</h3>
            <p>
              Go to <Button onClick={ this.handleNextPage }>page 1</Button>.
            </p>
            <h3>Swipe up</h3>
            <p>
              Open <Button onClick={ this.handleSwipeUpClick }>swipe up modal</Button> or <Button onClick={ this.handlePopupShow }>popup</Button>.
            </p>
            {
              this.state.swipeUp &&
                <SwipeUp onDismiss={ this.handleSwipeUpDismiss } title="Swipe up">
                  <p>Hello, World!</p>
                </SwipeUp>
            }
            {
              this.state.popup &&
                <Popup onDismiss={ this.handlePopupDismiss }>
                  Aloha!
                </Popup>
            }
            <p>
              <Toggle
                onChange={ this.handleDisabledChange }
                value   ={ this.state.disabled }
              >
                Disable all controls
              </Toggle>
            </p>
            <h3>Input</h3>
            <p>
              <Input onChange={ this.handleInputChange } value={ this.state.input } />
            </p>
            <h3>Button</h3>
            <p>
              This is a <Button disabled={ disabled }>button</Button>. And this will open <Button disabled={ disabled } href="https://bing.com/" target="_blank">https://www.bing.com/</Button>.
            </p>
            <h3>Hyperlink</h3>
            <p>
              This is an <Hyperlink disabled={ disabled }>hyperlink</Hyperlink>. And this will open <Hyperlink disabled={ disabled } href="https://bing.com/" target="_blank">https://www.bing.com/</Hyperlink>.
            </p>
          </div>
        </Navigation.Card>
        {
          this.state.pages.map((page, index) =>
            <Navigation.Card
              key   ={ index }
              next  ="Next"
              onBack={ this.handlePrevPage }
              onNext={ this.handleNextPage }
              title ={ `Page ${ index + 1 }` }
            >
              <h1>{ this.state.clock }</h1>
              {
                page.map((paragraph, index) => <p key={ index }>{ paragraph }</p>)
              }
            </Navigation.Card>
          )
        }
      </Navigation>
    );
  }
}
