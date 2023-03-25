import React from 'react'

function GetByTitle() {
  return (
    <>
        <h1>Job Apllication Form</h1>
        <h2>Section 1</h2>
        <p>All Fields Mandatory</p>

        <img src="" alt='alternate name' />
    <span title="close">Close</span>
    <form>
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Full Name' value="shan" onChange={() => {}}/>
            
        </div>
        <div>
            <label htmlFor='jl'>Job Location</label>
            <input type='text' id='jl' />
        </div>
        <div>
            <label htmlFor='job-location'>Job Location</label>
            <select id='job-location'>
                <option value="">Select a Country</option>
                <option value="US">US</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
            </select>
        </div>

        <div>
            <label><input type='checkbox' id='terms'/> I agree
            </label>
        </div>
        <button>Submit</button>
    </form>
    </>
  )
}

export default GetByTitle