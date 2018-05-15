import React from 'react';
import styled from 'react-emotion';
import { boolean } from '@storybook/addon-knobs/react';
import { ButtonArrow } from '@govuk-react/icons';
import {
  BLUE,
  WHITE,
} from 'govuk-colours';

import Button from '.';

const CustomStyledButton = styled(Button)({
  backgroundColor: WHITE,
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: BLUE,
  color: BLUE,
});

export default () => <Button>Save and continue</Button>;

export const ButtonCustomStyles = () => <CustomStyledButton>Save and continue</CustomStyledButton>;

export const ButtonStart = () => <Button start={boolean('Start', true)}>Save and continue</Button>;

export const ButtonStartIcon = () => (
  <Button icon={<ButtonArrow />} start={boolean('Start', true)}>
    Start now
  </Button>
);

export const ButtonDisabled = () => <Button disabled={boolean('Disabled', true)}>Disabled primary button</Button>;

export const ButtonDisabledStartIcon = () => (
  <Button
    disabled={boolean('Disabled', true)}
    start={boolean('Start', true)}
    icon={<ButtonArrow />}
  >
    Start now
  </Button>
);
