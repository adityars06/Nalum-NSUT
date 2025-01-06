import React from 'react'
import { useOutletContext } from "react-router-dom";

function UpdateProfile() {
  const { name, setName } = useOutletContext();
  const handleChange=(e)=>{
    setName(e.target.value);
  }
  return (
    <div className="flex flex-col gap-6 bg-white p-6 shadow-lg rounded-lg w-full">
      <h2 className="text-xl font-bold text-gray-800">Update Profile</h2>

      
      <div className='name'>
        <label className="block font-medium text-gray-700">Name</label>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          placeholder="Enter your name"
        />
      </div>

      
      <div className='title'>
        <label className="block font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          placeholder="e.g., Software Developer"
        />
      </div>

      
      <div>
        <label className="about block font-medium text-gray-700">About</label>
        <textarea
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          placeholder="Write something about yourself"
          rows="4"
        ></textarea>
      </div>

      
      <div className="sociallinks grid grid-cols-2 gap-4">
        {['LinkedIn', 'YouTube', 'Facebook', 'Instagram', 'Twitter'].map((platform) => (
          <div key={platform}>
            <label className="block font-medium text-gray-700">{platform}</label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder={`Enter your ${platform} link`}
            />
          </div>
        ))}
      </div>

      
      <div className='tags'>
        <label className="block font-medium text-gray-700">Tags</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Tailwind CSS'].map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 px-3 py-1 rounded-full text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      
      <div className='resumeupload'>
        <label className="block font-medium text-gray-700">Upload Resume</label>
        <input
          type="file"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>

      
      <div className='experience'>
        <label className="block font-medium text-gray-700">Experience</label>
        <div className="flex flex-col gap-4 mt-2">
          {[
            { role: 'Senior Executive', company: 'eCell NSUT', duration: '2023 - Present' },
            { role: 'Web Developer', company: 'BlueSmart', duration: 'Oct 2025 - Dec 2025' },
            { role: 'Summer Analyst', company: 'JP Morgan', duration: 'Apr 2025 - Jul 2025' },
          ].map((experience, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded">
              <p className="font-medium">{experience.role}</p>
              <p className="text-gray-600">{experience.company}</p>
              <p className="text-gray-500">{experience.duration}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className='savebutton'>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default UpdateProfile
