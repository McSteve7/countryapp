class Data extends React.Component{
    
    render(){
        return(
            <div className="container">
            <ul>
            <img className="flag-image"
            src={this.props.flag} alt=''
            />
            {this.props.country && <li className="country-list">Country: {this.props.country}</li>}
            {this.props.population && <li>Population: {this.props.population}</li>}
            {this.props.borders && <li>Borders: {this.props.borders}</li>}
            {this.props.capital && <li>Capital City: {this.props.capital}</li>}
            {this.props.currency && <li>Currency: {this.props.currency}</li>}
            {this.props.region && <li>Region: {this.props.region}</li>}
            {this.props.subRegion && <li>Sub Region: {this.props.subRegion}</li>}
            {this.props.callingCodes && <li>Calling Code: {this.props.callingCodes}</li>}
            {this.props.timeZones && <li>Time Zone: {this.props.timeZones}</li>}
            {this.props.languages && <li>Official Language: {this.props.languages}</li>}
            {this.props.error && <li>{this.props.error}</li>}

            </ul>
            <style jsx>{`
            .container{
                text-align: center;
                position: relative;
                justify-content:justify;
                box-sizing: border-box;
                
            }
            li{
                color: white;
                list-style: none;
                line-height: 2.5em;
                text-align: center;
                box-sizing: border-box;
                text-transform: uppercase;
            }
            
            li:nth-child(odd){
            }
            .flag-image{
                width: 300px;
                height: 200px;
                border-radius: 10px;
            }
            .flag-image:hover{
                width: 350px;
                height: 250px;
            }
            @media (max-width: 425px){
                body{
                    background: white;
                }
                .container{
                    width: 100%;
                    height: 100%;
                }
                .flag-image{
                    width:  70%;
                    height: 350px;
                }
            }
            `}</style>
            </div>
        )
    }
}

export default Data;