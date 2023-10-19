import {useState} from "react";
import { Header, Grid, Form } from "semantic-ui-react";
import {useOutletContext} from 'react-router-dom'

function ActivityForm(){
    const {onNewActivity} = useOutletContext()
    const [ newName , setNewName ] = useState('')
    const [ newImage , setNewImage ] = useState('')
    const [ newDescription, setNewDescription ] = useState('')
    const [ newAgeRange , setNewAgeRange ] = useState('')
    const [ newOutdoor , setNewOutdoor ] = useState('')
    const [ newFree , setNewFree ] = useState('')

    const handleName = (e) => {
      setNewName(e.target.value);
    };
    
    const handleImage = (e) => {
      setNewImage(e.target.value);
    };
    
    const handleDescription = (e) => {
      setNewDescription(e.target.value);
    };
    
    const handleAgeRange = (e, {value} ) => {
      setNewAgeRange(value);
    };

    const ageOptions = [
      { key: '1', text: '1 and under', value: '1 and under' },
      { key: '1.0', text: '1 and over', value: '1 and over' },
      { key: '3', text: '3 and under', value: '3 and under' },
      { key: '3.0', text: '3 and over', value: '3 and over' },
      { key: '5', text: '5 and over', value: '5 and over'},
      { key: '10', text: '10 and over', value: '10 and over'},
      { key: 'all', text: 'all ages', value: 'all ages'}
    ]
      
    const handleOutdoor = (e, {value} ) => {
      setNewOutdoor(value);
      };

    const outdoorOptions = [
      { key: 'I', text: 'Indoor Activity', value: 'Indoor Activity' },
      { key: 'O', text: 'Outdoor Activity', value: 'Outdoor Activity' }
    ];

    const handleFree = (e, {value} ) => {
      setNewFree(value);
    }

    const priceOptions = [
      { key:'F', text: 'Free Activity', value: 'Free Activity'},
      { key:'A', text: 'Actvity price will vary', value: 'Actvity price will vary'}
    ]

    function handleSubmit(e) {
      e.preventDefault();
      const newActivitySubmitted = {
        name : newName,
          image : newImage,
          description : newDescription,
          ageRange : newAgeRange,
          outdoor : newOutdoor,
          free : newFree
      };

    fetch('http://localhost:8000/activities', {
      method : "POST",
      headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(newActivitySubmitted)
        })
        .then((r)=> {
            if(r.ok) {
                return r.json();
            }
        })

        .then((newActivityFromServer) => {

          onNewActivity(newActivityFromServer);
          setNewName('')
          setNewImage('')
          setNewDescription('')
          setNewAgeRange('')
          setNewOutdoor(false)
          setNewFree(false)
        }) 
    }
  
    return(
    <Grid centered>
      <Grid.Column width={4}>
        <div>
        <Header as='h3' textAlign='center'>
      Add New Activity!
    </Header>
          <Form
              onSubmit={handleSubmit}>

              <Form.Field>
                <Form.Input 
                fluid 
                label="name" 
                placeholder="name" 
                name="name" 
                value={newName} 
                onChange={handleName} 
                />

                <Form.Input 
                fluid 
                label="image" 
                placeholder="image URL" 
                name="image" 
                value={newImage} 
                onChange={handleImage} 
                />

                <Form.Input 
                fluid 
                label="description" 
                placeholder="description" 
                name="description" 
                value={newDescription} 
                onChange={handleDescription} 
                />

              </Form.Field>

              <Form.Group>
                <Form.Select 
                fluid 
                label="age range" 
                placeholder="recommended age range" 
                name="age range" 
                options={ageOptions}
                value={newAgeRange} 
                onChange={handleAgeRange} 
                width = {16}/>
              </Form.Group> 

              <Form.Group>
                <Form.Select 
                fluid 
                label="location" 
                placeholder="location" 
                name="location" 
                options={outdoorOptions}
                value={newOutdoor} 
                onChange={handleOutdoor} 
                width = {16}/>
              </Form.Group>

              <Form.Group >
                <Form.Select 
                fluid 
                label="price" 
                placeholder="price" 
                name="price" 
                options={priceOptions}
                value={newFree} 
                onChange={handleFree} 
                width = {16}/>
              </Form.Group> 
              <Form.Button >Submit</Form.Button>
          </Form>
      </div>
    </Grid.Column>
  </Grid>
    );
}



export default ActivityForm;