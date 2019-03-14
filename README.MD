
Crash your app on demand. Created for crash testing.
Crashlytics provide the API for native apps but as of now (15th Oct 2018), there's no such cordova plugin to support this.


## Usage

```javascript
cordova.plugins.Exception.throwException(
    "crash",
    (successResp) => {
        console.log(successResp);
    }, (error) => {
        console.log(error);
    }
);
```



