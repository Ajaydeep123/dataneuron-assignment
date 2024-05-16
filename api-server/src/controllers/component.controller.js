import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

import {Component} from "../models/component.model.js"
import {Count} from "../models/count.model.js"


const addData = asyncHandler(async (req, res) => {
    try {
        const {componentId, data} = req.body

        if(!(data && data.trim() !== "")){
            throw new ApiError(400, "Data is required")
        }

        await Component.deleteOne({componentId})

        const component = await Component.create({componentId, data})

        const count = await Count.findOneAndUpdate(
            {},
            {
                $inc: {
                    addCount: 1
                },
            },
            {
                upsert: true,
                new: true
            }
        )
        return res.
        status(200)
        .json(new ApiResponse(200,{component,count},"Component added successfully"))
    } catch (error) {
        throw new ApiError(500, error?.message || "Something went wrong")
    }
})

const updateData = asyncHandler(async (req, res) => {
    try {
        const {componentId, data} = req.body
        const currentComponent  = await Component.findOne({componentId})

        if(!currentComponent){
            throw new ApiError(404, "There was some error")
        }

        if(!data){
            throw new ApiError(400, "Data is required for update") 
        }

        const newComponent = await Component.findOneAndUpdate(
            {
                _id: currentComponent._id
            },
            {
                data:data
            },
            {new: true}
        );

        const count = await Count.findOneAndUpdate(
            {},
            {
                $inc: { updateCount: 1 },
            },
            { upsert: true, new: true }
        );

        return res
        .status(200)
        .json(new ApiResponse(200,{newComponent,count},"Component updated successfully"))
    } catch (error) {
        throw new ApiError(500, error?.message || "Something went wrong")
    }
})

const getCount = asyncHandler(async (req, res) => {
    try {
        const count = await Count.findOne(req.count?._id)
        return res
        .status(200)
        .json(new ApiResponse(200,count,"Count fetched successfully"))
        
    } catch (error) {
        throw new ApiError(500, error?.message || "Something went wrong")
    }
})


export {
    addData,
    updateData,
    getCount
}