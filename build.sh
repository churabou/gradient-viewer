PROJECT_NAME=gradient-viewer
echo $PROJECT_NAME
mkdir $PROJECT_NAME
cd $PROJECT_NAME

cat <<EOF > package.json
{
 "scripts": {
    "dev": "webpack-dev-server --open"
  }
}
EOF

npm i react react-dom webpack webpack-cli
npm i -D typescript ts-loader webpack-dev-server @types/{react,react-dom}


mkdir dist
mkdir src

cat <<EOF > dist/index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> $PROJECT_NAME </title>
</head>
<body>
  <div id="root"></div>
  <script src="bundle.js"></script>
</body>
</html>
EOF

cat <<EOF > src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div> hello word </div>

ReactDOM.render(<App/>, document.getElementById("root"))
EOF

cat <<EOF > tsconfig.json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "allowSyntheticDefaultImports" :true
  }
}
EOF

cat <<EOF > webpack.config.js
const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
EOF
