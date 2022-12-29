import mongoose from 'mongoose';
import eventModel from '../Models/event.model';

export const createEvent = async(req, res) => {
    const event = req.body;
    const newEvent = eventModel({...event});
    try {
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(404).json({message: "Something went wrong"})
    }
}

export const getEvents = async(req, res) => {
    try {
        const events = await eventModel.find();
        res.json(events);
    } catch (error) {
        res.status(404).json({message: error})
    }
}

export const getEventBySearch = async(req,res) => {
    const {searchQuery} = req.query;
    try {
        const title = new RegExp(searchQuery,"i");
        const events = await eventModel.find({eventName: title})
        return res.status(200).json({data:events});
    } catch (error) {
        return res.status(500).json({message: "Something went wrong"});
    }
}

export const updateEvent = async(req, res) => {
    try {
        const {id} = req.params;
        const updatedData = req.body;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message: "User does not exist"});
        }
        await eventModel.findByIdAndUpdate(id,updatedData,{new: true});
        return res.status(200).json(updatedData);   
    } catch (error) {
        return res.status(404).json({message: "Something went wrong"});  
    }
}