import React from 'react';
import TableRowComp from './TableRowComp/TableRowComp';
import './Table.css';
var playerWinData=[
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['0','4','8'],
    ['2','4','6'],
];
var player1Data=[];
var player2Data=[];
var winnerBlock;
class Table extends React.Component{
    constructor(){
        super();
        this.state = {
            player1:true,
            player2:false,
            winner:null,
            drawMatch:false,
            tableCell:Array(9).fill(null),
            winningCell:Array(9).fill(null)
        }
    }
    onResetClick=()=>{
        this.setState({
            player1:true,
            player2:false,
            winner:null,
            drawMatch:false,
            tableCell:Array(9).fill(null),
            winningCell:Array(9).fill(null)
        })
        player1Data=[];
        player2Data=[];
        winnerBlock=null;
    }
  
    onCellClick=(e)=>{
        var currCell = Number(e.target.getAttribute('id'));
        this.state.tableCell.splice(currCell,1,this.state.player1? ' Cross':' Zero')
            this.setState(prevState=>({
                player1:!prevState.player1,
                player2:!prevState.player2,
                tableCell:this.state.tableCell
            }))
        

        if(this.state.player1){
            
            player1Data.push(e.target.getAttribute('id'));
            if(player1Data.length >= 3)
            {
                   for(let i=0;i<playerWinData.length;i++)
                   {
                        let is_same = playerWinData[i].every(function(element, index) {
                            return player1Data.includes(element);
                        });
                        if(is_same){
                            console.log('Player 1 win',i);
                            winnerBlock = i;
                            this.setState({winner:'Player 1'});
                            break;
                        }
                        else{
                            if(player1Data.length === 5)
                            {
                                this.setState({drawMatch:true});
                            }
                        }
                    }
                
            }
        }
        else if(this.state.player2){
            
            player2Data.push(e.target.getAttribute('id'));
            if(player2Data.length >= 3)
            {
                for(let i=0;i<playerWinData.length;i++)
                   {
                        let is_same = playerWinData[i].every(function(element, index) {
                            return player2Data.includes(element); 
                        });
                        if(is_same){
                            console.log('Player 2 win',i);
                            winnerBlock = i;
                            this.setState({winner:'Player 2'});
                            break;
                        }
                    }
            }
        }
        if(winnerBlock || winnerBlock===0){
            playerWinData[winnerBlock].forEach((e,i)=>{  
                 this.state.winningCell.splice(playerWinData[winnerBlock][i],1,' winnerBlock')
                    this.setState(prevState=>({
                        winningCell:this.state.winningCell
                    }))

             })
        }
    }
    
    render(){
        return (
        <React.Fragment>
            <div className = {this.state.winner?'mainTable disableTable':'mainTable'}>
                <TableRowComp clickCell={this.onCellClick} x={0} playerData={this.state}/>
                <TableRowComp clickCell={this.onCellClick} x={3} playerData={this.state}/>
                <TableRowComp clickCell={this.onCellClick} x={6} playerData={this.state}/>
            </div>
            {this.state.player1 && !this.state.winner && !this.state.drawMatch?<div>Player 1 Turn</div>:null}
            {this.state.player2 && !this.state.winner && !this.state.drawMatch?<div>Player 2 Turn</div>:null}
            {this.state.winner?<div className='winnerPlayer'>{this.state.winner} WON</div>:null}
            {this.state.drawMatch && !this.state.winner?<div className='winnerPlayer'>!!! Draw Match !!!</div>:null}
            <button className='resetBtn' onClick={this.onResetClick}>Reset</button>
        </React.Fragment>
        )
    }
}

export default Table;