import React,{Component} from 'react'
import { graphql} from 'react-apollo'

import { GET_ALL_AUTHORS,ADD_BOOK,GET_ALL_BOOKS } from '../queries/Queries';

const compose = require('lodash/flowRight')

class AddBook extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            genre:'',
            authorid:''
        }
    }
    displayAuthors(){
        let data = this.props.GET_ALL_AUTHORS
          if(data.loading){
            return(<option disabled>Loading Authors...</option>)
        
          }else{
          return data.AllAuthors.map(authors=>{
            return(
            <option key={authors.id} value={authors.id}>{authors.name}</option>
            )
          })
        }
      }

    submitForm(e){
        e.preventDefault()    
        this.props.ADD_BOOK({
          variables:{
            name:this.state.name,
            genre:this.state.genre,
            authorid:this.state.authorid
          },
          refetchQueries:[{query:GET_ALL_BOOKS}]
        })
    }  
    render() {

    return(
     <form action="" id="add-book" onSubmit={this.submitForm.bind(this)}>
         <div className ="field">
            <label>Book Name:</label>
            <input type="text" onChange={(e)=> this.setState({name:e.target.value})} />
         </div>
         <div className ="field">
            <label>Genre:</label>
            <input type="text" onChange={(e)=> this.setState({genre:e.target.value})}/>
         </div>
         <div className ="field">
            <label>Author</label>
            <select onChange={(e)=> this.setState({authorid:e.target.value})}>
                <option>Select Author</option>
                {this.displayAuthors()}
            </select>
         </div>
         <button>+</button>
     </form>
    )
  
  }
}
export default compose(
  graphql(GET_ALL_AUTHORS,{name:"GET_ALL_AUTHORS"}),
  graphql(ADD_BOOK,{name:"ADD_BOOK"})
)(AddBook)
