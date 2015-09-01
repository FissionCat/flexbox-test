var numberInput = document.getElementById('numberOfOptions');
var Options = React.createClass({
    getInitialState: function() {
        return {
            numberOfOptions: parseInt(numberInput.value, 10)
        };
    },
    componentWillMount: function() {
        var that = this;
        numberInput.addEventListener('change', function(e) {
            that.setState({
                numberOfOptions: parseInt(e.target.value, 10)
            });
        });
    },
    componentWillUnmount: function() {
        numberInput.removeEventListener('change');
    },
    render: function() {
        var options = [];
        for (var i = 0; i < this.state.numberOfOptions; i++) {
            options.push(<div className="option" key={i}>
                <img src="http://placehold.it/140x140"></img>
            </div>);
        }
        return <div className="options">{options}</div>;
    }
});

React.render(
    <Options/>,
    document.getElementById('options')
);
