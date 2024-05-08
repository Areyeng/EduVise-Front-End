import React from 'react';
import { useRouter } from 'next/navigation';



const withAuth = (Protected: any) => {
    const WithAuth = (props: any) => {
        const router = useRouter();
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
       
        if (!token) {
            router.push('/login')
        }
        return (
            <>
              <Protected {...props}/>
            </>
        
        );;
    };

    return WithAuth;
}

export default withAuth;
