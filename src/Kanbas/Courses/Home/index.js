import { FaCalendarAlt, FaCaretRight, FaCheck, FaCheckCircle, FaCircle, FaEllipsisV, FaFileCode, FaPlus, FaTimes } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import db from '../../Database';
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
  } from "../../Modules/modulesReducer";
  import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import modulesReducer from '../../Modules/modulesReducer';
import * as client from "../../Modules/client";

function Home() {
    const { courseId } = useParams();
    useEffect(() => {
        client.findModulesForCourse(courseId)
          .then((modules) =>
            dispatch(setModules(modules))
        );
      }, [courseId]);    
    const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
        dispatch(addModule(module));
    });
    };   
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
          dispatch(deleteModule(moduleId));
        });
    };   
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    }; 
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
                                <button className='btn btn-success' onClick={handleAddModule}>
                                    Add
                                </button>
                                <button className='btn btn-primary' onClick={() => handleUpdateModule(module)}>
                                    Update
                                </button>
                            </li>
                            {modules.filter((module) => module.course === courseId)
                            .map((module,index) => (
                                <li class="list-group-item list-group-item-secondary" style={{marginBottom: 40}}>
                                    <FaEllipsisV className='ellipse-color'/>
                                    <FaEllipsisV className='ellipse-color icon-space2'/>
                                    <FaCaretRight className='icon-space2'/>
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
                        <div class="col-lg-1 far-right-content">
                        <span>Course Status</span>
                        <div class="button-group-1">
                            <button class="btn btn-secondary color-change"><i class="fa fa-ban"></i>Unpublish</button>
                            <button class="btn btn-success">
                                <FaCheckCircle/>
                                Published
                            </button>
                        </div>
                        <div class="button-group-2">
                            <button class="btn btn-secondary color-change">
                                <FaFileCode/>
                                Import Existing Content
                            </button>
                            <button class="btn btn-secondary color-change"><i class="fa fa-pencil-square"></i> Import from Commons</button>
                            <button class="btn btn-secondary color-change"><i class="fa fa-bullseye"></i> Choose Home Page</button>
                            <button class="btn btn-secondary color-change"><i class="fa fa-bar-chart"></i> View Course Stream</button>
                            <button class="btn btn-secondary color-change"><i class="fa fa-bullhorn"></i> New Announcement</button>
                            <button class="btn btn-secondary color-change"><i class="fa fa-bar-chart"></i> New Analytics</button>
                            <button class="btn btn-secondary color-change"><i class="fa fa-bell"></i> View Course Notifications</button>
                        </div>
                        <div class="todo">
                            <span>To-Do</span>
                            <hr class="todo-hr"/>
                            <div class="grade-info">
                                <FaTimes className='close-icon ellipse-color'/>
                                <div class="table">
                                    <div class="table-row">
                                    <div class="icon-cell">
                                        <FaCircle/>
                                    </div>
                                    <div class="text-cell">
                                        <a href="#" class="grade">Grade A1 - ENV + HTML</a>
                                        <br/>
                                        <small class="grade-small">100 points • Sep 18 at 11:59 pm</small>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="calendar">
                            <span>Coming Up</span>
                            <div class="calendar-icon-text">
                                <FaCalendarAlt/>
                                <a href="#" class="view-calendar">View Calendar</a>
                            </div>
                        </div>
                        <hr class="todo-hr"/>
                        <div class="cal-info">
                            <div class="cal-row">
                                <FaCalendarAlt className='cal-icon'/>
                                <div class="text">
                                    <a href="#" class="grade">Lecture</a>
                                    <br/>
                                    <small class="grade-small">CS5610.12631.202410<br/>Sep 11 at 11:45am</small>
                                </div>
                            </div>
                            <div class="cal-info">
                                <div class="cal-row">
                                    <i class="far fa-calendar-alt cal-icon"></i>
                                    <div class="text">
                                    <a href="#" class="grade">CS5610 06 SP23 Lecture</a>
                                    <br/>
                                    <small class="grade-small">CS5610.12631.202410<br/>Sep 11 at 6pm</small>
                                    </div>
                                </div>
                                <div class="cal-info">
                                    <div class="cal-row">
                                    <i class="far fa-calendar-alt cal-icon"></i>
                                    <div class="text">
                                        <a href="#" class="grade">CS5610 Web Development<br/> Summer 1 2023 - LECTURE</a>
                                        <br/>
                                        <small class="grade-small">CS5610.12631.202410<br/>Sep 11 at 7pm</small>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;