

const Pagination = ({itemsPerPage, totalItems, paginate, nextPage,  prevPage, currentPage, OnClickBtn, activeButton}) => {
    
    const pageNumbers = []
    const totalPages = Math.ceil(totalItems/itemsPerPage);
    for (let index = 1; index <= Math.ceil(totalItems/itemsPerPage); index++) {
        pageNumbers.push(index);
    }
    
    return (
        <div>
            <ul className="pagination">
                <button className="button" onClick={currentPage !== 1 ? prevPage : null} disabled={currentPage === 1}>prev</button>
                {
                    pageNumbers.map(number => {
                        const className = activeButton == number ? "active" : "";
                        console.log(activeButton)
                        return (
                        <li className="page-item" key={number}>
                            <button  className={`${className} button`} number={number}   onClick={(e) => {
                             paginate(number)
                             OnClickBtn(e)  
                            }}>
                                {number}
                            </button>
                        </li>
                        )
                    })
                }
                <button className="button" onClick={totalPages !== currentPage ? nextPage : null} disabled={currentPage === totalPages}>next</button>
            </ul>
        </div>
    )
}

export default Pagination;