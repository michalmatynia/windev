import {
  section,
  container,
  cardTitle,
  coloredShadow,
  mlAuto,
  mrAuto,
  grayColor,
  blackColor,
  hexToRgb,
} from '../../../material-kit-pro-react.js'

import customCheckboxRadioSwitch from '../../../material-kit-pro-react/customCheckboxRadioSwitchStyle.js'

import tooltipsStyle from '../../../material-kit-pro-react/tooltipsStyle.js'

const styles = {
  ...customCheckboxRadioSwitch,
  ...tooltipsStyle,
  checkRoot: {
    padding: '14px',
    '&:hover': {
      backgroundColor: 'unset !important',
    },
  },
  coloredShadow,
  mlAuto,
  mrAuto,
  cardTitle: {
    ...cardTitle,
    textAlign: 'center',
    marginBottom: '0px !important',
  },
  cardDescription: {
    color: grayColor[0],
    textAlign: 'center',
  },
  container: {
    ...container,
  },
  description: {
    color: grayColor[0],
  },
  section: {
    ...section,
    padding: '70px 0px',
  },
  priceContainer: {
    display: 'inline-flex',
  },
  price: {
    fontSize: '18px',
    color: grayColor[22],
  },
  pullRight: {
    float: 'right',
  },
  cardHeaderImage: {
    position: 'relative',
    padding: '0',
    zIndex: '1',
    marginLeft: '15px',
    marginRight: '15px',
    marginTop: '-30px',
    borderRadius: '6px',
    '& img': {
      width: '100%',
      borderRadius: '6px',
      pointerEvents: 'none',
      objectFit: 'cover',
      boxShadow:
        '0 5px 15px -8px rgba(' +
        hexToRgb(blackColor) +
        ', 0.24), 0 8px 10px -5px rgba(' +
        hexToRgb(blackColor) +
        ', 0.2)',
    },
    '& a': {
      display: 'block',
    },
  },
  justifyContentBetween: {
    WebkitBoxPack: 'justify!important',
    justifyContent: 'space-between !important',
  },
  customExpandPanel: {
    maxHeight: '273px',
    overflowY: 'scroll',
    '&  label': {
      display: 'block',
    },
  },
  priceSlider: {
    fontWeight: '500',
  },
  refineButton: {
    margin: '-3px 0',
  },
  cardBodyRefine: {
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  textLeft: {
    textAlign: 'left',
  },
}

export default styles
