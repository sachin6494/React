import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class AboutMe extends Component {
	render() {
		return(
			<div>
				<div className="contact-body">
			        <Grid className="contact-grid-about">
			            <Cell col={6}>
				            <img
				              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
				              alt="avatar"
				              style={{height: '250px'}}
				               />
			            </Cell>
				        <Cell col={6}>
				          	<h1>Hi</h1>
				            <h3>I am Sachin Sharma</h3>
				            <h6 className="heading">I am a technology geek. I want to use and share my experience and knowledge for your firm and explore and nourish myself with your valuable guidance in the technical domain.</h6>
				        </Cell>
				        <div className="benner-text-about">
				      		<Cell col={12}>
								<h1>My Hobbies</h1>
							</Cell>
						</div>
						<div className="contact-list">
		      				<Cell col={12}>
				              <List>
				                <ListItem>
				                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
				                    <h3>Playing Cricket</h3>
				                    <hr className="benner-text-hr" />
				                    <h6>Cricket is my favourite game than all other outdoor games in India. I used to play cricket in front of my house in the park with my school friends and neighbours. Cricket is a game originated in British Empire (an English origin) however started playing in many countries. We need a bat and a ball to play this game. The cricket game came in vogue and gained popularity by 18th century. There are two teams in cricket with 11 players in each, two umpires to notice the faults according to the law and judges all the fair and unfair while playing the cricket. Before stating the game, a coin is tossed by the captain of any team to decide which team start batting first and other one bowling.</h6>
				                    
				                  </ListItemContent>
				                </ListItem>
				                <ListItem>
				                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
				                    <h3>Music Lover</h3>
				                    <hr className="benner-text-hr" />
				                    <h6>Cricket is my favourite game than all other outdoor games in India. I used to play cricket in front of my house in the park with my school friends and neighbours. Cricket is a game originated in British Empire (an English origin) however started playing in many countries. We need a bat and a ball to play this game. The cricket game came in vogue and gained popularity by 18th century. There are two teams in cricket with 11 players in each, two umpires to notice the faults according to the law and judges all the fair and unfair while playing the cricket. Before stating the game, a coin is tossed by the captain of any team to decide which team start batting first and other one bowling.</h6>
				                  </ListItemContent>
				                </ListItem>
				              </List>
				            </Cell>
		            	</div>
			        </Grid>
	      		</div>
      		</div>

			)
	}
}

export default AboutMe;