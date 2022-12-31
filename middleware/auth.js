export default function ({ redirect, store, router, $swal }) {
  const isAuthenticated = store.state.loginToken
  if (isAuthenticated === null) {
      $swal({
        toast: true,
        text: 'Please Login',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
        position: 'top-end',
      })
    redirect('/Login')
    router.push('/Login')
  } 
}
