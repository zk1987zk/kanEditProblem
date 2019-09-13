export const ADD = 'ADD';
export const DEL = 'DEL';
export const DELALL = 'DELALL';
export const EDIT = 'EDIT';

export const add = (name, isTeacher, id) => {
    return {
        type: ADD,
        name: name,
        isTeacher: isTeacher,
        id: id,
    };
}

export const del = (delid) => {
    return {
        type: DEL,
        delid:delid,
    }
}

export const delAll = () => {
    return {
        type: DELALL,
    }
}

export const edit = (eid, name, isTeacher) => {
    return {
        type: EDIT,
        eid: eid,
        name: name,
        isTeacher: isTeacher,
    };
}