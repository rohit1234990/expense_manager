

const initSources = {
    salary: 0,
    total: 0,
    sources: []
}

const sourcesReducer = (state = initSources, action) => {
    const newState = {...state}
    switch(action.type) {
        case 'ADD_SOURCE':
            newState.sources = [...newState.sources, action.payload]
            return newState
        case 'ADD_SALARY':
            newState.salary =  Number(action.payload)
            return newState
        case 'REMOVE_SOURCE':
            newState.sources.pop()
            newState.sources = [...newState.sources]
            console.log('after removing : ', newState.sources)
            return newState
        case 'SHOW_TOTAL':
            newState.total = newState.salary + newState.sources.reduce((acc, item) => {
                return acc + Number(item['value'])
            },0)
            return newState
        default:
            return newState
    }

    
}


const initExpenses = {
    expenses: [{expense: '', value: 0}],
    total: 0
}

const expenseReducer = (state = initExpenses, action) => {
    const newState = {...state}
    switch(action.type) {
        case 'ADD_EXPENSE':
            newState.expenses = [...newState.expenses, action.payload]
            return newState
        case 'TOTAL_EXPENSE':
            //console.log(newState)
            newState.total = newState.expenses.reduce((acc, item) => {
                return acc + Number(item['value'])
            },0)
            return newState
        case 'REMOVE_EXPENSE':
            newState.expenses.pop()
            newState.expenses = [...newState.expenses]
            return newState
        default:
            return newState
    }
}


export {sourcesReducer, expenseReducer}