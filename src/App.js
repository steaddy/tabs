import React, {useState, useEffect} from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJobs = async (url) => {
        try {
            const resp = await fetch(url);
            const res = await resp.json();
            setJobs(res);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchJobs(url);
    }, [])

    if (loading) {
        return (
            <section className='section loading'>
                <h2>Loading...</h2>
            </section>
        );
    } else {

        const {company, duties, dates, title} = jobs[value];


        return (
            <section className='section'>
                <div className='title'>
                    <h2>Experience</h2>
                    <div className="underline"></div>
                </div>
                <div className="jobs-center">


                    <div className="btn-container">
                        {jobs.map((item, index) => {
                            return (
                                <button
                                    className={`job-btn ${index === value && 'active-btn'}`}
                                    key={index}
                                    onClick={() => setValue(index)}
                                >{item.company}</button>
                            );
                        })}
                    </div>


                    <article className="job-info">
                        <h4>{title}</h4>
                        <h3>{company}</h3>
                        <p className="job-dates">{dates}</p>
                        {duties.map((item, index) => {
                            return (
                                <div className="job-desc" key={index}>
                                    <FaAngleDoubleRight className='job-icon'/>
                                    <p>{item}</p>
                                </div>
                            );
                        })}
                    </article>
                </div>
            </section>
        );
    }
}

export default App
