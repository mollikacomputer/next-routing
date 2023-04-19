import { useRouter } from "next/router";
const ProductDetails = () => {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
            <h2 className="text-3xl">Product Details page productId is :{productId} </h2> 
        </div>
    );
};

export default ProductDetails;