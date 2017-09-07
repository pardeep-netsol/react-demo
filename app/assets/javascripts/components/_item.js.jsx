var Item = React.createClass({
  getInitialState() {
    return {
      editable: false,
      name: this.props.item.name,
      description: this.props.item.description
    }
  },
  handleEdit(){
    if(this.state.editable){
      var name = this.state.name;
      var id = this.props.item.id;
      var description = this.state.description;
      var item = {id: id , name: name , description: description};
      this.props.handleUpdate(item);      
    }
    this.setState({editable: !this.state.editable})
  },
  changeState(e){
    this.setState({
      [e.target.name]: e.target.value 
    })
  },
  render() {
    var name = this.state.editable ? <input type='text' name="name" onChange={this.changeState} defaultValue={this.state.name} /> : <h3>{this.state.name}</h3>;
    var description = this.state.editable ? <input type='text' name="description" onChange={this.changeState} defaultValue={this.state.description} />: <p>{this.state.description}</p>;
    return (
      <div>
        {name}
        {description}
        <button onClick={this.props.handleDelete.bind(this,this.props.item.id)} >Delete</button>
        <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
      </div>
    )
  }
});