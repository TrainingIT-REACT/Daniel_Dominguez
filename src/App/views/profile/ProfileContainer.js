import { connect } from "react-redux";
import View from "./ProfileView";

import { cleanHistory } from "../../redux/actions/history";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  cleanHistory: () => dispatch(cleanHistory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
