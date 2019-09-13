import {ADD, DEL, DELALL, EDIT} from '../actions/welcomeAction';

const defaultState = {
    welcomeList: [
    ]
  };

const welcomeReducer = (state=defaultState, action) => {
    switch (action.type) {
        case ADD:
            return Object.assign({}, state, {
                welcomeList: state.welcomeList.concat(
                    {name: action.name, isTeacher: action.isTeacher, id: action.id}
                )
            });
        case DEL:
            return Object.assign({}, state, {
                welcomeList: state.welcomeList
                .filter(welcome => welcome.id !== Number(action.delid))
            });
        case DELALL:
            return Object.assign({}, state, {
                welcomeList: state.welcomeList = []
            });
        case EDIT:
            // for (let i = 0; i < state.welcomeList.length; i++){
            //     if (state.welcomeList[i].id === Number(action.eid)){
            //         state.welcomeList[i].isTeacher=action.isTeacher
            //         state.welcomeList[i].name=action.name
            //     }
            // }
            // return Object.assign({}, state);
            return Object.assign({}, state, {
                welcomeList: state.welcomeList.map((welcome)=> {
                    if(welcome.id === Number(action.eid)){
                        Object.assign({}, welcome, {
                            isTeacher: action.isTeacher,
                            name:action.name,
                        });
                    }
                    return welcome;
                })
            })
        default:
            return state;
    }
};

export default welcomeReducer;