
import { GluegunCommand } from 'gluegun'


const command: GluegunCommand = {
  name: 'goo',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to goo cli');
  },
}

module.exports = command
