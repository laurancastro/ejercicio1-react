import React  from 'react'
import { Component1 } from '../components/Component1';
import Component2 from '../components/Component2';
import { StyledDiv1 } from '../styles/styles.js';
import '../styles/styles.js'

const AppContainers =() =>{
	return(
		<StyledDiv1>
		<Component1/>
		<Component2/>
		</StyledDiv1>
	)
}
export default AppContainers;