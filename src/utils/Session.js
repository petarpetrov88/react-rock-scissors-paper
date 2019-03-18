import md5 from 'md5';
import { APP_SESSION_ENGINE } from '../constants'

const Session = {
    getEngine: () => {
        return APP_SESSION_ENGINE;
    },
    set: (key, value) => {
        Session.getEngine().setItem(md5(key), JSON.stringify(value));
    },
    get: (key) => {
        return JSON.parse(Session.getEngine().getItem(md5(key)));
    }
};

export default Session;