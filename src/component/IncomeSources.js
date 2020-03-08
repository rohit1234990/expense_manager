import React from 'react'
import NewSource from './NewSource'
import {connect} from 'react-redux'
import {addSource, showTotal, addSalary,removeSource} from '../redux/Action'

class IncomeSources extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            sourceSalary: ''
        }
    }

    handleClick = () => {
        const obj = {source: undefined, value: 0}
        this.props.addSource(obj)

        // console.log('check this out', this.state)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: [event.target.value]
        })

        console.log(event.target.value)
        this.props.addSalary(event.target.value)
        this.props.showTotal()
    }
    
    handleRemove = () => {
        // console.log('delete : ', this.props.itemRef.source)
        this.props.removeSource()
        this.props.showTotal()
    }

    render() {
        // console.log('look into props', this.props)
        return (
            <   div className='row border'>
                <div className='col-12 mb-3'>
                    <h4 className='mt-2 bg-primary p-3 text-white'>Add Income Sources</h4>
                    <p className='text-muted'>* add info about your income sources</p>
                </div>
                <div className='col-md-6'>
                    Salary
                </div>
                <div className='col-md-6'>
                    <input name='sourceSalary' value={this.state.sourceSalary} onChange={this.handleChange} className='form-control' placeholder='Enter salary amount' type='text'></input>
                </div>
                <div className='col-md-12'>
                    {this.props.sources.map((item, index)=> {
                        return <NewSource index={index} itemRef= {item} />
                    })}
                </div>
                <div className='col-12'>
                    <hr/>
                </div>
                <div className='col-md-4 col-xs-12'>
                    <button className='btn btn-primary btn-sm mr-2' onClick={this.handleClick}>Add More</button>
                    <button className='btn btn-primary btn-sm' onClick={this.handleRemove}>Remove</button>
                </div>
                <div className='col-md-4 offset-md-4 col-xs-12 mt-2'>
                    <b>Net Income: { this.props.total}/-</b>
                </div>

                <div className='col-md-12'>
                    <hr/>
                </div>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSource: (obj) => dispatch(addSource(obj)),
        showTotal: () => dispatch(showTotal()),
        addSalary: (salary) => dispatch(addSalary(salary)),
        removeSource: () => dispatch(removeSource())
    }
}

const mapStateToProps = (state) => {
    return {
        sources: state.sources.sources,
        total: state.sources.total
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeSources)