import {useParams} from 'react-router-dom'

const ProductDetail = () => {
const params = useParams();

console.log(params.productId);

  return (
    <section>
        Product Details
    <div>{params.productId}</div>
    </section>
  )
}

export default ProductDetail