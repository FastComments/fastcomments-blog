node src/app
xcopy src\static\css src\static\generated\css\ /E /y
xcopy src\static\images src\static\generated\images\ /E /y
xcopy src\static\js src\static\generated\js\ /E /y
xcopy src\static\image-compare src\static\generated\image-compare\ /E /y
node node_modules/uglify-js/bin/uglifyjs node_modules/lozad/dist/lozad.js src/static/js/blog.js -o src/static/generated/js/blog.min.js
