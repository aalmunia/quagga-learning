import './style';
import { Component } from 'preact';
import Quagga from 'quagga';

export default class App extends Component {

	constructor(props) {
		console.log('IN CONSTRUCTOR');
		super(props);
	}

	componentDidMount() {
		console.log('IOMFG.........');
		console.log(document.getElementById("canvas_quagga_tests"));
		// console.log(Quagga);

		Quagga.init({
			inputStream: {
				name: "Live",
				type: "LiveStream",
				target: document.getElementById("canvas_quagga_tests")
			},
			decoder: {
				readers: ["code_128_reader"]
			}
		}, function(oError) {
			if(!oError) {
				console.log('Init Quagga OK');
			} else {
				console.log('Error init Quagga: ');
				console.log(oError);
			}
		});

		Quagga.onDetected(function(a, b, c, d) {
			console.log('Pattern detected: ');
			console.log(a);
			console.log(b);
			console.log(c);
			console.log(d);
		});

		Quagga.start();
	}

	handleBtnClick = (oEvent) => {
		// Hacer la foto
		// Revisar su validez vs formato predeterminado
	}
 
	// <script src="https://cdn.rawgit.com/serratus/quaggaJS/0420d5e0/dist/quagga.min.js"></script>

	render() {
		return (
			<div class="container-fluid">
				<div class="container-canvas">
					<div id="canvas_quagga_tests"></div>
				</div>    			
			</div>
		);
	}
}
