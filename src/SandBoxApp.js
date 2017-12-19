import { App }             from '@pixelduet/react-prime-ui';
import { css }             from 'glamor';
import { PaletteProvider } from 'react-accent-color';
import React               from 'react';

import DemoTab     from './Stories/Demo';
import ControlsTab from './Stories/Controls';

const { Host, TabBar } = App;

const CSS = css({
  height: '100%',
  width : '100%'
});

export default class AppImpl extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleTabChange = this.handleTabChange.bind(this);

    this.state = {
      tab      : 1
    };
  }

  handleTabChange(nextValue) {
    this.setState(() => ({ tab: nextValue }));
  }

  render() {
    return(
      <Host css={ CSS }>
        <PaletteProvider>
          <TabBar
            onChange={ this.handleTabChange }
            value   ={ this.state.tab }
          >
            <TabBar.Tab button="Demo">
              <DemoTab />
            </TabBar.Tab>
            <TabBar.Tab button="Controls">
              <ControlsTab />
            </TabBar.Tab>
          </TabBar>
        </PaletteProvider>
      </Host>
    );
  }
}
