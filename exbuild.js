var React = require('react')
  , input = require('./taginput.jsx')
  , container = document.getElementById('container');
  
React.renderComponent(input(), container);