import React from "react";

import withPlaylist from "./withPlaylist";
import SongsListComponent from "./songslist.component";
import PaginatorComponent from "./paginator.component";

const PlaylistComponent = (props) => {
  return (
    <div className="playlist">
      <span>Плейлист</span>
      <SongsListComponent songs={props.songs} sorting={props.sorting} sortAction={props.sortAction}/>
      <PaginatorComponent pages={props.pages}/>
    </div>
  );
};

export default withPlaylist(PlaylistComponent);
