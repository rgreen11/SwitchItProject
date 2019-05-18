import React from 'react';

const AuthContext = React.createContext(null);
//default: user is not logged in therefore it is null
//empty is undefined and therefore it is a falsey value
export default AuthContext;