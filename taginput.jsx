/** @jsx React.DOM */

var React = require('react/addons')
  , containerHpad = 6
  , inputIndent = 4
  , baseHeight = 30
;

// base styles, easily overridden
require('./taginput.less');

module.exports = React.createClass({
  
  getInitialState: function() {
    return {
      tags:   this.props.tags || [],
      tagval: ''
    };
  },
  
  // handles moving the input cursor ahead of the tags
  // using the offsetLeft + offsetWidth of the last tag
  // (relative to the container)
  
  shiftCursor: function() {
    
    if(!this.state.tags.length)
      return this.setState({ offset: 0, height: baseHeight });
    
    var container = this.refs.container.getDOMNode()
      , totalWidth = container.offsetWidth
      , tags = this.refs.tags.getDOMNode()
      , lastTag = tags.children.length ? tags.children[tags.children.length-1] : false
      , tagWidth = lastTag ? lastTag.offsetWidth : 0
      , tagLeft = lastTag ? lastTag.offsetLeft : 0
      , tagOffset = tagWidth ? tagLeft + tagWidth + inputIndent : 0
      , height = tags.offsetHeight
      
      , stateChg = { offset: tagOffset, width: totalWidth, height: height + containerHpad };
      
    this.setState(stateChg);
  },
  
  // setup our cursor on mount in case tag props are provided
  
  componentDidMount: function() {
    this.shiftCursor();
  },
  
  addTag: function(val) {
    val = val.trim();
    if(!val)  return;
    var newTags = this.state.tags.slice(0);
    newTags.push(val);
    this.setState({
      tags: newTags,
      tagval: ''
    }, function() { this.shiftCursor(); }.bind(this));
  },
  
  // onEnter also handles tab keypresses for setting a tag
  
  onEnter: function(event) {
    if(event.keyCode!=13 && event.keyCode!=9) return;
    event.preventDefault();
    this.addTag(event.target.value);
  },
  
  // only letters numbers and spaces are allowed, while spaces
  // indicate a tag should be created
  
  handleChange: function(event) {
    var val = event.target.value;
    
    this.setState({ tagval: val.replace(/[^a-zA-Z0-9\s]+/,'') });
    
    if(/\s/.test(val)) {
      this.addTag(val);
    }
  },
  
  // called when a tag is clicked (to remove)
  
  killTag: function(idx) {
    var tags = this.state.tags.slice(0);
    tags.splice(idx,1);
    this.setState({ tags: tags }, function() { this.shiftCursor(); }.bind(this));
  },
  
  // handles forcing focus on the input field
  
  onClick: function(event) {
    if(event.target.className.indexOf('taginput_')!==-1)
      this.refs.input.getDOMNode().focus();
  },
  
  render: function() {
    
    var tags = this.state.tags.map(function(tag,i) {
      return (
        <div className="taginput_tag" key={i} onClick={this.killTag.bind(null, i)}>
          { tag }
          <span className="taginput_x">
            X
          </span>
        </div>
      );
    }.bind(this));
    
    return this.transferPropsTo(
      <div className="taginput_container" ref="container" onClick={this.onClick} style={{ height: this.state.height ? this.state.height + 'px' : 'auto' }}>
        <input autofocus ref="input" type="text" value={this.state.tagval} onKeyDown={this.onEnter} onChange={this.handleChange} style={{ left: this.state.offset + 'px', width: this.state.width - this.state.offset - 2 }} />
        <div className="taginput_tags" ref="tags">
          { tags }
        </div>
      </div>
    );
  }
  
});