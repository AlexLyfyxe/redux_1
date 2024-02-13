const startNum = {
    num: 0
}

export default function reducer(state = startNum, action) {

    if (action.type === 'INCREMENT') {
        return { num: state.num + 1 }
    }
    else if (action.type === 'DECREMENT' && state.num > 0) {
        return { num: state.num - 1 }
    }
    else if (action.type === 'ZERO') {
        return { num: state.num = 0 }
    }
    else if (action.type === 'PLUS_TEN') {
        return { num: state.num + 10 }
    }

    return state
}