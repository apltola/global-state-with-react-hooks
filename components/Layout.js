import Head from './Head';
import { body } from '../styles/styles_global';
import { layout } from '../styles/styles_layout';

const Layout = props => {
  return (
    <div className="app">
      <Head />
      <div className="wrapper">
        <h1>Global state management with react hooks</h1>
        {props.children}
      </div>

      <style jsx>{layout}</style>
      <style jsx>{body}</style>
    </div>
  );
}

export default Layout;