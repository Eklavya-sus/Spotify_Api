import React, { useEffect, useState } from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'
import {MdFavorite} from "react-icons/md"
import {FaGripfire, FaPlay} from "react-icons/fa"
import {FaSignOutAlt} from "react-icons/fa"
import {IoLibrary} from "react-icons/io5"
import {MdSpaceDashboard} from "react-icons/md"
import apiClient from '../spotify'

export default function Sidebar() {
  const [image, setImage] = useState(
    'https://play-lh.googleusercontent.com/Du85nHDsJYS2KpL9lcLA5uBlNsXigJVey_5z1j1TrizdCrbORMT7BtjRjQb8A5Wj1g=w240-h480-rw'
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className='sidebar_conatiner'>
      <img src={image}
      className='pfp' alt='profile'/> 
      <div>
        <SidebarButton title="Feed " to="/feed" icon={<MdSpaceDashboard />}/>
        <SidebarButton title="Trending " to="/trending" icon={<FaGripfire />}/>
        <SidebarButton title="Player " to="/player" icon={<FaPlay />}/>
        <SidebarButton title="Library " to="/library" icon={<IoLibrary />}/>
        <SidebarButton title="Favourite " to="/favourite" icon={<MdFavorite />}/>
      
      </div>
      <SidebarButton title="SignOut" to="/" icon={<FaSignOutAlt />}/>
    </div>
  
  )
}
