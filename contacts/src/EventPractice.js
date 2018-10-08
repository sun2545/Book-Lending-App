import React, {Component} from 'react';

class EventPractice extends Component {
    render() {
        return (
            <div>
                <h1>event practice</h1>
                <input type="text" name="message" placeholder="something"
                onChange ={
                    (e) => {
                        console.log(e.target.value);
                    }
                }
                />
                </div>
        );
    }
}

export default EventPractice;
        
    
