import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import StoryNavigation from './StoryNavigation';

const Sidebar = ({ name, picture, handleLogout, handleAddStory, stories, handleSubmit }) => {  
  return (
    <aside>
      <UserCard name={name} picture={picture} handleLogout={handleLogout} />
      <StoryNavigation handleAddStory={handleAddStory} stories={stories} handleSubmit={handleSubmit} />
    </aside>
  );
};

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleAddStory: PropTypes.func.isRequired,
  stories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  })),
  handleSubmit: PropTypes.func.isRequired
};

export default Sidebar;
