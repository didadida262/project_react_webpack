import React from "react"


const renderComponents = (props) => {
    console.log(props)
    return (
        <div>
            { props.children }
        </div>
    )
}

export default renderComponents