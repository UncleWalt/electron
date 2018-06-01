const apis = new Map([
  ['CallbacksRegistry', {
    path: '../../../common/api/callbacks-registry'
  }],
  ['crashReporter', {
    attributes: {
      enumerable: true
    },
    path: '../../../common/api/crash-reporter'
  }],
  ['desktopCapturer', {
    path: '../../../renderer/api/desktop-capturer',
  }],
  ['ipcRenderer', {
    attributes: {
      enumerable: true
    },
    path: '../ipc-renderer'
  }],
  ['isPromise', {
    path: '../../../common/api/is-promise'
  }],
  ['nativeImage', {
    path: '../../../common/api/native-image'
  }],
  ['remote', {
    attributes: {
      enumerable: true
    },
    path: '../../../renderer/api/remote'
  }],
  ['webFrame', {
    attributes: {
      enumerable: true
    },
    path: '../../../renderer/api/web-frame'
  }]
])

for (const [name, {path, attributes = null}] of apis.entries()) {
  Object.defineProperty(exports, {
    [name]: Object.assign({
      get: function () {
        return require(path)
      }
    }, attributes)  // TODO: Use destructuring when it's available.
  })
}
