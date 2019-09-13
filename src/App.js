import React from 'react';
import {connect} from 'react-redux';
import Welcome from './Welcome';
import Counter from './Counter';
import WelcomeForm from './WelcomeForm';
import welcomeReducer from './reducers/welcomeReducer';

class App extends React.Component {
  constructor(props){
    super(props);
    //have to use this because arrow function is not used for handleSubtract()
  }
  componentDidMount() {
    console.log('APP componentDidMount');
  }

  componentDidUpdate() {
    console.log('APP componentDidUpdate');
  }
   //Arrow Function Example
  //  handleAdd = ()=> {
  //   // Wrong: setState is async
  //   // this.setState({count: this.state.count +1 });
  //   this.setState((preState, props)=>{
  //     return {
  //       count: preState.count + 1,
  //     };
  //   });
  // }
  // handleSubtract = () => { 
  //   // Wrong: setState is async
  //   // this.setState({count: this.state.count - 1 });
  //   this.setState((preState, props) => ({
  //       count: preState.count - 1,
  //     }));
  // }

  render() {
    console.log('App render');
    return (
      <section className="App">
        {
          this.props.welcomeList.map((welcome, index) =>
            <Welcome  
              key = {index}
              name = {welcome.name}
              isTeacher = {welcome.isTeacher}
              id = {welcome.id}
            />
          )
        }
        <WelcomeForm />
        <Counter 
          //state = {this.state}
          //count = {this.state.count} 
          //handleAdd = {this.handleAdd}
          //handleSubtract = {this.handleSubtract}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    welcomeList: state.welcome.welcomeList,
    count:state.mycounter.count,
  }
}

export default connect(mapStateToProps)(App);





