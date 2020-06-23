import React from 'react';
import './TableCellComp.css'

class TableCellComp extends React.Component{
    
    
    render(){
        
       let addedClass = (this.props.playerData.tableCell[this.props.x+this.props.y])? this.props.playerData.tableCell[Number(this.props.x+this.props.y)]:'';
       let winnerClass = (this.props.playerData.winningCell[this.props.x+this.props.y])? this.props.playerData.winningCell[Number(this.props.x+this.props.y)]:'';

        return <div className={'tableCellComp'+addedClass+winnerClass} onClick={(e)=>this.props.clickCell(e)} id={this.props.x + this.props.y}></div>
    }
        
}

export default TableCellComp;