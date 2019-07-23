import React from 'react'
import PropTypes from 'prop-types'
import Structure from './structure'

function index(props) {
    return (
        <React.Fragment>
            <Structure data={props.data}/>
        </React.Fragment>
    )
}

index.propTypes = {

}

export default index

