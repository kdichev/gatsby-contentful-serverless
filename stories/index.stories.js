import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import { text, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

import { Welcome } from '@storybook/react/demo'
import Card from './../src/components/Card'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Card', module)
  .add('with simple text', () => (
    <Card isBlue={boolean('isBlue', false)}>{text('text', 'Sample text')}</Card>
  ))
  .add('with simple text and isBlue', () => (
    <Card isBlue={boolean('isBlue', true)}>
      {text('text', 'Sample longer text')}
    </Card>
  ))
  .add('with some custom style', () => (
    <Card
      isBlue={boolean('isBlue', true)}
      style={{ color: 'white', backgroundColor: 'green' }}
    >
      {text('text', 'Sample longer text')}
    </Card>
  ))
