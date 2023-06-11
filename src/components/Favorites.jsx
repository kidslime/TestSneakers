
import { useAppContext } from "./context/appContext";

import Card from "./Card";
function Favorites() {


    

    const {favorites, addToFavorites, removeFromFavorites} = useAppContext();
    
    console.log(favorites)
    const favoriteChecker = (id) => {
        const bolean = favorites.some(sneakers => sneakers.id === id)
        return bolean;
    }

    return (
        <div className="content">
        <div className="contentTop">
          <h1>Все кроссовки</h1>
        </div>
        <div className="sneakers">
        {
                favorites.map(el =>(
                  <Card
                    key={el.id}
                    favoriteChecker={favoriteChecker(el.id)}
                    onAddFavorite={() => addToFavorites(el)}
                    onRemoveFavorite={() => removeFromFavorites(el.id)}
                    {...el}
                  />
                ))
              }
        </div>
        
      </div>
    );
}

export default Favorites;