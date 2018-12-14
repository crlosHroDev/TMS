const path=require ('path');

module.exports={
  mode:'development',
  entry:{
    'home':path.resolve(__dirname,'entry/js/home.js')
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'js/[name].js'
  },
  devServer:{
    port:9000
  },
  devtool:'eval-source-map',
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env','@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties','@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.(jpg|png|gif|svg)$/,
        use:{
          loader:'url-loader',
          options:{
            limit:1000,
            fallback:'file-loader',
            name:'img/[name].[hash].[ext]'
          }
        }
      }
    ]
  }
}