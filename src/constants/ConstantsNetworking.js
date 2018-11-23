import UtilsObject from 'utils/UtilsObject';

let ConstantsNetworking = {};

ConstantsNetworking.Url = {
    USERS: 'https://randomuser.me/api/?results=100'
};

ConstantsNetworking = UtilsObject.deepFreeze(ConstantsNetworking);

export default ConstantsNetworking;
