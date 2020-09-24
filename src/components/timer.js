import React, {useState, useRef} from 'react';
import './timer.css';

const Timer = () => {
	const [count, setCount] = useState(30);
	const intervalRef = useRef(null);

	function startTimer(){
	  intervalRef.current = setInterval(() =>{
	  	setCount(count => {
	  		if(count !== 0) return count - 1;
	  		else return 0;
	  	});
	  }, 1000);
	}

	function stopTimer(){
		clearInterval(intervalRef.current);
	}

	return(
        <div>
            <h1>timer</h1>
            <div className="container">
            	<h1>{count}</h1>
                <div className="timer" style={{ width: `calc(${count} * (100% / ${useState(30)}))` }}></div>    
            </div>
            <div className="buttons">
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
            </div>
        </div>
        
    )
}

export default Timer;