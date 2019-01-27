import React, {Fragment} from "react";

import withSongsList from "./withSongsList";

const SongsListComponent = (props) => {
  function setSort(column) {
    if (props.sorting.hasOwnProperty(column)) {
      return props.sorting[column];
    } else {
      return 0;
    }
  }

  return (
    <Fragment>
      <table>
        <tbody>
        <tr onClick={props.item}>
          <th className="singer" data-sort={setSort("singer")}>Исполнитель</th>
          <th className="song" data-sort={setSort("song")}>Песня</th>
          <th className="genre" data-sort={setSort("genre")}>Жанр</th>
          <th className="year" data-sort={setSort("year")}>Год</th>
        </tr>
        {props.songs === undefined ? <tr/> : props.songs.map((item, i) => <tr key={i}>
          <td>{item.singer}</td>
          <td>{item.title}</td>
          <td>{item.genre}</td>
          <td>{item.year}</td>
        </tr>)}
        </tbody>
      </table>
    </Fragment>
  );
};

export default withSongsList(SongsListComponent);
