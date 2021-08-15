const loaders = (options = {}) => [
  { loader: 'style-loader' }, //
  { loader: 'css-loader', options: { importLoaders: 1, ...options } }, //
  { loader: 'postcss-loader' }, //
];

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules = [
      // デフォルトのrulesに入っているCSS用の設定は、「.module.css」とバッティングするため除外
      ...config.module.rules.filter((rule) => rule.test.source !== /\.css$/.source),
      //「.module.css」の設定
      { test: /\.module\.css$/, use: loaders({ modules: true }) },
      //「.css」の設定
      { test: /^.*(?<!\.module)\.css$/, use: loaders() },
    ];
    return config;
  },
};
