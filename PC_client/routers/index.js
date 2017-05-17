import {} from 'react-router';

export default ({history})=>
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <Route>
        </Route>
    </Router>;