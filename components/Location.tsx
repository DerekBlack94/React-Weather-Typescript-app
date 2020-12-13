import React,{Component} from 'react';
import WeatherDisplay from './WeatherDisplay';


type LocationState = {
    latitude: number,
    longitude: number,
    weather: any,
    weatherDisc: any,
    weatherTemp: number,
    loading: boolean,
};

class Location extends Component<{}, LocationState> {
    constructor(props : any) {
        super(props)
        this.state = {
            latitude: 0,
            longitude:0,
            weather: {},
            weatherDisc: {},
            weatherTemp: 0,
            loading: true,
        }
    }
    success = (pos: any) => {
        let crd = pos.coords;
        const lat: number = crd.latitude;
        const long: number = crd.longitude;
        let API_KEY = '24e97bd2ee1e98168660360c7236c7bd';

        this.setState({
            latitude: lat,
            longitude: long,
        });

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&appid=${API_KEY}`)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    weather: result,
                    weatherDisc: result.weather[0],
                    weatherTemp: result.main,
                    // loading: false
                   
                });
                
            });
            // console.log(weatherDisc)
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success)
    }
    latRound() {
        return(

            this.state.latitude
        )
    }

    render() {
        // if (!this.state.weatherDisc) {
        //     return <span>Loading...</span>;
        // }
        
        return(
            <div>
                <p> Location:</p>
                <h3>Latitude-{this.state.latitude}</h3>
                <h3>Longitude{this.state.longitude}</h3>
                <WeatherDisplay weather={this.state.weatherDisc}
                name={this.state.weather.name}
                temp={this.state.weatherTemp}/>
                {/* {this.state.weather ? this.state.weather[0] : null}
            {this.state.weather[0]} */}
            </div>
        )
    }
}
export default Location;