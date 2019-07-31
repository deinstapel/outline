/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

commonWebpackConfig = require('./webpack.config');

productionWebpackConfig = Object.assign(commonWebpackConfig, {
  cache: true,
  devtool: 'source-map',
  entry: ['babel-polyfill', 'babel-regenerator-runtime', './app/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/static/',
  },
  stats: "normal"
});
productionWebpackConfig.plugins = [
  ...productionWebpackConfig.plugins,
  new ManifestPlugin(),
  new HtmlWebpackPlugin({
    template: 'server/static/index.html',
  }),
  new UglifyJsPlugin({
    sourceMap: true,
    uglifyOptions: {
      compress: true,
      keep_fnames: true
    }
  }),
  new webpack.DefinePlugin({
    'process.env.URL': JSON.stringify(process.env.URL),
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.GOOGLE_ANALYTICS_ID': JSON.stringify(process.env.GOOGLE_ANALYTICS_ID),
    'process.env.SUBDOMAINS_ENABLED': JSON.stringify(process.env.SUBDOMAINS_ENABLED === 'true'),
    'process.env.WEBSOCKETS_ENABLED': JSON.stringify(process.env.WEBSOCKETS_ENABLED === 'true'),
    'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
    'process.env.SECRET_KEY': JSON.stringify(process.env.SECRET_KEY),
    'process.env.REDIS_URL': JSON.stringify(process.env.REDIS_URL),
    'process.env.DATABASE_URL_TEST': JSON.stringify(process.env.DATABASE_URL_TEST),
    'process.env.PORT': JSON.stringify(process.env.PORT),
    'process.env.ENABLE_UPDATES': JSON.stringify(process.env.ENABLE_UPDATES),
    'process.env.DEPLOYMENT': JSON.stringify(process.env.DEPLOYMENT),
    'process.env.LDAP_ENABLED': JSON.stringify(process.env.LDAP_ENABLED),
    'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
    'process.env.LDAP_REVERSE_PROXY_HEADER': JSON.stringify(process.env.LDAP_REVERSE_PROXY_HEADER),
    'process.env.LDAP_TEAM': JSON.stringify(process.env.LDAP_TEAM),
    'process.env.LDAP_URL': JSON.stringify(process.env.LDAP_URL),
    'process.env.LDAP_LOGOUT_URL': JSON.stringify(process.env.LDAP_LOGOUT_URL),
    'process.env.LDAP_ADDITIONAL_USERS_DN': JSON.stringify(process.env.LDAP_ADDITIONAL_USERS_DN),
    'process.env.LDAP_BASE_DN': JSON.stringify(process.env.LDAP_BASE_DN),
    'process.env.LDAP_ADDITIONAL_GROUPS_DN': JSON.stringify(process.env.LDAP_ADDITIONAL_GROUPS_DN),
    'process.env.LDAP_USERS_FILTER': JSON.stringify(process.env.LDAP_USERS_FILTER),
    'process.env.LDAP_GROUP_NAME_ATTR': JSON.stringify(process.env.LDAP_GROUP_NAME_ATTR),
    'process.env.LDAP_GROUPS_FILTER': JSON.stringify(process.env.LDAP_GROUPS_FILTER),
    'process.env.LDAP_ADMIN_USER': JSON.stringify(process.env.LDAP_ADMIN_USER),
    'process.env.LDAP_USER_MAIL_ATTR': JSON.stringify(process.env.LDAP_USER_MAIL_ATTR),
    'process.env.LDAP_ADMIN_GROUP': JSON.stringify(process.env.LDAP_ADMIN_GROUP),
    'process.env.LDAP_ADMIN_PASSWORD': JSON.stringify(process.env.LDAP_ADMIN_PASSWORD),
    'process.env.SLACK_KEY': JSON.stringify(process.env.SLACK_KEY),
    'process.env.LDAP_ACCESS_GROUP': JSON.stringify(process.env.LDAP_ACCESS_GROUP),
    'process.env.GOOGLE_CLIENT_ID': JSON.stringify(process.env.GOOGLE_CLIENT_ID),
    'process.env.SLACK_SECRET': JSON.stringify(process.env.SLACK_SECRET),
    'process.env.GOOGLE_ALLOWED_DOMAINS': JSON.stringify(process.env.GOOGLE_ALLOWED_DOMAINS),
    'process.env.GOOGLE_CLIENT_SECRET': JSON.stringify(process.env.GOOGLE_CLIENT_SECRET),
    'process.env.SLACK_APP_ID': JSON.stringify(process.env.SLACK_APP_ID),
    'process.env.SLACK_VERIFICATION_TOKEN': JSON.stringify(process.env.SLACK_VERIFICATION_TOKEN),
    'process.env.SLACK_MESSAGE_ACTIONS': JSON.stringify(process.env.SLACK_MESSAGE_ACTIONS),
    'process.env.GITHUB_ACCESS_TOKEN': JSON.stringify(process.env.GITHUB_ACCESS_TOKEN),
    'process.env.BUGSNAG_KEY': JSON.stringify(process.env.BUGSNAG_KEY),
    'process.env.AWS_SECRET_ACCESS_KEY': JSON.stringify(process.env.AWS_SECRET_ACCESS_KEY),
    'process.env.AWS_ACCESS_KEY_ID': JSON.stringify(process.env.AWS_ACCESS_KEY_ID),
    'process.env.AWS_S3_UPLOAD_BUCKET_URL': JSON.stringify(process.env.AWS_S3_UPLOAD_BUCKET_URL),
    'process.env.AWS_REGION': JSON.stringify(process.env.AWS_REGION),
    'process.env.AWS_S3_UPLOAD_MAX_SIZE': JSON.stringify(process.env.AWS_S3_UPLOAD_MAX_SIZE),
    'process.env.AWS_S3_UPLOAD_BUCKET_NAME': JSON.stringify(process.env.AWS_S3_UPLOAD_BUCKET_NAME),
    'process.env.SMTP_PORT': JSON.stringify(process.env.SMTP_PORT),
    'process.env.SMTP_HOST': JSON.stringify(process.env.SMTP_HOST),
    'process.env.SMTP_PASSWORD': JSON.stringify(process.env.SMTP_PASSWORD),
    'process.env.SMTP_USERNAME': JSON.stringify(process.env.SMTP_USERNAME),
    'process.env.SMTP_REPLY_EMAIL': JSON.stringify(process.env.SMTP_REPLY_EMAIL),
    'process.env.SMTP_FROM_EMAIL': JSON.stringify(process.env.SMTP_FROM_EMAIL),
  }),
];

module.exports = productionWebpackConfig;
