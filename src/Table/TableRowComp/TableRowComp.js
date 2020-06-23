import React from 'react';
import './TableRowComp.css'
import TableCellComp from '../TableCellComp/TableCellComp'

const TableRowComp = (props)=>{
    return <div className='tableRowComp'>
        <TableCellComp clickCell={props.clickCell} x={props.x} y={0} playerData={props.playerData}/>
        <TableCellComp clickCell={props.clickCell} x={props.x} y={1} playerData={props.playerData}/>
        <TableCellComp clickCell={props.clickCell} x={props.x} y={2} playerData={props.playerData}/>
    </div>
}

export default TableRowComp;