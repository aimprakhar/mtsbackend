import { text } from "express";
import mongoose from "mongoose";
 const {Schema}=mongoose;

const HotelSchema=new mongoose.Schema(
    {
        verified:{
            type:Boolean,
            default:false
    
        },

        Creater_Name:{
                     type:String,
                     required:true

             },

        Creater_Mobile_number:{
                       type:Number,
                        required:true
        
                     },
                       
                     
        Creater_Email:{
                       type:String,
                       required:true
                    
                     },



        
        From:{
              type:String,
              required:true
    
            },

        To:{
                type:String,
                required:true
        
             },


        Date:{
                type:Date,
                required:true
        
            },

      

        MaxPeople:{
                    type:Number,
                    required:true
            
                },

        AppxTripExpenses:{
                    type:Number,
                
            
                },

         AdditionalDetails:{
                    type:String
                
            
                }







    //     distance:{
    //                     type:String,
    //                     required:true
                
    //              },
    //     photos:{
    //                 type:[String]
                    
            
    //          },

    //      disc:{
    //             type:String,
    //             required:true
        
    //      },

    //      rating:{
    //         type:Number,
    //         min:0,
    //         max:5
    //     },

    //     rooms:{
    //         type:[String],
    //         min:0,
    //         max:5
    //     },

    //     cheapestPrice:{
    //         type:Number,
    //         required:true
    //     },
    //     featured:{
    //         type:Boolean,
    //        default:false
    //     }
    
     
     }


);

export default mongoose.model("Hotel",HotelSchema)
