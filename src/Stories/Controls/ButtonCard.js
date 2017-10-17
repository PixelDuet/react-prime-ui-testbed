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
  constructor(props, context) {
    super(props, context);

    this.handleReset  = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleReset(evt) {
    evt.preventDefault();

    alert('Form reset');
  }

  handleSubmit(evt) {
    evt.preventDefault();

    alert('Form submitted');
  }

  render() {
    return (
      <div { ...CARD_CSS }>
        <h1>&lt;Button&gt;</h1>
        <p>
          Ea quis mollit officia sunt cillum <Button>&lt;Button&gt;</Button> esse ut.
        </p>
        <p>
          Commodo adipisicing incididunt pariatur <Button disabled={ true } >&lt;Button disabled={ '{ true }' }&gt;</Button> exercitation minim.
        </p>
        <p>
          Nulla amet <Button href="https://bing.com/" target="_blank">&lt;Button href="&hellip;"&gt;</Button> ullamco non nisi voluptate proident est ex eu excepteur minim.
        </p>
        <p>
          Lorem dolore ut magna aliqua <Button disabled={ true } href="https://bing.com/">&lt;Button disabled={ '{ true }' } href="https://bing.com/"&gt;</Button> do ea officia deserunt velit.
        </p>
        <form onSubmit={ this.handleSubmit }>
          <p>
            Sunt consequat do excepteur magna <Button type="submit">&lt;Button type="submit"&gt;</Button> ipsum id exercitation nisi cupidatat reprehenderit.
          </p>
        </form>
        <p>
          Minim non veniam cillum ea sunt sint <Button type="submit" disabled={ true }>&lt;Button type="submit" disabled={ '{ true }' }&gt;</Button> adipisicing culpa incididunt deserunt.
        </p>
        <form onReset={ this.handleReset }>
          <p>
            Non ullamco et sint qui <Button type="reset">&lt;Button type="reset"&gt;</Button> id anim esse consequat.
          </p>
        </form>
        <p>
          Ullamco consequat aute <Button type="file">&lt;Button type="file"&gt;</Button> consequat incididunt velit.
        </p>
      </div>
    );
  }
}
