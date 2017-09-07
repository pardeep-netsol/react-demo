var AllItems = React.createClass({
  handleDelete(id){
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'DELETE',
      success: (response) => {
        this.props.removeItem(id);
      }
    });
  },
  handleUpdate(item){
    $.ajax({
      url: `/api/v1/items/${item.id}`,
      type: 'PUT',
      data: { item: item },
      success: () => {
          console.log('you did it!!!');
      }
    })
  },
  render() {
    var items= this.props.items.map((item) => {
      return (
        <div key={item.id} >
          <Item item={item} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
        </div>
      )
    });

    return(
      <div className="item-list">
        <Tests />
        <h1>All Items</h1>
        {items}
      </div>
    )
  }
});