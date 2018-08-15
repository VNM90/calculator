import React from 'react'
import { connect } from 'react-redux'
import { addCalculatorAction, substractCalculatorAction, sumCalculatorAction, resetCalculatorAction, inputAction } from '../state/calculator';

const styles = {
    center: {
        textAlign: 'center'
    }
}

const Calculator = (props) => (
    <div style={styles.center}>
        <div>
            <input 
            type='text'
            style = {{textAlign: 'right'}}
            disabled={true}
            value={props._isResultShown ? props._result : props._input}
            />
            </div>
        <div>
            <button onClick={props._addCalculatorAction}>+</button>
            <button onClick={props._substractCalculatorAction}>-</button>
            <button onClick={props._sumCalculatorAction}>=</button>
        </div>
        <div>
            <button onClick={() => props._inputAction(1)}>1</button>
            <button onClick={() => props._inputAction(2)}>2</button>
            <button onClick={() => props._inputAction(3)}>3</button>
        </div>
        <div>
            <button onClick={() => props._inputAction(4)}>4</button>
            <button onClick={() => props._inputAction(5)}>5</button>
            <button onClick={() => props._inputAction(6)}>6</button>
        </div>
        <div>
            <button onClick={() => props._inputAction(7)}>7</button>
            <button onClick={() => props._inputAction(8)}>8</button>
            <button onClick={() => props._inputAction(9)}>9</button>
        </div>
        <div> <button onClick={() => props._inputAction(0)}> 0 </button> </div>
        <div> <button onClick={() => props._resetCalculatorAction()}> RESET </button> </div>
    </div>
)


const mapStateToProps = state => ({
_input: state.calculator.input,
_result: state.calculator.result,
_isResultShown: state.calculator.isResultShown
})

const mapDispatchToProps = dispatch => ({
    _inputAction: number => dispatch(inputAction(number)),
    _addCalculatorAction: () => dispatch(addCalculatorAction()),
    _substractCalculatorAction: () => dispatch(substractCalculatorAction()),
    _sumCalculatorAction: () => dispatch(sumCalculatorAction()),
    _resetCalculatorAction: () => dispatch(resetCalculatorAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator)