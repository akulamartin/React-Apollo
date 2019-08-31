import React,{Component} from 'react'
import { graphql } from 'react-apollo'
import { GET_A_BOOK} from '../queries/Queries';


class BookDetails extends Component{
    
    displaydetails(){
        const {OneBook} = this.props.data 
        if(OneBook){
            return(
                <div>
                    <h2>{OneBook.name}</h2>
                    <p>{OneBook.genre}</p>
                    <p>{OneBook.AuthorOfTheBook.name}</p>
                    <p>All books by this Author:</p>
                    <ul className="other-books">
                        {
                            OneBook.AuthorOfTheBook.booksByAuthor.map(
                                item=>{
                                    return <li key={item.id}>{item.name}</li>
                                }
                            )
                        }

                    </ul>
                </div>
            )
        }
            else{
                return(
                    <div>
                        <h1 Style="color: white;">No book selected...</h1>
                    </div>
                )
            }
        }
    

    render(){
    console.log(this.props.data)
    return(
        <div id="book-details">
            {this.displaydetails()}
        </div>
    )
}
}

export default graphql(GET_A_BOOK,{
    options:(props)=>{
        return{
            variables:{
                id : props.bookid
            }
        }
    }
})(BookDetails)