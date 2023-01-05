module.exports = {
  rollup: (config, options) => {
    options.target = 'node';
    options.env = process.env.NODE_ENV;
    return config;
  },
};
