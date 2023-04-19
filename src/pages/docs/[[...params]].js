import { useRouter } from "next/router";

const Doc = () => {
    const router = useRouter();
    const {params=[]} = router.query;
    console.log(params);
    return (
        <div>
            <h2 className="text-3xl">Docs Home page</h2>
        </div>
    );
};

export default Doc;