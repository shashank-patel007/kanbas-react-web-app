import { FaCaretRight, FaCheck, FaCheckCircle, FaEllipsisV, FaPlus } from 'react-icons/fa';
import './styles.css';
import { useParams } from "react-router-dom";
import db from '../Database';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
  } from "./modulesReducer";



function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <div>
        <main role="main" class="col-md-12 ml-sm-auto col-lg-12 px-md-4">
            <div class="content-wrapper">
                <hr class="nav-hr"/>
                <div className='row'>
                    <div class="col-lg-8 right-content second-div">
                    <div class="d-flex justify-content-end mb-3">
                        <button class="btn btn-secondary me-1 color-change">Collapse All</button>
                        <button class="btn btn-secondary me-1 color-change">View Progress</button>
                        <div class="dropdown me-2 ">
                            <button class="btn btn-secondary dropdown-toggle color-change" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaCheck className='text-success'/>
                                Publish All
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">Publish</a></li>
                            </ul>
                        </div>
                        <button class="btn btn-danger me-1">
                            <FaPlus className='icon-space2'/>
                            Module
                        </button>
                        <button class="btn btn-secondary me-1 color-change">
                            <FaEllipsisV className='float-end'/>
                        </button>
                    </div>
                    <hr/>
                    <div class="mb-3">
                        <ul class="list-group module-groups">
                            <li className="list-group-item">
                                <div className='row'>
                                    <div className='row'>
                                        <input value={module.name}
                                        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                                        />
                                    </div>
                                    <div className='row'>
                                    <textarea value={module.description}
                                        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                                        />
                                    </div>
                                </div>
                                <button className='btn btn-success' onClick={() => { dispatch(addModule({ ...module, course: courseId })) }}>
                                    Add
                                </button>
                                <button className='btn btn-primary' onClick={() => {dispatch(updateModule(module))}}>
                                    Update
                                </button>
                            </li>

                            {modules.filter((module) => module.course === courseId)
                            .map((module,index) => (
                                <li class="list-group-item list-group-item-secondary" style={{marginBottom: 40}}>
                                    <FaEllipsisV className='ellipse-color'/>
                                    <FaEllipsisV className='ellipse-color icon-space2'/>
                                    <FaCaretRight className='icon-space2'/>
                                    <button
                                        className='btn btn-primary'
                                        onClick={(event) => { dispatch(setModule(module)) }}>
                                    Edit
                                    </button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => dispatch(deleteModule(module._id))}>
                                    Delete
                                    </button>
                                    {module.name}
                                    <div class="float-end">
                                    <div class="btn-group">
                                        <FaCheckCircle className='text-success icon-space dropdown-toggle'data-bs-toggle="dropdown" aria-expanded="false"/>
                                        <ul class="dropdown-menu">
                                        </ul>
                                    </div>
                                    <FaPlus className='icon-space ellipse-color'/>
                                    <FaEllipsisV className='ellipse-color'/>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
    );
}

export default ModuleList;