
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

    $('[data-first]').show();
    $('[data-second]').show();
    $('[data-third]').show();
    //document.getElementById("lat").value, document.getElementById("lng").value);
    getLocationByIP(this.state.value);
    event.preventDefault();
  }

  removeTable() {
    $('#IPTable1 tbody').empty();
    $('#IPTable2 tbody').empty();
    $('#IPTable3 tbody').empty();
    $('[data-first]').hide();
    $('[data-second]').hide();
    $('[data-third]').hide();
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
