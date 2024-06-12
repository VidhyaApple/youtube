import React from 'react'
import Button from './Button'

const list = ['All','News','Music','Superfoods','Hair care','Live','Mutual funds','Psychology','Games shows'];

const ButtonList = () => {

  return (
      <div className="flex px-5 mt-2" >
        { list.map((eachButton) => <Button key={eachButton} name={eachButton} />)}
        </div>
  );

}

export default ButtonList