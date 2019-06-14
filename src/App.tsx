import * as React from 'react';
import { store } from './store'
import * as action from './actions'
import './App.css';
import { IState } from "./reducers";
import { validateCommand } from "./helpers";

const App: React.FC = () => {
  const [inputs, setInputs] = React.useState([''])
  const [command, setCommand] = React.useState('')
  let state: IState = store.getState()

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value.toUpperCase())
  }

  const dispatchCommand = () => {
    const [commandString, parameters] = command.split(' ')

    if(validateCommand(command)) {

      setInputs([...inputs, command])
      setCommand('')

      if (commandString.includes('PLACE')) {
        const [xAxis, yAxis, facingDirection] = parameters.split(',')
        store.dispatch(action.place(Number(xAxis), Number(yAxis), facingDirection))
      }
      else if (commandString.includes('MOVE')) {
        store.dispatch(action.move())
      }
      else if (commandString.includes('LEFT')) {
        store.dispatch(action.faceLeft())
      }
      else if (commandString.includes('RIGHT')) {
        store.dispatch(action.faceRight())
      }
      else if (commandString.includes('REPORT')) {
        store.dispatch(action.report())
      }
      else if (commandString.includes('CLEAR')) {
        store.dispatch(action.clear())
        setInputs(['']) // resets the input to initial value
      }
    }else{
      window.alert("INCORRECT INPUT")
      setCommand('')
    }
  }

  const handleSubmitCommand = (event: React.SyntheticEvent) => {
    event.preventDefault()
    dispatchCommand()
  }

  return (
    <div className="App">
      <div className="App-block">
        <span>INPUTS:</span>
        <div className="App-block__inputted-commands">
          { inputs.map((input: string, index: number) => {
            if(input !== ''){
              return (<div key={index}>{input}</div>)
            }else{
              return null
            }
          })}
        </div>

        {state.reported &&
          <>
            <span>OUTPUT:</span>
            <div className="App-block__outputted-commands">
              <div>
                {`${state.xAxis},${state.yAxis},${state.facingDirection}`}
              </div>
            </div>
          </>
        }
        <form onSubmit={handleSubmitCommand} className="App-block__input-field">
          <input type="text" value={command} onChange={handleTextChange} name="name" className="App-block__input-field--command" placeholder="enter a command here..." />
        </form>

      </div>
    </div>
  );
}

export default App;
