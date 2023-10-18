import {useState} from "react";
// import { Form } from "semantic-ui-react";

function ActivityForm({onNewActivity}){
    const [ newName , setNewName ] = useState('')
    const [ newImage , setNewImage ] = useState('')
    const [ newDescription, setNewDescription ] = useState('')
    const [ newAgeRange , setNewAgeRange ] = useState('Recommended Age Range:')
    const [ newOutdoor , setNewOutdoor ] = useState(false)
    const [ newFree , setNewFree ] = useState(false)

    const handleName = (e) => {
        setNewName(e.target.value);
      };
    
      const handleImage = (e) => {
        setNewImage(e.target.value);
      };
    
      const handleDescription = (e) => {
        setNewDescription(e.target.value);
      };
    
      const handleAgeRange = (e) => {
        setNewAgeRange(e.target.value);
      };
      
      const handleOutdoor = (e) => {
        setNewOutdoor(e.target.value);
      };

      const handleFree = (e) => {
        setNewFree(e.target.value);
      }

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
            setNewAgeRange('Recommended Age Range:')
            setNewOutdoor(false)
            setNewFree(false)
        }) 
      }

    // return(
    //     <div>
    //   <h3>Add an Activity!</h3>
    //   <Form
    //     onSubmit={handleSubmit}
    //   >
    //     <Form.Group widths="equal">
    //       <Form.Input fluid label="Name" placeholder="Name" name="name" value={newName} onChange={handleName}/>
    //       <Form.Input fluid label="image" placeholder="image" name="image" value={newImage} onChange={handleImage} />
    //       <Form.Input fluid label="description" placeholder="description" name="description" value={newDescription} onChange={handleDescription} />
    //       <Form.Input fluid label="AgeRange" placeholder="AgeRange" name="AgeRange" value={newAgeRange} onChange={handleAgeRange} />
    //       <Form.Input fluid label="indoor-outdoor" placeholder="indoor-outdoor" name="indoor-outdoor" value={newOutdoor} onChange={handleOutdoor} />
    //       <Form.Input fluid label="price" placeholder="price" name="price" value={newFree} onChange={handleFree} />
    //     </Form.Group>
    //     <Form.Button>Submit</Form.Button>
    //   </Form>
    // </div>
    // );
}


















export default ActivityForm;