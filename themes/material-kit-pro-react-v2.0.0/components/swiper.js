// Material Kit 2 PRO React base styles
import colors from 'themes/material-kit-pro-react-v2.0.0/base/colors'

// Material Kit 2 PRO React helper functions
import pxToRem from 'themes/material-kit-pro-react-v2.0.0/functions/pxToRem'

const { white } = colors

const swiper = {
  '.swiper-button-prev, .swiper-button-next': {
    position: 'absolute',
    top: '50%',
    padding: `0 ${pxToRem(64)}`,
    color: white.main,
    opacity: 0.5,
    transform: 'translateY(-250%)',
    transition: 'opacity 0.15s ease',

    '&::after': {
      fontSize: pxToRem(28),
    },

    '&:hover, &:focus': {
      opacity: 1,
    },
  },
}

export default swiper
