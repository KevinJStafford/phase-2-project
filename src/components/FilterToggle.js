import React, {useState, useEffect} from 'react'

function FilterToggle() {
    const [open, setOpen] = useState(false)

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


    return (
        <div ref={ref}>
            <button onClick={handleOpen}>Filter</button>
            {open ? ( <ul className="menu">
                        <li className="menu-item">
                          <button>Age</button>
                        </li>
                        <li className="menu-item">
                          <button>Location</button>
                        </li>
                      </ul>
            ) : null }
        </div>
    )
}

export default FilterToggle;


















// export default FilterToggle;