import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function FullPosting(props) {
  const id = props.viewedJobId;
  const jobsList = JSON.parse(sessionStorage.getItem('jobsList'));
  const job = jobsList.filter((post) => post.id === id)[0];

  return (
    <div className='container my-5'>
      <img src={job.company_logo} alt='logo' style={{ width: '200px' }} />
      <h3 className='mt-5'>
        {job.title} - {job.type}
      </h3>
      <h5>Company: {job.company}</h5>
      <p>{job.company_url}</p>
      <p>Location: {job.location}</p>
      <p>Posted on: {job.created_at}</p>
      <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
      <p dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></p>
      <Link to={'/'}> &#8592; Go back to dashboard</Link>
      <br />
      <Link to={'/user/edit'}>Edit a job posting &#8594;</Link>
      <br />
      <Link to={'/user/delete'} className='text-danger'>
        &#8593; Delete this job posting
      </Link>
    </div>
  );
}
export default FullPosting;
