import { render } from 'react-dom';
import React from 'react';

import MessagePage from '@containers/MessagePage';

const user = {
  id: 1,
  name: 'LoggedUserName',
};

const App = () => {
  return (
    <div>
      <h1>Welcome!!</h1>
      <MessagePage user={user} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
