import "./header.css";
import logo from "../components/logo.png";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul className="header">
//         <li>
//           <Link to="/">
//             <img className="logo" src={logo} alt="logo"></img>
//           </Link>
//         </li>
//         <li>
//           <Link className="pulse" to="/contact">
//             Contact
//           </Link>
//         </li>
//       </ul>
//       <Routes>
//         <Route exact path="/" component={Home} />
//         <Route path="/Contact" component={Contact} />
//       </Routes>
//     </div>
//   </Router>
// );

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const Contact = () => (
//   <div>
//     <h2>Contact</h2>
//   </div>
// );

// // const Topics = ({ match }) => (
// //   <div>
// //     <h2>Topics</h2>
// //     <ul>
// //       <li>
// //         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
// //       </li>
// //       <li>
// //         <Link to={`${match.url}/components`}>Components</Link>
// //       </li>
// //       <li>
// //         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
// //       </li>
// //     </ul>

// //     <Route path={`${match.url}/:topicId`} component={Topic} />
// //     <Route
// //       exact
// //       path={match.url}
// //       render={() => <h3>Please select a topic.</h3>}
// //     />
// //   </div>
// // );

// // const Topic = ({ match }) => (
// //   <div>
// //     <h3>{match.params.topicId}</h3>
// //   </div>
// // );

// export default BasicExample;

function header() {
  return (
    <div className="header ">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo"></img>
        </a>
      </div>
      <div>
        <a className="pulse" href="../components/Contact.js">
          Contact
        </a>
      </div>
    </div>
  );
}
export default header;
