import React from 'react'
import {Dropdown} from 'semantic-ui-react'
const options = [
    { key: '1', text: 'Free', value: true },
]
function FilterToggle({toggleCost}) {

    return (
    <Dropdown onChange={toggleCost} clearable options={options} selection placeholder="Filter by Free" />
    )
}

export default FilterToggle;


















// export default FilterToggle;