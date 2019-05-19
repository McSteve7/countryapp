import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import Prices from "../components/prices";

const index = (props) => (
<Layout>
    <div>
    <hr/>
<h1>Welcome to BitzPrice</h1>
<p>Check current bitcoin rate for your prefarred currency</p>

<Prices bpi={props.bpi} />
</div>
</Layout>
);
index.getInitialProps = async function () {
    const res = await fetch ('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data =await res.json();

    return{

        bpi: data.bpi
        
    }

}

export default index;