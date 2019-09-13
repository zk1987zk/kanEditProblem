import React from 'react'

// class Welcome extends React.Component {
//   render(){
//     // const {name , isTeacher, count} = this.props;
//     // if(isTeacher){
//     //   return (<h2>{'Hello,' + name +', I am a Teacher' + count}</h2> );
//     // } else {
//     //   return (<p>{`Hello, ${name}, I am a student ${count}`}</p>); 
//     // }
//     return(
//       <div>
//         {this.props.isTeacher && <h2>{this.props.name} is a teacher {this.props.count}</h2>}
//         {!this.props.isTeacher && <p>{this.props.name} is a student {this.props.count}</p>}
//       </div>
//     );
//   }
// }

// class component can be written as function component
const Welcome = (props) => {
  return (
    <div>
      {props.isTeacher && <h2>{props.name} is a teacher {props.id}</h2>}
      {!props.isTeacher && <p>{props.name} is a student {props.id}</p>}
     </div>
  )
}

export default Welcome;