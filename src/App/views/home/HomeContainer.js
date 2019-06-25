import { connect } from "react-redux";
import HomeView from "./HomeView";

import { getAlbums } from "../../redux/actions/albums";
import { getSongs } from "../../redux/actions/songs";

const mapStateToProps = state => ({
  albums: state.albums.list,
  songs: state.songs.list
});

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums()),
  getSongs: () => dispatch(getSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
