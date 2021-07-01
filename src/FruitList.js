import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';
import { Button, ButtonGroup} from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class FruitList extends Component {

    constructor(props) { 
        super(props); //Pass state
        this.state = {fruitgarden: []}; //Initiate array to hold state
        this.remove = this.remove.bind(this); 
        
    }
//the componentDidMount function is calling our API to load our flowers list.
   componentDidMount() {
       //FlowerGarden is Spring-boot API rest controller 
        fetch('https://mygarden-assistant.herokuapp.com/FruitGarden/')
            .then(response => response.json())
            .then(data => this.setState({fruitgarden: data})); //set state with data from the Postgres DB

            
    }
//API call to delete selected flower from the postgres DB.
    async remove(plant_id) {
        await fetch(`https://mygarden-assistant.herokuapp.com/FruitGarden/${plant_id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'DELETE',
                'mode': 'no-cors'
            }
        }).then(() => {
            let updatedFruits = [...this.state.fruitgarden].filter(i => i.plant_id !== plant_id); //new array minus the flower deleted.
            this.setState({fruitgarden: updatedFruits}); //setstate with updated flowers list.
        });
    }
    render() {
        const {fruitgarden} = this.state; //array set with flowers data.
      
        /*console.log(flowergarden)*/
        
    
        // map each flower data from Postgres table to HTML element.
         const fruitList = fruitgarden.map (fruitgarden => {
            return <tr key={fruitgarden.plant_id}>
                <td style={{whiteSpace: 'nowrap'}}>{fruitgarden.name}</td>
                <td>{fruitgarden.plant_type}</td>
                <td>{fruitgarden.seasonality}</td>
                <td>{fruitgarden.water_duration}</td>
                <td>{fruitgarden.planting_date}</td>
                <td>{fruitgarden.end_date}</td>
                <td>{fruitgarden.fertilization_need}</td>
                <td>{fruitgarden.fertilization_duration}</td>
                <td>{fruitgarden.harvesting_date}</td>
                <td>{fruitgarden.harvesting_duration}</td>
           
                <td>
      {/* Add an EDIT and DELETE button to each flower HTML element */}           
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/fruitslist/" + fruitgarden.plant_id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(fruitgarden.plant_id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            
            </tr>
        });
        return (
            <div>
                <AppNavbar/> 
                <Container>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/fruitslist/new">Add Fruits</Button>  {/* Link to add a new flower to the Postgres DB */}
                    </div>
                    <h2>Fruit Plants</h2>
                    <Table className="mt-4">
            {/* Header for the flowers list */}
                        <thead>
                        <tr>
                            <th width="5%">Name</th>
                            <th width="5%">Plant Type</th>
                            <th width="5%">Seasonality</th>
                            <th width="5%">Watering Duration</th>
                            <th width="5%">Planting Date</th>
                            <th width="5%">End Date</th>
                            <th width="5%">Fertilization Need</th>
                            <th width="5%">Fertilization Duration</th>
                            <th width="5%">Harvesting Date</th>

                            <th width="5%">Harvesting Duration</th>
                            </tr>
                        </thead>
                        <tbody>
            {/* Call the variable holding data from the database*/}
                        {fruitList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
        
    }


export default FruitList;