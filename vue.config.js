const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}),{
  devServer:{
    proxy: "https://0wwhsalsx2.execute-api.us-east-1.amazonaws.com/api/regency/kabupaten kediri"
  }
}
