import React from 'react';

import { boolean, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { wInfo } from '../../../utils';
import { Button } from './Button';
// @ts-ignore
storiesOf('Components/Button', module).addWithJSX(
  'basic Button',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <Button
    label={'Enroll'}
    disabled={false}
    onClick={() => alert('hello there')}
  />
  ~~~`
)(() => (
    <Button
      label={text('label', 'Enroll')}
      disabled={boolean('disabled', false)}
      onClick={() => alert('hello there')}
    />
  ))
);
