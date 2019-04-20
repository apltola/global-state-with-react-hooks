import Head from './Head';
import { body } from '../styles/styles_global';
import { layout } from '../styles/styles_layout';

const Layout = props => {
  return (
    <div className="app">
      <Head />
      <header className="app_header">
        <h1>Global state management with react hooks</h1>
      </header>
      <div className="wrapper">
        {props.children}
      </div>
      <footer className="app_footer">
        this is a footer
      </footer>

      <style jsx>{layout}</style>
      <style jsx>{body}</style>
    </div>
  );
}

export default Layout;