import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { getArtistById, getArtistAlbums } from "./data/actions";
import { getArtist } from "./data/selectors";

import { Main } from "./Main";

const mapStateToProps = ({ artist }, ownProps) => ({
  artist: getArtist(artist, ownProps),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getArtistById, getArtistAlbums }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
