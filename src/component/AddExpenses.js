import React from 'react'
import {Link} from 'react-router-dom'
import ExpenseTaker from './ExpenseTaker'
import {connect} from 'react-redux'
import {addExpense, removeExpense, totalExpense} from '../redux/Action'


class AddExpenses extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            showAlert: false
        }
    }

    updateShowAlert = (flag) => {
        this.setState({
            showAlert: flag
        })
    } 

    handleClick = () => {
        const obj = {expense: '', value: 0}
        this.props.addExpense(obj)
    }

    handleRemove = () => {
        this.props.removeExpense()
        this.props.totalExpense()
    }

    render() {
        return (
            <div className='row border mt-4'>
            <div className='col-12 mb-3 mt-3'>
                {this.state.showAlert && <div class="alert alert-danger" role="alert">
                    Your expenses are crossing your income, please check !
                </div>}
                <h4 className='bg-primary p-3 text-white'>Add All Expenses</h4>
                <p className='text-muted'>* add info about your spend</p>
            </div>
            <div className='col-12'>
                    {this.props.expenses.map((item, index)=> {
                        return <ExpenseTaker key={index} callbackUpdateShowAlert={this.updateShowAlert} index={index} itemRef= {item} />
                    })}
                </div>
            
            <div className='col-12'>
                <hr/>
            </div>
            
            <div className='col-md-4 col-xs-12 mt-2'>
                <button className='btn btn-primary btn-sm mr-1' onClick={this.handleClick}>Add More</button>
                <button className='btn btn-primary btn-sm mr-1' onClick={this.handleRemove}>Remove</button>                
            </div>
            <div className='col-md-4 col-xs-12 mt-2'>
                <Link to='/expensesheet' className='btn btn-primary btn-sm'>Generate Expense Sheet</Link>
            </div>
            <div className='col-md-4 col-xs-12 mt-2'>
                <b>Money Left: {this.props.netIncome - this.props.total}/-</b>
            </div>
            <div className='col-12'>
                <hr/>
            </div>
            
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses.expenses,
        total: state.expenses.total,
        netIncome: state.sources.total

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (obj) => dispatch(addExpense(obj)),
        removeExpense: () => dispatch(removeExpense()),
        totalExpense: () => dispatch(totalExpense())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenses)