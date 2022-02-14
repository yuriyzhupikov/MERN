function onStatusService(status, message, res) {
    if (message instanceof Object) {
        res.status(status).json(message);
    }
    else {
        res.status(status).json({message});
    }
}

module.exports = {onStatusService}