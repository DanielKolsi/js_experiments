
class IPForm extends React.Component {
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
    //document.getElementById("lat").value, document.getElementById("lng").value);
    getLocationByIP(this.state.value);
    event.preventDefault();
  }

  removeTable() {
    console.log('removing table---');
    clearTable();
    $("#dataTable1").hide();
  }


  render() {
    return (
      <div id="#buttons">
        <form onSubmit={this.handleSubmit}>
          <label>
            IP:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value=" map IP" />
        </form>
        <button onClick={this.removeTable}>Remove table</button>
      </div>
    );
  }
}

ReactDOM.render(
  <IPForm />,
  document.getElementById('content')
);
