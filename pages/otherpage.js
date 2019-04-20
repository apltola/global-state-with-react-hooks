import Layout from "../components/Layout";
import { other } from "../styles/styles_otherpage";

const Otherpage = () => {
  return (
    <Layout>
      <div className="other_page">
        <div className="a">
          <div className="a_absolute2"></div>
          <div className="a_content">
            <div className="card">
              this is a card
            </div>
            <div className="card">
              this is a card
            </div>
          </div>
        </div>


      </div>

      <style jsx>{other}</style>
    </Layout>
  );
}

export default Otherpage;