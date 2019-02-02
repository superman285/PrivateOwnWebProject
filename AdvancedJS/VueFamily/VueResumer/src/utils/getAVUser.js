import AV from "leancloud-storage";


export default function(user) {

    var appId = '93ivy0ImjLvoRTU1SLSw8lnM-gzGzoHsz';
    var appKey = 'Ydqpc6FQV4jXqUImwvcI8T0l';

    AV.init({
        appId,
        appKey,
    })

    var {id,attributes:{username}} = user || AV.User.current() || {attributes:{}};
    return {
        id,
        username
    }
}