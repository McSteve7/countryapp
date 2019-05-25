import Navbar from "../Components/Navbar"
import Head from "next/head";
import Forms from '../Components/Forms';

const Layout = (props) => (
<div>
<Head>
<title>myCountry Info</title>
</Head>
<Navbar />
<div>
{props.children}
</div>
</div>



)


export default Layout;