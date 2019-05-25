import Layout from '../Components/Layout';
import index from '../pages';
import Index from '../pages';

class Forms extends React.Component{
    render(){
        return(

    
     
            <form onSubmit={this.props.getCountries}>
    
    <select id="country">
    <option name="country" value="{this.props.country}"></option>
    </select>
    <button id="myButton">CountryInfo</button>
    


    <style jsx>{`
    form{
        text-align: center;
    }
    #country{
        width: 300px;
        height: 25px;
        border: 2px solid whitesmoke;
    
    }
    #country::placeholder{
        font-style: italic;
        color: #08e; 
    }
    #country:hover{
        -webkit-transform: scale(0.95);-moz-transform: scale(0.95);-ms-transform: scale(0.95);transform: scale(0.95);
        border-radius: 5px;
    }

    #myButton{
        background: #08e;
        height: 40px;
        border: 1px solid lightgray;
        border-radius: 5px;
        font-size: 15px;
        width: 120px;
    }
    #myButton:hover{
        background: #333;
        color: white;
    }
    
    `}</style>
    </form>
        );
}


   
}
export default Forms;