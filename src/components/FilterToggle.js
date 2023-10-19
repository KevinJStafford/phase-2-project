import React, {useState, useEffect, useRef} from 'react'

const items = ["Age", "Location", "Cost"]
const ageItems = ["1 & Over", "3 & Over", "5 & Over", "8 & Over", "10 & Over"]
const locationItems = ["Outdoors", "Indoors"]
const costItems = ["Free", "Paid"]

function SingleItem({item}) {
    return <div></div>
}

function FilterToggle() {
    const [selectedItem, setSelectedItem] = useState("all")

    const filteredItems = items.filter(
        (item) => selectedItem === "all" || selectedItem === item
    );
    // const [open, setOpen] = useState(false)
    // const [isAgeClicked, setIsAgeClicked] = useState(false)

    // const useOutsideClick = (callback) => {
    //     const ref = useRef();
      
    //     useEffect(() => {
    //       const handleClick = (event) => {
    //         if(ref.current && !ref.current.contains(event.target)) {
    //         // callback();
    //         }
    //       };
      
    //       document.addEventListener('click', handleClick);
      
    //       return () => {
    //         document.removeEventListener('click', handleClick);
    //       };
    //     }, []);
      
    //     return ref;
    //   };

    // const handleOpen = () => {
    //     setOpen(!open)
    // }

    // const handleClickOutside = () => {
    //     setOpen(false)
    // }
    // const ref = useOutsideClick(handleClickOutside)

    // const handleIsAgeClick = () => {
    //     setIsAgeClicked(!isAgeClicked)
    // }

    // const handleSelection = () => {
    //     setOpen(false)
    //     setIsAgeClicked(false)
    // }


    return (
        <>
        <select
          onChange={(e) => setSelectedItem(e.target.value)}
          value={selectedItem}
        >
          <option value="all">all</option>
          <option value="Age">Age</option>
          <option value="Location">Location</option>
          <option value="cost">Cost</option>
        </select>
        <div className="item-list">
          {filteredItems.map((item) => (
            <SingleItem key={item.id} item={item} />
          ))}
        </div>
      </>
        // <div ref={ref}>
        //     <button onClick={handleOpen}>Filter</button>
        //     {open ? ( <ul className="menu">
        //                 <li className="menu-item">
        //                   <button onClick={handleIsAgeClick}>Age</button>
        //                   {isAgeClicked ? (<ul>
        //                     <li className="menu-item">
        //                         <button onClick={handleSelection}>1 & Over</button>
        //                         </li>
        //                     <li className="menu-item">
        //                         <button onClick={handleSelection}>3 & Over</button>
        //                     </li>
        //                     <li className="menu-item">
        //                         <button onClick={handleSelection}>5 & Over</button>
        //                     </li>
        //                     <li className="menu-item">
        //                         <button onClick={handleSelection}>8 & Over</button>
        //                     </li>
        //                     <li className="menu-item">
        //                         <button onClick={handleSelection}>10 & Over</button>
        //                     </li>
        //                     <li className="menu-item">
        //                         <button onClick={handleSelection}>All Ages</button>
        //                     </li>
        //                   </ul>) : null}
        //                 </li>
        //                 <li className="menu-item">
        //                   <button>Outdoor</button>
        //                 </li>
        //                 <li className="menu-item">
        //                   <button>Indoor</button>
        //                 </li>
        //                 <li className="menu-item">
        //                   <button>Cost</button>
        //                 </li>
        //               </ul>
        //     ) : null }
        // </div>
    )
}

export default FilterToggle;


















// export default FilterToggle;