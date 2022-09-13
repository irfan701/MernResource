import React, {lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/MasterLayout";
import LazyLoader from "../components/masterLayout/LazyLoader";
const New=lazy(()=>import('../components/New/New'))


const NewPage = () => {
    return (
        <>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <New/>
                </Suspense>
            </MasterLayout>
        </>
    );
};

export default NewPage;