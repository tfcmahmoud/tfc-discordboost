function boost(client) {
    client.on('guildMemberUpdate', (oldM, newM) => {
        let oldS = oldM.premiumSince;
        let newS = newM.premiumSince;

        if (!oldS && newS) {
            let member = newM;
            client.emit('boostMemberAdd', (member));
        }
        if (oldS && !newS) {
            let member = newM;
            client.emit('boostMemberRemove', (member));
        }
    })
}

modules.exports = { boost }