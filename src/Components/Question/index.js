import { connect } from "react-redux"; // this allows us to interact with the store
import Question from "./Question";

// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
let mapStateToProps = ({ current }) => {
    console.log(current.question);
    return {
        // question: current.question.question, 
    }
};

 
export default connect(mapStateToProps)(Question);