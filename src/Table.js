import {React, Component} from "react";

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props
        return(
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}
const TableHeader = () => {
    return (
        <thead>
            <th>No.</th>
            <th>Name</th>
            <th>Job</th>
            <th>Action</th>
        </thead>
    )
}
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=> props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return (

        <tbody>
        {rows}
        </tbody>
    )
}
export default Table