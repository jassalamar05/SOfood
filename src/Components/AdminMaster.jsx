import {Outlet} from 'react-router-dom'
import Footer from './Footer';
import Head from './Header';


export default function AdminMaster(){
    return(
        <>
            <Head/>
            <Outlet/>
            <Footer/>
        </>
    )
}