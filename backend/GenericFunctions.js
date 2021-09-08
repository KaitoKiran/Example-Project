class GenericFunctions {
    formatError(status, payload) {
        return this.formatResponse(status, "", payload);
    }

    formatResponse(status, payload) {
        const output = {
            status: status,
            token: "token",
            payload: payload
        };

        return output;
    }

}

module.exports = new GenericFunctions();