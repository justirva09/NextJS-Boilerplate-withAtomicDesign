const path = require('path');

function pathJoin(target) {
  return path.resolve(path.join(__dirname, `/${target || ''}`));
}

module.exports = {
  webpack: config => {
    config.resolve.alias.pages = pathJoin('pages/');
    config.resolve.alias.utils = pathJoin('utils/');
    config.resolve.alias.config = pathJoin('config/');
    config.resolve.alias.libraries = pathJoin('libraries/');
    config.resolve.alias.containers = pathJoin('containers/');
    config.resolve.alias.components = pathJoin('components/');
    config.resolve.alias['components/atoms'] = pathJoin('components/atoms/');
    config.resolve.alias['components/molecules'] = pathJoin(
      'components/molecules/'
    );
    config.resolve.alias['components/organisms'] = pathJoin(
      'components/organisms/'
    );
    config.resolve.alias['components/templates'] = pathJoin(
      'components/templates/'
    );
    config.resolve.alias['components/pages'] = pathJoin('components/pages/');
    return config;
  }
};