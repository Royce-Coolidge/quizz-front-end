import { connect } from "react-redux"; // this allows us to interact with the store
import Answer from "./Answer";

// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
let mapStateToProps = ( state ) => {
    return {
        answer: state.current.answer.answer, 
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Answer);