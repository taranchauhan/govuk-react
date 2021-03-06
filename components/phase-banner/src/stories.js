import React from 'react';
import { storiesOf } from '@storybook/react';
import { asAnchor } from '@govuk-react/hoc';

import PhaseBanner from '.';

const AnchorLink = asAnchor('a');

storiesOf('PhaseBanner', module).add('Alpha phase tag', () => (
  <PhaseBanner level="alpha">
    This part of GOV.UK is being rebuilt &#8211;{' '}
    <AnchorLink href="https://example.com">find out what that means</AnchorLink>
  </PhaseBanner>
));

storiesOf('PhaseBanner', module).add('Beta phase tag', () => (
  <PhaseBanner level="beta">
    This part of GOV.UK is being rebuilt &#8211;{' '}
    <AnchorLink href="https://example.com">find out what that means</AnchorLink>
  </PhaseBanner>
));
