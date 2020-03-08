import React from 'react'
import {connect} from 'react-redux'
import {showTotal, removeSource} from '../redux/Action'

class NewSource extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            source:'',
            value:''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.itemRef[event.target.name] = event.target.value
        this.props.showTotal()
    }

    
    render() {
        console.log(this.props)
        return (
            <>
                <div className='row mt-1'>
                    <div className='col-6'>
                        <input onChange={this.handleChange} name='source' type='text' className='form-control' placeholder='Enter income source'></input>
                    </div>
                    <div className='col-6'>
                        <input onChange={this.handleChange} name='value' type='text' className='form-control' placeholder='Enter amount'></input>
                    </div>
                   
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showTotal: () => dispatch(showTotal()),
        removeSource: (index) => dispatch(removeSource(index))
    }
}

export default connect(null, mapDispatchToProps)(NewSource)