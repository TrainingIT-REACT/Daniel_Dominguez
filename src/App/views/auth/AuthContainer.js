import { connect } from "react-redux";
import View from "./AuthView";

import { login } from "../../redux/actions/user";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
