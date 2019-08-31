import React,{Component} from 'react'
import { graphql } from 'react-apollo'
import { GET_ALL_BOOKS } from '../queries/Queries';
import BookDetails from '../components/BookDetails';

class BookList extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected:null
    }
  }
  displayBooks(){
    let data = this.props.data
      if(data.loading){
        return(<div>Loading Books...</div>)
    
      }else{
      return data.AllBooks.map(book=>{
        return(
        <li key={book.id} onClick={(e)=>{this.setState({selected:book.id}) }}>{book.name}</li>
        )
      })
    }
  }
  render() {
    return(
     <div>
          <ul id="book-list">
          {this.displayBooks()}          
          </ul>
          <BookDetails bookid={this.state.selected} />
      </div>
    )
  
  }
}
export default graphql(GET_ALL_BOOKS)(BookList)
