import Layout from '../Components/Layout';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import Forms from '../Components/Forms';

class Index extends React.Component{
getCountries = async(e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const api = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await api.json();

    for(let i=0; i <= data.length; i++)

    console.log(data)
 
    
}

    render(){
        return(
            <Layout> 
            <div>
            
            <Forms getCountries = {this.getCountries}
            />
            <style jsx global>{`
            body{
              background: white;
            }   
            
            `}</style>
            
            </div>
            </Layout>
        );
    }
    }

export default Index;