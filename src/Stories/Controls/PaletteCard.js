import { Palette } from '@pixelduet/react-prime-ui';
import { css }     from 'glamor';
import React       from 'react';

const { withPalette } = Palette;

const CARD_CSS = css({
  padding: 20,

  '& > ul': {
    display: 'flex',
    flexWrap: 'wrap',
    listStyleType: 'none',
    padding: 0,

    '& > li': {
      margin: 10,
      textAlign: 'center',
      width: 100,

      '& > .box': {
        height: 100,
        width: 100
      }
    }
  }
});

const COLOR_NAMES = [
  'accent',
  'accentDark1',
  'accentDark2',
  'accentDark3',
  'accentLight1',
  'accentLight2',
  'accentLight3',
  'background',
  'foreground',
  'baseLow',
  'baseMediumLow',
  'baseMedium',
  'baseMediumHigh',
  'baseHigh',
  'altLow',
  'altMediumLow',
  'altMedium',
  'altMediumHigh',
  'altHigh',
  'listLow',
  'listMedium',
  'listAccentLow',
  'listAccentMedium',
  'listAccentHigh',
  'chromeLow',
  'chromeMediumLow',
  'chromeMedium',
  'chromeHigh',
  'chromeAltLow',
  'chromeDisabledLow',
  'chromeDisabledHigh',
  'chromeBlackLow',
  'chromeBlackMediumLow',
  'chromeBlackMedium',
  'chromeBlackHigh',
  'chromeWhite'
];

class PaletteCard extends React.PureComponent {
  render() {
    return (
      <div { ...CARD_CSS }>
        <h1>&lt;Palette&gt;</h1>
        <ul>
          {
            COLOR_NAMES.map(name =>
              <li>
                <div className="box" style={{ backgroundColor: this.props.palette[name] }} />
                <small>{ prettyName(name) }</small>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

function prettyName(name) {
  return name.replace(/([A-Z])/g, ' $1').replace(/(\w)(\d)/g, '$1 $2').toLowerCase();
}

export default withPalette(palette => ({ palette }))(PaletteCard)
