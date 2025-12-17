const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products=()=>{
    return(
        <>
        <div>
            {productsArr.map((product,index)=>{
                return <div key={index}>
                    <img src={product.imageUrl} alt={product.title}/>
                    <h3>{product.title}</h3>
                    <p>Price: ₹{product.price}</p>
                </div>
            })}
        </div>
        </>
    )
}
export default Products;