/* eslint-disable no-console */

const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
const path = require('path');

const { getFeed } = require('../api/feed');

const server = express();

const renderer = createBundleRenderer(require(__dirname + '/../../dist/vue-ssr-server-bundle.json'), {
  runInNewContext: false,
  template: require('fs').readFileSync(__dirname + '/../../index.template.html', 'utf-8'),
  clientManifest: require(__dirname + '/../../dist/vue-ssr-client-manifest.json')
});

server.use('/js', express.static(path.resolve(__dirname, '../../dist/js')))
server.use('/css', express.static(path.resolve(__dirname, '../../dist/css')))
server.use('/', express.static(path.resolve(__dirname, '../../public')))

server.post('/api/feed', async (req, res) => {
  res.json(await getFeed());
});

server.get('*', (req, res) => {
  const context = { url: req.url };

  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(req.url, err);
      return res.sendStatus(err.code || 500);
    }

    res.end(html);
  });
});

module.exports = server;
