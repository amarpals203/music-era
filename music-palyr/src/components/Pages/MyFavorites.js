import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import classes from "./AllMusicList.module.css";

function MyFavorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p className={classes.noAnyFavorites}>
        No any favorites music. Click on favorite (love) icon to start adding
        some.
      </p>
    );
  } else {
    content = (
      <div className={classes.card}>
        {favoritesCtx.favorites.map((list) => (
          <div key={list.id} className={classes.margin}>
            <div className={classes.countContainer}>
              <h1>{favoritesCtx.favorites.indexOf(list) + 1}</h1>
            </div>
            <div className={classes.image}>
              <img src={list.img_src} alt={`img${list.id}`} />
            </div>
            <div className={classes.ellipsis}>
              <span className={classes.title} title={list.title}>
                Name: {list.title}
              </span>
              <br />
            </div>
            <div className={classes.ellipsis}>
              <span className={classes.title} title={list.artist}>
                Artist: {list.artist}
              </span>
              <br />
            </div>
            <br />
          </div>
        ))}
      </div>
    );
  }

  return <div>{content}</div>;
}

export default MyFavorites;
