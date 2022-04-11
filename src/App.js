import Home from "./pages/Home/Home";
// import Page1 from "./pages/page1/Page1";
import About from "./pages/about/About";
import Page2 from "./pages/page2/Page2";
import Page3 from "./pages/page3/Page3";
import Page4 from "./pages/page4/Page4";
import Page5 from "./pages/page5/Page5";
import Page6 from "./pages/page6/Page6";
import Page7 from "./pages/page7/Page7";
import Page8 from "./pages/page8/Page8";
import Page9 from "./pages/page9/Page9";
import Page10 from "./pages/page10/Page10";
import Page11 from "./pages/page11/Page11";
import Page12 from "./pages/page12/Page12";
import Page13 from "./pages/page13/Page13";
import Page14 from "./pages/page14/Page14";
import Page15 from "./pages/page15/Page15";
import Page16 from "./pages/page16/Page16";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`

function App() {
  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/page2' component={Page2} />
          <Route exact path='/page3' component={Page3} />
          <Route exact path='/page4' component={Page4} />
          <Route exact path='/page5' component={Page5} />
          <Route exact path='/page6' component={Page6} />
          <Route exact path='/page7' component={Page7} />
          <Route exact path='/page8' component={Page8} />
          <Route exact path='/page9' component={Page9} />
          <Route exact path='/page10' component={Page10} />
          <Route exact path='/page11' component={Page11} />
          <Route exact path='/page12' component={Page12} />
          <Route exact path='/page13' component={Page13} />
          <Route exact path='/page14' component={Page14} />
          <Route exact path='/page15' component={Page15} />
          <Route exact path='/page16' component={Page16} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
