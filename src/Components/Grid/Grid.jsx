import React, { useState } from 'react';
import Card from '../Card/Card';
import './Grid.css';
import isWinner from '../../Helper/isWinner';

function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner,setWinner]= useState(null);
    function play(index){
        if(turn == true) {
            board[index] = 'O';
        }
        else{
            board[index] = 'X';
        }
        const win = isWinner(board , (turn ? 'O':'X'));
        if(win){
            setWinner(win)
        }
        setBoard([...board]);
        setTurn(!turn);
    }
    function reset(){
        setBoard(Array(numberOfCards).fill(""));
        setTurn(true)
        setWinner(null)
    }
    return (
        <div className='grid-wrapper'>
            {/* conditional rendering */}
            {
                winner && (
                    <>
                    <h1 className='myTurn'>Winner is :{winner}</h1>
                    <button onClick={()=> reset()}>Reset Game</button>
                    </>
                )
            }
            <h1 className='myTurn'>Current turn : {(turn)? 'O': 'X'}</h1>
            <div className='grid'>
                {/* {dynamic ui} */}
                {board.map((item, idx) => <Card  gameFinish={(winner) ? true : false } index={idx} player={item} onPlay={play}/>)}
            </div>
        </div>
    )
}

export default Grid
