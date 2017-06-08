
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

    if (!PATTERN.test(this.state.value)) { // PATTERN = IP validation regexp pattern
      alert(INVALID_IP + this.state.value);
    } else {
      $('[data-first]').show();
      $('[data-second]').show();
      $('[data-third]').show();
      IPMapper.getResultDataForIP(this.state.value); // maps IP to the geographical map
      event.preventDefault();
    }
  }

  /*
    Empties and/or removes tables or table headers from the HTML by user request.
  */
  removeTable() {
    $('[data-table1] tbody').empty();
    $('[data-table2] tbody').empty();
    $('[data-table3] tbody').empty();
    $('[data-first]').hide();
    $('[data-second]').hide();
    $('[data-third]').hide();
  }

  render() {
    return (
      <div id="#buttons">

        <form onSubmit={this.handleSubmit}>
          <label>
            {IP_ADDR_TEXT}
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>

          <input type="submit" value={MAP_IP_TEXT} />
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
