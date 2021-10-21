class FilterHandler {

    constructor() {
        this.path = this.getPath();
        this.url = this.getUrl();
        this.setInputs();
    }

    getPath() {
        return window.location;
    }

    getUrl() {
        return new URL(this.path);
    }

    setInputs() {
        this.url.searchParams.forEach(list);

        function list(value, key) {
            document.getElementsByClassName(".js-" + key).value = value;
        }
    }

    getParams(fieldName) {
        let param = this.url.searchParams.get(fieldName);

        if (param) {
            return param;
        }
        return "";
    }

    addParams(listParams) {
        for (var prop in listParams) {
            this.setParams(prop, listParams[prop]);
        }
    }

    setParams(fieldName, fieldValue) {
        if (fieldValue != "") {
            this.url.searchParams.set(fieldName, fieldValue);
        } else {
            this.url.searchParams.delete(fieldName);
        }

        window.history.pushState({}, '', this.url);
    }

    reload() {
        location.reload();
    }
}