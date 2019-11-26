import React from 'react';
import PropTypes from 'prop-types';

function NewFriendForm(props) {

  return (
    <div className="newFriend">
      <div>
        <label htmlFor='name'>Name:</label>
        <input id='name' type='text' ref={props.name}/>
      </div>
      <div>
        <label htmlFor='tamaType'>Friend Type:</label>
        <select id='tamaType' ref={props.type}>
          <option>Onigiri</option>
          <option>Dumpling</option>
          <option>Sushi</option>
          <option>Wasabi</option>
          <option>Tamagoyaki</option>
        </select>
      </div>
    </div>
  )
}

NewFriendForm.propTypes = {
  name: PropTypes.func,
  type: PropTypes.func 
}

export default NewFriendForm;