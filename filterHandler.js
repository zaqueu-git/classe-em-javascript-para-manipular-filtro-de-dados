class FilterHandler {

    constructor() {
        this.path = this.getPath();
        this.url = this.getUrl();
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
            document.querySelector('.js-' + key).value = value;
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

class PageFilter {
    constructor() {
        this.status;
        this.search;
        this.page;
    }
}

document.addEventListener('DOMContentLoaded', myPage);

function myPage() {
    try {
    
        let filterHandler = new FilterHandler();
        let pageFilter = new PageFilter();

        pageFilter.status = filterHandler.getParams("status");
        pageFilter.search = filterHandler.getParams("search");
        pageFilter.page = filterHandler.getParams("page");
        filterHandler.setInputs();

        let elementStatus = document.querySelector('.js-status');
        let elementSearch = document.querySelector('.js-search');
        let elementPage = document.querySelector('.js-page');

        elementStatus.addEventListener('click', statusHandler);
        elementSearch.addEventListener('keypress', searchHandler);
        elementPage.addEventListener('click', pageHandler);
        
        function statusHandler(event) {
            try {

                event.preventDefault();

                pageFilter.status = elementStatus.getAttribute('data');
                
                return filterCallback();

            } catch (error) {
                console.log(error);
            }
        }
        
        function searchHandler(event) {
            try {

                if(event.which == 13) {
                    pageFilter.search = elementSearch.value;
    
                    return filterCallback();
                }                

            } catch (error) {
                console.log(error);
            }
        }
        
        function pageHandler(event) {
            try {
                
                event.preventDefault();

                pageFilter.page = elementPage.getAttribute('data');
                
                return filterCallback();

            } catch (error) {
                console.log(error);
            }
        }

        function filterCallback() {
            try {

                filterHandler.addParams(pageFilter);
                filterHandler.reload();                

            } catch (error) {
                console.log(error);
            }
        }        

    } catch (error) {
        console.log(error);
    }
}
