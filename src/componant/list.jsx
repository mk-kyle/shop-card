const List = ({ removeHandler, shopCards, editorHandler }) => {
    return (
        shopCards.map((items, index) => {
            return (
                <div key={`${index}`}>
                    <p key={`container-${index}`}>{items.title} </p>
                    <span key={`title-${index}`}>{items.counts} </span>
                    <span key={`unit-${index}`}>{items.unit} </span>
                    <div className="btns-container">
                        <span className="but-btns trash-btn" key={`dlt-${index}`} onClick={() => removeHandler(items.id)}>&#10008;</span>
                        <span className="but-btns edit-btn" key={`edit-${index}`} onClick={() => editorHandler(items)}>&#10002;</span>
                    </div>
                </div>
            )
        })
    )
}

export default List