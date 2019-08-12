import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Main } from "./Main";

const mapStateToProps = ({ track }) => ({
    track: track.selected,
    isPlaying: track.isPlaying
});

export default connect(
  mapStateToProps,
  undefined,
)(Main);
