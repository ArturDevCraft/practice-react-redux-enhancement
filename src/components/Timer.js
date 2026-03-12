import React from 'react';

class Timer extends React.Component {
	render() {
		const { hours, minutes, seconds } = this.props;
		return (
			<section>
				Dziękujemy, że jesteś z nami już {hours}h {minutes}m {seconds}s.
			</section>
		);
	}
}

export default Timer;
