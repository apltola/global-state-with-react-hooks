import { useState, useEffect } from 'react';
import globalHook from '../store';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

const Index = () => {
  const [globalState, globalActions] = globalHook();
  const [children, setChildren] = useState([]);

  const addCounter = () => {
    globalActions.addNewCounter();
  }
  
  useEffect(() => {
    const counter = (
      <Counter key={globalState.counterComponents}
        index={globalState.counterComponents}
        rendered={new Date().toLocaleTimeString()}/>
    );

    const newChildren = [...children, counter];
    setChildren(newChildren);

  }, [globalState.counterComponents])

  return (
    <Layout>
      <div>
        <button onClick={addCounter} className="add_btn">
          <div className="btn_text">
            add new counter component
          </div>
        </button>
      </div>
      {children}

      <style jsx>{`
        .add_btn {
          color: #fff;
          font-size: 1.1rem;
          background-color: #099cec;
          border: 1px solid #099cec;
          border-radius: 5px;
          margin-bottom: 2rem;
          margin-top: 1rem;
          outline: none;
          transition: background-color .1s cubic-bezier(.25,.8,.25,1),
                      border-color .2s cubic-bezier(.25,.8,.25,1);
        }

        .add_btn:active {
          background-color: #0880C2;
          border: 1px solid #0880C2;
        }

        .btn_text {
          line-height: 32px;
          padding: 0 .5rem;
          text-align: center;
          display: flex;
          align-items: center;
          align-content: center;
        }
      `}</style>
    </Layout>
  );
}

export default Index;