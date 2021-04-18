import "./styles.css";
import PropTypes from "prop-types";

const Test = (props) => {
  return (
    <div>
      <h1>{props.str}</h1>
      <h1>{props.bool ? "bool" : "no bool"}</h1>
      <h1>{props.strOrNum}</h1>
      <div>
        {props.ary.map((val) => {
          return <li key={val}>{val}</li>;
        })}
      </div>
      <div>
        {props.arrOfObj.map((val) => {
          return <li key={val.age}>{val.name}</li>;
        })}
      </div>
      <h1>{props.children}</h1>
    </div>
  );
};

Test.propTypes = {
  str: PropTypes.string,
  bool: PropTypes.bool,
  strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  arrOfObj: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number
    })
  ),
  children: PropTypes.element.isRequired
};

export default function App() {
  return (
    <div className="App">
      <Test
        str={"Shashank"}
        bool
        strOrNumber={true}
        ary={[1, 2, 3]}
        arrOfObj={[
          { name: "john", age: 10 },
          { name: "peter", age: 20 }
        ]}
      >
        <div>Children</div>
        <div>Children</div>
        <div>Children</div>
      </Test>
    </div>
  );
}
