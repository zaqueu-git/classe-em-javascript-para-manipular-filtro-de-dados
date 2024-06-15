const queryStringHandler = {    
    url: new URL(window.location),
    reloadURL() {
        window.location.assign(this.url);
    },
    updateURL() {
        window.history.pushState({}, '', this.url);
    },
    delGroup() {
        this.url.search = '';
        this.updateURL();
    },
    addGroup(keyValueObject) {
        for (const [key, value] of Object.entries(keyValueObject)) {
            this.add(key, value);
        }
    },
    get(key) {
        return this.url.searchParams.get(key) || '';
    },
    del(key) {
        this.url.searchParams.delete(key);
        this.updateURL();
    },
    add(key, value) {
        this.url.searchParams.set(key, value);
        this.updateURL();
    },
};
