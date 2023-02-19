const { Track } = require('../../db/models') 

const createTrack = async (payload, auth) => {
    return Track.create({
        user_id: auth,
        track_status: 'open',
        lock_latitude: payload.lock_latitude,
        lock_longitude: payload.lock_longitude,
        kecamatan: payload.kecamatan,
    })
}

const findOneTrack = async(status, auth) => {
    return Track.findOne({
        where: {
            user_id: auth,
            track_status: status
        }
    })
}

const updateTrack = async(status, payload) => {
    return Track.update({
        track_status: status,
    }, 
    {
        where: {
            id: payload.id
        }
    })
}

module.exports = {
    createTrack,
    findOneTrack,
    updateTrack,
}