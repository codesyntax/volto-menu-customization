const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    navDepth: 2,
  };
  return config;
};

export default applyConfig;
