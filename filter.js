function filter() {
    this.path = window.location;
    this.url = new URL(this.path);

    this.setInputs = function() {
        this.url.searchParams.forEach(list);

        function list(value, key) {
            var input = document.querySelector('.js-' + key + '-field');

            if (input) {
                input.value = value;
            }
        }
    };

    this.getParams = function(fieldName) {
        let param = this.url.searchParams.get(fieldName);

        if (param) {
            return param;
        }
        return "";
    }

    this.addParams = function(listParams) {
        for (var prop in listParams) {
            this.setParams(prop, listParams[prop]);
        }
    }

    this.setParams = function(fieldName, fieldValue) {
        console.log(fieldValue);

        if (fieldValue != "") {
            this.url.searchParams.set(fieldName, fieldValue);
        } else {
            this.url.searchParams.delete(fieldName);
        }

        window.history.pushState({}, '', this.url);
    }

    this.reload = function() {
        location.reload();
    }
}
