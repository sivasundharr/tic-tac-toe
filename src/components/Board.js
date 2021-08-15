import React, { Component } from 'react';
import Square from './Square';
import styled from 'styled-components/macro';


const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.15em 0.5em;
    font-family: Arial, Helvetica, sans-serif;
    font-size : 36px;
    font-weight : bold;
    &:hover{
        background-color:palevioletred;
        color:white;
    }
    `;

const Container = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
   
`;

const Message = styled.div`
 line-height:2rem;
 font-size:18px;
 font-weight:bolder;
`;

const Winner = styled.div`
    font-size:24px;
    color:red;
    margin:10px 0;
`

const handleWinner = squares =>{
    const list = [
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],

        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],

        ['0','4','8'],
        ['2','4','6'],
        
        
    ]
    for(let i=0;i<list.length;i++){
        const [a,b,c] = list[i];
        if(squares[a] && squares[a]===squares[b] && squares[a] === squares[c]){
            console.log("winner"+squares[a])
           
            return squares[a];
        }

    }
    return ''

}

const handleMatchTie = (squares) =>{

    let value = squares.length;
    let sum = 0;
    for(let i=0;i<squares.length;i++){
        if(squares[i] !=='')
            sum+=1;
    }
    if(sum === value)
        return sum
    else 
        return ''

}

class Board extends Component {
    state = { 
        squares : ['','','','','','','','',''],
        isNextX:true,
        messages : [],
        winMsg:''
    }

   
    


    handleClick = (number) =>{
       if(handleWinner(this.state.squares)||this.state.squares[number] 
                        || handleMatchTie(this.state.squares)){
           let x = handleWinner(this.state.squares);
           let y = handleMatchTie(this.state.squares);

           if(x){
            this.setState({winMsg:`Winner is ${x} !!!`});
           
           }
           if(y){
            this.setState({winMsg:'Match is Tied'});
           }
           
            
            return
           
          
       }

       const squares = [...this.state.squares];
       squares[number] = this.state.isNextX ? 'X' :'O';
       this.setState({winMsg:this.state.isNextX ? 'Next O': 'Next X'})
       this.setState({squares});

       const newMessage = this.state.isNextX ? `X is clicked at ${number}` : `O is clicked at ${number}`;
       const messages = [...this.state.messages,newMessage];
       this.setState({messages});

       let isNextX = !this.state.isNextX;
       this.setState({isNextX});

    }

    handleReset = () =>{
        const squares = ['','','','','','','','',''];
        this.setState({squares});
        const messages = [],winMsg='';
        this.setState({messages:messages,winMsg:winMsg});
    }

    
    render() { 
        
        return (
            <Container>
                <Winner>{this.state.winMsg}</Winner>
                <div className="row">
                <Square btn={this.state.squares[0]} onClick={()=>this.handleClick(0)}/>
                <Square btn={this.state.squares[1]} onClick={()=>this.handleClick(1)}/>
                <Square btn={this.state.squares[2]} onClick={()=>this.handleClick(2)}/>
                </div>
                <div className="row">
                <Square btn={this.state.squares[3]} onClick={()=>this.handleClick(3)}/>
                <Square btn={this.state.squares[4]} onClick={()=>this.handleClick(4)}/>
                <Square btn={this.state.squares[5]} onClick={()=>this.handleClick(5)}/>
                </div>
                <div className="row">
                <Square btn={this.state.squares[6]} onClick={()=>this.handleClick(6)}/>
                <Square btn={this.state.squares[7]} onClick={()=>this.handleClick(7)}/>
                <Square btn={this.state.squares[8]} onClick={()=>this.handleClick(8)}/>
                </div>
                <Button onClick={this.handleReset}>Reset</Button>
                {this.state.messages.map((msg,i)=>(
                    <Message key={i}>{msg}</Message>

                ))}
            </Container>
          );
    }
}
 
export default Board;