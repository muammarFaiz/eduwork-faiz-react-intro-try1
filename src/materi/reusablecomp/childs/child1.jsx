import React from 'react';

export default function ChildOne(props) {
  const [num, setnum] = React.useState(0);
  function modnum() {
    setnum(prev => {
      return prev + 1;
    });
  }
  function reduc() {
    setnum(prev => {
      if(prev > 0) {
        return prev - 1;
      } else {
        return 0;
      }});
  }
  React.useEffect(() => {
    props.fromMother(num);
  }, [num]);
  return (
    <div>
      <h1>Child one: {num}</h1>
      <button onClick={reduc}>Minus</button>
      <button onClick={modnum}>Plus</button>
    </div>
  )
}
