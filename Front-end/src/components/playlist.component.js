import React from "react";

import withPlaylist from "./withPlaylist";
import PlaylistContainerComponent from "./playlist.container.component";

const PlaylistComponent = (props) => {
  return (
    <div className="playlist">
      <span>Плейлист</span>
      <PlaylistContainerComponent {...props}/>
    </div>
  );
};

export default withPlaylist(PlaylistComponent);
