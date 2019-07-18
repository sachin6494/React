import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
	render() {
		return(
				<div className="landing-home">
					<Grid className="landing-grid">
				        <Cell col={12}>
				        	<img src ="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" alter="Avatar" className="avatar-img" />
				    		<h1>Sachin Sharma</h1>
				    		<div className="benner-text">
						    	<h1>Full Stack Developer</h1>
						    	<hr/>
						    	<div className="social-link">

						    		{/*LinkedIn*/}
							    	<a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" >
							    		<i className="fa fa-linkedin-square" aria-hidden="true" />
							    	</a>
							    	{/*Github*/}
							    	<a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" >
							    		<i className="fa fa-github-square" aria-hidden="true" />
							    	</a>

							    	{/*Github*/}
							    	<a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" >
							    		<i className="fa fa-youtube-square" aria-hidden="true" />
							    	</a>
						    	</div>
						    </div>
				        </Cell>
				    </Grid>

				</div>
			)
	}
}

export default LandingPage;
