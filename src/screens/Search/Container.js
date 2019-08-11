import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getAllTracks, isSearching } from "./data/selectors";
import { searchArtists, searchTracks } from "./data/actions";

import { Main } from "./Main";

const mapStateToProps = ({ search }) => ({
  tracks: getAllTracks(search),
  isLoading: isSearching(search)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ searchTracks, searchArtists }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
