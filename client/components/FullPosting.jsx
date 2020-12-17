import React, { useEffect, useState } from 'react';

function FullPosting(props) {
  const id = props.viewedJobId;
  const jobsList = JSON.parse(sessionStorage.getItem('jobsList'));
  const job = jobsList.filter((post) => post.id === id)[0];

  return (
    <div className='container my-5'>
      <img src={job.company_logo} alt='logo' style={{ width: '200px' }} />
      <h3>
        {job.title} - {job.type}
      </h3>
      <h5>Company: {job.company}</h5>
      <p>{job.company_url}</p>
      <p>Location: {job.location}</p>
      <p>Posted on: {job.created_at}</p>
      <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
      <p dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></p>
    </div>
  );
}
export default FullPosting;
