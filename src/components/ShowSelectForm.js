import React from 'react';

const ShowSelectForm = props => {
    return (
        <div className='show-selection'>
            <select
                onChange={props.handleChange}
                value={props.selection}
            >
                <option value='futurama'>Futurama</option>
                <option value='stranger-things'>Stranger Things</option>
                <option value='breaking-bad'>Breaking Bad</option>
                <option value='dexter'>Dexter</option>
                <option value='spongebob-squarepants'>Spongebob</option>
            </select>
        </div>
    )
};

export default ShowSelectForm;