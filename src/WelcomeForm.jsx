import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, del, delAll, edit} from './actions/welcomeAction';

class WelcomeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            isTeacher: null,
            id:0,
            delid:null,
            eid:null,
            eName:null,
            eIsTeacher: null,
        }
    }
    onFormSubmit = (e) => {
        e.preventDefault(); 
        this.setState((preState, props)=>{
            return {
              id: preState.id + 1,
            };
        });
        this.props.dispatch(add(this.state.name, this.state.isTeacher, this.state.id));    
    }
    onInputChange = (e) => {
        e.preventDefault();
        this.setState({name: e.target.value});
    }
    onTeacherInputChange = (e) => {
        e.preventDefault();
        this.setState({isTeacher:true})
    }
    onStudentInputChange = (e) => {
        e.preventDefault();
        this.setState({isTeacher:false})
    }
    deleteById = (e) => {
        e.preventDefault();
        this.props.dispatch(del(this.state.delid));

    }
    onDeleteInputChange = (e) => {
        e.preventDefault();
        this.setState({delid:e.target.value});
    }
    deleteAll = (e) => {
        e.preventDefault();
        this.props.dispatch(delAll())
    } 
    onEditIdInputChange = (e) => {
        e.preventDefault();
        this.setState({eid:e.target.value});
    }
    onEInputChange = (e) => {
        e.preventDefault();
        this.setState({eName: e.target.value});
    }
    onETeacherInputChange = (e) => {
        e.preventDefault();
        this.setState({eIsTeacher:true})
    }
    onEStudentInputChange = (e) => {
        e.preventDefault();
        this.setState({eIsTeacher:false})
    }
    editById = (e) => {
        e.preventDefault();
        this.props.dispatch(edit(this.state.eid, this.state.eName, this.state.eIsTeacher));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <span>Name </span>
                    <input name="name" value={this.state.name} onChange={this.onInputChange}/> 
                    <input type="radio" name="role" value="teacher" onChange={this.onTeacherInputChange}/> Teacher
                    <input type="radio" name="role" value="student" onChange={this.onStudentInputChange}/> Student
                    <button>Submit</button>
                </form>


                <form onSubmit={this.deleteById}>
                    <span>Delete by ID </span>
                    <input name="name" value={this.state.delid} onChange={this.onDeleteInputChange}/> 
                    <button>Delete</button>
                    <button onClick={this.deleteAll}>Delete All</button>
                </form>



                <form onSubmit={this.editById}>
                <span>Edit by ID </span>
                <input name="name" value={this.state.eid} onChange={this.onEditIdInputChange}/> 
                <span>Name </span>
                <input name="name" value={this.state.eName} onChange={this.onEInputChange}/> 
                <input type="radio" name="role" value="teacher" onChange={this.onETeacherInputChange}/> Teacher
                <input type="radio" name="role" value="student" onChange={this.onEStudentInputChange}/> Student
                <button>edit</button>
            </form>
            </div>
        )
    }
}

//export default WelcomeForm;
export default connect()(WelcomeForm);