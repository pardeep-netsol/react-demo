var NewItem= React.createClass({
  getInitialState() {
    return {
      name: "",
      description: "",
      status: ""
    }
  },
  handleClick() {
    var name    = this.state.name;
    var description = this.state.description;
    if(name && description){
      $.ajax({
        url: '/api/v1/items',
        type: 'POST',
        data: { item: { name: name, description: description } },
        success: (item) => {
            this.setState({
              status: "Item added.",
              name: "",
              description: ""
            });
            this.props.addItem(item);
        },
        error: (error) => {
          console.log(error);
          this.setState({
            status: "Item not added.",
          });
        }
      });
    }
  },
  changeState(e){
    this.setState({
      [e.target.name]: e.target.value 
    })
  },
  render() {
    return (
      <div className="new-item-wrapper">
        <span className="title">Add New Item</span>
        <input placeholder='Enter the name of the item' onChange={this.changeState} name="name" defaultValue={this.state.name}/>
        <input placeholder='Enter a description' onChange={this.changeState} name="description" defaultValue={this.state.description} />
        <button onClick={this.handleClick}>Submit</button>
        <span>{this.state.status}</span>
      </div>
    )
  }
});