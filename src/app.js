/*!
 * Facebook React Starter Kit | https://github.com/kriasoft/react-starter-kit
 * Copyright (c) KriaSoft, LLC. All rights reserved. See LICENSE.txt
 */

'use strict';

var React = require('react');
var Reflux = require('reflux');

window.hostPath = function(path) {
	return config.apiEndpoint + path;
};


window._ = require('underscore');


global.Action = require('./actions.js');
global.Store = require('./stores.js');


// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

var HomePage = require('./components/index.jsx');

ReactStyle.inject();
HomePage();
