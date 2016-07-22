import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GMap from '../components/map';

export class WeatherList extends Component {
	renderWeather(cityData) {
		let city = cityData.city,
				temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * (9/5) - 459),
				pressures = cityData.list.map(weather => weather.main.pressure),
				humidities = cityData.list.map(weather => weather.main.humidity),
				{lat, lon} = city.coord;

		return (
			<tr key={city.id}>
				<td><GMap lat={lat} lon={lon} /></td>
				<td>
					<Chart data={temps} color="blue" units="F"/>
				</td>
				<td>
					<Chart data={pressures} color="orange" units="hPa"/>
				</td>
				<td>
					<Chart data={humidities} color="red" units="%"/>
				</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);