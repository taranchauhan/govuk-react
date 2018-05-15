import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import Button, {
  ButtonStart,
  ButtonCustomStyles,
  ButtonStartIcon,
  ButtonDisabled,
  ButtonDisabledStartIcon,
} from './fixtures';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Button text', Button);

stories.add('Button with custom styles', ButtonCustomStyles);

stories.add('Start', ButtonStart);

stories.add('Start with icon', ButtonStartIcon);

stories.add('Disabled', ButtonDisabled);

stories.add('Disabled start with icon', ButtonDisabledStartIcon);
