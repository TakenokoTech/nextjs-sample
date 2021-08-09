const loaders = (options = {}) => [
  { loader: 'style-loader' },
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      ...options,
    },
  },
  { loader: 'postcss-loader' },
];

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  // Custom
  webpackFinal: async (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: config.module.rules.reduce(
        (acc, cur) => [
          ...acc,
          ...(cur.test.toString() === /\.css$/.toString()
            ? [
                { test: /\.module\.css$/, use: loaders({ modules: true }) },
                { test: /^.*(?<!\.module)\.css$/, use: loaders() },
              ]
            : [cur]),
        ],
        [],
      ),
    },
  }),
};
