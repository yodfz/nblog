import * as article from './article';
// {watchGetArticleList, watchSaveArticle,wathcDeleteArticle}
import * as photo from './photo';
import * as system from './system';
import {fork} from 'redux-saga/effects';
// export default [watchGetArticleList, watchSaveArticle,wathcDeleteArticle];
let importSaga = [
    article, photo
];
let sagasList = [];

importSaga.map(saga=> {
    saga&&Object.keys(saga).map(p=> {
        sagasList.push(fork(saga[p]));
    });
});

export function* sagas () {
    yield sagasList;
};