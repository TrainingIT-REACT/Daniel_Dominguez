import { connect } from "react-redux";
import View from "./AlbumsView";

import { getAlbums } from "../../redux/actions/albums";

const mapStateToProps = state => ({
  albums: state.albums.list,
  albumsHistory: state.history.albums
});

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
