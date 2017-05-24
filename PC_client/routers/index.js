import {IndexRoute,Router, Route} from 'react-router';

// UI COMPONENTS
import Main from '../views/manage/Main';

// UI COMPONENT ARTICLE
import ArticleMain from '../views/manage/Article/Main';

export default ({history})=>
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/manage" component={Main}>
            <IndexRoute component={ArticleMain}/>
            <Route/>
            {/*<IndexRoute component={Dashboard} />*/}
        </Route>
    </Router>;