//mounting
constructor();
getDerivedStateFromProps();
render();
componentDidMount(); //mainly used for fetching data from server
///////////////////////////////
//updating
getDerivedStateFromProps();
shouldComponentUpdate();
render();
getSnapshotBeforeUpdate();
componentDidUpdate(); //main
///////////////////////////////
//deleting
componentWillUnmount(); /*main */

// with useEffect

componentDidMount;
useEffect(() => {}, []);
componentDidUpdate();
useEffect(() => {}, [NAME]);
componentWillUnmount();
useEffect(() => {
  window.addEventListener("mousemove", () => {});
  return () => {
    window.removeEventListener("mousemove", () => {});
  };
}, []);
