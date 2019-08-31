import { gql } from 'apollo-boost'


const GET_ALL_BOOKS = gql`
{
  AllBooks{
    name
    id
  }
}
`

const GET_ALL_AUTHORS = gql`
{
  AllAuthors{
    name
    id
  }
}
`

const GET_A_BOOK = gql`
query($id:ID){
  OneBook(id:$id){
    id
    name
    genre
    AuthorOfTheBook{
      id 
      name
      age
      booksByAuthor{
        id
        name
        genre
      }
    }
  }
}

`

const ADD_BOOK = gql`
mutation($name:String!,$genre:String!,$authorid:ID!){
  addBook(name:$name,genre:$genre,authorid:$authorid){
    name
    id
  }
}
`

export {GET_ALL_BOOKS,
  GET_ALL_AUTHORS,
  GET_A_BOOK,
  ADD_BOOK}