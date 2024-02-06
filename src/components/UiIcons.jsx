function Edit() {
   return (
      <>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="20px"
            width="20px"
            viewBox="0 0 20 20"
         >
            <g fill="#0F0F0F">
               <path d="M1 22a1 1 0 011-1h20a1 1 0 110 2H2a1 1 0 01-1-1z"></path>
               <path
                  fillRule="evenodd"
                  d="M18.306 1.879a3 3 0 00-4.243 0L3.389 12.553a3 3 0 00-.807 1.47l-.533 2.398a2 2 0 002.386 2.386l2.398-.533a3 3 0 001.47-.807L18.977 6.793a3 3 0 000-4.243l-.671-.671zm-2.829 1.414a1 1 0 011.414 0l.672.671a1 1 0 010 1.415L15.641 7.3l-2.085-2.086 1.921-1.921zm-3.336 3.336l-7.338 7.338a1 1 0 00-.269.49l-.533 2.398 2.398-.533a1 1 0 00.49-.27l7.338-7.338-2.086-2.085z"
                  clipRule="evenodd"
               ></path>
            </g>
         </svg>
      </>
   );
}

function Close() {
   return (
      <>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="20px" height="20px">
      <path
        fill="#0F0F0F"
        d="M5.996 5.006a1 1 0 000 1.415l2.828 2.828-2.828 2.828a1 1 0 101.414 1.414l2.828-2.828 2.828 2.828a1 1 0 001.415-1.414l-2.828-2.828 2.828-2.828a1 1 0 00-1.415-1.415l-2.828 2.828L7.41 5.006a1 1 0 00-1.414 0z"
      ></path>
    </svg>
      </>
   );
}

export { Edit, Close };
