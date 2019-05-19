import Head from "next/head";
import Navbar from "../components/navbar";

const Layout = (props) => (
<div>
<Head>
<title>BitzPrice</title>
</Head>
<Navbar />
<div>
{props.children}
</div>

<style jsx global>{`
body{
    background: peachpuff;
    font-family: sans-serif;
    text-align: center;
}
`}</style>
</div>

)

export default Layout;