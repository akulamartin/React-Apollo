import React,{Component} from 'react'


class Dummy extends Component {      
  constructor(props){
    super(props)
    this.state = {}
  }
  
  add(){
    return 2 + 5
  }
  render() {
      return(
     <div>
         <h6>In Dummy!{this.add()}</h6>
     </div>
    )
  
  }
}
export default Dummy;
