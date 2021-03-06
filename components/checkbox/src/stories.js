import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from '.';

storiesOf('Checkbox', module).add('Checkbox', () => (
  <div>
    <Checkbox>Waste from animal carcasses</Checkbox>
    <Checkbox>Waste from mines or quarries</Checkbox>
    <Checkbox>Farm or agricultural waste</Checkbox>
  </div>
));

storiesOf('Checkbox', module).add('Checkbox disabled', () => (
  <div>
    <Checkbox disabled="disabled">Disabled checkbox option</Checkbox>
  </div>
));

storiesOf('Checkbox', module).add('Checkbox preselected', () => (
  <div>
    <Checkbox defaultChecked>Farm or agricultural waste</Checkbox>
  </div>
));

storiesOf('Checkbox', module).add('Checkbox preselected & disabled', () => (
  <div>
    <Checkbox disabled="disabled" defaultChecked>
      Farm or agricultural waste
    </Checkbox>
  </div>
));
