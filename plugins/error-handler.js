import ErrorHandler from '@zaengle/error-handler'

export default (context, inject) => {
  inject('errorHandler', new ErrorHandler())
}
