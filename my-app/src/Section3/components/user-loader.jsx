import axios from "axios";
import React, { useEffect, useState } from "react";

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return (
    <>
      {/* React.Children.map allows us to iterate over each child and modify them. */}
      {React.Children.map(children, (child) => {
        // Check if the child is a valid React element.
        if (React.isValidElement(child)) {
          // Clone the element and pass the 'user' state as a prop to it.
          return React.cloneElement(child, { user });
        }
        // If the child is not a valid React element, return it as is.
        return child;
      })}
    </>
  );
};
