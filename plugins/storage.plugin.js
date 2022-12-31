import Securels from "secure-ls";

// eslint-disable-next-line no-empty-pattern
export default ({ app: {  } }, inject) => {
    const storage = new Securels({
        encodingType: "aes",
        encryptionSecret: process.env.VUE_APP_SLS_SECRET,
      });
    inject('storage', storage)
  }