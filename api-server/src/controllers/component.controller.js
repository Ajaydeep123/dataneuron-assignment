import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

import {Component} from "../models/component.model.js"
import {Count} from "../models/count.model.js"


const addData = asyncHandler(async (req, res) => {})

const updateData = asyncHandler(async (req, res) => {})

const getCount = asyncHandler(async (req, res) => {})


export {
    addData,
    updateData,
    getCount
}