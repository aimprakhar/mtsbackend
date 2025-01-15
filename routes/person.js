import express from "express";
import { createPerson, deletePerson, getPerson,FilterPerson, getPersons, updatePerson } from "../controllers/person.js";
const router =express.Router();


router.get("/bbb",(req,res)=>{
    res.send("Hello , this is Persons end-point1")
})



// router.get("/find/:id",getPerson);
router.get("/people",getPersons)


router.post("/",createPerson);

router.post("/filter",FilterPerson);


 router.put("/edit/:id",updatePerson);




router.delete("/:id" ,deletePerson);
















export default router;
