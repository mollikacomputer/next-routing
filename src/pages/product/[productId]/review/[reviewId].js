import { useRouter } from "next/router";

const reviewDetails = () => {
    const router = useRouter();
    const {reviewId, productId} = router.query;
    return (
        <div>
            <h2 className="text-3xl" > Review { reviewId} for Product {productId} </h2>
        </div>
    );
};

export default reviewDetails;