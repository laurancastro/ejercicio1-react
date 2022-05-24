import React, {Component} from 'react'
import { DivInfo, StyledH2, StyledH4 } from '../styles/styles'
export class Component1 extends Component{
	render(){
		return(
			<DivInfo>	
				<img src="https://i.ibb.co/Qrb1FGY/pixel2.png"></img>
				<StyledH2 >Laura Natalia Castro Garcia</StyledH2 >
				<StyledH4>Estudiante Desarrollo Web front-end</StyledH4>
				<p>Bogotá, Colombia</p>
				<img src="https://i.ibb.co/2gDpYPY/img3.png"></img>
			</DivInfo>
		)
	}
}