import React, {useState, useEffect} from 'react'


function FilterToggle() {
    const [open, setOpen] = useState(false)
    const [isAgeClicked, setIsAgeClicked] = useState(false)

    const useOutsideClick = (callback) => {
        const ref = React.useRef();
      
        useEffect(() => {
          const handleClick = (event) => {
            if(ref.current && !ref.current.contains(event.target)) {
            callback();
            }
          };
      
          document.addEventListener('click', handleClick);
      
          return () => {
            document.removeEventListener('click', handleClick);
          };
        }, []);
      
        return ref;
      };

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleClickOutside = () => {
        setOpen(false)
    }
    const ref = useOutsideClick(handleClickOutside)

    const handleIsAgeClick = () => {
        setIsAgeClicked(!isAgeClicked)
    }

    const handleSelection = () => {
        setOpen(false)
        setIsAgeClicked(false)
    }


    return (
        <div ref={ref}>
            <button onClick={handleOpen}>Filter</button>
            {open ? ( <ul className="menu">
                        <li className="menu-item">
                          <button onClick={handleIsAgeClick}>Age</button>
                          {isAgeClicked ? (<ul>
                            <li className="menu-item">
                                <button onClick={handleSelection}>Under 1</button>
                                </li>
                            <li className="menu-item">
                                <button onClick={handleSelection}>Under 3</button>
                            </li>
                            <li className="menu-item">
                                <button onClick={handleSelection}>Under 5</button>
                            </li>
                            <li className="menu-item">
                                <button onClick={handleSelection}>Under 7</button>
                            </li>
                            <li className="menu-item">
                                <button onClick={handleSelection}>All Ages</button>
                            </li>
                          </ul>) : null}
                        </li>
                        <li className="menu-item">
                          <button>Outdoor</button>
                        </li>
                        <li className="menu-item">
                          <button>Indoor</button>
                        </li>
                        <li className="menu-item">
                          <button>Cost</button>
                        </li>
                      </ul>
            ) : null }
        </div>
    )
}

export default FilterToggle;


















// export default FilterToggle;