import React from 'react'

// class Route extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {}
//   }

//   componentDidMount() {
//     this.setState({view: React.createElement(this.props.component)})
//   }

//   componentWillUnmount() {
//     this.setState({view: undefined})
//   }

//   render() {
//     return (
//       <div>
//         {this.state.view ? this.state.view : undefined}
//       </div>
//     )
//   }

// }

// export default Route


function Route(props) { 

    let [view, setView] = React.useState(<div></div>)
 
    React.useEffect(() => {
        let newView = React.createElement(props.component)
            setView(newView)
        return () => {
            setView(undefined)
        }
    },[])

    return (
        <div>
            {view ? view : undefined}
        </div>     
    )
}

export default Route