import globalHook from '../store';

const Counter = ({ index, rendered }) => {
  const [globalState, globalActions] = globalHook();

  return (
    <div>
      <fieldset>
        <legend>{`Counter ${index}`}</legend>
        <div className="counter_content">
          <div>
            Global count: {globalState.counterValue}
          </div>
          <div className="counter_buttons">
            <button onClick={() => globalActions.plusCount()}>
              add to global
            </button>
            <button onClick={() => globalActions.minusCount()}>
              remove from global
            </button>
          </div>
          <div>
            {`Rendered at: ${rendered}`}            
          </div>
        </div>
      </fieldset>

      <style jsx>{`
        fieldset {
          border: 1px solid #000;
          padding: 1rem;
          max-width: 400px;
          margin-bottom: 1rem;
          margin-top: 1rem;
        }

        legend {
          border: 1px solid #000;
          padding: 5px 10px;
        }

        .counter_buttons {
          padding: .75rem 0;
        }

        .counter_buttons button {
          margin-right: .5rem;
        }
      `}</style>
    </div>
  )
}

export default Counter;