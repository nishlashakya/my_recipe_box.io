import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'

import routes from './routes';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Router history={browserHistory} routes={routes} />
			<ReduxToastr
	      timeOut={4000}
	      newestOnTop={false}
	      preventDuplicates
	      position="top-right"
	      transitionIn="fadeIn"
	      transitionOut="fadeOut"
	      progressBar
			/>
		</div>
	</Provider>,
	document.getElementById('root')
)
