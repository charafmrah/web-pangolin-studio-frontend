echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."

scp -r build/* charaf@45.77.218.130:/var/www/html

echo "Done!"