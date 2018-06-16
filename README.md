# NEMV_Example
Node Express Mongo Vue Stack

## config file definition

    **cfg/cfg.js**
    
    ```javascript
    module.exports = {
        db: {
            url: 'mongodb+srv://<id>:<password>@cluster0-ofbga.mongodb.net/test',
        },
        web: {
            // For http, https, port, etc...
        }
    };
    ```