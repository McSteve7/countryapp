class Prices extends React.Component{
state= {
    currency: "USD"
}

    render() {
        let list = ""; 
            if(this.state.currency === "USD"){
             list = <li>
             Bitcoin rate for {this.props.bpi.USD.description}
             : <span>{this.props.bpi.USD.code}</span> <strong>{this.props.bpi.USD.rate}</strong>
             </li>
            }else if (this.state.currency === "GBP"){
                list =  <li>
             Bitcoin rate for {this.props.bpi.GBP.description}
             : <span>{this.props.bpi.GBP.code}</span> <strong>{this.props.bpi.GBP.rate}</strong>
             </li>
            }else if(this.state.currency === "EUR"){
                list = <li>
             Bitcoin rate for {this.props.bpi.EUR.description}
             : <span>{this.props.bpi.EUR.code}</span> <strong>{this.props.bpi.EUR.rate}</strong>
             </li>
            }


        return (
             <div>
             <select className="select-class" onChange={e => this.setState({currency: e.target.value})}>
             <option value="USD">USD</option>
             <option value="GBP">GBP</option>
             <option value="EUR">EUR</option>
             </select>
             <ul>
             {list}
             </ul>
          


             <style jsx>{`
             .select-class{
                 height: 40px;
                 width: 200px;
                 background: black;
                 color: white;
                 
             }




             `}</style>
             </div>
        );
    }
}


export default Prices;