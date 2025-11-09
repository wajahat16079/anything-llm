const getTime = {
    name: "get-time",
    startupConfig: {
        params: {},
    },
    plugin: function () {
        return {
            name: this.name,
            setup(aibitat) {
                aibitat.function({
                    super: aibitat,
                    name: this.name,
                    description: "Returns the current server time.",
                    parameters: {},
                    handler: async function () {
                        const now = new Date().toLocaleTimeString("en-US", { hour12: true });
                        return `🕒 [From Agent] The current time is ${now}`;
                    },
                });
            },
        };
    },
};

module.exports = { getTime };
