import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText, Button, CardActions} from 'react-mdl';


class Projects extends Component {
    render() {
        return (
            <div className="projects-grid">
                <Grid>
                    <Cell col={12}>
                    <h1>Projects</h1> 
                    <hr />

            <div className="card-container"> 
             
<Card shadow={10} style={{width: '320px', height: '320px', margin: '10px'}}>
    <CardTitle expand style={{ background: 'url(/Images/christmas-shopping-list.png) center / cover'}}/>
        <CardText>
        A christmas shopping list that keeps track of what you have bought for those special people in your life.
        </CardText>
            <CardActions border>
                <Button colored><a href="https://thawing-journey-93545.herokuapp.com/">Live Preview</a></Button>
                <Button colored><a href="https://github.com/scottnelsen0106/Project-2">View on GitHub</a></Button>
            </CardActions>
</Card>



<Card shadow={10} style={{width: '320px', height: '320px', margin: '10px'}}>
    <CardTitle expand style={{ background: 'url(/Images/eat-da-burger.png) center / cover'}}/>
        <CardText>
        This is a program that allows the user to input a burger they would like to eat. 
        </CardText>
            <CardActions border>
                <Button colored><a href="https://dreadful-corpse-08895.herokuapp.com/">Live Preview</a></Button>
                <Button colored><a href="https://github.com/scottnelsen0106/burger">View on GitHub</a></Button>
            </CardActions>
</Card>

<Card shadow={10} style={{width: '320px', height: '320px', margin: '10px'}}>
    <CardTitle expand style={{ background: 'url(/Images/giftastic.png) center / cover'}}/>
        <CardText>
        An app that uses the API giphy. Search for a gif and you will see a list of them.
        </CardText>
            <CardActions border>
                <Button colored><a href="https://scottnelsen0106.github.io/giftastic/index.html">Live Preview</a></Button>
                <Button colored><a href="https://github.com/scottnelsen0106/giftastic">View on GitHub</a></Button>
            </CardActions>
</Card>

<Card shadow={10} style={{width: '320px', height: '320px', margin: '10px'}}>
    <CardTitle expand style={{ background: 'url(/Images/movie-locator.png) center / cover'}}/>
        <CardText>
        An app that that lets the user pick a recent movie to watch, or go to a nearby movie theater.
        </CardText>
            <CardActions border>
                <Button colored><a href="https://scottnelsen0106.github.io/project1/">Live Preview</a></Button>
                <Button colored><a href="https://github.com/scottnelsen0106/project1">View on GitHub</a></Button>
            </CardActions>
</Card>

<Card shadow={10} style={{width: '320px', height: '320px', margin: '10px'}}>
    <CardTitle expand style={{ background: 'url(/Images/nhl-clicky-game.png) center / cover'}}/>
        <CardText>
        An app that that keeps track of how many times you click a different image. Click on the same image twice, and the game is over.
        </CardText>
            <CardActions border>
                <Button colored><a href="https://awesome-meitner-59873f.netlify.com/">Live Preview</a></Button>
                <Button colored><a href="https://github.com/scottnelsen0106/clicky-game">View on GitHub</a></Button>
            </CardActions>
</Card>

<Card shadow={10} style={{width: '320px', height: '320px', margin: '10px'}}>
    <CardTitle expand style={{ background: 'url(/Images/raduno.png) center / cover'}}/>
        <CardText>
        An app that that stores user events and what food items they are bringing for that event.
        </CardText>
            <CardActions border>
                <Button colored><a href="https://pedantic-swirles-516f15.netlify.com/">Live Preview</a></Button>
                <Button colored><a href="https://github.com/scottnelsen0106/raduno">View on GitHub</a></Button>
            </CardActions>
</Card>

<Card shadow={10} style={{width: '320px', height: '320px', margin: '10px'}}>
    <CardTitle expand style={{ background: 'url(/Images/train-schedule.png) center / cover'}}/>
        <CardText>
        An app that uses firebase to store input from user on trains and when they should arrive/ already left
        </CardText>
            <CardActions border>
                <Button colored><a href="https://scottnelsen0106.github.io/train-schedule/">Live Preview</a></Button>
                <Button colored><a href="https://github.com/scottnelsen0106/train-schedule">View on GitHub</a></Button>
            </CardActions>
</Card>

</div>
</Cell>
</Grid>
            </div>
        )
    }
}

export default Projects;