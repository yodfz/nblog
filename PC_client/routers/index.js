import {IndexRoute,Router, Route} from 'react-router';

// UI COMPONENTS
import Main from '../views/manage/Main'

export default ({history})=>
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/manage" component={Main}>

            {/*<IndexRoute component={Dashboard} />*/}
        </Route>
    </Router>;