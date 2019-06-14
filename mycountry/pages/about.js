
import Link from 'next/link';

export default() => (
      <div>
    <div className="navbar">
    <h4>myCountry Info</h4>
    <ul>
    <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/about"><a>About</a></Link></li>
    </ul>
    </div>
            <div className="container">
    <div className="About-message">
    <h1>ABOUT MYCOUNTRYAPP</h1>
    <p>This app is just one of those apps that you build to put into practice 
    something you had just learned. myCountry App basically fetches informations
    from a RestAPI and display it. The choice for NextJS was basically for me 
    get introduced to the technologie's automatic routing and single component 
    styling with styled-jsx and for other amazing features. 
    I deployed the app with ZEIT/NOW which is an amazing tool for hosting static apps. 
    The installation procedure is quite easy as they've made various options available 
    like the Now desktop App, Now cli with npm, yarn or curl.And one of the intresting 
    feature is that it can be integrated with your github repo such that any changes 
    made on machine can automatically be detected by Now after pushing the changes to github. 
    You can however look up the documentation <a target="_blank" href="https://zeit.co/guides/deploying-nextjs-with-now/">here</a> for futher 
    information to get you started with Now.
    </p>
            </div>
            </div>
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
    .container{
        width: 400px;
        height: 400px;
        margin: 50px auto;
    }
    .About-message{
        text-align: center;
        color: white;
        
    }
    h1{
        color: #08e;
    }
    p{
        line-height: 1.5em;
        text-align: justify;
    }
    p a{
        color: white;
        text-decoration: none;
    }
    p a:hover{
        background: #08e;
    }
    `}</style>
    </div>
    )