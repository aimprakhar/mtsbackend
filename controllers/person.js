import Person from "../models/person.js";  // "change all instance of Person with your schema throughout page"


export const createPerson=async(req,res,next)=>{
    var keyId="<<<<<<<<<keyId>>>>>>>>>>>>>";
    const { name, qualities } = req.body;
console.log(req.body)


     const newPerson=new Person({ name, qualities })
        try{
              const savedfeedback=await newPerson.save()
              res.status(200).json(savedfeedback)
        }
        catch(err){
            next(err)
            console.log(err)
        }
    // const people = await Person.findOne({ name: name });
    // const person = await collection.findOne({ name: name });
    // Check if person already exists
    // const personExists = Person.some(person => person.name.toLowerCase() === name.toLowerCase());
    
    // if (personExists) {
    //   return res.status(400).json({ message: 'Person already exists.' });
    // }
//   const SavedPeople=await {name, qualities}.save
    //  Person.push({ name, qualities });
    // res.status(201).json({ message: 'Person added successfully.'+{ name, qualities } });
}



export const FilterPerson=async(req,res,next)=>{
    var keyId="<<<<<<<<<keyId>>>>>>>>>>>>>";
    const { filters } = req.body;
    const filteredPeople = people.filter(person => {
      return filters.every(filter => {
        const { key, value } = filter;
        if (!key || !value) return true;
        return person.qualities[key]?.toLowerCase() === value.toLowerCase();
      });
    });
  
    res.json(filteredPeople);
}






export const updatePerson=async(req,res,next)=>{
    var keyId="<<<<<<<<<keyId>>>>>>>>>>>>>";
    const { id } = req.params;  // Get the person's ID from the URL
    const { name, qualities } = req.body;  // Get updated data
  
    try {
      const updatedPerson = await Person.findByIdAndUpdate(id, { name, qualities }, { new: true });
      res.json(updatedPerson);  // Return updated person
    } catch (err) {
      res.status(400).json({ message: 'Error updating person', error: err });
    }
}

export const deletePerson=async(req,res,next)=>{
    var keyId="<<<<<<<<<keyId>>>>>>>>>>>>>";
    const { id } = req.params;  // Get the person's ID from the URL
  
    try {
      await Person.findByIdAndDelete(id);  // Delete person by ID
      res.json({ message: 'Person deleted' });
    } catch (err) {
      res.status(400).json({ message: 'Error deleting person', error: err });
    }
}


export const getPerson=async(req,res,next)=>{
    
    var keyId="<<<<<<<<<keyId>>>>>>>>>>>>>";
    try {
        const people = await Person.find();  // Fetch all people from MongoDB
        res.json(people);  // Return the list of people
        console.log(res)
      } catch (err) {
        res.status(400).json({ message: 'Error fetching people', error: err });
      }
}


// export const getPersons=async(req,res,next)=>{
//     var keyId="<<<<<<<<<keyId>>>>>>>>>>>>>";
//     const {...others}=req.query;
//     try{
//         const Htl=await Person.find({...others});
      
//         res.status(200).json(Htl)
//   }
//   catch(err){
//       next(err);
//   }
// }
