// References:
// https://govuk-elements.herokuapp.com/buttons/
//
// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/design-patterns/_buttons.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss
// https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_buttons.scss

import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withWhiteSpace } from '@govuk-react/hoc';
import { NTA_LIGHT, SPACING } from '@govuk-react/constants';
import {
  BUTTON_COLOUR,
  BUTTON_COLOUR_DARKEN_15,
  WHITE,
  YELLOW,
} from 'govuk-colours';

// TODO should be using constants for some of the below values
const StyledButton = styled('button')(
  {
    backgroundColor: BUTTON_COLOUR,
    border: 'none',
    boxShadow: `0 2px 0 ${BUTTON_COLOUR_DARKEN_15}`,
    color: WHITE,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    fontSize: '1em',
    lineHeight: '1.25',
    outlineOffset: '-1px',
    outline: '1px solid transparent',
    padding: '.526315em .789473em .263157em',
    textDecoration: 'none',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    ':focus': {
      outline: `3px solid ${YELLOW}`,
    },
    // TODO: avoid cascade
    ' svg': {
      maxWidth: '15px',
      marginLeft: SPACING.SCALE_4,
    },
  },
  ({ start, icon, disabled }) => ({
    opacity: disabled ? '.5' : '1',
    pointerEvents: disabled ? 'none' : 'auto',
    fontWeight: start ? '700' : undefined,
    fontSize: start ? '24px' : undefined,
    lineHeight: start ? '1.25' : undefined,
    padding: start ? '.36842em .84211em .21053em' : undefined,
    paddingRight: icon ? '.54211em' : '.84211em',
  }),
);

/**
 *
 * Simple Usage
 * ```js
 * <Button>My button text</Button>
 * ```
 *
 * With Icon
 * ```js
 * import { ButtonArrow } from '@govuk-react/icons';
 *
 * <Button icon={<ButtonArrow />}>My button text</Button>
 * ```
 *
 */
const Button = ({
  children,
  icon,
  ...props
}) => (
  <StyledButton icon={icon} {...props}>
    {children}
    {icon}
  </StyledButton>
);

Button.propTypes = {
  /**
   * Button text
   */
  children: PropTypes.node,
  /**
   * Button icon
   */
  icon: PropTypes.node,
  /**
   * Renders a large button if set to true
   */
  start: PropTypes.bool,
  /**
   * Renders a disabled button if set to true
   */
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Button',
  icon: undefined,
  disabled: false,
  start: false,
};

export default withWhiteSpace({ marginBottom: 4 })(Button);
