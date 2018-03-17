import React from 'react';
import ListItem from './ListItem.jsx';

// const List = (props) => (
  
// )



// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import List from './components/List.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: ['asd']
    }
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (
      <div>
        <h4> List Component </h4>
        There are { this.state.items.length } items.
        { this.state.items.map(item => <ListItem item={item}/>)}
      </div>
    )
  }
}

export default List;