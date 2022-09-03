class apiFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;

    }
    filter() {
        // filtering data
        // 1st exclude some fields from object
        // 2nd match specific operator and add with their value $ 
        const queryObj = { ...this.queryString };
        const exclusivefields = ['page', 'sort', 'limit', 'fields'];
        exclusivefields.forEach(el => delete queryObj[el]);

        //  advance filtering data forex : /bfhh?price[lt] = 500
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
        this.query.find(JSON.parse(queryStr))
        return this;
    }

    sorting() {
        //  sorting data forex : /nsmr?sort=price or sort=-price
        // it will return sorted data according to ex : price
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join('');
            this.query = this.query.sort(sortBy)
        }

        return this;
    }
    limiting() {

        // fields limiting forex : /tours?fields = price,name,description
        // then it will return just data is requested
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields)
        } else {
            this.query = this.query.select('-__v')
        }
        return this;
    }
    pagination() {
        // paginations
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 100;
        const skip = (page - 1) * limit;

        // for ex : /tours?page=2&limit=5
        this.query = this.query.skip(skip).limit(limit);
        return this
    }
}

module.exports = apiFeatures;