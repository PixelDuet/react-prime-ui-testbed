import loremIpsum from 'lorem-ipsum';
import React      from 'react';
import { css }    from 'glamor';

import logo from './logo.svg';

import { App, Bare } from 'react-prime-ui';

const { Host, Navigation, Popup, SwipeUp, TabBar } = App;

const {
  Button,
  Checkbox,
  Hyperlink,
  Input
} = Bare;

const ROOT_CSS = css({
  height: '100%',
  width : '100%'
});

export default class AppImpl extends React.PureComponent {
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
    this.handleTabChange        = this.handleTabChange.bind(this);

    this.state = {
      clock    : null,
      disabled : false,
      input    : 'Hello, World!',
      pages    : [],
      popup    : false,
      swipeUp  : false,
      tab      : 0
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

  handleTabChange(nextValue) {
    this.setState(() => ({ tab: nextValue }));
  }

  render() {
    const { disabled } = this.state;

    return(
      <Host css={ ROOT_CSS }>
        <TabBar
          onChange={ this.handleTabChange }
          value   ={ this.state.tab }
        >
          <TabBar.Tab button="Homepage">
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
                    <Checkbox
                      onChange={ this.handleDisabledChange }
                      value   ={ this.state.disabled }
                    >
                      Disable all controls
                    </Checkbox>
                  </p>
                  <h3>Input</h3>
                  <p>
                    <Input onChange={ this.handleInputChange } value={ this.state.input } />
                  </p>
                  <h3>Button</h3>
                  <p>
                    This is a <Button disabled={ disabled }>button</Button>. And this is open <Button disabled={ disabled } href="https://bing.com/" target="_blank">https://www.bing.com/</Button>.
                  </p>
                  <h3>Hyperlink</h3>
                  <p>
                    This is a <Hyperlink disabled={ disabled }>button</Hyperlink>. And this is open <Hyperlink disabled={ disabled } href="https://bing.com/" target="_blank">https://www.bing.com/</Hyperlink>.
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
          </TabBar.Tab>
          <TabBar.Tab button="Empty">
            <p>Proident qui quis consequat sit reprehenderit ut consectetur. Aute consectetur aliqua et ullamco. Reprehenderit minim aute nostrud ad mollit sit officia laborum id Lorem cupidatat. Cillum incididunt esse laborum dolor Lorem fugiat irure Lorem consectetur exercitation aute sunt dolor. Sint occaecat pariatur reprehenderit elit ipsum commodo pariatur reprehenderit sint sit do. Nulla reprehenderit in exercitation reprehenderit laborum aliquip. Officia enim anim fugiat duis do quis voluptate consequat fugiat magna.</p>
          </TabBar.Tab>
        </TabBar>
      </Host>
    );
  }
}
