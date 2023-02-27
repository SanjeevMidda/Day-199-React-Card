import "./styles.css"
import Card from "./components/Card";

function App() {

  return (
    <div className="layout">
      <Card 
        image = "https://www.lowyinstitute.org/sites/default/files/styles/interpreter_article_image/public/GettyImages-1134201090.jpeg?itok=8o5Bgxq8"
        alt = "personOne"
        name = "Gugu"
        email = "gugu@korea.com"
      />

      <Card 
        image = "https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0"
        alt = "personTwo"
        name = "Mugu"
        email = "mugu@london.com"
      />
    </div>
  );
}

export default App;
