import React from 'react';
import NewFriendForm from './NewFriendForm';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      showOptions:false
    }
    this.formHelper = this.formHelper.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStartGameSubmit = this.handleStartGameSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, showOptions:true});
    //event.target.value - the value of the thing you're clicking on.
  }

  formHelper() {
    var html = [];
    for(let i=0; i<this.state.value; i++){ //value is how many friends we want, according to the dropdown list we provided. 
    html.push(i);
    }
    return html;
  }
  handleCountSubmit(event){
    event.preventDefault();
  }

  
  handleStartGameSubmit(event, _name, _type){
    event.preventDefault();
    var friendHolder = [];
    for (let i = 0; i < _name.length; i++){
      friendHolder.push({id: i, name: _name[i].value, img: _type[i].value})
    }
    // _name.forEach((element, index) =>
    // friendHolder.push({id: index, name: element.value, img: _type[index].value})
    // );
    console.log(_name);
    // props.onNewGameSubmit({name: ''})
    this.props.onStartGame(friendHolder)
  }
  
  render(props) {
    let _name = [];  //_name is an array because we can have multiple mames for multiple friends.
    let _type = [];  //also an array because each friend has a type chosen from the select list of types. 
    return(
      <div>
        <h1>FOODAGATCHI</h1>
        <form onSubmit={this.handleCountSubmit}>
          <label htmlFor='number'>How many friends would you like?</label>
          <select id='number' onChange={this.handleChange}>  
          {/* when you change the number value from the dropdown,we call handleChange (defined above) */}
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </form>

        <div>
          <form onSubmit={() => {this.handleStartGameSubmit(event, _name, _type)}}>
            {this.formHelper().map((el, index) =>  
            //for each element in the array that's returned by FormHelper, make a new friend form. "Index" because a .map needs to have a key. 
            // ^ mapping how many friend forms to show

            // for each New Friend form, we are passing the following props: 
              <NewFriendForm 
                name={input => _name.push(input)}
                type={select => _type.push(select)}
                key={index}/> //set the element's index to = key.
            )}
            <button type="submit">Start Game</button>
          </form>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  onStartGame: PropTypes.func
}

export default Home;

