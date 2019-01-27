import React, {Fragment} from "react";
import PreloaderComponent from "./preloader.component";
import ErrorComponent from "./error.component";

const SongsListComponent = (props) => {

  const setSort = (column) => {
    if (props.SORTING.hasOwnProperty(column)) {
      return props.SORTING[column];
    } else {
      return 0;
    }
  };
  return (
    <Fragment>


      <table>
        <tbody>
        <tr onClick={props.sortAction}>
          <th className="singer" data-sort={setSort("singer")}>Исполнитель</th>
          <th className="song" data-sort={setSort("song")}>Песня</th>
          <th className="genre" data-sort={setSort("genre")}>Жанр</th>
          <th className="year" data-sort={setSort("year")}>Год</th>
        </tr>
        {(props.loading[1]) ? <tr><td className="preloader__row" colSpan="4"><div className="preloader__row__container"><PreloaderComponent/></div></td></tr> :
          props.isError[1] ? <tr><td className="preloader__row" colSpan="4"><ErrorComponent/></td></tr> :
          props.dataList.SONGS === undefined ? <tr/> : props.dataList.SONGS.map((item, i) => <tr key={i}>
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

export default SongsListComponent;
