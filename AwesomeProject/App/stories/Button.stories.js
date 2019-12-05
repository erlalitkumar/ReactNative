import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import {BufferView} from './decorator';
import {Button} from '../component/Button';

storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Button onPress={action('tapped-default')}>Press Me</Button>
  ))
  .add('outline', () => (
    <Button onPress={action('tapped-outline')} outline={true}>
      Press Me
    </Button>
  ));
