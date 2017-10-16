import { Bare } from '@pixelduet/react-prime-ui';
import { css }  from 'glamor';
import React    from 'react';

const CARD_CSS = css({
  padding: 20
});

const HYPERLINK_CSS = css({
  color: 'Red'
});

const {
  Hyperlink
} = Bare;

export default class HyperlinkCard extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Clicked');
  }

  render() {
    return (
      <div { ...CARD_CSS }>
        <h1>&lt;Hyperlink&gt;</h1>
        <p>
          Ullamco duis aliqua dolor id proident minim adipisicing deserunt <Hyperlink href="https://bing.com/" css={ HYPERLINK_CSS }>&lt;Hyperlink href="https://bing.com/"&gt;</Hyperlink> sint laboris consequat Lorem culpa.
        </p>
        <p>
          Culpa et id dolor et <Hyperlink href="https://bing.com/" target="_blank" css={ HYPERLINK_CSS }>&lt;Hyperlink href="https://bing.com/" target="_blank"&gt;</Hyperlink> nostrud aliqua sunt sunt irure aliqua dolor sunt enim.
        </p>
        <p>
          Incididunt laborum ea enim <Hyperlink css={ HYPERLINK_CSS } onClick={ this.handleClick }>&lt;Hyperlink onClick=&hellip;&gt;</Hyperlink> minim non pariatur nisi et eiusmod elit.
        </p>
        <p>
          Enim incididunt <Hyperlink href="https://bing.com/" disabled={ true } css={ HYPERLINK_CSS }>&lt;Hyperlink href="https://bing.com/" disabled={ '{ true }' }&gt;</Hyperlink> id anim ut enim anim voluptate aute do esse aliqua.
        </p>
      </div>
    );
  }
}
