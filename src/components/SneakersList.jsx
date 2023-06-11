import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Pagination from "./Pagination";
import { useAppContext } from "./context/appContext";
function SneakersList() {

  const [items, setItems] = useState([]);

  const {favorites, addToFavorites, removeFromFavorites} = useAppContext();

  const [currentPage, setCurrentPage] = useState(1)
  const [activeButton, setActiveButton] = useState(1);
  const [itemsPerPage] = useState(4)
  const onSideBtnClick = e => {
      const pageNumber = e.target.innerText;
      setActiveButton(pageNumber);
  };

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = items.slice(firstItemIndex, lastItemIndex)

  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  }

  function nextPage(){
    setCurrentPage(prev => prev + 1) 
    setActiveButton(prev => prev + 1);
  }

  function prevPage(){
    setCurrentPage(prev => prev - 1)
    setActiveButton(prev => prev - 1);
  }

  

  const favoriteChecker = (id) => {
    const bolean = favorites.some(sneakers => sneakers.id === id)
    return bolean;
  }
  
  useEffect(() => {
    axios.get('https://64843f8cee799e3216266c59.mockapi.io/sneakers').then(res => setItems(res.data));
    
  }, []) 

  return (
    <div className="content">
    <div className="contentTop">
      <h1>Все кроссовки</h1>
    </div>
    <div className="sneakers">
    {
            currentItem.map(el =>(
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
    <Pagination itemsPerPage={itemsPerPage}  totalItems={items.length} paginate={paginate} prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} activeButton={activeButton} OnClickBtn={onSideBtnClick}/>
  </div>
)
}

export default SneakersList;