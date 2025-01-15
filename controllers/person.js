import Person from "../models/person.js";  // "change all instance of Person with your schema throughout page"


export const createPerson=async(req,res,next)=>{
    var keyId="<<<<<<<<<keyId>>>>>>>>>>>>>";
    const { name, qualities } = req.body;
  
    try {
      const person = new Person({ name, qualities });
      await person.save();  // Save person to MongoDB
      res.status(201).json(person);  // Respond with the saved person
    } catch (err) {
      res.status(400).json({ message: 'Error adding person', error: err });
    }
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
