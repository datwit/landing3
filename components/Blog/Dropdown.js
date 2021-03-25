import { createPopper } from "@popperjs/core";
import { useRef, useState } from "react"; 

const Dropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };  
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className= "rounded border border-gray-300 bg-white text-gray-700 font-bold text-sm px-6 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "        
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            > Category              
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +                
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a href="#pablo"
                className=
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " onClick={e => e.preventDefault()}>
                Category 1
              </a>
              <a href="#pablo"
                 className=
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " onClick={e => e.preventDefault()}>
                Category 2
              </a>
              <a
                href="#pablo"
                className=
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " onClick={e => e.preventDefault()}>
                Category 3
              </a>            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown