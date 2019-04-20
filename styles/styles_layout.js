import css from 'styled-jsx/css';

export const layout = css`
  .app {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
  }

  .app_header {
    padding: 2rem 1rem;
    box-shadow: 0px -9px 39px 0px rgba(214,214,214,1);
  }
  
  .app_header h1 {
    margin: 0;
  }

  .wrapper {
    padding: 2rem 1rem;
    flex-grow: 1;
  }

  .app_footer {
    padding: 1rem;
    min-height: 130px;
    background-color: #2b2b2b;
    color: #ddd;
  }
`;