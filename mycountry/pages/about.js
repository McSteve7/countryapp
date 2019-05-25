
import Link from 'next/link';

export default() => (
      
    <div className="navbar">
    <h4>myCountry Info</h4>
    <ul>
    <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/about"><a>About</a></Link></li>
    </ul>
    
    <style global jsx>{`
    body{
        background: #333;
    }

    
    ul li a{
        overflow: hidden;
        display: block;
        float: left;
        text-align:center;
        padding: 10px 30px;
        text-decoration: none;
        font-size: 15px;
        color:white;
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
         background:#08e;
         color: white;
     }
    h4{
        margin-top: 5px;
        color:whitesmoke;
        font-weight: 600;
    }

    `}</style>
    </div>
    )