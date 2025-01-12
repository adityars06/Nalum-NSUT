import React, { useState } from 'react'
import { useInfo } from '../../context/userContext';


function UpdateProfile() {
  const {user,setUser}=useInfo();
  const [tempCopy,setTempCopy]=useState({...user})
  const [newTag,setNewTag]=useState('');
  const [newExp,setNewExp]=useState({});

  const addLink=(e)=>{
    setTempCopy((user)=>({
      ...user,
      socialLinks:{...user.socialLinks,[e.target.name]:e.target.value}
    }))
  }
  
  

  const eventHandler=(e)=>{ 
    setTempCopy((user)=>({
      ...user,
      [e.target.name]:e.target.value
    }
    ))
  }

  const addTag = () => {
    
    setTempCopy((prev) => ({
      ...prev,
      tags: [...prev.tags , newTag], 
    }));
    setNewTag(''); 
  }

  const addExperience = () => {
    if (!newExp.place || !newExp.designation || !newExp.duration || !newExp.description) {
      alert("Please fill all fields before adding experience!");
      return;
    }
  
    setTempCopy((prev) => ({
      ...prev,
      experience: [...prev.experience, newExp], 
    }));
  
    setNewExp({}); 
  };

  const handleExperienceChange = (e) => {
    setNewExp((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, 
    }));
  };

  
  return (
    <div className=" flex flex-col gap-6 bg-white p-6 shadow-lg rounded-lg w-full">
      <h2 className="text-xl font-bold text-gray-800">Update Profile</h2>

      
      <div className='name'>
        <label className="block font-medium text-gray-700">Name</label>
        <input
          name='name'
          value={tempCopy.name}
          onChange={eventHandler}
          type="text"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          placeholder="Enter your name"
        />
      </div>

      
      <div className='title'>
        <label className="block font-medium text-gray-700">Title</label>
        <input
          name='title'
          type="text"
          value={tempCopy.title}
          onChange={eventHandler}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          placeholder="e.g., Software Developer"
        />
      </div>

      
      <div>
        <label className="about block font-medium text-gray-700">About</label>
        <textarea
          name='aboutMe'
          value={tempCopy.aboutMe}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          placeholder="Write something about yourself"
          rows="4"
          onChange={eventHandler}
        ></textarea>
      </div>

      
      <div className="sociallinks grid grid-cols-2 gap-4">
        {['LinkedIn', 'YouTube', 'Facebook', 'Instagram', 'Twitter'].map((platform) => (
          <div key={platform}>
            <label className="block font-medium text-gray-700">{platform}</label>
            <input
              name={platform.toLowerCase()}
              onChange={addLink}
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder={`Enter your ${platform} link`}
            />
          </div>
        ))}
      </div>

      
      <div className='tags'>
        <label className="block font-medium text-gray-700">Tags</label>
        <div className="flex flex-wrap gap-2 mt-2 items-center">
          <input className="mt-1 p-2 border border-gray-300 rounded "
          name='tags'
          type='text'
          placeholder='Add a new tag'
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
           />
           <button className="h-8 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
           onClick={addTag}>Add</button>
          {tempCopy.tags.map((tag) => (
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
          <div className='experience-input'>
            <input
            name='place'
            className='mr-3 p-2 border border-gray-300 rounded'
            placeholder='Enter Company Name' 
            value={newExp.place || ''} 
            onChange={handleExperienceChange}/>
            
            <input 
            name='designation'
            className='mr-3 p-2 border border-gray-300 rounded' 
            placeholder='Enter designation'
            value={newExp.designation || ''}
           onChange={handleExperienceChange}/>
            <input
            name='duration'
            className='mr-3 p-2 border border-gray-300 rounded' 
            placeholder='Enter duration'
            value={newExp.duration || ''}
            onChange={handleExperienceChange}
            />
            <textarea
            name='description'
            className=' mr-3 mt-3 p-2 w-96 border border-gray-300 rounded block'
            placeholder='Describe your experience'
            rows={3}
            value={newExp.description || '' }
            onChange={handleExperienceChange}
            ></textarea>
            <button className="h-8 mt-3  px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={addExperience}>Add</button>
          </div>
           {tempCopy.experience.map((experience, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded">
              <p className="font-medium">{experience.designation}</p>
              <p className="text-gray-600">{experience.place}</p>
              <p className="text-gray-500">{experience.duration}</p>
              <p className='text-gray-500'>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className='savebutton'>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={()=>{
          setUser(tempCopy)
          alert('Profile has been updated')
        }}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default UpdateProfile
