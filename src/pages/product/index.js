import { useRouter } from "next/router";
const ProductDetails = ({products}) => {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
            <h2 className="text-3xl"> Total Products: {products.length} Product Details page productId is :{productId} </h2> 
            {
                products.map( product => <h2 className="text-2xl" key={product?.id} > Title {product.title} Body: {product.body} </h2> )
            }
        </div>
    );
};

export const getStaticProps = async () =>{
    const res = await fetch("http://localhost:4000/products");
    const data = await res.json();
    return{
        props:{
            products:data,
        }
    }
}

export default ProductDetails;
