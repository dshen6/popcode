var React = require('react');

var ErrorList = require('./ErrorList');
var Preview = require('./Preview');

var Output = React.createClass({
  propTypes: {
    project: React.PropTypes.object.isRequired,
    hasErrors: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.object.isRequired,
    onErrorClicked: React.PropTypes.func.isRequired,
  },

  render: function() {
    if (this.props.hasErrors) {
      return (
        <ErrorList
          {...this.props.errors}
          onErrorClicked={this.props.onErrorClicked}
        />
      );
    }
    if (this.props.project) {
      return (
        <Preview project={this.props.project} />
      );
    }
    return null;
  },
});

module.exports = Output;
