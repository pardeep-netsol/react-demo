var Body = React.createClass({
  getInitialState() {
    return { items: [] }
  },
  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  },
  addItem(item){
    var items = [item].concat(this.state.items);
    this.setState({ items: items })
  },
  removeItem(id){
    var items = this.state.items.filter((item) => {
        return item.id != id;
    });
    this.setState({items: items});
  },
  render() {
    return (
      <div className='item-wrapper'>
        <NewItem addItem={this.addItem} />
        <AllItems items={this.state.items} removeItem={this.removeItem} />
      </div>
    )
  }
});