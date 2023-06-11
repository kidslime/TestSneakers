import { useState } from "react";

const Card = ({id, title, price, imageUrl, onAddFavorite,onRemoveFavorite, favorited = false, favoriteChecker}) => {

    
  
    return (
        <div className="card">
          <div className="favorite">

            {favoriteChecker ? (
              <img src="/img/heart-liked.svg" onClick={onRemoveFavorite} alt="Понравившиеся" />
            ): (
              <img src="/img/heart-unliked.svg" onClick={onAddFavorite} alt="Понравившиеся" />
            )

            }

            
          </div>
          <img width={133} height={112} src={imageUrl} alt="Кроссовки" />
          <h4 className="cardTitle" >{title}</h4>
          <div className="cardBottom">
            <div>
              <p className="cardPriceLabel">Цена:</p>
              <b className="cardPrice">{price} руб.</b>
            </div>
          </div>
        </div>
    );
}

export default Card;