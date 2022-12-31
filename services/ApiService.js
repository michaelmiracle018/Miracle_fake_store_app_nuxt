export default function ({ $axios, store, $storage, redirect }) {
  $axios.onError((error) => {
    // if (error.response && error.response.status === 500) {
    //   redirect('/')
    // }
    // if (error.response && [401, 419].includes(error.response.status)) {
    //   redirect('/')
    // }
    return Promise.reject(error)
  })

  if($storage.get('currentUser')) {
    $axios.onRequest(
      (config) => {
        config.headers.Authorization = $storage.get('currentUser').email
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}
