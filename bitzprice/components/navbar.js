import Link from "next/link";

const Navbar = () => (
<div className="navbar">
<h3>BitzPrice</h3>
<ul>
<li><Link href="/"><a>Home</a></Link></li>
<li><Link href="/about"><a>About</a></Link></li>
</ul>

<style jsx>{`
ul li a{
    overflow: hidden;
    display: block;
    float: left;
    text-align:center;
    padding: 14px 30px;
    text-decoration: none;
    font-size: 15px;
    color: black;
    text-transform: uppercase;
    font-weight: 500;
    }
    .navbar{
        display: flex;
        justify-content: space-between;
    }
    .navbar ul{
    margin: 8px 0 0 0;
    list-style: none;
    display: flex;
    }
 ul li a:hover{
     background: rgb(90, 87, 87);
     color: white;
 }
`}</style>
</div>


)

export default Navbar;