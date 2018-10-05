import { configure } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

import { compose } from 'ramda'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}
addDecorator((story, context) => withInfo('common info')(story)(context))

addDecorator(withKnobs)

configure(loadStories, module)
