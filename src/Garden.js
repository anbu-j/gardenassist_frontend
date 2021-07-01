import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

// Home page that links between Flower Garden and Fruits Gardem
// Uses router links to redirect.

 

class Garden extends Component {
    
        state = {
            headline: []
        }
    
    /* componentDidMount() {
      //  API call to get news related to Scientific world
        //fetch('https://newsapi.org/v2/sources?category=science&country=us&apiKey=85de8e280e634f148ea087999668ce7a') 
        fetch('http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0')
        .then(response=> response.json())
        .then((data) => {this.setState( {headline: data.sources })
        console.log(this.state.headline)
    }) 
 
        
    }*/

  

    render() {
        

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                     <Button color="red"><Link to="/flowerslist">My Flowering Buddies</Link></Button>
                     <Button color="red"><Link to="/fruitslist">My Fruit Buddies</Link></Button>
                     
                </Container>
                
                {/* Array function traverse through the API return data and display 
                {this.state.headline.map ((i) => (
                    <div  >
                        <table className="apiTable">
                            <tr><td>{i.name}</td>
                            <td>{i.description}</td>
                            <td>{i.url}</td></tr>
                        </table>
                        
                    </div>

                ))}*/}
            </div>
        );
    }
}

export default Garden;