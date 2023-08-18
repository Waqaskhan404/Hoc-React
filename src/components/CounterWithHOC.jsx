import HighOrderComponent from './HighOrderComponent'
const CounterWithHOC = (props) => {

  return (
    <>
    <button onClick={props.handleIncrement}>Count {props.count}</button>
    </>
  )
}

export default HighOrderComponent(CounterWithHOC);