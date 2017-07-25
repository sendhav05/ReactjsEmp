var config = {
   entry: './main.js',
	
   output: {
      path: __dirname,
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ],
         },
         {
          test: /\.(jpg|png|svg|jpeg)$/,
          loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]',
            },
          },
      ]
   }
}

module.exports = config;