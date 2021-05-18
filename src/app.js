import { render } from 'react-dom';
import React from 'react';

import MessagePage from '@containers/MessagePage';

// как бы получили залогиненного пользователя с сервера. Потом переедет в редукс
const user = {
  id: 1,
  name: 'LoggedUserName',
};

const App = () => {
  return (
    <div>
      <h1>Добро пожаловать в чатик!!!</h1>
      <MessagePage user={user} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
