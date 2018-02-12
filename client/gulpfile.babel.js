'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack';
import path     from 'path';
import sync     from 'run-sequence';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import fs       from 'fs';
import yargs    from 'yargs';
import lodash   from 'lodash';
import gutil    from 'gulp-util';
import serve    from 'browser-sync';
import del      from 'del';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import colorsSupported      from 'supports-color';
import historyApiFallback   from 'connect-history-api-fallback';

let root = 'src';

// helper method for resolving paths
let resolveToApp = (glob = '') => {
  return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob = '') => {
  return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
let paths = {
  js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
  scss: resolveToApp('**/*.scss'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: [
    'babel-polyfill',
    path.join(__dirname, root, 'app.js')
  ],
  output: root,
  dest: path.join(__dirname, 'dist')
};

// use webpack.config.js to build modules
gulp.task('webpack', ['clean'], (cb) => {
  const config = require('./webpack.dist.config');
  config.entry.app = paths.entry;

  webpack(config, (err, stats) => {
    if(err)  {
      throw new gutil.PluginError("webpack", err);
    }

    gutil.log("[webpack]", stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true
    }));

    cb();
  });
});

gulp.task('serve', () => {
  const config = require('./webpack.dev.config');
  config.entry.app = [
    // this modules required to make HRM working
    // it responsible for all this webpack magic
    'webpack-hot-middleware/client?reload=true',
    // application entry point
  ].concat(paths.entry);

  var compiler = webpack(config);

  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: {baseDir: root},
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(compiler, {
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false
        },
        publicPath: config.output.publicPath
      }),
      webpackHotMiddleware(compiler)
    ]
  });
});

gulp.task('watch', ['serve']);

gulp.task('clean', (cb) => {
  del([paths.dest]).then(function (paths) {
    gutil.log('[clean]', paths);
    cb();
  })
});

gulp.task('files', function () {
  'use strict';

  var entries = [
    ['node_modules/angular-material/angular-material.min.css'],
  ];

  function dest(filename) {
    if (/\.(css|sass|scss)$/.test(filename)) {
      return 'src/assets/stylesheets/vendor';
    }

    if (/\.(js)$/.test(filename)) {
      return 'src/assets/javascripts/vendor';
    }
  }

  for (var i = 0; i < entries.length; i++) {
    var file = entries[i][0];
    var filename = entries[i][1] || file.split('/').pop();

    gulp
      .src(file)
      .pipe(rename(filename))
      .pipe(gulp.dest(dest(filename)));
  }
});

gulp.task('material-icons', function() {
  var replaceAll = function(haystack, needle, replacement) {
    return haystack.split(needle).join(replacement);
  };

  return gulp
    .src('node_modules/material-design-icons/**/svg/production/*24px.svg')
    .pipe(rename(function(p) {
        p.dirname = p.dirname.replace(path.normalize('svg/production'), '')
        p.basename = p.basename.split('_24px')[0]
        p.basename = replaceAll(p.basename, '_', '-')
        p.basename = replaceAll(p.basename, 'ic-', '')
    }))
    .pipe(gulp.dest('src/assets/icons'))
});

gulp.task('default', ['watch']);
