import React from 'react'
import {connect} from 'react-redux'
import {totalExpense} from '../redux/Action'

class ExpenseTaker extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            expense:'',
            value:''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.itemRef[event.target.name] = event.target.value
        this.props.totalExpense()

    }

    componentDidUpdate() {
        if((this.props.total_income - this.props.total_expense) < 0) {
            this.props.callbackUpdateShowAlert(true)
            // console.log('plese check your expense...')
        }
        else{
            this.props.callbackUpdateShowAlert(false)
        }
    }

    handleDelete = () => {
        // console.log('delete : ', this.props.index)
    }

    render() {
        return (
            <>
                <div className='row mt-1'>
                    <div className='col-6'>
                        <input onChange={this.handleChange} name='expense' type='text' className='form-control' placeholder='Spent on'></input>
                    </div>
                    <div className='col-5'>
                        <input onChange={this.handleChange} name='value' type='text' className='form-control' placeholder='Amount spent'></input>
                    </div>
                    
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total_income: state.sources.total,
        total_expense: state.expenses.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        totalExpense: () => dispatch(totalExpense())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTaker)