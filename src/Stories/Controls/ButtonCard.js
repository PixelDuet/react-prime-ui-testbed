import { Bare } from '@pixelduet/react-prime-ui';
import { css }  from 'glamor';
import React    from 'react';

const CARD_CSS = css({
  padding: 20
});

const {
  Button
} = Bare;

export default class ButtonCard extends React.PureComponent {
  render() {
    return (
      <div { ...CARD_CSS }>
        <h1>&lt;Button&gt;</h1>
        <p>
          Ea quis mollit officia sunt cillum <Button>&lt;Button&gt;</Button> esse ut.
        </p>
        <p>
          Commodo adipisicing incididunt pariatur <Button disabled={ true } >&lt;Button disabled={ true }&gt;</Button> exercitation minim.
        </p>
        <p>
          Nulla amet <Button href="https://bing.com/">&lt;Button href="https://bing.com/"&gt;</Button> ullamco non nisi voluptate proident est ex eu excepteur minim.
        </p>
        <p>
          Lorem dolore ut magna aliqua <Button disabled={ true } href="https://bing.com/">&lt;Button disabled={ true } href="https://bing.com/"&gt;</Button> do ea officia deserunt velit.
        </p>
      </div>
    );
  }
}
