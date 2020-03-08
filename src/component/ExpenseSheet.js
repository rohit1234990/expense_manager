import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class ExpenseSheet extends React.Component {

    capilaize = (str) => {
        console.log('value of str : ', str)
        if (str === undefined || str === '')
            return str

        str = str[0].toUpperCase() + str.slice(1)
        return str
    }

    render() {
        console.log( ' lets look into props : ',  this.props)
        return (
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-8 offset-2'>
                        <h4 className='bg-primary text-white p-3'>All Earnings</h4> 
                        <table className='table'>
                            <thead>
                                <tr>
                                    <td><b>Source</b></td>
                                    <td><b>Amount</b></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Salary</td>
                                    <td>{this.props.salary}</td>
                                </tr>
                                {this.props.sources.map((item) => {
                                    return <tr>
                                                <td>{this.capilaize(item['source'])}</td>
                                                <td>{item['value']}</td>
                                           </tr>
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td><b>Total Earning</b></td>
                                    <td>{Number(this.props.salary) + this.props.sources.reduce((acc, item) => {
                                        return acc + Number(item['value'])
                                    },0)}/-</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-8 offset-2'>
                        <h4 className='bg-primary text-white p-3'>All Spends</h4> 
                        <table className='table'>
                            <thead>
                                <tr>
                                    <td><b>Spent On</b></td>
                                    <td><b>Amount</b></td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.expenses.map((item) => {
                                    return <tr>
                                                <td>{this.capilaize(item['expense'])}</td>
                                                <td>{item['value']}</td>
                                           </tr>
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td><b>Total Spend</b></td>
                                    <td>{this.props.expenses.reduce((acc, item) => {
                                        return acc + Number(item['value'])
                                    },0)}/-</td>
                                </tr>
                            </tfoot>
                        </table>

                        <Link to='/' className='btn btn-sm btn-primary'>Go Back</Link>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        salary: state.sources.salary,
        sources: state.sources.sources,
        expenses: state.expenses.expenses,
    }
}

export default connect(mapStateToProps, null)(ExpenseSheet)