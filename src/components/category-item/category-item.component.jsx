import "./category-item.styles.scss"

const Category =({category})=>{
    const{title, imageUrl} = category
    return(
        <div className="category-container">
        <div className="background-image" 
             style={
              {backgroundImage:`url(${imageUrl})`}
            }
             />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>learn more </p>
          </div>
        </div>

    )
}

export default Category