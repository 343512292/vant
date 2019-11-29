import merge from 'webpack-merge';
import { get } from 'lodash';
import { getWebpackConfig } from '../common';
import { siteDevBaseConfig } from './webpack.site.dev';
import { CONFIG, SITE_DIST_DIR } from '../common/constant';

const outputDir = get(CONFIG, 'build.site.outputDir', SITE_DIST_DIR);
const publicPath = get(CONFIG, 'build.site.publicPath', '/');

export const sitePrdConfig = merge(
  siteDevBaseConfig,
  {
    mode: 'production',
    stats: 'none',
    output: {
      publicPath,
      path: outputDir,
      filename: '[name].[hash:8].js',
      chunkFilename: 'async_[name].[chunkhash:8].js'
    }
  },
  getWebpackConfig()
);