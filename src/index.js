import _ from 'lodash'

function component() {
    const element = document.createElement('div')

    // import lodash in index.html via script
    element.innerHTML = _.join(['Hello', 'webpack'], ' &&& ')

    return element
}

document.body.append(component())
