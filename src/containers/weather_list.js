import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

export class WeatherList extends Component {
	renderWeather(cityData) {
		let city = cityData.city,
				temps = cityData.list.map(weather => weather.main.temp),
				pressures = cityData.list.map(weather => weather.main.pressure),
				humidities = cityData.list.map(weather => weather.main.humidity);

		return (
			<tr key={city.id}>
				<td>{city.name}</td>
				<td>
					<Chart data={temps} color="blue" />
				</td>
				<td>
					<Chart data={pressures} color="orange" />
				</td>
				<td>
					<Chart data={humidities} color="red" />
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
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
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