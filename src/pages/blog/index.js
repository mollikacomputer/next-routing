import Link from 'next/link';
import React from 'react';

const blog = () => {
    return (
        <div>
            <h2 className="text-3xl"> Blog page</h2>
            <Link href='/' >  back to Home </Link>
        </div>
    );
};

export default blog;