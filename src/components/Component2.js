import React, {Component} from 'react'
import {DivH3, StylesDiv, StylesDivorange, StylesDivred, StylesDivyellow, Stylespurple} from '../styles/styles';
import { StyledH2 } from '../styles/styles';

class Component2 extends Component{
	render(){
		return(
		<StylesDiv>
				<StylesDivorange>
				<StyledH2 >Mis Estudios </StyledH2>
				<h3>Universidad Nacional de Colombia</h3>
				<p>Diplomado en Fundamentos de Programación</p>
				<h3>Academia Geek</h3>
				<p>Bootcamp Desarrollo Front-End</p>
				</StylesDivorange>
			<Stylespurple>
				<StyledH2 >Experiencia </StyledH2>
				<h3>Platzi</h3>
				<p>Community Ambassador</p>
			</Stylespurple>
			<StylesDivyellow>
				<StyledH2 >Certificaciones</StyledH2 >
				<h3>En Proceso</h3>
			</StylesDivyellow>
			<StylesDivred>
				<StyledH2 >Habilidades</StyledH2>
				<DivH3>
				<h3>HTML</h3>
				<h3>CSS</h3>
				<h3>Javascript</h3>
				<h3>React JS</h3>
				</DivH3>
			</StylesDivred>
			</StylesDiv>
		)
	}
}
export default Component2;