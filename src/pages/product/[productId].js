import { useRouter } from "next/router";

const productDetails = ({product}) => {
    const router = useRouter();
    if(router.isFallback){
        return <div> Loading...</div>
    }
    return (
        <div>
           <h2 className="text-3xl" >Title: {product.title},body: {product.body} </h2> 
           <hr/>
        </div>
    );
};
export const getStaticProps = async (context) =>{
    const {params} = context;
    const res = await fetch(`http://localhost:4000/products/${params?.productId}`);
    const data = await res.json();
    return{
        props:{
            product:data,
        }
    }
};
export const getStaticPaths = async() =>{
   return{
    paths:[
        {params:{productId:'1'}},
        {params:{productId:'2'}},
        {params:{productId:'3'}}
    ],
    fallback:true
   }
}
export default productDetails;