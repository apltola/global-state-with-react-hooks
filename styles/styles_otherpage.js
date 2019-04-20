import css from 'styled-jsx/css';

export const other = css`
  .a {
    //border: 1px solid rgb(234, 234, 234);
    position: relative;
    height: 40vh;
    margin: -2rem -1rem 1rem -1rem;
    padding: 1rem;

    background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0));
    background-size: 28px 28px;
  }

  .a_content {
    height: 100%;
    padding: 2rem 1rem;
    display: flex;
    flex-flow: row wrap;
  }

  .card {
    border: 1px solid #e5e5e5;
    width: 200px;
    height: 300px;
    background-color: #fff;
    margin-right: 1rem;
  }
`;