import React from 'react';

export default function Clock() {
  const [sec, setsec] = React.useState(0);
  const [b, setb] = React.useState(false);
  React.useEffect(() => {
    let time;
    if(b) {
      console.log('interval started');
      time = setInterval(() => {
        setsec(prev => prev + 1);
      }, 1000);
      return () => {
        // the return function only run when the useEffect run for the second time, not run on the initial mount.
        console.log('cleared');
        clearInterval(time);
      };
    }
  }, [b]);
  function start() {
    console.log('pressed');
    if(!b) {
      setb(true);
    } else {
      setb(false);
    }
  }
  return (
    <>
    <h1>{sec}</h1>
    <button onClick={start}>start component</button>
    </>
  )
}
