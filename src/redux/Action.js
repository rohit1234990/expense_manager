const addSalary = (salary) => {
    return {
        type: 'ADD_SALARY',
        payload: salary
    }
}

const addSource = (obj) => {
    return {
        type: 'ADD_SOURCE',
        payload: obj
    }
}


const showTotal = () => {
    return {
        type: 'SHOW_TOTAL'
    }
}

const removeSource = (index) => {
    return {
        type: 'REMOVE_SOURCE',
        payload: index
    }
}

const addExpense = (obj) => {
    return {
        type: 'ADD_EXPENSE',
        payload: obj
    }
}

const removeExpense = () => {
    return {
        type: 'REMOVE_EXPENSE'
    }
}

const totalExpense = () => {
    return {
        type: 'TOTAL_EXPENSE'
    }
}


export {addSource, removeSource, showTotal, addSalary, addExpense, totalExpense, removeExpense}