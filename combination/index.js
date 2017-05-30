
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //ip = this.state.value;
    alert('A name was submitted: ' + this.state.value);
    getLocationByIP(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
//var ips = '12'; // '130.233.220.240';

/*var CommentBox = React.createClass({

  getInitialState: function() {
    console.log('initial state='+this.state.data);
    return {data: []};
  },

  handleChange: function() {
    console.log('just testing22');
    return {data: []};
  },

  handleSubmit: function(ip_data) {
    //ip = '66';
    alert('submit_state='+this.state.data);
    console.log('submit data2='+this.state.data);
    //ips = "133";
    return ip;
    //return {data: []};
  },

  render: function() {
    return (

      <form onSubmit={this.handleSubmit}>
         <label>
           IP: hahah
           <input type="text" value={this.state.value} onChange={this.handleChange} />
         </label>
         <input type="submit" value="Submit" />
        </form>

    );
  }
});
*/
ReactDOM.render(
  <NameForm />,
  document.getElementById('content')
);
