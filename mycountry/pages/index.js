import Layout from '../Components/Layout';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import Forms from '../Components/Forms';
import Data from '../Components/Data';

class Index extends React.Component{
    state = {
        flag: "",
        country: "",
        population: "",
        borders: "",
        capital: "",
        currency: "",
        region: "",
        subRegion: "",
        callingCodes: "",
        timeZones: "",
        languages: "",
        error: "",
 
    }
getCountry = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;

    const api = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const data = await api.json()
    console.log(data);
    if (country){
this.setState({
    flag: data[0].flag,
    country: data[0].name,
    population: data[0].population,
    borders: data[0].borders,
    capital: data[0].capital,
    currency: data[0].currencies[0].name,
    region: data[0].region,
    subRegion: data[0].subregion,
    callingCodes: data[0].callingCodes,
    timeZones: data[0].timezones,
    languages: data[0].languages[0].name,
    error: null
})
}else {
    this.setState({error: "Invalid Input"})
}   
}
 
    render(){
        return(

            <Layout> 
            <div>
            <Forms getCountry={this.getCountry} />
            <Data flag={this.state.flag}
            country={this.state.country}
            population={this.state.population}
            borders={this.state.borders}
            capital={this.state.capital}
            currency={this.state.currency}
            region={this.state.region}
            subRegion={this.state.subRegion}
            callingCodes={this.state.callingCodes}
            timeZones={this.state.timeZones}
            languages={this.state.languages}
            error={this.state.error}
            />
            <style jsx global>{`
            body{
              background: #333;
            }   
            @media (max-width:425px){
                body{
                    overflow: hidden;
                    background: white;
                }
            }
            `}</style>
            
            </div>
            </Layout>
        );
    }
}

export default Index;