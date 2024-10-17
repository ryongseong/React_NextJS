const CreateAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CreateAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
}
