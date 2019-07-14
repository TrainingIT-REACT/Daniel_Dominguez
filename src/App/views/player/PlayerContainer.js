import { connect } from "react-redux";
import PlayerView from "./PlayerView";

import { getSongs } from "../../redux/actions/songs";

const mapStateToProps = state => ({
  songs: state.songs.list
});

const mapDispatchToProps = dispatch => ({
  getSongs: () => dispatch(getSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerView);
