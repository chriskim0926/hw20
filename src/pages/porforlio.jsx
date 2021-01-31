import React from 'react';
import img from '../img/Work Schedule.JPG'
// import img2 from '../img/Capture.PNG'
// import img3 from '../img/comic.gif'
// import img4 from '../img/weather.JPG'
// import img5 from '../img/eatdaburger.gif'

const porforlio = () => {
    return (
        <div>
             <div className="col-lg-6"><img className="img-fluid" src={img} alt="Work Schedule" /></div>
                <div className="col-lg-6">
                    <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                            <div className="project-text w-100 my-auto text-center text-lg-left">
                                <h4 className="text-white"><a href="https://chriskim0926.github.io/workday_schedule/">Portfolio 1) Work Schedule </a></h4>
                                <h6 className="text-white"><a href="https://github.com/chriskim0926/workday_schedule.git">Github Repo </a></h6>
                                <p className="mb-0 text-white-50">This app can organize your daily tasks as hourly planner</p>
                                <hr className="d-none d-lg-block mb-0 ml-0" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default porforlio;